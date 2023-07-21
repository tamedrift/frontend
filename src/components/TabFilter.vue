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
    }
  }
}
</script>

<template>
  <div class="container mx-auto py-10 w-3/5">
    <div class="hidden sm:block">
      <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
        <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
        <button v-for="(filter, index) in filters" :key="filter.value"
          :class="{ 'rounded-l-lg': index == 0, 'rounded-r-lg': index == filters.length - 1 }"
          class="text-gray-900 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
          @click="filterTable(filter.key)">
          {{ filter.value }}
          <span aria-hidden="true" :class="{ 'bg-indigo-500': selected == filter.key }"
            class="absolute inset-x-0 bottom-0 h-0.5"></span>
        </button>

      </nav>
    </div>
  </div>
</template>