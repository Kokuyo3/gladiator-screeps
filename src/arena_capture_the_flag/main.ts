import { CreepService } from "../main/creep/CreepService";
import { FlagAttacker } from "../main/creep/squad/FlagAttacker";
import { FlagDefender } from "../main/creep/squad/FlagDefender";
import { FlagDefenseTower } from "../main/tower/FlagDefenseTower";
import { Globals } from "../main/Globals";
import { Log } from "../main/utils/log/Log";
import { Squad } from "../main/creep/enums/Squad";
import { getTime } from "game/utils";

const log = new Log("main");

/**
 * Main method that gets executed each tick. Logging level can be set in {@link Globals}.
 */
export function loop(): void {
  Globals.update();

  if (getTime() === 1) {
    Globals.updateStaticRoomObjects();
    CreepService.initCreeps();
  }

  if (getTime() % 2 !== 0) {
    CreepService.updatePreviousTickHits();
  }

  if (getTime() % 10 === 0) {
    log.info(`My Creeps: ${Globals.myCreeps.length} vs Enemy Creeps: ${Globals.enemyCreeps.length}`);
  }

  // Set Tower Behavior Mode
  if (Globals.myTower) {
    FlagDefenseTower.prioritizeAttackEnemyCreeps(Globals.myTower);
  }

  // Set Creep Behavior based on assigned Squad
  Globals.myCreeps.forEach(creep => {
    if (creep.squad === Squad.FLAG_DEFENDERS) {
      FlagDefender.default(creep);
    } else if (creep.squad === Squad.FLAG_ATTACKERS) {
      FlagAttacker.default(creep);
    }
  });
}
