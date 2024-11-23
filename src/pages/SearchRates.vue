<template>
<div>
    <h1>Пошук курсу валют</h1>
    <input v-model="searchCurr" @change="fetchCurrencies" />
    <CurrencyList :currencies="currencies" />
</div>
</template>

  
<script setup>

import {
    ref,
    computed
} from 'vue';
import {
    useCurrencyStore
} from '../store/currencyStore';
import CurrencyList from '../components/CurrencyList.vue';

const store = useCurrencyStore();

const searchCurr = ref('');

const currencies = computed(() => {
    return store?.currencies?.filter(curr => curr.txt.toLowerCase().includes(searchCurr.value.toLowerCase()))
})

const fetchCurrencies = () => store.fetchCurrencies();
</script>
