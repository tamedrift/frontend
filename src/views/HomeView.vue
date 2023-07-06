<script>
export default {
  name: 'HomeView',
  data() {
    return {
      champion_stats: [],
    }
  },
  methods: {
    async fetchChampionStats() {
      const res = await fetch("api/wildrift_cn/")

      const data = await res.json()
      return data
    },
  },
  async created() {
    this.champion_stats = await this.fetchChampionStats()
  }
}
</script>

<template>
  <h1>hi</h1>
  <div :key="stat.pk" v-for="stat in champion_stats">{{ stat.fields.lane }}</div>
</template>
