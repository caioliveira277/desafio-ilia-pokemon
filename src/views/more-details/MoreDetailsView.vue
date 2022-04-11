<script setup lang="ts">
import { useStore } from "@/context/store";

const store = useStore();
const currentPokemon = store.state.currentPokemon;

function toggleModal(title: string, description: string[]) {
  store.dispatch("toggleModalState", {
    title,
    description,
  });
  console.log(store.state.modal);
}
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4" title="Nome do pokémon">
      <span title="ID do pokémon">{{ currentPokemon.id }}:</span>
      {{ currentPokemon.name }}
    </h1>
    <div class="flip-container mx-auto">
      <div class="flipper position-relative">
        <div class="front">
          <img
            :src="currentPokemon.images.large"
            :alt="`Imagem do pokemon ${currentPokemon.name}`"
          />
        </div>
        <div
          class="back p-3 position-absolute top-0 w-100 h-100 text-white overflow-auto"
        >
          <img
            title="Símbolo"
            :src="currentPokemon.set.images.symbol"
            width="35"
            height="35"
            class="bg-white p-1 border border-dark mb-2 rounded-2"
            alt="Símbolo do pokémon"
          />
          <h5 class="mt-1">Tipo(s):</h5>
          <ul>
            <li v-for="(item, index) in currentPokemon.types" :key="index">
              {{ item }}
            </li>
          </ul>
          <h5 class="mt-1">Resistencia(s):</h5>
          <ul>
            <li
              v-for="(item, index) in currentPokemon.resistances"
              :key="index"
            >
              <p class="mb-0">Tipo(s): {{ item.type }}</p>
              <p>Efeito: {{ item.value }}</p>
            </li>
          </ul>
          <h5 class="mt-1">Fraqueza(s):</h5>
          <ul>
            <li v-for="(item, index) in currentPokemon.weaknesses" :key="index">
              <p class="mb-0">Tipo(s): {{ item.type }}</p>
              <p>Efeito: {{ item.value }}</p>
            </li>
          </ul>
          <h5 class="mt-1">Ataque(s):</h5>
          <ul>
            <li
              v-for="(item, index) in currentPokemon.attacks"
              :key="index"
              class="mb-2"
            >
              <a
                href="#"
                @click.prevent="
                  toggleModal(item.name, [
                    `Custo de mana: ${item.convertedEnergyCost}`,
                    `Dano: ${item.damage}`,
                    `Descrição: ${item.text}`,
                  ])
                "
                class="text-white"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style src="./styles.scss" scoped></style>
