export interface NetworkModuleOptions {
	interfaceName: string;
	cidrSize: number;
}

export interface NetworkModuleAsyncOptions {
	useFactory?: (...args: any[]) => Promise<NetworkModuleOptions> | NetworkModuleOptions;
	inject?: any[];
}
