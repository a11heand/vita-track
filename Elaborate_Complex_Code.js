/**
 * Filename: Elaborate_Complex_Code.js
 * 
 * Description: This code demonstrates a complex and sophisticated implementation that combines various advanced concepts in JavaScript.
 * It simulates a virtual banking system with multiple accounts, transactions, and user authentication.
 */

/*****************************************************/
/****************** Data Structures ******************/
/*****************************************************/

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`Deposited $${amount}`);
    console.log(`Deposited $${amount} to account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(`Withdrew $${amount}`);
      console.log(`Withdrew $${amount} from account ${this.accountNumber}`);
    } else {
      console.log("Insufficient balance!");
    }
  }

  getAccountStatement() {
    console.log(`Account Statement for ${this.accountHolderName} (Account ${this.accountNumber}):`);
    console.log(`Balance: $${this.balance}`);
    console.log("Recent Transactions:");
    this.transactions.forEach((transaction) => console.log(transaction));
  }
}

// Class representing the banking system
class BankingSystem {
  constructor() {
    this.accounts = {};
  }

  createAccount(accountNumber, accountHolderName) {
    if (!this.accounts[accountNumber]) {
      this.accounts[accountNumber] = new BankAccount(accountNumber, accountHolderName);
      console.log(`Created account ${accountNumber} for ${accountHolderName}`);
    } else {
      console.log(`Account ${accountNumber} already exists!`);
    }
  }

  deleteAccount(accountNumber) {
    if (this.accounts[accountNumber]) {
      delete this.accounts[accountNumber];
      console.log(`Deleted account ${accountNumber}`);
    } else {
      console.log(`Account ${accountNumber} not found!`);
    }
  }

  authenticate(accountNumber, accountHolderName) {
    if (this.accounts[accountNumber]?.accountHolderName === accountHolderName) {
      console.log(`User ${accountHolderName} authenticated successfully!`);
    } else {
      console.log("Authentication failed!");
    }
  }
}

/*****************************************************/
/****************** Usage Example ********************/
/*****************************************************/

// Create an instance of the banking system
const bankingSystem = new BankingSystem();

// Create some accounts
bankingSystem.createAccount(123, "John Doe");
bankingSystem.createAccount(456, "Jane Smith");
bankingSystem.createAccount(789, "Alice Johnson");

// Authenticate a user
bankingSystem.authenticate(123, "John Doe");

// Deposit and withdraw funds
bankingSystem.accounts[123].deposit(500);
bankingSystem.accounts[123].withdraw(200);

// Get account statement
bankingSystem.accounts[123].getAccountStatement();

// Delete an account
bankingSystem.deleteAccount(456);

// Attempt to authenticate with deleted account
bankingSystem.authenticate(456, "Jane Smith");

/*****************************************************/

// ... Continue with additional application logic, transaction handling, etc.
// ... The code above merely illustrates a high-level structure and functionality.

/*****************************************************/
/******************* Extra Code **********************/
/*****************************************************/

// ... More code can be added here to further extend the banking system
// ... Implement additional features such as interest calculations, loans, etc.

/*****************************************************/

// End of code
