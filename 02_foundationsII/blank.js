class App {
  constructor() {
    this.name = 'bob';
    this.bob();
  }

  bob() {
    console.log('I am ' + this.name);
  }
}

let dick = new App();
