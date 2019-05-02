// new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Xavier', 55);
console.log(person1);

// implicit binding
const person2 = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name);
  }
}

// explicity binding
const person3 = {
  name: 'Bob Ross',
  age: 42,
  paint: function() {
    console.log('And now we have a house' + this.setTimeout);
  }.bind(global)
}

// person3.paint();

// arrow function
const person4 = {
  name: 'Bob Ross',
  age: 42,
  paint: function() {
    var inner = () => {
      console.log('And now we have a house with ' + this.name);
    }
    return inner();
  }
}

person4.paint();
