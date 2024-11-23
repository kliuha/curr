<template>
<div>
    <h1>Змінені курси</h1>
    <CurrencyList :currencies="store.changedCurrencies" />
</div>
</template>

  
<script setup>
import {
    useCurrencyStore
} from '../store/currencyStore';
import CurrencyList from '../components/CurrencyList.vue';

const store = useCurrencyStore();

</script>
