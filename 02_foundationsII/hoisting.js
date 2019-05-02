console.log('1-------');

console.log('teddy = ', teddy);
sing();

var teddy = 'bear';

(function sing() {
  console.log("I'm a ninja");
})();

// function declaration
function sing() {
  console.log('sing() function executed')
}

// function expression
var sing2 = function() {
  console.log('sing2() function executed');
}
sing2();
