<template>
    <div class="top-16">
        <Listbox v-model="selectedFilter">
            <div class="relative mt-1">
                <ListboxButton
                    class="flex relative w-full cursor-default rounded-lg bg-gray-800 py-2 pl-3 pr-10 text-left text-gray-200 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <img class="rank-img mr-2" :src="getAssetIcon(selectedFilter.image)" :alt="selectedFilter.name">
                    <span class="block truncate">{{ selectedFilter.name }}</span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon class="h-5 w-5 text-gray-200" aria-hidden="true" />
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 overflow-auto rounded-md bg-gray-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="filter in props.filters" :key="filter.name"
                            @click="filterTable(filter.key)" :value="filter" as="template">
                            <li :class="[
                                active ? 'bg-indigo-300 text-indigo-800' : 'text-gray-200',
                                'relative cursor-default select-none py-2 px-2 flex w-full',
                            ]">
                                <img class="rank-img mr-2" :src="getAssetIcon(filter.image)" :alt="filter.name">

                                <span :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block',
                                ]">{{ filter.name }}</span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
</template>
  
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    filters: Array,
    category: String
})

const selectedFilter = ref(props.filters[0])

const router = useRouter()
const route = useRoute()
function filterTable(param) {
    if (props.category == 'league') {
        router.push({ name: 'Tiers', query: { league: param, lane: route.query.lane } })
    } else {
        router.push({ name: 'Tiers', query: { league: route.query.league, lane: param } })
    }

}

function getAssetIcon(suffix) {
    return `https://static.bigbrain.gg/assets/lol/${suffix}`
}
</script>
  