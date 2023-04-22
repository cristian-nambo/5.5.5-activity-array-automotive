
//this includes the vehicle class as a module
//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)
//After you write the derived Car class, you should test it out.
//Note: You can code your derived Car class here or make a file named index.js and do it there.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
//TO DO: Creating Instances and Testing Them
//You can use the same instance "v" of the Vehicle class above for the base class.
//Create at least two new instances of the Car class and test them here:

//Canvas Directions
//Directions
//1. Use the editor of your choice.
//2. Clone the following repository.
//3. The repo contains the file vehicle.js.
//4. Create a Car class that extends the Vehicle class (located in the vehicle.js).
//5. Add a constructor.
//6. Add the super keyword to call the parent class constructor.
//7. Add the properties listed in the Properties chart above.
//8. Add the methods with psuedo logic listed in the Methods chart above.

//Need to extend the class of car with the the following properties as per Canvas
//maximumPassengers 5
//passenger 0
//numberOfWheels 4
//maximumSpeed 160
//fuel 10
//schedule service false

//Need the following methods

//NAME              PARAMETERS      LOGIC

//loadPassenger     num             (blank logic)
//start             no parameters   if fuel is greater then 0, then start equals true
//scheduleService   mileage         if mileage is greater then 3000, time for maintenance equals true

//We will need a class that extends refer to slide 7 in both slide on JS-5
//From looking at VehicleBaseClass we can tell we will need to test if the car can start accelerate 
//decelerate and stop loops within loops. Lets worry about that later. Lowest hanging fruit is a class and a construstor.


const VehicleModule = require("./vehicleBaseClass").Vehicle //Took me a while to figure out I was missing .Vehicle LOL
class Car extends VehicleModule { //Vehicle module because we need to link it to vehicle class, read the top
    constructor (make, model, year, color, milage) {
        super(make, model, year, color, milage); //SUPER is a keyword to access properties on an object literal or class's or invoke a superclass constructor.
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false; //This fulfills the the addition and the use a SUPER word. Copying VBC.JS
    }
    checkService(){ //Only makes sense to check if the car needs a service before it even starts!!!
        if (this.milage > 3000){
            this.scheduleService = false
            return this.scheduleService;
        }
    }

    start(){
        if (this.fuel > 0){
            console.log('engine has started...!!!');
            return this.started = true
        }else{
            console.log('out of fuel');
            return this.started = false;
        }
    }
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <= this.maximumPassengers){
                this.passenger = num;
                return this.passenger;
            }else{
                console.log (this.model + "" + this.make + 'does not have enough space to take all of yall.');
            }
        }else{
            console.log(this.model + '' + this.make + 'this baby is full.');
        }
    }
    
} //Had to cheat here, this part was way to complicated even though Im in class 8. It pulls the number of riders from the our input. but too many loops.

let myCar = new Car('Mercury', 'Sedan', '1965', 'Rosy_Black', '5000')
myCar.checkService()
myCar.start()
myCar.loadPassenger(5)
myCar.stop()

console.log(myCar)