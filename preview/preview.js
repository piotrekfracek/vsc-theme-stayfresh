import Processor from "processor";

class Main {

  // Special constructor function
  // Variable = w.hite, function = b.lue
  constructor({config, callback}) {
    this.config   = config;
    this.callback = (time) => {
      return time / 1000;
    }
  }

  // ES6 function
  async doSomething(data) {
    const currentVer = await Processor.fetchVersion();
    const {id, time} = data;
    return Processor(currentVer).prepare({
      id:   id,
      time: time,
    });
  }

}
