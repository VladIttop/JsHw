// Завдання 5

// Напиши клас Car із зазначеними властивостями і методами.

class Car {
    static getSpecs(car) {
      return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
    }
  
    constructor(params) {
      this.speed = 0;
      this.price = params.price;
      this.maxSpeed = params.maxSpeed;
      this.isOn = false;
      this.distance = 0;
    }
  
    get carPrice() {
      return this.price;
    }
  
    set carPrice(value) {
      this.price = value;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.maxSpeed >= value) {
        this.speed = value;
      }
    }
  
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  console.log(Car.getSpecs(mustang));
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  console.log(Car.getSpecs(mustang));
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.carPrice); // 2000
  mustang.carPrice = 4000;
  console.log(mustang.carPrice); // 4000
