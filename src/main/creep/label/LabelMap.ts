import LabelConstants from "game/constants/labels";

const LabelMap = new Map([
  // Blue Horizontal Creeps
  [{ x: 7, y: 8 }, LabelConstants.MDPS_1],
  [{ x: 6, y: 8 }, LabelConstants.RDPS_1],
  [{ x: 5, y: 8 }, LabelConstants.RDPS_2],
  [{ x: 4, y: 8 }, LabelConstants.RDPS_3],
  [{ x: 3, y: 8 }, LabelConstants.HEALER_1],
  [{ x: 2, y: 8 }, LabelConstants.HEALER_2],
  [{ x: 1, y: 8 }, LabelConstants.HEALER_3],

  // Blue Vertical Creeps
  [{ x: 8, y: 7 }, LabelConstants.MDPS_2],
  [{ x: 8, y: 6 }, LabelConstants.RDPS_4],
  [{ x: 8, y: 5 }, LabelConstants.RDPS_5],
  [{ x: 8, y: 4 }, LabelConstants.RDPS_6],
  [{ x: 8, y: 3 }, LabelConstants.HEALER_4],
  [{ x: 8, y: 2 }, LabelConstants.HEALER_5],
  [{ x: 8, y: 1 }, LabelConstants.HEALER_6],

  // Red Horizontal Creeps
  [{ x: 92, y: 91 }, LabelConstants.MDPS_1],
  [{ x: 93, y: 91 }, LabelConstants.RDPS_1],
  [{ x: 94, y: 91 }, LabelConstants.RDPS_2],
  [{ x: 95, y: 91 }, LabelConstants.RDPS_3],
  [{ x: 96, y: 91 }, LabelConstants.HEALER_1],
  [{ x: 97, y: 91 }, LabelConstants.HEALER_2],
  [{ x: 98, y: 91 }, LabelConstants.HEALER_3],

  // Red Vertical Creeps
  [{ x: 91, y: 92 }, LabelConstants.MDPS_2],
  [{ x: 91, y: 93 }, LabelConstants.RDPS_4],
  [{ x: 91, y: 94 }, LabelConstants.RDPS_5],
  [{ x: 91, y: 95 }, LabelConstants.RDPS_6],
  [{ x: 91, y: 96 }, LabelConstants.HEALER_4],
  [{ x: 91, y: 97 }, LabelConstants.HEALER_5],
  [{ x: 91, y: 98 }, LabelConstants.HEALER_6]
]);

export default LabelMap;
