import { defineStore } from "pinia";
// @ts-ignore
import Cookie from "js-cookie";
import { ref } from "vue";
export const useToken = defineStore("user-token", () => {
  const token = ref("");
  token.value = Cookie.get("token");
  const getToken = () => token;
  const setToken = (_token: string) => {
    Cookie.set("token", _token);
    token.value = _token;
  };

  return { getToken, setToken };
});
