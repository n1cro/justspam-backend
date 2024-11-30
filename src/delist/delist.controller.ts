import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	UnprocessableEntityException
} from '@nestjs/common';
import { DelistService } from './delist.service';
import { CreateDelistDto } from './dto/create-delist.dto';

@Controller('delist')
export class DelistController {
	constructor(private readonly delistService: DelistService) {}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() createDelistDto: CreateDelistDto) {
		try {
			await this.delistService.create(createDelistDto);
			return { success: true };
		} catch (err) {
			throw new UnprocessableEntityException(err.message);
		}
	}
}
