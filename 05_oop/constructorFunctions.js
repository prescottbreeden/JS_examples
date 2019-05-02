// Constructor Fucntions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  // this.attack = function() {
  //   return 'Attacking with ' + this.weapon;
  // }
}

Elf.prototype.attack = function() {
  return 'Attacking with ' + this.weapon;
}

Elf.prototype.build = function() {
  const self = this;
  function building() {
    return `Back to work for ${self.name}...`;
  }
  return building();
}

const legolas = new Elf('Legolas', 'Bow');
console.log(legolas.name)
console.log(legolas.attack())

const elf = new Function('name', 'weapon', 
  `this.name = name; 
  this.weapon = weapon;`)

const sarah = new Elf('Sarah', 'Fireworks');
console.log(Elf.prototype)
console.log(sarah.__proto__)

console.log(sarah.attack())
console.log(sarah.build())


