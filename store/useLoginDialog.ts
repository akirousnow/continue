import { defineStore } from "pinia";

export const useLoginDialog = defineStore("login-dialog", () => {
  const isOpen = ref(false);
  const openDialog = () => (isOpen.value = true);
  const closeDialog = () => (isOpen.value = false);
  return { isOpen, openDialog, closeDialog };
});
