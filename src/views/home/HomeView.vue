<script setup lang="ts">
import { CardComponent, CarouselComponent } from "@/components";
</script>

<template>
  <main class="container py-5">
    <CarouselComponent>
      <CardComponent
        class="mb-4"
        image-url="https://images.pokemontcg.io/xy1/1.png"
        id="xy1-1"
        title="Venusaur-EX"
        :list="['Grass']"
      />
      <CardComponent
        class="mb-4"
        image-url="https://images.pokemontcg.io/xy1/1.png"
        id="xy1-1"
        title="Venusaur-EX"
        :list="['Grass']"
      />
      <CardComponent
        class="mb-4"
        image-url="https://images.pokemontcg.io/xy1/1.png"
        id="xy1-1"
        title="Venusaur-EX"
        :list="['Grass']"
      />
      <CardComponent
        class="mb-4"
        image-url="https://images.pokemontcg.io/xy1/1.png"
        id="xy1-1"
        title="Venusaur-EX"
        :list="['Grass']"
      />
    </CarouselComponent>
  </main>
</template>
