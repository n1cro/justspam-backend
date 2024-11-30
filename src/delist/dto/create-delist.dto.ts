import { IsString, IsNotEmpty, IsIP } from 'class-validator';

export class CreateDelistDto {
	@IsNotEmpty()
	@IsIP('4')
	ip: string;

	@IsNotEmpty()
	@IsString()
	mailto: string;
}
