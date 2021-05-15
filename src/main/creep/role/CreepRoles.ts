import { Creep, RoomObject } from "game/prototypes";
import { getDirection, getDistance } from "game/utils";
import { CreepService } from "../CreepService";
import { Globals } from "../../Globals";
import { searchPath } from "game/path-finder";

export function meleeAttacker(creep: Creep): void {
  const targets = Globals.enemyCreeps
    .filter(i => getDistance(i, creep.initialPos) < 10)
    .sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

  if (targets.length > 0) {
    creep.moveTo(targets[0]);
    CreepService.callCreepCombatMethod(creep, Creep.prototype.attack, targets[0]);
  } else {
    creep.moveTo(creep.initialPos);
  }
}

export function rangedAttacker(creep: Creep): void {
  const targets = Globals.enemyCreeps.filter(() => true).sort((a, b) => getDistance(a, creep) - getDistance(b, creep));

  if (targets.length > 0) {
    CreepService.callCreepCombatMethod(creep, Creep.prototype.rangedAttack, targets[0]);
  }

  if (Globals.enemyFlag) {
    creep.moveTo(Globals.enemyFlag);
  }

  const range = 3;
  const enemiesInRange = Globals.enemyCreeps.filter(i => getDistance(i, creep) < range);
  if (enemiesInRange.length > 0) {
    flee(creep, enemiesInRange, range);
  }
}

export function healer(creep: Creep): void {
  const targets = Globals.myCreeps.filter(i => i !== creep && i.hits < i.hitsMax).sort((a, b) => a.hits - b.hits);

  if (targets.length) {
    creep.moveTo(targets[0]);
  } else {
    if (Globals.enemyFlag) {
      creep.moveTo(Globals.enemyFlag);
    }
  }

  const healTargets = Globals.myCreeps.filter(i => getDistance(i, creep) <= 3).sort((a, b) => a.hits - b.hits);

  if (healTargets.length > 0) {
    if (getDistance(healTargets[0], creep) === 1) {
      CreepService.callCreepCombatMethod(creep, Creep.prototype.heal, healTargets[0]);
    } else {
      CreepService.callCreepCombatMethod(creep, Creep.prototype.rangedHeal, healTargets[0]);
    }
  }

  const range = 7;
  const enemiesInRange = Globals.enemyCreeps.filter(i => getDistance(i, creep) < range);
  if (enemiesInRange.length > 0) {
    flee(creep, enemiesInRange, range);
  }

  if (Globals.enemyFlag) {
    creep.moveTo(Globals.enemyFlag);
  }
}

// TODO: Create BaseCreepRole that will contain this common method
function flee(creep: Creep, targets: RoomObject[], range: number) {
  const result = searchPath(
    creep,
    targets.map(i => ({ pos: i, range })),
    { flee: true }
  );
  if (result.path.length > 0) {
    const direction = getDirection(result.path[0].x - creep.x, result.path[0].y - creep.y);
    creep.move(direction);
  }
}
