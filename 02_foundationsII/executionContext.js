function printName() {
  return 'Bugs Bunny';
}

function findName() {
  return printName()
}

function sayMyName() {
  return findName()
}

sayMyName();

/* 
  Global Execution Context
    - Global Object
    - this ( === window/global)
*/