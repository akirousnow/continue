import { ref } from "vue";
import { g as defineStore } from "../server.mjs";
import Cookie from "js-cookie";
const useLoginDialog = defineStore("login-dialog", () => {
  const isOpen = ref(false);
  const openDialog = () => isOpen.value = true;
  const closeDialog = () => isOpen.value = false;
  return { isOpen, openDialog, closeDialog };
});
const useToken = defineStore("user-token", () => {
  const token = ref("");
  token.value = Cookie.get("token");
  const getToken = () => token;
  const setToken = (_token) => {
    Cookie.set("token", _token);
    token.value = _token;
  };
  return { getToken, setToken };
});
export {
  useToken as a,
  useLoginDialog as u
};
//# sourceMappingURL=useToken-65e8b6fe.js.map
