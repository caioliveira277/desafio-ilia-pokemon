<script setup lang="ts">
import { useStore } from "@/context/store";

const store = useStore();
const currentPokemon = store.state.currentPokemon;

console.log(store);
</script>

<template>
  <main class="container py-5 justify-content-center align-items-center d-flex">
    <div class="flip-container">
      <div class="flipper position-relative">
        <div class="front">
          <img
            :src="currentPokemon.images.large"
            :alt="`Imagem do pokemon ${currentPokemon.name}`"
          />
        </div>
        <div class="back p-3 position-absolute top-0 w-100 h-100"></div>
      </div>
    </div>
  </main>
</template>

<style src="./styles.scss" scoped></style>
