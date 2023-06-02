export = LevelEntity;
declare class LevelEntity {
    constructor(controller: any);
    controller: any;
    game: any;
    entityMap: Map<any, any>;
    entityDeathCount: Map<any, any>;
    sprite: any;
    id: number;
    loadData(levelData: any): void;
    tick(): void;
    pushEntity(entity: any): void;
    isFriendlyEntity(type: any): boolean;
    createEntity(type: any, identifier: any, x: any, y: any, facing: any, pattern: any): BaseEntity;
    isSpawnableInBetween(minX: any, minY: any, maxX: any, maxY: any): boolean;
    spawnEntity(type: any, spawnDirection: any): BaseEntity;
    spawnEntityAt(type: any, x: any, y: any, facing: any): BaseEntity;
    destroyEntity(identifier: any): void;
    getEntityAt(position: any): any;
    getEntitiesOfType(type: any): any[];
    reset(): void;
}
import BaseEntity = require("../Entities/BaseEntity");
