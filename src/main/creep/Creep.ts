declare module "game/prototypes" {
  export interface Creep {
    initialPos: RoomPosition;
    label: import("./enums/Label").Label;
    role: import("./enums/Role").Role;
    squad: import("./enums/Squad").Squad;
    previousTickHits: number;
  }
}
