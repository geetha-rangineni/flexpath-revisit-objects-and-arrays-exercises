const transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 80 },
  ];
  
  const result = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.balance += transaction.amount;
        acc.deposits.push(transaction.amount);
      } else if (transaction.type === "withdrawal") {
        acc.balance -= transaction.amount;
        acc.withdrawals.push(transaction.amount);
      }
      return acc;
    },
    { balance: 0, deposits: [], withdrawals: [] } // Initial accumulator
  );
  
  console.log(result);
  