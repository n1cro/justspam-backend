import { promisify } from 'util';
import { exec } from 'child_process';
import { Injectable, Inject } from '@nestjs/common';
import { NETWORK_MODULE_OPTIONS } from './constants';
import { NetworkModuleOptions } from './interfaces/network-module.interface';

@Injectable()
export class NetworkService {
	private execAsync = promisify(exec);

	constructor(
		@Inject(NETWORK_MODULE_OPTIONS)
		private readonly options: NetworkModuleOptions
	) {}

	addIP(ipAddress: string): Promise<void> {
		const { interfaceName, cidrSize } = this.options;
		const command = `ip addr add ${ipAddress}/${cidrSize} dev ${interfaceName}`;
		return this.executeCommand(command);
	}

	deleteIP(ipAddress: string): Promise<void> {
		const { interfaceName, cidrSize } = this.options;
		const command = `ip addr del ${ipAddress}/${cidrSize} dev ${interfaceName}`;
		return this.executeCommand(command);
	}

	private async executeCommand(command): Promise<void> {
		try {
			const { stderr } = await this.execAsync(command);
			if (stderr) {
				console.warn(`Warn: ${stderr}`);
			}
		} catch (error) {
			console.error(`Error: ${error.message}`);
			throw error;
		}
	}
}
