import { Injectable, Inject, LoggerService as NestLogger } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class LoggerService {
	constructor(
		@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: NestLogger
	) {}

	logIpOperation(ip: string, success: boolean): void {
		this.logger.log(
			JSON.stringify({
				ip,
				success
			})
		);
	}
}
