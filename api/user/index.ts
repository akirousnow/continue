import { useMyFetch } from "~/composables/useMyFetch";
interface LoginForm {
  username: string;
  password: string;
}
export const login = ({ username, password }: LoginForm) =>
  useMyFetch("/user/login").post({ username, password }).json();

export const checkLogin = () => useMyFetch("/user/isLogin").post().json();
export const logout = () => useMyFetch("/user/logout").post().json();
