class Character {
  #age = 54;
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    console.log(this.#age);
    return 'Attacking with ' + this.weapon;
  }
}

let bob = new Character('Bob', 'Paintbrush');
console.log(bob);
bob.attack();
