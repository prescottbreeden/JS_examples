var a = 5; // has an address 
var b = a; // copied value because primitive

b++;

console.log(a)
console.log(b)



let obj1 = {name:'Yao', password:'12345'};
let obj2 = obj1;

obj2.password = 'easypeasy';


console.log(obj1);
console.log(obj2);

// think about benefits in memory
// also means its easy to mutate
// --> relate to OOP principles



var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
var e = [...c];

d.push(42);
e.push(4242);


console.log(d);
console.log(c);
console.log(e);



let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};

let shallowCopy = {...obj};
let deepCopy = JSON.parse(JSON.stringify(obj));
shallowCopy.c.deep = 'hahahaha';


console.log(obj);
console.log(shallowCopy);
console.log(deepCopy);

// performance costs of deep copy
// --> avoid building god object anti-patterns


//----- exercise ------//

var user1 = {name:'nerd', org:'dev'};
var user2 = {name:'nerd', org:'dev'};
var eq = user1 == user2;
console.log(eq);


let eq2 = true;
for (let key in user1) {
  if (user1[key] != user2[key]) eq2 = false;
}
console.log(eq2);

let eq3 = JSON.stringify(user1) === JSON.stringify(user2);
console.log(eq3);
// order matters for eq3 method:
// obj1 = {a:1, b:2}
// obj2 = {b:2, a:1}
