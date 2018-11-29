var EventEmitter = require("events");

class Gym extends EventEmitter {
  constructor() {
    super();
    this.message1 = "Athlete is working out!!!";
    this.message2 = "Athlete stopped working out!!!";
  }
  printIsWorking() {
    console.log(this.message1);
  }
  printIsStoppedWorking() {
    console.log(this.message2);
  }
}
var gymMan = new Gym();
gymMan.on("go", gymMan.printIsWorking);
gymMan.on("stop", gymMan.printIsStoppedWorking);
gymMan.emit("go");
gymMan.emit("stop");
