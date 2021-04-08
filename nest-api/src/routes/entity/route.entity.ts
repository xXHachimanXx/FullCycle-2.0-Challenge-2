export class Route {
    title: string;
    startPosition: [ lat: number, lng: number ];
    endPosition: [lat: number, lng: number ];

    constructor(title :string, startPosition :[number, number], endPosition :[number, number]) {
        this.title = title;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
}