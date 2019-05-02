// this is the object that the function is a property of

// object.someFunction(this)

//1: gives methods access to their object
//2: execute same code for multiple objects

const obj = {
  name: 'Veronica',
  singAgain: function() {
   return this.sing() + '!';
  },
  sing() {
    return 'lalalala ' + this.name;
  }
}
console.log(obj.singAgain());