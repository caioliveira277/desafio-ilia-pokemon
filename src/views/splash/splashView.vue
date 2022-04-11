<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleClick(): void {
  router.push({
    name: "initial",
  });
}
</script>

<template>
  <main class="p-3">
    <div
      class="container align-items-center d-flex flex-column justify-content-center h-100"
    >
      <img
        src="@/assets/icons/hover-symbol.svg"
        alt="Icone de representação do cartão"
        class="mb-5"
      />
      <h1 class="text-white fw-bold">
        Olá, para interagir com os cards é necessário passar o cursor do mouse
        ou clicar
      </h1>
      <button type="button" @click="handleClick" class="btn btn-light mt-5">
        Ok!
      </button>
    </div>
  </main>
</template>

<style src="./styles.scss" scoped></style>
