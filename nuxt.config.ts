// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  css: [
    "@/assets/styles/app.sass"
  ],

  vite: {
    plugins: [
      svgLoader()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_abstracts/_abstracts.scss" as *;',
        }
      }
    }
  },
})
