class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  incrementCount() {
    return this.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.incrementCount();
myCount1.incrementCount();

myCount2.incrementCount();
myCount2.incrementCount();

// without singleton we will have two different instances
// and have count = 2 for myCount1
// and have count = 2 for myCount2

console.log(myCount1.getCount()); // 4
console.log(myCount2.getCount()); // 4
