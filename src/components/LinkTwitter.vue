<template>
  <div class="link-twitter">
    <h2>Link Your Twitter Handle</h2>
    <form @submit.prevent="linkTwitter">
      <div class="form-group">
        <label for="twitter-handle">Twitter Handle:</label>
        <input
          type="text"
          id="twitter-handle"
          v-model="twitterHandle"
          placeholder="Enter your Twitter handle"
        />
      </div>
      <button type="submit" class="link-twitter-btn">Link Twitter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LinkTwitter',
  data() {
    return {
      twitterHandle: '',
    };
  },
  methods: {
    linkTwitter() {
      // Implement the logic to link the Twitter handle to the user's wallet address.
      console.log('Linking Twitter handle:', this.twitterHandle);
    },
  },
};
</script>

<style scoped>
.link-twitter {
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

.link-twitter-btn {
  background-color: #1c1c1c;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
