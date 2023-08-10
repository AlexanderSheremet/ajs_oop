export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Некорректная длина строки'); //
    }
    this.name = value;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    if (
      ![
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ].includes(value)
    ) {
      throw new Error('Некорректный тип игрока');
    }
    this.type = value;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health < 0) {
      throw new Error('Здоровье ниже нуля');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
