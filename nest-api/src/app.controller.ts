import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Route } from './routes/entity/route.entity';

@Controller('routes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllRoutes(): Promise<Route[]> {
    return this.appService.getAllRoutes();
  }
}
