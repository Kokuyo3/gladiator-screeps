import { FLAG_ATTACKERS, FLAG_DEFENDERS } from "game/constants/squads";
import { CreepService } from "../main/creep/CreepService";
import { FlagAttacker } from "../main/creep/squad/FlagAttacker";
import { FlagDefender } from "../main/creep/squad/FlagDefender";
import { Globals } from "../main/Globals";
import { getTime } from "game/utils";

export function loop(): void {
  Globals.update();

  if (getTime() === 0) {
    CreepService.initCreeps();
  }

  if (getTime() % 10 === 0) {
    console.log(`I have ${Globals.myCreeps.length} creeps`);
  }

  Globals.myCreeps.forEach(creep => {
    if (creep.squad === FLAG_DEFENDERS) {
      FlagDefender.default(creep);
    } else if (creep.squad === FLAG_ATTACKERS) {
      FlagAttacker.default(creep);
    }
  });
}
