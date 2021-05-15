import { Creep } from "game/prototypes";
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
 * defined in {@link LabelMap}
 *
 * @param creep The Creep that will have its label set
 */
function _setLabel(creep: Creep) {
  const label = LabelMap.get(JSON.stringify(creep.initialPos));

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
  switch (creep.label) {
    case Label.MDPS_1: {
      creep.role = Role.FLAG_GUARD;
      creep.squad = Squad.FLAG_DEFENDERS;
      break;
    }
    case Label.MDPS_2: {
      creep.role = Role.MDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_1: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_2: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_3: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_4: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_5: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.RDPS_6: {
      creep.role = Role.RDPS;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.HEALER_1: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_DEFENDERS;
      break;
    }
    case Label.HEALER_2: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.HEALER_3: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.HEALER_4: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.HEALER_5: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
    case Label.HEALER_6: {
      creep.role = Role.HEALER;
      creep.squad = Squad.FLAG_ATTACKERS;
      break;
    }
  }
}
