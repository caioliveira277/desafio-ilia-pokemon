<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/context/store";

const store = useStore();
const modal = computed(() => store.getters.modal);

function closeModal() {
  store.dispatch("toggleModalState");
}
</script>
<template>
  <Teleport to="body">
    <div
      class="modal position-fixed top-0 align-items-baseline justify-content-center p-2"
      tabindex="-1"
      v-show="modal.visible"
      @click="closeModal"
    >
      <Transition>
        <div
          class="card bg-white w-100 rounded-3"
          v-if="modal.visible"
          @click.stop
        >
          <div class="header p-3">
            <h3 class="mb-0">{{ modal.title }}</h3>
          </div>
          <hr class="my-0" />
          <div class="body p-3">
            <p v-for="(item, index) in modal.description" :key="index">
              {{ item }}
            </p>
          </div>
          <div class="footer pb-3 px-3 d-flex justify-content-end">
            <button @click="closeModal" class="btn btn-dark">Fechar</button>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<style src="./styles.scss" scoped></style>
