<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const isMoreDetailRoute = (): boolean => route.name === "moreDetails";
</script>

<template>
  <header class="header shadow-lg bg-dark py-3">
    <nav class="container" v-if="isMoreDetailRoute()">
      <RouterLink :to="{ name: 'initial' }" class="text-white fw-bold">
        <img
          src="@/assets/icons/arrow-left.svg"
          width="20"
          height="20"
          alt="Icone para retornar a tela anterior"
        />
        <span class="ms-2">Voltar</span>
      </RouterLink>
    </nav>
    <div
      class="container d-flex align-items-center flex-column justify-content-between"
    >
      <RouterLink :to="{ name: 'initial' }">
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
      <fieldset v-if="!isMoreDetailRoute()" class="mt-5 text-white">
        <h1 for="input-search" class="mb-1 h4">Buscar pokémons:</h1>
        <div class="input-group">
          <div class="input-group-text bg-white">
            <img src="@/assets/icons/search.svg" alt="Icone de busca" />
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
