import { Creep } from "game/prototypes";
import { Flag } from "arena/prototypes";
import { getObjectsByPrototype } from "game/utils";

export class Globals {
  public static myCreeps: Creep[];
  public static enemyCreeps: Creep[];
  public static enemyFlag: Flag | undefined;

  public static update(): void {
    this.myCreeps = getObjectsByPrototype(Creep).filter(i => i.my);
    this.enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my);
    this.enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my);
  }
}
