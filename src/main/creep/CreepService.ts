import { Creep } from "game/prototypes";
import { EnemyLabelMap } from "./label/EnemyLabelMap";
import { Globals } from "../Globals";
import { Label } from "./enums/Label";
import { LabelMap } from "./label/LabelMap";
import { Log } from "../utils/log/Log";
import { Role } from "./enums/Role";
import { Squad } from "./enums/Squad";

const log = new Log("CreepService");

export class CreepService {
  /**
   * Initializes all of your Creeps with necessary starting parameters. Should
   * only be called once at the start of the match.
   */
  public static initCreeps(): void {
    Globals.myCreeps.forEach(creep => {
      _setInitialPos(creep);
      _setLabel(creep);
      _setRoleAndSquad(creep);

      log.info(
        `Initialized Creep at ${JSON.stringify(creep.initialPos)} as ${creep.label} with Squad: ${
          creep.squad
        } and Role: ${creep.role}`
      );
    });

    Globals.enemyCreeps.forEach(creep => {
      _setInitialPos(creep);
      _setLabel(creep);
    });
  }

  /**
   * Takes a supplied Creep and uses it to call a combat method from {@link Creep} on a supplied target Creep, then
   * logs the action and its results if the resulting hpDiff of the target Creep is greater than 0. Returns the
   * difference in the target Creep's HP as a result of the supplied method.
   * TODO: Figure out how to differentation damage done by source. Method currently returns the total difference
   * between the previous and current tick, which could have come from multiple sources.
   *
   * @param thisCreep the Creep to perform the action
   * @param method the combat method from {@link Creep} that {@param thisCreep} will perform on {@param targetCreep}
   * @param targetCreep the Creep that will be a target of {@param method}
   */
  public static callCreepCombatMethod(thisCreep: Creep, method: (creep: Creep) => void, targetCreep: Creep): number {
    const preHP = targetCreep.previousTickHits;

    method.call(thisCreep, targetCreep);

    const postHP = targetCreep.hits;

    const hpDiff = Math.abs(postHP - preHP);

    if (hpDiff > 0) {
      log.info(`${thisCreep.label}.${method.name} => ${targetCreep.label} for ${hpDiff}`);
    }

    return hpDiff;
  }

  public static updatePreviousTickHits(): void {
    Globals.allCreeps.forEach(creep => (creep.previousTickHits = creep.hits));
  }
}

/**
 * Sets the initial starting coordinates for a Creep.
 *
 * @param creep The Creep that will have its initial position set
 */
function _setInitialPos(creep: Creep) {
  if (!creep.initialPos) {
    creep.initialPos = { x: creep.x, y: creep.y };
  }
}

/**
 * Sets the uniquely identifying label for a Creep by using its initial position
 * to determine which creep it is. Mapping between RoomPosition and Label is
 * defined in {@link LabelMap} and {@link EnemyLabelMap}
 *
 * @param creep The Creep that will have its label set
 */
function _setLabel(creep: Creep) {
  let label;

  if (creep.my) {
    label = LabelMap.get(JSON.stringify(creep.initialPos));
  } else {
    label = EnemyLabelMap.get(JSON.stringify(creep.initialPos));
  }

  if (label !== undefined) {
    creep.label = label;
  }
}

/**
 * Sets the Role and Squad for a Creep based on its Label. A switch statement
 * based on the Creep's unique Label is used so that each Creep's Role and Squad
 * combination can be fine tuned individually and easily reassigned as the meta
 * shifts.
 *
 * @param creep The Creep that will have its Role and Squad set
 */
function _setRoleAndSquad(creep: Creep) {
  if (creep.label === Label.MDPS_1) {
    {
      creep.role = Role.FLAG_GUARD;
      creep.squad = Squad.FLAG_DEFENDERS;
    }
  } else if (creep.label === Label.MDPS_2) {
    {
      creep.role = Role.MDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_1) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_2) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_3) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_4) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_5) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.RDPS_6) {
    {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.HEALER_1) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_DEFENDERS;
    }
  } else if (creep.label === Label.HEALER_2) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.HEALER_3) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.HEALER_4) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.HEALER_5) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  } else if (creep.label === Label.HEALER_6) {
    {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
    }
  }
}
