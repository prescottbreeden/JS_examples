function one() {
  return 1;
}

const obj = {
  twoA: function() {
    return 2;
  },
  twoB() {
    return 2;
  }
}
obj.twoA();
obj.twoB();

function  three() {
  return 3;
}
three.call();

const four = new Function('return 4');
console.log(four());


function woohooo() {
  console.log('woohoooo');
}

woohooo.yell = 'ahhhhh';

// under the hood: 
// const specialObj = {
//   yell: 'ahhhhhh',
//   name: 'woohoooo',
//   (): console.log('woohoooo');
// }



