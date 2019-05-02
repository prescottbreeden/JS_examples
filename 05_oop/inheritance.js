class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'Attacking with ' + this.weapon;
  }
}

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona);

const ogre = { ... fiona }
console.log(ogre);
console.log(fiona.__proto__); // Elf {}
console.log(ogre.__proto__);  // {}
console.log(fiona === ogre);  // false

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'Attacking with ' + this.weapon;
  }
}

class Ogre extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  fart() {
    return 'Oy!... that\'s just nasty...';
  }
}

class shittyOgre extends Character {
  snore() {
    return 'zzzzzzzzzzzzzzzz........';
  }
}

const frank = new Ogre('Frank', 'Onion Farts', 'Squacky');
console.log(frank);
console.log(frank.__proto__);
console.log(frank.attack())

const dolby = new Ogre('Dolby', 'cloth', 'house');
console.log(dolby);

const jack = new shittyOgre('Jack', 'naked');
console.log(jack);
console.log(jack.snore());

