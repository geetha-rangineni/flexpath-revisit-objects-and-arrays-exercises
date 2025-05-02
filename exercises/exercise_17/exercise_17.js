// Step 1: BankAccount constructor function
function BankAccount(initialBalance) {
    // Private variable to hold the balance
    let balance = initialBalance;
  
    // Deposit method to add money to the account
    this.deposit = function(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    };
  
    // Withdraw method to remove money from the account
    this.withdraw = function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${balance}`);
      } else if (amount > balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Withdrawal amount must be positive.");
      }
    };
  
    // Method to check the current balance (without modifying it directly)
    this.getBalance = function() {
      return balance;
    };
  }
  
  // Step 2: Create a new bank account with an initial balance
  const account = new BankAccount(1000);
  
  // Step 3: Test the methods
  account.deposit(500);      // Deposited: $500. New balance: $1500
  account.withdraw(200);     // Withdrew: $200. New balance: $1300
  console.log(account.getBalance());  // 1300
  
  // Attempt to access balance directly (this will fail)
  console.log(account.balance);  // undefined
  
  // Attempt to modify the balance directly (this will fail)
  account.balance = 5000;   // Does nothing
  console.log(account.getBalance());  // 1300

  
  /* By using closures, we encapsulated the balance inside the BankAccount constructor function, making it private.
     Methods like deposit, withdraw, and getBalance are the only ways to interact with the balance, ensuring controlled access.
     This approach prevents the direct modification or access of the balance property from outside the constructor.*/