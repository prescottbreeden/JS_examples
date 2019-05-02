// heap memory exhausted at 100,000,000
//
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return 'Access Granted to Adam';
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return 'Access Granted to Eva';

}

console.log(letAdamLogin());
console.log(letEvaLogin());


// level 2 super saiyan
function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return 'Access Granted to ' + user;
}

console.log(letUserLogin('Bob'));


// improved again
const giveAccessTo = (name) => 
  'Access Granted to ' + name

function userLogin(user) {
  let array = [];
  for (let i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

console.log(userLogin('Elmer Fud'));


// level 3 ... HOF
function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    fn(500000) 
    return giveAccessTo(person.name);
  } else if (person.level === 'user') {
    fn(50000) 
    return giveAccessTo(person.name);
  }
}

let result = letPerson({level: 'user', name: 'Tim'}, authenticate);
console.log('result: ', result);

// ---------- Exercise -------------

// multiplyBy - 1, 2, 10 etc.

const multiplyBy = function(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4));
console.log(multiplyByTwo(10));

const arrowMultiply = (num1) => (num2) => num1 * num2;
const arrowBy2 = arrowMultiply(2);
console.log(arrowBy2(42));

