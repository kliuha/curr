<template>
<div id="app">
    <nav>
        <router-link to="/" class="nav-link">Головна</router-link> |
        <router-link to="/changed" class="nav-link">Змінені курси</router-link> |
        <router-link to="/search" class="nav-link">Пошук курсу</router-link>
    </nav>
    <router-view />
</div>
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fa;
  min-height: 100vh;
  color: #333;
}

nav {
  background-color: #4CAF50;
  padding: 1rem;
  text-align: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-weight: bold;
  margin: 0 15px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #45a049;
}
</style>
