<script setup lang="ts">
import { useStore } from "@/context/store";

const store = useStore();
const currentPokemon = store.state.currentPokemon;

console.log(store);
</script>

<template>
  <main class="container py-5 justify-content-center align-items-center d-flex">
    <img
      :src="currentPokemon.images.large"
      :alt="`Imagem do pokemon ${currentPokemon.name}`"
    />
  </main>
</template>

<style src="./styles.scss" scoped></style>
