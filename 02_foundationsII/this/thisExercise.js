var a = {
  name: 'Elmer Fud',
  say() { 
    console.log(this);
  }
}

var b = {
  name: 'Bugs Bunny',
  say() { 
    return function() { 
      console.log(this);
    } 
  }
}

var c = {
  name: 'Foghorn Legohorn',
  say() { 
    return () => console.log(this);
  }
}

// a.say()
// b.say()()
// c.say()()


const character = {
  name: "Snuffulufugus",
  getCharacter() {
    return this.name;
  }
};

// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
const giveMeTheCharacterNOW = character.getCharacter;
global.name = 'These are not the droids you\'re looking for';

console.log('?', giveMeTheCharacterNOW());
