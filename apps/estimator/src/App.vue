<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "@/stores/counter";
const { $state, increment, finishedTodos } = useCounterStore();
console.log(increment);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <!-- {{ $state.todos }} -->
  {{ finishedTodos }}
  <button @click="increment">inc</button>

  <RouterView />
</template>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}
</style>
