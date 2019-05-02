// all languages have type coercion because eventually it is all 0s 1s

1 == '1';   // true -- really no reason to use, ever (foot gun)
1 === '1';  // false

if (0) {
  console.log(false);
}

if (1) {
  console.log(true);
}


NaN === NaN;

