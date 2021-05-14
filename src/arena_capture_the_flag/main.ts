import { ATTACK, HEAL, RANGED_ATTACK } from "game/constants";
import { healer, meleeAttacker, rangedAttacker } from "../main/creep/role/CreepRoles";
import { CreepService } from "../main/creep/CreepService";
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
    if (creep.body.some(i => i.type === ATTACK)) {
      meleeAttacker(creep);
    }
    if (creep.body.some(i => i.type === RANGED_ATTACK)) {
      rangedAttacker(creep);
    }
    if (creep.body.some(i => i.type === HEAL)) {
      healer(creep);
    }
  });
}
