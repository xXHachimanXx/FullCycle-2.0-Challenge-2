
export interface Position {
    lat: number;
    lng: number;
}

export interface Route {
    title: string;
    startPosition: Position;
    endPosition: Position;
}