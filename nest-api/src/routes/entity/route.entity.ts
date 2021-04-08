export class Route {
    title: string;
    startPosition: Position;
    endPosition: Position;


    constructor(title: string, startPosition: Position, endPosition: Position) {
        this.title = title;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
}

export class Position {
    lat: number;
    lng: number;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}