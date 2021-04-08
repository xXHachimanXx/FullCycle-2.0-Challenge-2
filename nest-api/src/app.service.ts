import { Injectable } from '@nestjs/common';
import { Route } from './routes/entity/route.entity';
import { generateRoutes } from './utils/utils';

@Injectable()
export class AppService {
  async getAllRoutes() :Promise<Route[]> {
    const routes :Array<Route> = generateRoutes();

    return routes;
  }
}
