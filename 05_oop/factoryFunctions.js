// procedural
const elf = {
  name: 'Liv Tyler',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  }
}

const elf2 = {
  name: 'Legolas',
  weapon: 'bow',
  attack() {
    return 'attack with ' + elf.weapon;
  }
}

console.log(elf.name)

// factory functions
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return 'attack with ' + weapon;
    }
  }
}

const peter = createElf('Peter', 'stones');
const sam = createElf('Peter', 'fire');

console.log(peter.attack());
console.log(sam.attack());

// expensive in memory

// step 3:
const elfFunctions = {
  attack() {
    return 'attack with ' + this.weapon;
  }
}
peter.attck = elfFunctions.attack; // too much work

// Object.create()
function createElf2(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const bob = createElf2('Bob', 'Painbrush');
console.log(bob.attack());
console.log(bob.name);

