<template>
  <div id="app">
    <header>
      <h1>BlueBird dApp</h1>
    </header>
    <main>
      <LinkTwitter />
      <SendTransaction />
      <TransactionHistory />
      <RewardsDisplay />
    </main>
  </div>
</template>

<script>
import LinkTwitter from './components/LinkTwitter.vue';
import SendTransaction from './components/SendTransaction.vue';
import TransactionHistory from './components/TransactionHistory.vue';
import RewardsDisplay from './components/RewardsDisplay.vue';

export default {
  name: 'App',
  components: {
    LinkTwitter,
    SendTransaction,
    TransactionHistory,
    RewardsDisplay,
  },
};
</script>

<style>
/* Add your global styles here */
</style>
