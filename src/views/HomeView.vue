<script>
export default {
  name: "HomeView",
  data() {
    return {
      wallpaper: new URL(`../assets/home.jpg`, import.meta.url).href,
      soraka: new URL(`../assets/soraka.jpg`, import.meta.url).href,
      benefits: [
        'Competitive salaries',
        'Flexible work hours',
        '30 days of paid vacation',
        'Annual team retreats',
        'Benefits for you and your family',
        'A great work environment',
      ]
    }
  }
}
</script>

<template>
  <!-- Hero section with WR splash art and description -->
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
          <img :src="wallpaper" alt="App screenshot" width="2432" height="1367"
            class="w-[76rem] rounded-md bg-white/5 shadow-2xl" />
        </div>
      </div>
    </div>
  </div>

  <!-- Support me section -->

  <div class="relative isolate pt-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
        <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
          :src="soraka" alt="Support" />
        <div class="w-full flex-auto">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Support the website</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Hi, I am Martin. 👋🏼 I have developed and continue to maintain and improve this website in my spare time. <br>
            If you would like to help cover some of the running expenses or support further development of the website, then please use one of the buttons below. Every bit helps! 💸<br>
            
          </p>
            <div class="flex py-6 space-x-4 sm:flex-row">
            
              <a href="https://www.patreon.com/tamedriftdev" target="_blank"
                class="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                <font-awesome-icon :icon="['fab', 'patreon']" class="pr-2" />
                Patreon</a>

              <a href="https://www.buymeacoffee.com/tamedriftdev" target="_blank"
                class="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                <font-awesome-icon :icon="['fas', 'coffee']" class="pr-2" />
                Coffee</a>
            </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true">
      <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
    </div>
  </div>
</template>
