import { defineStore } from "pinia";
import { login, logout } from "~/api/user/";
import { useToken } from "~/store/useToken";

export const useUser = defineStore("user-store", () => {
  const doLogin = async (username: string, password: string) => {
    const { data, isFetching } = await login({ username, password });
    if (data.value.code == "200") {
      useToken().setToken(data.value.data);
      return true;
    }
    return false;
  };
  const doLogout = async () => {
    const { data } = await logout();
    useToken().setToken("");
    return true;
  };
  return { doLogin, doLogout };
});
