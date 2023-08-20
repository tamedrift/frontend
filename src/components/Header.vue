<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HeaderComponent',
  components: {
    Disclosure, DisclosureButton, DisclosurePanel,
    Bars3Icon, XMarkIcon
  },
  data() {
    return {
      logo: new URL(`../assets/logo.png`, import.meta.url).href,
      navigation: [
        { name: 'Home', href: '/' },
        { name: 'Tiers', href: '/tiers' },
        { name: 'About', href: '/about' },
      ],
      open: false
    }
  },
}
</script>

<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between z-10">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton @click="this.open = !this.open"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!this.open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="item.href"
                :class="[item.name == $route.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium z-10']"
                :aria-current="item.name == $route.name ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link v-for="item in navigation" :key="item.name" :to="item.href"
          :class="[item.name == $route.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium relative z-10']"
          :aria-current="item.name == $route.name ? 'page' : undefined">{{ item.name }}</router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
