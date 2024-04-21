class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.round((this.max - this.min) / 2 + this.min);
        return this.number
    }

    lower() {
        this.max = this.number;
        this.guess();
    }

    greater() {
      this.min = this.number;
      this.guess();
    }
  }

module.exports = GuessingGame;
