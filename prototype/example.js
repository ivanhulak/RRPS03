class TeslaCar {
  constructor(model, price, modification, autopilot) {
    this.model = model;
    this.price = price;
    this.modification = modification;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(
      this.model,
      this.price,
      this.modification,
      this.autopilot
    );
  }
}
// produce base auto
const prototypeCar = new TeslaCar("S", 20000, "base", false);

// cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// make changes for particular item
car1.autopilot = true;
car1.modification = "premium";

// results
console.log(car1);
console.log(car2);
console.log(car3);