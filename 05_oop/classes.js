class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  // attack() {
  //   return `Attacking with ${this.weapon}`;
  // }

  build() {
    return 'Back to work...';
  }
}

Elf.prototype.attack = function() {
  return `Attacking with ${this.weapon}`;
}

const bob = new Elf('Bob Ross', 'Paintbrush');
console.log(Elf.prototype);
