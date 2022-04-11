<script setup lang="ts">
import { RouterView } from "vue-router";
import { ModalComponent } from "@/components";
</script>

<template>
  <RouterView name="HeaderComponent" />
  <RouterView />
  <ModalComponent />
</template>

<style src="@/theme/global.scss"></style>
