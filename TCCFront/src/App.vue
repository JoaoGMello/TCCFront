<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">

    <RouterView />
  </div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  .app{
    height: 100%;
    width: 100%;
  }
</style>