export = AdjacencySet;
declare class AdjacencySet {
    /**
     * @param {Position[]} positions
     * @param {Function} [comparisonFunction = Position.isAdjacent]
     */
    constructor(positions: Position[], comparisonFunction?: Function);
    comparisonFunction: Function;
    sets: any[];
    /**
     * Flatten the set of sets down to a single array of Positions
     *
     * @return {Position[]}
     */
    flattenSets(): Position[];
    /**
     * Add a position to our adjacency sets if it doesn't already exist, updating
     * existing sets as necessary
     *
     * NOTE that this operation is O(N), not the O(1) that you would expect from
     * a full disjoint-set implementation.
     *
     * @param {Position} position
     * @return {boolean} whether or not the specified position was newly added
     */
    add(position: Position): boolean;
    /**
     * Find the set containing a specified position, if it exists
     *
     * @return {(Postion[]|undefined)}
     */
    find(position: any): (Postion[] | undefined);
    /**
     * Remove a position from our adjacency sets if it exists, updating existing
     * sets as necessary.
     *
     * NOTE that this operation is O(N), not the O(1) that you would expect from
     * a full disjoint-set implementation.
     *
     * @param {Position} position
     * @return {boolean} whether or not the specified position existed in the sets
     */
    remove(position: Position): boolean;
}
import Position = require("./Position");
