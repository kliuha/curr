<template>
<div>
    <h1>Курси валют НБУ</h1>
    <CurrencyList :currencies="currencies" />
</div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue'
import {
    useCurrencyStore
} from '../store/currencyStore';
import CurrencyList from '../components/CurrencyList.vue';

const store = useCurrencyStore();

const currencies = ref([])

onMounted(async () => {
    await store.fetchCurrencies();
    currencies.value = store.currencies;
})
</script>

<style scoped>
h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-top: 20px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
