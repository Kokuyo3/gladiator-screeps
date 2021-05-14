declare module "game/constants/squads" {
  export type SquadConstant = FLAG_ATTACKERS | FLAG_DEFENDERS | PART_LOOTERS | MID_CONTROL | FLANK;

  export type FLAG_ATTACKERS = "Flag Assault";
  export type FLAG_DEFENDERS = "Flag Defenders";
  export type PART_LOOTERS = "BodyPart Looters";
  export type MID_CONTROL = "Mid Control";
  export type FLANK = "Flank";

  export const FLAG_ATTACKERS: FLAG_ATTACKERS;
  export const FLAG_DEFENDERS: FLAG_DEFENDERS;
  export const PART_LOOTERS: PART_LOOTERS;
  export const MID_CONTROL: MID_CONTROL;
  export const FLANK: FLANK;
}
