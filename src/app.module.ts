import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DelistModule } from './delist/delist.module';
import { LoggerModule } from './logger/logger.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), DelistModule, LoggerModule],
	controllers: [],
	providers: []
})
export class AppModule {}
