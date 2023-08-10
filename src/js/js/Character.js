import { types } from "@babel/core";

export default class Character {
  constructor(name, type) {
    const type = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Некорректное имя персонажа");
    }
    if (!types.includes(type)) {
      throw new Error("Некорректный тип персонажа");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  levelUp() {
    if (this.health <= 0) {
      throw new Error("нельзя повысить уровень мертвого");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
  damage(points) {
    if (this.health <= 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
