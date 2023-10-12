<script setup lang="ts">
import ContiHeader from "~/layouts/components/ContiHeader.vue";
import LoginDialog from "~/layouts/components/LoginDialog.vue";
import { useLoginDialog } from "~/store/useLoginDialog";
import { watch } from "@vue/runtime-core";
const dialog = useLoginDialog();
const isOpen = ref(false);
watch(dialog, (value) => {
  isOpen.value = value.isOpen;
});
</script>

<template>
  <LoginDialog v-if="isOpen" />
  <ContiHeader />
  <div class="z-10 relative">
    <slot />
  </div>
</template>

<style scoped></style>
