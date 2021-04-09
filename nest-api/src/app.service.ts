import { Injectable } from '@nestjs/common';
import { Route } from './routes/entity/route.entity';
import { generateRoutes } from './utils/utils';

@Injectable()
export class AppService {
  private routes :Route[] = generateRoutes();

  async getAllRoutes() {

    return this.routes;
  }
}
