function two() {
  console.log(isValid); // hoisted overwrites scope-chain
  var isValid; // undefiend
}

function one() {
  var isValid = true; // local env
  two(); // new EC
}

var isValid = false;
one();


//two() --  undefined
//one() --  true
//global() -- false


var x = 'x'
function findName() {
  console.log(x);
  var b = 'b';
  return printName();
}


function printName() {
  console.log(x);
  var c = 'c';
  return 'Andrei Neagoie';
}

function sayMyName() {
  var a = 'a';
  return findName();
}

// sayMyName();

// ----------------

function a() {
  var a = 'a';
  return function b() {
    var b = 'b';
    return function c() {
      var c = 'c';
      console.log(a, b, c);
      return 'Bob Ross';
    }
  }
}

// a() = function b()
// b() = function c()
// c() = Bob Ross

let res = a()()();
console.log(res);
