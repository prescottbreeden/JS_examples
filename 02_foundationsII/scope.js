// function scope (var)

// vs

// block scope (let and const)

if (5 > 4) {
  var secret = '12345';
  // let secret = '12345';
}

console.log(secret);

// ----------------

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i);
}

function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i); // still in memory but not allowed to be accessed
}

loop();
