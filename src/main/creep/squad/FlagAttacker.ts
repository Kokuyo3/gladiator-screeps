import { healer, meleeAttacker, rangedAttacker } from "../role/CreepRoles";
import { Creep } from "game/prototypes";
import { Role } from "../enums/Role";

export class FlagAttacker {
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
