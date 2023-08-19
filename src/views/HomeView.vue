<script>
export default {
  name: "HomeView",
  data() {
    return {
      wallpaper: new URL(`../assets/home.jpg`, import.meta.url).href
    }
  }
}
</script>

<template>
  <div class="relative isolate overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
      <div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Tame the Wild Rift
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">With our up-to-date statistics.</p>
        <div class="mt-10 flex items-center gap-x-6">
          <router-link to="/tiers"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Tier
            List</router-link>
          <router-link to="/about" class="text-sm font-semibold leading-6 text-white">Learn more <span
              aria-hidden="true">→</span></router-link>
        </div>
      </div>
      <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <img :src="wallpaper" alt="App screenshot" width="2432" height="1442"
            class="w-[76rem] rounded-md bg-white/5 shadow-2xl" />
        </div>
      </div>
    </div>
  </div>
</template>
