declare module "game/constants/roles" {
  export type RoleConstant = RDPS | MDPS | HEALER | FLAG_GUARD | FLAG_CARRIER;

  export type RDPS = "RDPS";
  export type MDPS = "MDPS";
  export type HEALER = "Healer";
  export type FLAG_GUARD = "Flag Guard";
  export type FLAG_CARRIER = "Flag Carrier";

  export const RDPS: RDPS;
  export const MDPS: MDPS;
  export const HEALER: HEALER;
  export const FLAG_GUARD: FLAG_GUARD;
  export const FLAG_CARRIER: FLAG_CARRIER;
}
