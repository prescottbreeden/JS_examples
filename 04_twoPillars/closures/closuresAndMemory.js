// Benefits of Closures:
// Memory efficient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill('^-^');
  console.log('created!');
  return bigArray[index];
}

console.log(heavyDuty(588));
console.log(heavyDuty(588));
console.log(heavyDuty(588));
const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

function heavyDuty2() {
  const bigArray = new Array(7000).fill('^-^');
  console.log('created again!');
  return function(index) {
    return bigArray[index];
  }
}


// Encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return 'Prescott is dancing, run for the hills!';
  }
  setInterval(passTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}
// const ohNos = makeNuclearButton();


// --- Exercise --- //

let view;
function getView() {
  const initialize = () => {
    view = 'go-djus';
    console.log('view has been set!');
  }
  initialize();
  return { view };
}

let viewEngine = getView();
console.log(viewEngine.view);
console.log(viewEngine.view);
console.log(viewEngine.view);


// const array = [1, 2, 3, 42];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function() {
//     console.log('I am at ' + array[closureVar]);
//   }, 3000);
// }

const array = [1, 2, 3, 42];
for (var i = 0; i < array.length; i++) {
  (function(closureVar) {
    setTimeout(function() {
      console.log('I am at ' + array[closureVar]);
    }, 3000);
  })(i)
}

