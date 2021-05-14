declare module "game/prototypes" {
  import { LabelConstant } from "game/constants/labels";
  import { RoleConstant } from "game/constants/roles";
  import { SquadConstant } from "game/constants/squads";

  export interface Creep {
    initialPos: RoomPosition;
    label: LabelConstant;
    role: RoleConstant;
    squad: SquadConstant;
  }
}
