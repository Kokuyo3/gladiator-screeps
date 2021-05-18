import { Globals } from "../Globals";
import { Role } from "../creep/enums/Role";
import { StructureTower } from "game/prototypes";
import { getDistance } from "game/utils";

export class FlagDefenseTower {
  /**
   * Prioritizes healing the Flag Guard if its HP is below what the tower would heal it for. Otherwise, attacks the
   * closest enemy that is at range <= 5. If the tower is energy capped, it will attack an enemy creep at any range.
   *
   * @param tower
   */
  public static prioritizeHealFlagGuard(tower: StructureTower): void {
    const flagGuard = Globals.myCreeps.find(i => i.role === Role.FLAG_GUARD);

    if (tower.store.energy >= 10 && flagGuard !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const myFlag = Globals.myFlag!;

      const enemiesLTE5 = Globals.enemyCreeps
        .filter(i => getDistance(i, tower) <= 5)
        .sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

      if (flagGuard.hits < flagGuard.hitsMax - 400) {
        tower.heal(flagGuard);
      } else if (enemiesLTE5.length > 0) {
        tower.attack(enemiesLTE5[0]);
      } else if (tower.store.energy === 50) {
        const enemies = Globals.enemyCreeps.sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

        tower.attack(enemies[0]);
      }
    }
  }

  /**
   * Prioritizes attacking enemy creeps near to our flag. Attacks the closest enemy that is at range < 15. Otherwise
   * heals the Flag Guard if its HP is below what the tower would heal it for. If the tower is energy capped, it will
   * attack an enemy creep at any range.
   *
   * @param tower
   */
  public static prioritizeAttackEnemyCreeps(tower: StructureTower): void {
    const flagGuard = Globals.myCreeps.find(i => i.role === Role.FLAG_GUARD);

    if (tower.store.energy >= 10 && flagGuard !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const myFlag = Globals.myFlag!;

      const enemiesLT15 = Globals.enemyCreeps
        .filter(i => getDistance(i, tower) < 15)
        .sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

      if (enemiesLT15.length > 0) {
        tower.attack(enemiesLT15[0]);
      } else if (flagGuard.hits < flagGuard.hitsMax - 400) {
        tower.heal(flagGuard);
      } else if (tower.store.energy === 50) {
        const enemies = Globals.enemyCreeps.sort((a, b) => getDistance(a, myFlag) - getDistance(b, myFlag));

        tower.attack(enemies[0]);
      }
    }
  }
}
