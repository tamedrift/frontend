<script>
export default {
  name: "TabFilter",
  props: {
    filters: Object,
    name: String,
    selected: [String, Number],
  },
  methods: {
    filterTable(param) {
      if (this.name === 'league') {
        this.$router.push({ name: 'Tiers', query: { league: param } })
      }
      else {
        this.$router.push({ name: 'Tiers', query: { lane: param } })
      }
    },
    getImage(image) {
      return new URL(`../assets/${this.name}/${image}.png`, import.meta.url).href
    }
  },
  computed: {
    filter_length() {
      return Object.keys(this.filters).length;
    }
  }
}
</script>

<template>
  <nav class="isolate flex divide-x divide-gray-600 rounded-lg w-3/5" aria-label="Tabs">
    <button v-for="(filter, key) in filters" :key="key"
      :class="{ 'rounded-l-lg': key == 1, 'rounded-r-lg': key == filter_length }"
      class="flex flex-col justify-center shadow  text-gray-100 group relative min-w-0 overflow-hidden bg-gray-800 py-1 px-1 text-center text-sm font-medium hover:bg-gray-700 focus:z-10"
      @click="filterTable(key)">
      <img :src="getImage(key)" :alt="filter" class="scale-50">
      <span aria-hidden="true" :class="{ 'bg-indigo-500': selected == key }"
        class="absolute inset-x-0 bottom-0 h-0.5"></span>
    </button>
  </nav>
</template>