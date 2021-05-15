import { CreepService } from "../main/creep/CreepService";
import { FlagAttacker } from "../main/creep/squad/FlagAttacker";
import { FlagDefender } from "../main/creep/squad/FlagDefender";
import { Globals } from "../main/Globals";
import { Squad } from "../main/creep/enums/Squad";
import { getTime } from "game/utils";

export function loop(): void {
  Globals.update();

  if (getTime() === 1) {
    Globals.updateStaticRoomObjects();
    CreepService.initCreeps();
  }

  if (getTime() % 10 === 0) {
    console.log(`I have ${Globals.myCreeps.length} Creeps vs ${Globals.enemyCreeps.length} enemy Creeps`);
  }

  Globals.myCreeps.forEach(creep => {
    if (creep.squad === Squad.FLAG_DEFENDERS) {
      FlagDefender.default(creep);
    } else if (creep.squad === Squad.FLAG_ATTACKERS) {
      FlagAttacker.default(creep);
    }
  });
}
