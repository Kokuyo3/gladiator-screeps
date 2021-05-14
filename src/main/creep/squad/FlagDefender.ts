import { FLAG_GUARD, HEALER, MDPS, RDPS } from "game/constants/roles";
import { meleeAttacker, rangedAttacker } from "../role/CreepRoles";
import { Creep } from "game/prototypes";
import { Globals } from "../../Globals";
import { getDistance } from "game/utils";

export class FlagDefender {
  public static default(creep: Creep): void {
    switch (creep.role) {
      case FLAG_GUARD: {
        _flagGuardDefault(creep);
        break;
      }
      case MDPS: {
        _mdpsDefault(creep);
        break;
      }
      case RDPS: {
        _rdpsDefault(creep);
        break;
      }
      case HEALER: {
        _healerDefault(creep);
      }
    }
  }
}

function _flagGuardDefault(creep: Creep) {
  if (Globals.myFlag !== undefined) {
    const flagPos = { x: Globals.myFlag.x, y: Globals.myFlag.y };

    creep.moveTo(flagPos);

    const targets = Globals.enemyCreeps
      .filter(i => getDistance(i, flagPos) <= 1)
      .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

    if (targets.length > 0) {
      creep.attack(targets[0]);
    }
  } else {
    const targets = Globals.enemyCreeps
      .filter(i => getDistance(i, creep.initialPos) <= 10)
      .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

    if (targets.length > 0) {
      creep.moveTo(targets[0]);
      creep.attack(targets[0]);
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
  const healTargets = Globals.myCreeps.filter(i => i.role === FLAG_GUARD).sort((a, b) => a.hits - b.hits);

  if (healTargets.length > 0) {
    const targetDistance = getDistance(healTargets[0], creep);

    if (targetDistance === 1) {
      creep.heal(healTargets[0]);
    } else if (targetDistance <= 3) {
      creep.rangedHeal(healTargets[0]);
      creep.moveTo(healTargets[0]);
    } else {
      creep.moveTo(healTargets[0]);
    }
  }
}
