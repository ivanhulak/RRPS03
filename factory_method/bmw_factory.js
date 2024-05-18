class BMW {
  constructor(model, price, year) {
    this.model = model;
    this.price = price;
    this.year = year;
  }
}

class BMWFactory{
  create(model){
    if(model === "x5"){
      return new BMW(model, 12000, 2009)
    }
    if(model === "321"){
      return new BMW(model, 15000, 2014)
    }
  }
}

const factory = new BMWFactory()

const bmw_x5 = factory.create("x5")
const bmw_321 = factory.create("321")