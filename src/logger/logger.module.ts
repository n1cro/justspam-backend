import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { LoggerService } from './logger.service';
import * as winston from 'winston';

@Module({
	imports: [
		WinstonModule.forRoot({
			transports: [
				new winston.transports.File({
					filename: 'logs/report.log',
					level: 'info',
					format: winston.format.combine(
						winston.format.timestamp(),
						winston.format.printf(({ timestamp, message }) => {
							const log = JSON.parse(message as string);
							return JSON.stringify({
								timestamp,
								...log
							});
						})
					)
				})
			]
		})
	],
	exports: [LoggerService],
	providers: [LoggerService]
})
export class LoggerModule {}
