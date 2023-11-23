export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  experimental: {
    noScripts: true,
    writeEarlyHints: true,
    inlineSSRStyles: true
  },
  routeRules: {
    '/**': { swr: 1 }
  },
  appConfig: {
    platform: 'Raspberry Pi Zero 2W'
  }
})
