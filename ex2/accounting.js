module.exports = class Account {
  constructor(name) {
    this.name = name;
  }
  balance = 0
  credit(amount) {
    this.balance += amount;
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}
