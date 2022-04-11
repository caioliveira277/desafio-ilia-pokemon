<script setup lang="ts">
import { CardComponent, CarouselComponent } from "@/components";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/context/store";
import type { IDataPokemon } from "@/context/types";
import { onMounted, reactive, ref, watch } from "vue";
import { CardAdapter } from "@/adapters/CardAdapterRequest";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const store = useStore();

const finalItemRef = ref<Element>();

const cardAdapter = new CardAdapter();
const localState = reactive<{
  cards: IDataPokemon[];
  loading: boolean;
  currentPage: number;
}>({
  cards: [],
  loading: true,
  currentPage: 1,
});

function handlePushDetails(item: IDataPokemon) {
  store.dispatch("setCurrentPokemon", item);
  router.push({
    name: "moreDetails",
    query: {
      id: item.id,
    },
  });
}

onMounted(() => {
  const intersectionObserver = new IntersectionObserver((entries) => {
    localState.loading = true;
    if (entries.some((entry) => entry.isIntersecting)) {
      cardAdapter
        .getPokemonCards(route.query.busca?.toString(), localState.currentPage)
        .then(({ data: dataCards }) => {
          localState.cards.push(...cardAdapter.formatCards(dataCards.data));
          localState.currentPage += 1;
          localState.loading = false;
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            localState.loading = false;
          }
        });
    }
  });
  intersectionObserver.observe(finalItemRef.value as Element);
  return () => intersectionObserver.disconnect();
});

watch(
  () => route.query.busca,
  (searchName) => {
    localState.cards = [];
    localState.loading = true;
    localState.currentPage = 1;

    cardAdapter
      .getPokemonCards(searchName?.toString(), 1)
      .then(({ data: dataCards }) => {
        localState.cards = cardAdapter.formatCards(dataCards.data);
        localState.currentPage += 1;
        localState.loading = false;
      })
      .catch(() => {
        localState.loading = false;
      });
  }
);
</script>

<template>
  <main class="home container py-5">
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
      <span
        ref="finalItemRef"
        class="card-loading d-flex align-items-center justify-content-center border"
      >
        <img
          src="@/assets/icons/pokeball.svg"
          width="40"
          height="40"
          alt="Icone de pokebola"
          v-if="localState.loading"
        />
        <p v-else class="text-muted text-center">
          Opps!
          <br />
          Nenhum pokemon encontrado
        </p>
      </span>
    </CarouselComponent>
  </main>
</template>

<style src="./styles.scss" scoped></style>
