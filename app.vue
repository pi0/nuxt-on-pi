<script setup lang="ts">
const platform: string = useAppConfig().platform

const stack = [
  ["Nuxt", "http://nuxt.com"],
  ["Nitro", "https://nitro.unjs.io"],
  ['Cloudflare Tunnel', 'https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/'],
  ["Bun", "https://bun.sh"]
]

useServerSeoMeta({
  title: 'Nuxt on ' + platform,
  description: 'HTML, dynamically rendered somewhere on the planet!'
})
useServerHead({
  htmlAttrs: { lang: 'en' },
  meta: [
   { name: 'theme-color', content: '#0e172a' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/app.webmanifest' }
  ]
})

const { data: info } = await useFetch('/api/info')
</script>

<template>
  <div class="antialiased text-slate-400 bg-slate-900 h-screen w-screen flex flex-col items-center justify-center space-between">
    <Rocket width="300px" />
    <main class="text-center">
      Running on <span class="border-dotted border-b-2 border-sky-500">{{ platform }}</span><br>
      <span id="render-time"></span><br>
      {{ info }} <br>
    </main>
    <footer class="text-center mt-6">
      Powered by <template v-for="(s, i) in stack"><NuxtLink :href="s[1]" target="_blank">{{ s[0]}}</NuxtLink>{{  i === stack.length - 1 ? '' : (i === stack.length - 2 ? ' and ' : ', ') }}</template>
      <br><br>
      <NuxtLink href="https://github.com/pi0/nuxt-on-pi" target="_blank">(Github)</NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
a {
  text-decoration: underline;
}
</style>
