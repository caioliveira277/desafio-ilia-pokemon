<script setup lang="ts">
export interface ICard {
  imageUrl: string;
  id: string;
  title: string;
  list: string[];
}

defineProps<ICard>();
</script>

<template>
  <div class="card d-flex justify-content-center">
    <div>
      <h4 title="Nome do pokémon">
        <span title="ID do pokémon">{{ id }}:</span>
        {{ title }}
      </h4>
      <div class="position-relative image overflow-hidden shadow">
        <img
          :src="imageUrl"
          :alt="`Imagem de ilustração: ${title}`"
          width="245"
          height="342"
        />
        <div
          class="position-absolute top-0 mask w-100 h-100 p-3 text-white d-flex flex-column"
        >
          <img
            title="Símbolo"
            src="https://images.pokemontcg.io/xy1/symbol.png"
            width="35"
            height="35"
            class="bg-white p-1 border border-dark mb-2 rounded-2"
            alt="Símbolo do pokémon"
          />
          <h5 class="mt-1">Tipos:</h5>
          <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
          <a href="#" class="btn btn-light mt-auto">Mais detalhes</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./styles.scss" scoped></style>
