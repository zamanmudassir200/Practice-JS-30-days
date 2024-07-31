class BankAccount {
  accountNumber;
  customerName;
  balance;
  constructor(customerName, balance = 0) {
    this.balance = balance;
    this.accountNumber = Date.now();
    this.customerName = customerName;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
const myAcc = new BankAccount("Mudassir z");
console.log(myAcc);
