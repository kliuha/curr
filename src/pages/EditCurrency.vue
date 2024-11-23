<template>
<div class="edit-currency">
    <h1>Редагування валюти: {{ currency.cc }}</h1>
    <div class="form-group">
      <label>Назва:</label>
      <input type="text" v-model="currency.txt" />
    </div>
    <div class="form-group">
      <label>Курс:</label>
      <input type="number" v-model="currency.rate" />
    </div>
    <button @click="save" class="save-button">Зберегти</button>
  </div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue'
import {
    useRoute,
    useRouter
} from 'vue-router';
import {
    useCurrencyStore
} from '../store/currencyStore';

const route = useRoute();
const router = useRouter();
const store = useCurrencyStore();

const currency = ref('')

onMounted(() => {
    currency.value = store.currencies.find(
    (c) => c.cc === route.params.cc
) || {
    txt: '',
    rate: 0,
    cc: ''
};
})

const save = () => {
    store.saveCurrency(currency.value);
    router.push('/changed');
};
</script>

<style scoped>
.edit-currency {
  max-width: 500px;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #34495e;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.save-button {
  width: 100%;
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.save-button:hover {
  background-color: #2ecc71;
}
</style>
