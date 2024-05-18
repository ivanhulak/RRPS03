class News {
  constructor() {
    this.news = "";
    this.subscribers = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    this.subscribers.forEach((subscriber) => subscriber.inform(this));
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => !(subscriber instanceof observer)
    );
  }
}

class Ivan {
  inform(message) {
    console.log(`Ivan has been informed about: ${message.news}`);
  }
}
class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}

const news = new News();

news.subscribe(new Ivan());
news.subscribe(new Jack());

news.setNews("Apple starts doing chips for ...");
