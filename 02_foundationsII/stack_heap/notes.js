// call stack + memory heap
const number = 610; // allocate memory for number
const string = 'some text' // allocate memory for a string
const human = { // allocate memory for an object... and it's values
  first: 'Bob',
  last: 'Ross'
}

function subtractTwo(num) {
  return num - 2;
}
function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate(); // adds to callstack


// Stack overflow
function inception() {
  inception()
}

inception();

// Memory Leak

//Global variable;
var a = 1;
var b = 1;
var c = 1;

// Event listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick);

// setInteral
setInterval(() => {
  // referencing objects...
})

// Soundcloud example of memory leak



