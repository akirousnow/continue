export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/devtools",
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  css: ["/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:8080",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  generate: {
    fallback: true,
    routes: async () => {
      const { data } = await axios.get('https://api.example.com/posts')
      return data.map(post => `/posts/${post.id}`)
    }
  }
});