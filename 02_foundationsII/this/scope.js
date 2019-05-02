'use strict'

const a = function() {
  console.log('a', this);
  const b = function() {
    console.log('b', this)
    const c = {
      hi: function() {
        console.log('c', this);
      }
    }
    c.hi()
  }
  b()
}
// a()


const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this);
    }
    anotherFunc();
  }
}
// obj.sing();


const obj2 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this);
    }
    anotherFunc();
  }
}
// obj2.sing();


const obj3 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this);
    }
    return anotherFunc.bind(this);
  }
}
obj3.sing()();


const obj4 = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var self = this;
    var anotherFunc = () => {
      console.log('b', self);
    }
    anotherFunc()
  }
}
obj4.sing();
