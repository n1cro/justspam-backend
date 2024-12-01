import * as nodemailer from 'nodemailer';

import { Inject, Injectable } from '@nestjs/common';
import { MAILER_MODULE_OPTIONS } from './constants';
import { MailerModuleOptions } from './interfaces/mailer-module.interface';

@Injectable()
export class MailerService {
	constructor(
		@Inject(MAILER_MODULE_OPTIONS)
		private readonly options: MailerModuleOptions
	) {}

	async sendDirectMail(ipAddress: string, to: string, subject: string): Promise<void> {
		const transporter = nodemailer.createTransport({
			host: this.options.mxHost,
			port: this.options.mxPort,
			secure: this.options.tlsEnabled,
			name: this.options.senderDomain,
			tls: {
				rejectUnauthorized: this.options.tlsEnabled
			},
			localAddress: ipAddress
		});

		const mailOptions = {
			from: `"Delist Request" <node@${this.options.senderDomain}>`,
			to,
			subject,
			text: ''
		};

		await transporter.sendMail(mailOptions);
	}

	extractFromMailTo(mailTo: string): {
		to: string;
		subject: string;
	} {
		const [to, query] = mailTo.split('?');

		const params = new URLSearchParams(query);
		const subject = params.get('subject');

		return { to, subject };
	}
}
