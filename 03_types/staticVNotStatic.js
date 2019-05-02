var a = 42;

// versus

int a;
a = 42;


// pros
// code is self documenting
//    -- has fewer bugs in production

// cons
// extra layer of complexity 
//    -- longer training
// slower development process 
//    -- debugging is less about logic and more about syntax
function sum(a: number, b: number) {
  return a + b;
}

sum('hello', null); // immediate error
