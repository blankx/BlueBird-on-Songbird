<template>
  <div class="send-transaction">
    <h2>Send Transaction</h2>
    <form @submit.prevent="sendTransaction">
      <div class="form-group">
        <label for="recipient-handle">Recipient Twitter Handle:</label>
        <input
          type="text"
          id="recipient-handle"
          v-model="recipientHandle"
          placeholder="Enter the recipient's Twitter handle"
        />
      </div>
      <div class="form-group">
        <label for="amount">Amount (SGB):</label>
        <input
          type="number"
          id="amount"
          v-model="amount"
          placeholder="Enter the amount of SGB to send"
          step="0.01"
          min="0"
        />
      </div>
      <button type="submit" class="send-transaction-btn">Send Transaction</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SendTransaction',
  data() {
    return {
      recipientHandle: '',
      amount: '',
    };
  },
  methods: {
    sendTransaction() {
      // Implement the logic to send a transaction to the recipient's wallet address using their Twitter handle.
      console.log('Sending transaction:', this.recipientHandle, this.amount);
    },
  },
};
</script>

<style scoped>
.send-transaction {
  margin: 2rem 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
}

.send-transaction-btn {
  background-color: #1c1c1c;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
