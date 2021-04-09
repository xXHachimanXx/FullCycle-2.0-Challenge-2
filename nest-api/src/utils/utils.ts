import { Route, Position } from "src/routes/entity/route.entity";

export function generateRoutes() :Array<Route>{
    return new Array<Route>(
      new Route("Route 1", new Position(-15.82594,-47.92923), new Position(-15.8261,-47.92911) ),
      new Route("Route 2", new Position(-15.82645,-47.92384), new Position(-15.82997,-47.92477) ),
      new Route("Route 3", new Position(-15.82996,-47.92483), new Position(-15.82996,-47.92484) ),
      new Route("Route 4", new Position(-15.82306,-47.92553), new Position(-15.8261,-47.92911) ),
      new Route("Route 5", new Position(-15.82594,-47.92923), new Position(-15.8225,-47.92476) ),
    );
}

