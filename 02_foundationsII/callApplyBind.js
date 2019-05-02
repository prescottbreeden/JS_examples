function a() {
  console.log('hi');
}

a.call()
a.apply()
a()


const wizard = {
  name: 'Merlin',
  health: 50,
  heal(...nums) {
    nums.forEach(num => {
      this.health += num;
    })
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30
}

// console.log(wizard.heal());
console.log(archer);
wizard.heal.call(archer, 50, 30);
console.log(archer);

const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();
console.log(archer);

const array = [1, 2, 3];
function getMaxNumber(arr) {
  let max = arr[0];
  array.forEach(num => { 
    if (num > max) max = num 
  })
  return max
}

function getMaxNumber2(arr) {
  return Math.max.apply(null, arr);
}

function getMaxNumber3(arr) {
  return Math.max(...arr);
}

console.log(getMaxNumber(array));
console.log(getMaxNumber2(array));
console.log(getMaxNumber3(array));
