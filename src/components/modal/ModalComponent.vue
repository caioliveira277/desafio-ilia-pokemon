<script setup lang="ts">
import { useStore } from "@/context/store";

const store = useStore();
const modal = store.state.modal;
</script>
<template>
  <teleport to="body">
    <div
      class="modal position-fixed top-0 d-flex align-items-center justify-content-center p-2"
      tabindex="-1"
      v-if="modal.visible"
    >
      <div class="card bg-white w-100 rounded-3">
        <div class="header p-3">
          <h3>{{ modal }}</h3>
        </div>
        <hr />
        <div class="body p-3">
          <p v-for="(item, index) in modal.description" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="footer pb-3 px-3 d-flex justify-content-end">
          <button class="btn btn-dark">Fechar</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<style src="./styles.scss" scoped></style>
