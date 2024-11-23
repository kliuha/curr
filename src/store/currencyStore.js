import { defineStore } from 'pinia';
import axios from 'axios';

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currencies: [],
    changedCurrencies: [],
  }),
  actions: {
    async fetchCurrencies() {
      const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${ new Date().toISOString().slice(0, 10).replace(
        /-/g,
        ''
      )}&json`;
      const response = await axios.get(url);
      this.currencies = response.data;
    },
    saveCurrency(currency) {
      const index = this.changedCurrencies.findIndex(
        (c) => c.cc === currency.cc
      );
      if (index === -1) {
        this.changedCurrencies.push(currency);
      } else {
        this.changedCurrencies[index] = currency;
      }
    },
  },
});
