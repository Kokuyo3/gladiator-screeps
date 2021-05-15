import { meleeAttacker, rangedAttacker } from "../role/CreepRoles";
import { Creep } from "game/prototypes";
import { CreepService } from "../CreepService";
import { Globals } from "../../Globals";
import { Log } from "../../utils/log/Log";
import { Role } from "../enums/Role";
import { getDistance } from "game/utils";

const log = new Log("FlagDefender");

export class FlagDefender {
  public static default(creep: Creep): void {
    switch (creep.role) {
      case Role.FLAG_GUARD: {
        _flagGuardDefault(creep);
        break;
      }
      case Role.MDPS: {
        _mdpsDefault(creep);
        break;
      }
      case Role.RDPS: {
        _rdpsDefault(creep);
        break;
      }
      case Role.HEALER: {
        _healerDefault(creep);
      }
    }
  }
}

function _flagGuardDefault(creep: Creep) {
  if (Globals.myFlag !== undefined) {
    const flagPos = { x: Globals.myFlag.x, y: Globals.myFlag.y };

    creep.moveTo(Globals.myFlag);

    const targets = Globals.enemyCreeps
      .filter(i => getDistance(i, flagPos) <= 1)
      .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

    if (targets.length > 0) {
      CreepService.callCreepCombatMethod(creep, Creep.prototype.attack, targets[0]);
    }
  } else {
    log.warn(`My flag is undefined. Flag Guard ${creep.label} defaulting to MDPS behavior`);

    const targets = Globals.enemyCreeps
      .filter(i => getDistance(i, creep.initialPos) <= 10)
      .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

    if (targets.length > 0) {
      creep.moveTo(targets[0]);
      CreepService.callCreepCombatMethod(creep, Creep.prototype.attack, targets[0]);
    }
  }
}

function _mdpsDefault(creep: Creep) {
  // TODO
  meleeAttacker(creep);
}

function _rdpsDefault(creep: Creep) {
  // TODO
  rangedAttacker(creep);
}

function _healerDefault(creep: Creep) {
  const healTargets = Globals.myCreeps.filter(i => i.role === Role.FLAG_GUARD).sort((a, b) => a.hits - b.hits);

  if (healTargets.length > 0) {
    const targetDistance = getDistance(healTargets[0], creep);

    if (targetDistance === 1) {
      CreepService.callCreepCombatMethod(creep, Creep.prototype.heal, healTargets[0]);
    } else if (targetDistance <= 3) {
      CreepService.callCreepCombatMethod(creep, Creep.prototype.rangedHeal, healTargets[0]);
      creep.moveTo(healTargets[0]);
    } else {
      creep.moveTo(healTargets[0]);
    }
  }
}
