import { Route } from "src/routes/entity/route.entity";

export function generateRoutes() :Array<Route>{
    return new Array<Route>(
      new Route("r1", [-15.82594,-47.92923], [-15.8261,-47.92911] ),
      new Route("r2", [-15.82645,-47.92384], [-15.82997,-47.92477] ),
      new Route("r3", [-15.82996,-47.92483], [-15.82996,-47.92484] ),
      new Route("r4", [-15.82306,-47.92553], [-15.8261,-47.92911] ),
      new Route("r5", [-15.82594,-47.92923], [-15.8225,-47.92476] ),
    );
}

