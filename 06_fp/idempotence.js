// Idemportence:
function notGood(num) {
  return Math.random(num);
}

notGood(5);
// idempotence: function always returns same result

Math.abs(Math.abs(-50)); // no matter how many times called it will return same
