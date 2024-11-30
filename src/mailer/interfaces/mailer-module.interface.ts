export interface MailerModuleOptions {
	senderDomain: string;
	mxHost: string;
	mxPort: number;
	tlsEnabled: boolean;
}

export interface MailerModuleAsyncOptions {
	useFactory?: (...args: any[]) => Promise<MailerModuleOptions> | MailerModuleOptions;
	inject?: any[];
}
