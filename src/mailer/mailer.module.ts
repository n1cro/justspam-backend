import { Module, DynamicModule, Provider } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MAILER_MODULE_OPTIONS } from './constants';
import { MailerModuleAsyncOptions } from './interfaces/mailer-module.interface';

@Module({})
export class MailerModule {
	static registerAsync(options: MailerModuleAsyncOptions): DynamicModule {
		const asyncOptionsProvider: Provider = {
			provide: MAILER_MODULE_OPTIONS,
			useFactory: options.useFactory,
			inject: options.inject || []
		};

		return {
			module: MailerModule,
			providers: [asyncOptionsProvider, MailerService],
			exports: [MailerService]
		};
	}
}
