<template>
  <div class="transaction-history">
    <h2>Transaction History</h2>
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Amount (SGB)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(transaction, index) in transactions" :key="index">
          <td>{{ transaction.timestamp }}</td>
          <td>{{ transaction.sender }}</td>
          <td>{{ transaction.recipient }}</td>
          <td>{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TransactionHistory',
  data() {
    return {
      transactions: [
        // Placeholder data, replace with the actual transaction history from the smart contract.
        {
          timestamp: '2023-04-22 12:34:56',
          sender: '@alice',
          recipient: '@bob',
          amount: '100',
        },
        {
          timestamp: '2023-04-22 13:14:32',
          sender: '@bob',
          recipient: '@charlie',
          amount: '50',
        },
      ],
    };
  },
  // Implement the logic to fetch the transaction history from the smart contract.
};
</script>

<style scoped>
.transaction-history {
  margin: 2rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

th {
  background-color: #1c1c1c;
  color: #ffffff;
}
</style>
