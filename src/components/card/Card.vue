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
  <div>
    <h4 title="Nome do pokemon">
      <span title="ID do pokemon">{{ id }}:</span>
      {{ title }}
    </h4>
    <img
      title="Carta de exibição"
      :src="imageUrl"
      :alt="`Imagem de ilustração: ${title}`"
      width="245"
      height="342"
    />
    <h5>Tipos:</h5>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style src="./styles.scss" scoped></style>
