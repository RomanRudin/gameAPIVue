<script setup>
  import Header from "./components/Header.vue";
  import {RouterView} from "vue-router";
</script>

<template>
  <div class="app"> 
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.app{
  background-color:darkslategrey;
  min-height: 100vh;
  width: 100%;
}
</style>
// Сайт с цветами: https://access.mymind.com/colors