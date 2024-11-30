import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getMailerConfig } from '../config/mailer.config';
import { getNetworkConfig } from '../config/network.config';
import { MailerModule } from '../mailer/mailer.module';
import { NetworkModule } from '../network/network.module';
import { LoggerModule } from '../logger/logger.module';

import { DelistController } from './delist.controller';
import { DelistService } from './delist.service';

@Module({
	imports: [
		LoggerModule,
		MailerModule.registerAsync({
			inject: [ConfigService],
			useFactory: getMailerConfig
		}),
		NetworkModule.registerAsync({
			inject: [ConfigService],
			useFactory: getNetworkConfig
		})
	],
	controllers: [DelistController],
	providers: [DelistService]
})
export class DelistModule {}
