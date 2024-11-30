import { Module, DynamicModule, Provider } from '@nestjs/common';
import { NetworkService } from './network.service';
import { NETWORK_MODULE_OPTIONS } from './constants';
import { NetworkModuleAsyncOptions } from './interfaces/network-module.interface';

@Module({})
export class NetworkModule {
	static registerAsync(options: NetworkModuleAsyncOptions): DynamicModule {
		const asyncOptionsProvider: Provider = {
			provide: NETWORK_MODULE_OPTIONS,
			useFactory: options.useFactory,
			inject: options.inject || []
		};

		return {
			module: NetworkModule,
			providers: [asyncOptionsProvider, NetworkService],
			exports: [NetworkService]
		};
	}
}
