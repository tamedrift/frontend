<script>
import ChampionStatistics from '../components/ChampionStatistics.vue'

export default {
  name: 'ChampionStatisticView',
  data() {
    return {
      champion_stats: []
    }
  },
  components: {
    ChampionStatistics
  },
  methods: {
    async fetchChampionStats() {
      const res = await fetch('api/wildrift_cn/champion_statistics?league=1&lane=1')
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.champion_stats = await this.fetchChampionStats()
  }
}
</script>

<template>
  <div class="mx-auto max-w-2xl text-center mt-10">
    <h1 class="text-xl font-bold tracking-tight text-white sm:text-3xl">Champion Tier List</h1>
    <p class="mt-6 text-l leading-8 text-gray-300">
      Top lane champion tiers for patch 4.2b.
    </p>
  </div>
  <div class="container mx-auto py-10 w-3/5">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ChampionStatistics :champion_stats="champion_stats"></ChampionStatistics>
    </div>
  </div>
</template>
