console.log("\n=========================================================")
console.log('                         section 3');
console.log("=========================================================\n")


let dragon = {
  name: 'Frank',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  }
}

console.log(dragon.sing());
console.log(dragon.fight());


let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  }
}

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

lizard.__proto__ = dragon; // never do this - messes up compiler
// console.log(lizard.sing());
// lizard.__proto__.fire = dragon.fire;
// console.log(lizard.fire);

console.log(dragon.isPrototypeOf(lizard));  // true
console.log(lizard.isPrototypeOf(lizard));  // false

console.log('\n---------')
console.log('all props')
console.log('---------')
for (let prop in lizard) {
  console.log(prop);
}
console.log('\n---------')
console.log('liz props')
console.log('---------')

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}


console.log("\n=========================================================")
console.log('                         section 4');
console.log("=========================================================\n")

const obj = {name:'Sally'}
console.log('obj.hasOwnProperty: ', obj.hasOwnProperty('hasOwnProperty'));

function a() {}
console.log('a.call: ', a.hasOwnProperty('call'));
console.log('a.bind: ', a.hasOwnProperty('bind'));
console.log('a.apply: ', a.hasOwnProperty('apply'));
console.log('a.name: ', a.hasOwnProperty('name'));

console.log('\n---------\n')

function multiplyBy5(num) {
  return num * 5;
}
console.log(multiplyBy5.__proto__);
console.log(multiplyBy5.prototype);

console.log("\n=========================================================")
console.log('                         section 5');
console.log("=========================================================\n")

let human = {
  mortal: true
}

let socrates = Object.create(human);
socrates.age = 42;
console.log(socrates);
console.log(socrates.mortal); // from prototype chain
console.log(human.isPrototypeOf(socrates));

console.log("\n=========================================================")
console.log('                         section 6');
console.log("=========================================================\n")

// only functions have the prototype object

console.log(multiplyBy5.prototype);
console.log(human.prototype);

console.log(typeof(Object));

const object = {} // uses the Object contructor
console.log(typeof(object));


console.log("\n=========================================================")
console.log('                         exercises');
console.log("=========================================================\n")

/*
 *  extend the functionality of a built in object
 *
 *  1)  Date object => to have new method .lastYear() which shows you 
 *      last year in 'YYYY' format.
 *
 *  2) Modify map() to print a special character at the end of each iteration.
 */

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
}

// 1)
new Date('1900-10-10').lastYear()
// '1899'

// 2) #1f5fa
console.log([1, 2, 3].map(x => x + '!'))
// 1sp, 2sp, 3sp
