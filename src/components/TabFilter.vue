<script>
export default {
  name: "TabFilter",
  props: {
    filters: Array,
    name: String,
    selected: [String, Number],
  },
  methods: {
    filterTable(param) {
      if (this.name === 'league') {
        this.$router.push({ name: 'tiers', query: { league: param } })
      }
      else {
        this.$router.push({ name: 'tiers', query: { lane: param } })
      }
    },
    getImage(image) {
      return new URL(`../assets/${this.name}/${image}.png`, import.meta.url).href
    }
  }
}
</script>

<template>
  <nav class="isolate flex divide-x divide-gray-600 rounded-lg w-3/5" aria-label="Tabs">
    <button v-for="(filter, index) in filters" :key="filter.value"
      :class="{ 'rounded-l-lg': index == 0, 'rounded-r-lg': index == filters.length - 1 }"
      class="flex flex-col justify-center shadow  text-gray-100 group relative min-w-0 overflow-hidden bg-gray-800 py-1 px-1 text-center text-sm font-medium hover:bg-gray-700 focus:z-10"
      @click="filterTable(filter.key)"
      >
      <img :src="getImage(filter.key)" :alt="filter.value" class="scale-50">
      <span aria-hidden="true" :class="{ 'bg-indigo-500': selected == filter.key }"
        class="absolute inset-x-0 bottom-0 h-0.5"></span>
    </button>
  </nav>
</template>