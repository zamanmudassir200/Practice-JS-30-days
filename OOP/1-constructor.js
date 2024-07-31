function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    this.balance -= amount;
  };
}

const mudassirAcc = new BankAccount("Mudassir Z", 2000);
console.log(mudassirAcc);
mudassirAcc.deposit(100);
console.log(mudassirAcc);
