class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
        this.fuel = 100;
    }

////////Old Code, dies not stop the car///////


//     start() {
//         if (this.fuel > 0) {
//             return this.started = true;
//             console.log("engine started...!!!");
//         } else {
//             return this.started = false;
//             console.log("engine cannot start...");
//         }
//     } 

////////////////////////////////////We can refactor the above code insode of the accelerate and decelerate function as an IF statement//////////////////////////

//     accelerate() {
//         if (this.started) {
//             if (this.fuel > 0) {
//                 console.log(this.speed += 1);
//                 this.fuel = this.fuel - 1;
//             } else {
//                 console.log("out of fuel.");
//                 this.stop();
//             }
//         } else {
//             alert("You need to start the engine first.");
//         }
//     }
//     decelerate() {
//         if (this.started) {
//             if (this.fuel > 0) {
//                 if (this.speed > 0) {
//                     console.log(this.speed -= 1);
//                     this.fuel = this.fuel - 1;
//                 } else {
//                     console.log(this + " has stopped moving");
//                     this.fuel = this.fuel - 1;
//                 }
//             } else {
//                 console.log("out of fuel.");
//                 this.stop();
//             }
//         } else {
//             alert("You need to start the engine first.");
//         }
//     }
//     stop() {
//         this.started = false;
//     }

//     drive() {
//         accelerate();
//     }
//     brake() {
//         decelerate();
//     }

//     autoPark()
//     {

//     }

//     autoDrive()
//     {
      
//     }

//     typeOfVehicle(wheels) {
//         if (this.numberOfWheels == 8 && 8 == wheels) {
//             console.log(this.model + " " + this.make + " is a Truck");
//         } else if (this.numberOfWheels == 4 && 4 == wheels) {
//             console.log(this.model + " " + this.make + " is a CAr");
//         } else if (this.numberOfWheels == 2 && 2 == wheels) {
//             console.log(this.model + " " + this.make + " is a Bike");
//         } else {
//             console.log("Unknown type of vehicle");
//         }
//     }
// }

/////////////////////////New Code starts drives and stops the car///////////////////////////////////////////

accelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            console.log(this.speed += 1);
            this.fuel = this.fuel - 1;
        } else {
            console.log("out of fuel0.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}

decelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            if (this.speed > 0) {
                console.log(this.speed -= 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log(this + " has stopped moving");
                this.fuel = this.fuel - 1;
            }
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}

stop() {
    console.log('engine off')
    this.started = false;
}

typeOfVehicle() {
    if (this.numberOfWheels == 8) {
        console.log(this.model + " " + this.make + " is a Truck");
    } else if (this.numberOfWheels == 4) {
        console.log(this.model + " " + this.make + " is a Car");
    } else if (this.numberOfWheels == 2) {
        console.log(this.model + " " + this.make + " is a Bike");
    } else {
        console.log("Unknown type of vehicle");
    }
}
}


//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle
}
