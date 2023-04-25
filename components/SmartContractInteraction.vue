<template>
  <div>
    <h2>Send Tokens via Twitter Handle</h2>
    <div>
      <label for="recipient-handle">Recipient's Twitter Handle: </label>
      <input type="text" id="recipient-handle" ref="recipientTwitterHandle" />
    </div>
    <div>
      <label for="amount">Amount of Tokens: </label>
      <input type="text" id="amount" ref="amount" />
    </div>
    <div>
      <button @click="sendTokens">Send Tokens</button>
    </div>
    <div v-if="statusMessage">
      <p>{{ statusMessage }}</p>
    </div>
  </div>
</template>
<script>
import Web3 from 'web3'
import BlueBirdToken from '../contracts/BlueBirdToken.json'
import Tokenomics from '../contracts/Tokenomics.json'
import TwitterHandleRegistry from '../contracts/TwitterHandleRegistry.json'
import WalletConnectProvider from "@walletconnect/web3-provider";

export default {
	data() {
		return {
			web3: null,
			tokenContract: null,
			totalSupply: 0,
			contractAddress: '0x...',
			decimals: 18,
			symbol: '...',
			name: '...',
			recipientAddress: '',
			amountToSend: '',
			transactionInProgress: false,
			transactionSuccess: false,
			transactionError: '',
		};
	},
	created() {
		this.loadBlockchainData();
	},
	methods: {
		async loadBlockchainData() {
			const provider = new Web3.providers.HttpProvider(process.env.VUE_APP_PROVIDER_URI);
			this.web3 = new Web3(provider);
			
			this.tokenContract = new this.web3.eth.Contract(Tokenomics.abi, this.contractAddress);
			this.symbol = await this.tokenContract.methods.symbol().call();
			this.name = await this.tokenContract.methods.name().call();
			this.decimals = await this.tokenContract.methods.decimals().call();
			this.totalSupply = await this.tokenContract.methods.totalSupply().call();
		},
		async sendTokens() {
			try {
				this.transactionInProgress = true;
				const amountToSendInWei = this.web3.utils.toWei(this.amountToSend, 'ether');
				const tx = await this.tokenContract.methods.transfer(this.recipientAddress, amountToSendInWei).send({ from: this.account });
				this.receipt = tx;
				this.transactionSuccess = true;
				this.transactionInProgress = false;
			} catch (error) {
				this.transactionError = error.message;
				this.transactionInProgress = false;
			}
		},
	},
};
</script>

<style scoped>
/* Add your component styles here */
</style>
