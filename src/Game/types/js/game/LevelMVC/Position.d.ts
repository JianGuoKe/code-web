export = Position;
declare class Position {
    static add(left: any, right: any): import("./Position");
    static subtract(left: any, right: any): import("./Position");
    static equals(left: any, right: any): boolean;
    static directionToOffsetPosition(direction: any): import("./Position");
    static isAdjacent(left: any, right: any): boolean;
    static forward(position: any, direction: any): import("./Position");
    static north(position: any): import("./Position");
    static east(position: any): import("./Position");
    static south(position: any): import("./Position");
    static west(position: any): import("./Position");
    static getOrthogonalPositions(position: any): import("./Position")[];
    static manhattanDistance(left: any, right: any): number;
    static absoluteDistanceSquare(left: any, right: any): number;
    /**
     * Gets all eight surrounding positions - orthogonal and diagonal
     */
    static getSurroundingPositions(position: any): import("./Position")[];
    /**
     * A simple factory method to create Position instances from old [x, y]
     * position arrays. While we are transitioning fully to Position instances,
     * this can be used to easily convert from the old form to the new form. Once
     * we have finished transitioning, this should exclusively be used to parse
     * position arrays in initial level data into Position instances, and all code
     * should be using only Position instances.
     */
    static fromArray(position: any): import("./Position");
    constructor(x: any, y: any);
    x: any;
    y: any;
    0: any;
    1: any;
}
