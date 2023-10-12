import { createFetch } from "@vueuse/core";
import { useToken } from "~/store/useToken";

export const useMyFetch = createFetch({
  baseUrl: "http://localhost:8080",
  options: {
    beforeFetch({ options }) {
      options.headers = {
        ...options.headers, // @ts-ignore
        token: useToken().getToken(),
      };
    },
  },
});
