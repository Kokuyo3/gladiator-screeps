import { FLAG_GUARD, HEALER, MDPS, RDPS } from "game/constants/roles";
import { healer, meleeAttacker, rangedAttacker } from "../role/CreepRoles";
import { Creep } from "game/prototypes";

export class FlagAttacker {
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
  meleeAttacker(creep);
}

function _mdpsDefault(creep: Creep) {
  meleeAttacker(creep);
}

function _rdpsDefault(creep: Creep) {
  rangedAttacker(creep);
}

function _healerDefault(creep: Creep) {
  healer(creep);
}
