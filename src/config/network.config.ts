import { ConfigService } from '@nestjs/config';

export async function getNetworkConfig(configService: ConfigService): Promise<any> {
	return {
		interfaceName: configService.get('INTERFACE_NAME'),
		cidrSize: parseInt(configService.get('CIDR_SIZE'), 10) || 32
	};
}
