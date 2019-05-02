// 6 or 7 types in javascript

// primitive types: in memory, the value is actual value of the thing
const number = 5
const bool = true
const string = 'To be or not to be'
const undef = undefined
const nil = null
const symb = Symbol('just me')

// non-primitive: in memory, ...
const obj1 = { // <-- this object doesn't actualy contain 'a', just points at it
  a: 'Tom'
}
const obj = {}
const func = function() {}

console.log(typeof(number))
console.log(typeof(bool))
console.log(typeof(string))
console.log(typeof(undef))
console.log(typeof(nil))
console.log(typeof(symb))


console.log(typeof(obj))
console.log(typeof(func))

number.a = 'What in the word...';
console.log(number.a);

// undefined is the absence of a --definition (i.e. value)
// null is the abesence of a --value (i.e. reference)
