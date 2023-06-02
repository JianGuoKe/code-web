export = FacingDirection;
declare const FacingDirection: Readonly<{
    North: 0;
    East: 1;
    South: 2;
    West: 3;
    opposite: (facing: any) => 0 | 2 | 1 | 3;
    left: (facing: any) => number;
    right: (facing: any) => number;
    turnDirection: (from: any, to: any) => "left" | "right";
    turn: (facing: any, rotation: any) => number;
    directionToOffset: (direction: any) => number[];
    directionToRelative(direction: any): "Up" | "Down" | "Right" | "Left";
}>;
