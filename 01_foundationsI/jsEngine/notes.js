// jsEngine
function jsengine(code) {
  return code.split(/\s+/);
}

console.log(jsengine('var a = 5'));


// interpreter vs compiler
function someCalculation(x, y) {
  return x + y;
}

for (let i = 0; i < 1000; i++) {
  someCalculation(5, 4);
}

// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData = {
  firstName: 'Bob',
  lastName: 'Ross'
}

findUser(userData);
// 'found Bob Ross' <-- replaces if run often

// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 100; // <-- unexpected code slows compiler
obj2.a = 30;

