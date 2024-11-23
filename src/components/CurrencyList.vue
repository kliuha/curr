<template>
  <div>
    <ul class="currency-list">
      <li v-for="currency in paginatedCurrencies" :key="currency.r030" class="currency-item">
        <span class="currency-name">{{ currency.txt }} ({{ currency.cc }}) :</span>
        <span class="currency-rate">{{ currency.rate }}</span>
        <button @click="editCurrency(currency.cc)" class="edit-button">Редагувати</button>
      </li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">Назад</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">Вперед</button>
    </div>
  </div>
</template>

  
<script setup>
import {
    ref,
    computed
} from 'vue';
import {
    useRouter
} from 'vue-router';

const props = defineProps(['currencies']);
const currentPage = ref(1);
const itemsPerPage = 10;

const paginatedCurrencies = computed(() =>
    props.currencies.slice(
        (currentPage.value - 1) * itemsPerPage,
        currentPage.value * itemsPerPage
    )
);

const totalPages = computed(() =>
    Math.ceil(props.currencies.length / itemsPerPage)
);

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const router = useRouter();
const editCurrency = (cc) => {
    router.push(`/edit/${cc}`);
};
</script>

<style scoped>
.currency-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.currency-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.currency-name {
  width: 40%;
  font-weight: bold;
}

.currency-rate {
  color: #2ecc71;
}

.edit-button {
  width: 15%;
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #2980b9;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.pagination-button:hover:not(:disabled) {
  background-color: #27ae60;
}
</style>
