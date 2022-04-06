<script setup lang="ts"></script>

<template>
  <header class="shadow-lg bg-dark">
    <div
      class="container d-flex align-items-center flex-column justify-content-between"
    >
      <picture>
        <source src="@/assets/images/pokemon-logo.webp" type="image/webp" />
        <img
          src="@/assets/images/pokemon-logo.png"
          width="390"
          height="147"
          alt="Logo Pokémon"
        />
      </picture>
      <fieldset class="mt-5 text-white">
        <label for="input-search" class="mb-1">Buscar pokemons:</label>
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
        <small class="mt-1">Exemplo: Venusaur</small>
      </fieldset>
    </div>
  </header>
</template>

<style src="./styles.scss" scoped></style>
