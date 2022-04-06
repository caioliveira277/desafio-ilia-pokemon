<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header shadow-lg bg-dark py-3">
    <div
      class="container d-flex align-items-center flex-column justify-content-between"
    >
      <RouterLink to="/">
        <picture>
          <source src="@/assets/images/pokemon-logo.webp" type="image/webp" />
          <img
            src="@/assets/images/pokemon-logo.png"
            width="390"
            height="147"
            alt="Logo Pokémon"
            class="w-100 h-100"
          />
        </picture>
      </RouterLink>
      <fieldset class="mt-5 text-white">
        <h1 for="input-search" class="mb-1 h4">Buscar pokémons:</h1>
        <div class="input-group">
          <div class="input-group-text bg-white">
            <img src="@/assets/images/search.svg" alt="Icone de busca" />
          </div>
          <input
            id="input-search"
            type="text"
            autofocus
            class="form-control"
            placeholder="Encontre pelo nome"
          />
        </div>
        <small class="mt-1"
          >Exemplo: Venusaur, Ampharos, Bulbasaur, Caterpie, Dratini ...</small
        >
      </fieldset>
    </div>
  </header>
</template>

<style src="./styles.scss" scoped></style>
