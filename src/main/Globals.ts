import { BodyPart, Flag } from "arena/prototypes";
import { Creep, StructureTower } from "game/prototypes";
import { getObjectsByPrototype } from "game/utils";

export class Globals {
  public static myTower = getObjectsByPrototype(StructureTower).find(i => i.my);
  public static enemyTower = getObjectsByPrototype(StructureTower).find(i => !i.my);
  public static myCreeps: Creep[];
  public static enemyCreeps: Creep[];
  public static enemyFlag: Flag | undefined;
  public static bodyParts: BodyPart[];

  public static update(): void {
    this.myCreeps = getObjectsByPrototype(Creep).filter(i => i.my);
    this.enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my);
    this.enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my);
    this.bodyParts = getObjectsByPrototype(BodyPart);
  }
}
