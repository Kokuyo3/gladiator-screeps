import { Label } from "../enums/Label";

export const LabelMap: Map<string, Label> = new Map([
  // Blue Horizontal Creeps
  [JSON.stringify({ x: 7, y: 8 }), Label.MDPS_1],
  [JSON.stringify({ x: 6, y: 8 }), Label.RDPS_1],
  [JSON.stringify({ x: 5, y: 8 }), Label.RDPS_2],
  [JSON.stringify({ x: 4, y: 8 }), Label.RDPS_3],
  [JSON.stringify({ x: 3, y: 8 }), Label.HEALER_1],
  [JSON.stringify({ x: 2, y: 8 }), Label.HEALER_2],
  [JSON.stringify({ x: 1, y: 8 }), Label.HEALER_3],

  // Blue Vertical Creeps
  [JSON.stringify({ x: 8, y: 7 }), Label.MDPS_2],
  [JSON.stringify({ x: 8, y: 6 }), Label.RDPS_4],
  [JSON.stringify({ x: 8, y: 5 }), Label.RDPS_5],
  [JSON.stringify({ x: 8, y: 4 }), Label.RDPS_6],
  [JSON.stringify({ x: 8, y: 3 }), Label.HEALER_4],
  [JSON.stringify({ x: 8, y: 2 }), Label.HEALER_5],
  [JSON.stringify({ x: 8, y: 1 }), Label.HEALER_6],

  // Red Horizontal Creeps
  [JSON.stringify({ x: 92, y: 91 }), Label.MDPS_1],
  [JSON.stringify({ x: 93, y: 91 }), Label.RDPS_1],
  [JSON.stringify({ x: 94, y: 91 }), Label.RDPS_2],
  [JSON.stringify({ x: 95, y: 91 }), Label.RDPS_3],
  [JSON.stringify({ x: 96, y: 91 }), Label.HEALER_1],
  [JSON.stringify({ x: 97, y: 91 }), Label.HEALER_2],
  [JSON.stringify({ x: 98, y: 91 }), Label.HEALER_3],

  // Red Vertical Creeps
  [JSON.stringify({ x: 91, y: 92 }), Label.MDPS_2],
  [JSON.stringify({ x: 91, y: 93 }), Label.RDPS_4],
  [JSON.stringify({ x: 91, y: 94 }), Label.RDPS_5],
  [JSON.stringify({ x: 91, y: 95 }), Label.RDPS_6],
  [JSON.stringify({ x: 91, y: 96 }), Label.HEALER_4],
  [JSON.stringify({ x: 91, y: 97 }), Label.HEALER_5],
  [JSON.stringify({ x: 91, y: 98 }), Label.HEALER_6]
]);
