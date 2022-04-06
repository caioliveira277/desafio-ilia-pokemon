<script setup lang="ts">
import { CardComponent, CarouselComponent } from "@/components";
import { useRouter } from "vue-router";

const router = useRouter();
const data = {
  id: "xy1-1",
  name: "Venusaur-EX",
  attacks: [
    {
      name: "Poison Powder",
      cost: ["Grass", "Colorless", "Colorless"],
      convertedEnergyCost: 3,
      damage: "60",
      text: "Your opponent's Active Pokémon is now Poisoned.",
    },
    {
      name: "Jungle Hammer",
      cost: ["Grass", "Grass", "Colorless", "Colorless"],
      convertedEnergyCost: 4,
      damage: "90",
      text: "Heal 30 damage from this Pokémon.",
    },
  ],
  types: ["Grass"],
  weaknesses: [
    {
      type: "Fire",
      value: "×2",
    },
  ],
  resistances: [
    {
      type: "Psychic",
      value: "-20",
    },
  ],
  set: {
    images: {
      symbol: "https://images.pokemontcg.io/xy1/symbol.png",
    },
  },
  images: {
    small: "https://images.pokemontcg.io/xy1/1.png",
    large: "https://images.pokemontcg.io/xy1/1_hires.png",
  },
};

type attacks = {
  name: string;
  convertedEnergyCost: number;
  damage: number;
  text: string;
}[];
type objectTypeValue = {
  type: string;
  value: string;
}[];
type set = {
  images: {
    symbol: string;
  };
};
type images = {
  small: string;
  large: string;
};
interface IDataPokemon {
  id: string;
  name: string;
  attacks: attacks;
  types: string[];
  weaknesses: objectTypeValue;
  resistances: objectTypeValue;
  set: set;
  images: images;
}

function handlePushDetails(id: string) {
  router.push({
    name: "moreDetails",
    query: {
      id,
    },
  });
}
</script>

<template>
  <main class="container py-5">
    <CarouselComponent>
      <CardComponent
        class="mb-4"
        :symbol-image-url="data.set.images.symbol"
        :card-image-url="data.images.small"
        :id="data.id"
        :title="data.name"
        :list="data.types"
        @handleClickMoreDetails="handlePushDetails"
      />
    </CarouselComponent>
  </main>
</template>
