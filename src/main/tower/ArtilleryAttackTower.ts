import { Globals } from "../Globals";
import { StructureTower } from "game/prototypes";
import { getDistance } from "game/utils";

export class ArtilleryAttackTower {
  /**
   * Attacks enemies at distances >= 20 range, prioritizing enemies closest to the flag.
   *
   * @param tower
   */
  public static prioritzeAttackClosest(tower: StructureTower): void {
    if (tower.store.energy >= 10) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const myFlag = Globals.myFlag!;

      const enemiesGTE20 = Globals.enemyCreeps
        .filter(i => getDistance(i, tower) >= 20)
        .sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

      const enemiesGT10LT20 = Globals.enemyCreeps
        .filter(i => {
          const distance = getDistance(i, tower);
          return distance > 10 && distance < 20;
        })
        .sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

      const enemiesLTE10 = Globals.enemyCreeps
        .filter(i => getDistance(i, tower) <= 10)
        .sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

      if (enemiesLTE10.length > 0) {
        tower.attack(enemiesGTE20[0]);
      } else if (enemiesGT10LT20.length > 0) {
        tower.attack(enemiesGT10LT20[0]);
      } else if (enemiesGTE20.length > 0) {
        tower.attack(enemiesGTE20[0]);
      }
    }
  }
}
