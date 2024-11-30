import { ConfigService } from '@nestjs/config';
import { MailerModuleOptions } from '../mailer/interfaces/mailer-module.interface';

export async function getMailerConfig(
	configService: ConfigService
): Promise<MailerModuleOptions> {
	return {
		senderDomain: configService.get('SENDER_DOMAIN'),
		mxHost: configService.get('MX_HOST'),
		mxPort: +configService.get('MX_PORT') || 25,
		tlsEnabled: configService.get('TLS_ENABLED') === 'true'
	};
}
