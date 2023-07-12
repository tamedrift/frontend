<script>
import ChampionStatistics from '../components/ChampionStatistics.vue'


export default {
  name: 'ChampionStatisticView',
  data() {
    return {
      champion_stats: [],
    }
  },
  components: {
    ChampionStatistics
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
  <div class="container mx-auto py-10 w-3/5" >
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ChampionStatistics :champion_stats="champion_stats"></ChampionStatistics>
    </div>
  </div>
</template>
