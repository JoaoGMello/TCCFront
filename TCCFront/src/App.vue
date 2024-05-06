<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="router">

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
  background-color: white;
}
</style>