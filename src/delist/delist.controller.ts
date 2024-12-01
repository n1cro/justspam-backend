import { Controller, Post, Body, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { DelistService } from './delist.service';
import { CreateDelistDto } from './dto/create-delist.dto';

@Controller('delist')
export class DelistController {
	private readonly logger = new Logger(DelistController.name);

	constructor(private readonly delistService: DelistService) {}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() createDelistDto: CreateDelistDto) {
		try {
			await this.delistService.create(createDelistDto);
			return { success: true };
		} catch (err) {
			this.logger.error(err);
			return { success: false, message: err.message };
		}
	}
}
