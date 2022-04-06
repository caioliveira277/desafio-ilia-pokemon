<script setup lang="ts">
interface ICardProps {
  cardImageUrl: string;
  symbolImageUrl: string;
  id: string;
  title: string;
  list: string[];
}

interface ICardEmit {
  (event: "handleClickMoreDetails", id: string): void;
}

const emits = defineEmits<ICardEmit>();
defineProps<ICardProps>();
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
          :src="cardImageUrl"
          :alt="`Imagem de ilustração: ${title}`"
          width="245"
          height="342"
        />
        <div
          class="position-absolute top-0 mask w-100 h-100 p-3 text-white d-flex flex-column"
        >
          <img
            title="Símbolo"
            :src="symbolImageUrl"
            width="35"
            height="35"
            class="bg-white p-1 border border-dark mb-2 rounded-2"
            alt="Símbolo do pokémon"
          />
          <h5 class="mt-1">Tipos:</h5>
          <ul>
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
          <button
            type="button"
            @click="emits('handleClickMoreDetails', id)"
            class="btn btn-light mt-auto"
          >
            Mais detalhes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./styles.scss" scoped></style>
