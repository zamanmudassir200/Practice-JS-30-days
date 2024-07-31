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

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;
  constructor(customerName, balance) {
    super(customerName, balance);
  }
  personalLoan(amount) {
    console.log(`Taking personal loan`, amount);
  }
}
const myAcc = new CurrentAccount("Mudassir z");
myAcc.personalLoan(2000);
