//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.
class Car extends Vehicle {
  constructor(
    maximumPassengers,
    passengers,
    numberOfWheels,
    maximumSpeed,
    fuel,
    scheduleService
  ) {
    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    super();
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger += num;
        console.log(`Loaded ${num} passengers. Total passengers: ${this.passenger}`);
      } else {
        console.log(this.model + " " + this.make + " does not have enough passenger room")
      }
    } else {
        console.log(this.model + " " this.make + " is full");
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("starting engine");
      return (this.started = true);
    } else {
      console.log("fuel is empty");
      return (this.started = false);
    }
  }
  scheduleService() {
    if (this.mileage > 3000) {
      timeForMaintenance = true;
      return this.scheduleService;
    }
  }
}

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
