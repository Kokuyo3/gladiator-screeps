import { BodyPart, Flag } from "arena/prototypes";
import { Creep, StructureTower } from "game/prototypes";
import { LogLevel } from "./utils/log/LogLevel";
import { getObjectsByPrototype } from "game/utils";

export class Globals {
  public static logLevel: LogLevel = LogLevel.INFO;

  public static myTower: StructureTower | undefined;
  public static enemyTower: StructureTower | undefined;
  public static myCreeps: Creep[];
  public static enemyCreeps: Creep[];
  public static myFlag: Flag | undefined;
  public static enemyFlag: Flag | undefined;
  public static bodyParts: BodyPart[];

  public static update(): void {
    this.myCreeps = getObjectsByPrototype(Creep).filter(i => i.my);
    this.enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my);
    this.bodyParts = getObjectsByPrototype(BodyPart);
  }

  public static updateStaticRoomObjects(): void {
    this.myFlag = getObjectsByPrototype(Flag).find(i => i.my);
    this.enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my);
    this.myTower = getObjectsByPrototype(StructureTower).find(i => i.my);
    this.enemyTower = getObjectsByPrototype(StructureTower).find(i => !i.my);
  }
}
