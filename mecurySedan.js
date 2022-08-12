//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends VehicleModule.Vehicle{ 
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage)
    this.maximumPassengers = 5
    this.passenger = 0
    this.numberOfWheels = 4
    this.maximumSpeed = 160
    this.fuel = 10
    this.scheduleService = false
    }
    loadPassenger(num){
        if(this.passenger<this.maximumPassengers){
            this.availableRoom = true
            console.log(availableRoom)
        }
    }
    start(){
        if(this.fuel>0){
            start == true
        }
    }
    scheduleService(mileage){
        if(mileage>30000){
            this.scheduleService = true
        }
    }
}

