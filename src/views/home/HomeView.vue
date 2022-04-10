<script setup lang="ts">
import { CardComponent, CarouselComponent } from "@/components";
import { useRouter } from "vue-router";
import { useStore } from "@/context/store";
import type { IDataPokemon } from "@/context/types";
import { onMounted, reactive } from "vue";
import { CardAdapter } from "@/adapters/CardAdapterRequest";

const router = useRouter();
const store = useStore();

const cardAdapter = new CardAdapter();
const localState = reactive<{ cards: IDataPokemon[] }>({
  cards: [],
});

onMounted(() => {
  cardAdapter.getPokemonCards().then(({ data: dataCards }) => {
    localState.cards = cardAdapter.formatCards(dataCards.data);
  });
});
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
function handlePushDetails(item: IDataPokemon) {
  store.dispatch("setCurrentPokemon", item);
  router.push({
    name: "moreDetails",
    query: {
      id: item.id,
    },
  });
}
</script>

<template>
  <main class="container py-5">
    <CarouselComponent>
      <CardComponent
        v-for="item in localState.cards"
        :key="item.id"
        class="mb-4"
        :symbol-image-url="item.set.images.symbol"
        :card-image-url="item.images.small"
        :id="item.id"
        :title="item.name"
        :types="item.types"
        @handleClickMoreDetails="handlePushDetails(item)"
      />
    </CarouselComponent>
  </main>
</template>
