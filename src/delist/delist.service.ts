import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';
import { NetworkService } from '../network/network.service';
import { MailerService } from '../mailer/mailer.service';
import { CreateDelistDto } from './dto/create-delist.dto';

@Injectable()
export class DelistService {
	constructor(
		private readonly logger: LoggerService,
		private readonly networkService: NetworkService,
		private readonly mailerService: MailerService
	) {}

	async create(createDelistDto: CreateDelistDto): Promise<void> {
		const { ip, mailto } = createDelistDto;
		const data = this.mailerService.extractFromMailTo(mailto);

		try {
			await this.networkService.addIP(ip);
			await this.mailerService.sendDirectMail(ip, data.to, data.subject);
			await this.networkService.deleteIP(ip);

			this.logger.logIpOperation(ip, true);
		} catch (err) {
			this.logger.logIpOperation(ip, false);
			throw err;
		}
	}
}
