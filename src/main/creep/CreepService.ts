import { Creep } from "game/prototypes";
import { Globals } from "../Globals";
import LabelConstants from "game/constants/labels";
import LabelMap from "./label/LabelMap";
import RoleConstants from "game/constants/roles";
import SquadConstants from "game/constants/squads";

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
  const label = LabelMap.get(creep.initialPos);

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
    case LabelConstants.MDPS_1: {
      creep.role = RoleConstants.FLAG_GUARD;
      creep.squad = SquadConstants.FLAG_DEFENDERS;
      break;
    }
    case LabelConstants.MDPS_2: {
      creep.role = RoleConstants.MDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_1: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_2: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_3: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_4: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_5: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.RDPS_6: {
      creep.role = RoleConstants.RDPS;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.HEALER_1: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_DEFENDERS;
      break;
    }
    case LabelConstants.HEALER_2: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.HEALER_3: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.HEALER_4: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.HEALER_5: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
    case LabelConstants.HEALER_6: {
      creep.role = RoleConstants.HEALER;
      creep.squad = SquadConstants.FLAG_ATTACKERS;
      break;
    }
  }
}
