<script setup lang="ts">
import { RouterView } from "vue-router";
import { HeaderComponent } from "@/components";
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style src="@/theme/global.scss"></style>
