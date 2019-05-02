// no side effects -- does the function modify anything outside of itself?
// input --> output -- referential transparency

// side effect example
const array = [1, 2, 3];
function mutateArray1(arr) {
  arr.pop()
}
mutateArray1(array);  // undefined
console.log(array);   // array is modified

function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(1);
  })
}
mutateArray2(array);
console.log(array);


// ------------  //

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map(item => item * 2);
}
console.log(multiplyBy2(array));
