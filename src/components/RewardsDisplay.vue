<template>
  <div class="rewards-display">
    <h2>Rewards</h2>
    <div class="rewards-info">
      <div>
        <h3>BRD Balance</h3>
        <p>{{ brdBalance }}</p>
      </div>
      <div>
        <h3>Total Rewards Earned</h3>
        <p>{{ totalRewardsEarned }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RewardsDisplay',
  data() {
    return {
      brdBalance: '0', // Replace with the actual BRD balance fetched from the smart contract.
      totalRewardsEarned: '0', // Replace with the actual total rewards earned fetched from the smart contract.
    };
  },
  // Implement the logic to fetch the BRD balance and total rewards earned from the smart contract.
};
</script>

<style scoped>
.rewards-display {
  margin: 2rem 0;
}

.rewards-info {
  display: flex;
  gap: 2rem;
}

h3 {
  margin-bottom: 0.5rem;
}
</style>
