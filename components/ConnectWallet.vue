<template>
  <div class="connect-wallet">
    <button @click="connectWallet" class="connect-wallet-btn">
      Connect Wallet
    </button>
  </div>
</template>

<script>
export default {
  name: 'ConnectWallet',
  methods: {
    connectWallet() {
      // Implement wallet connection logic here.
    },
  },
};
</script>

<style scoped>
.connect-wallet-btn {
  background-color: #1c1c1c;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
