<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { reactive } from "vue";

const route = useRoute();
const router = useRouter();
const isMoreDetailRoute = (): boolean => route.name === "moreDetails";

const localState = reactive({
  inputSeach: route.query.busca || "",
});

function handleSubmit() {
  router.push({
    name: "initial",
    query: {
      busca: localState.inputSeach,
    },
  });
}
</script>

<template>
  <header class="header shadow-lg bg-dark py-3">
    <nav class="container" v-if="isMoreDetailRoute()">
      <RouterLink
        :to="{ name: 'initial', query: {} }"
        class="text-white fw-bold"
      >
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
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <div class="input-group-text bg-white">
              <img src="@/assets/icons/pokeball.svg" alt="Icone de busca" />
            </div>
            <input
              v-model="localState.inputSeach"
              id="input-search"
              type="text"
              autofocus
              class="form-control"
              placeholder="Encontre pelo nome"
            />
            <button class="btn btn-primary">Buscar</button>
          </div>
          <small class="mt-1"
            >Exemplo: Venusaur, Gengar, Bulbasaur, Caterpie, Dratini ...</small
          >
        </form>
      </fieldset>
    </div>
  </header>
</template>

<style src="./styles.scss" scoped></style>
