import { createRouter, createWebHistory } from 'vue-router';
import LinkTwitterView from './views/LinkTwitterView.vue';
import SendTransactionView from './views/SendTransactionView.vue';
import TransactionHistoryView from './views/TransactionHistoryView.vue';
import RewardsDisplayView from './views/RewardsDisplayView.vue';

const routes = [
  { path: '/link-twitter', component: LinkTwitterView },
  { path: '/send-transaction', component: SendTransactionView },
  { path: '/transaction-history', component: TransactionHistoryView },
  { path: '/rewards-display', component: RewardsDisplayView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
