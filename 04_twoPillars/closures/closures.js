function a() {
  let grandma = 'grandma';
  return function b() {
    let mother = 'mother';
    let random = 7487632344; // garbage collection
    return function c() {
      let daughter = 'daughter';
      return `${grandma} --> ${mother} --> ${daughter}`;
    }
  }
}

console.log(a());
console.log(a()());
console.log(a()()());

function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`${string} ${name} ${name2}`)
    }
  }
}

const boowho = string => name => name2 => 
  console.log(`${string} ${name} ${name2}`);

boowho('hi')('tim')('becca');


// ---- Exercise ---- //

function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi! I am now here!';
}

callMeMaybe();
