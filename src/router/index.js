import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ChangedRates from '../pages/ChangedRates.vue';
import SearchRates from '../pages/SearchRates.vue';
import EditCurrency from '../pages/EditCurrency.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/changed', component: ChangedRates },
  { path: '/search', component: SearchRates },
  { path: '/edit/:cc', component: EditCurrency },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
