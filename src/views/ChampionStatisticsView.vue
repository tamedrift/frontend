<script>
import ChampionStatistics from '../components/ChampionStatistics.vue'

export default {
  name: 'ChampionStatisticView',
  data() {
    return {
      champion_stats: [],
      champions: []
    }
  },
  components: {
    ChampionStatistics
  },
  methods: {
    async fetchChampionStats() {
      const res = await fetch('api/wildrift_cn/champion_statistics')

      const data = await res.json()
      return data
    },
    async fetchChampions() {
      const res = await fetch('api/wildrift_cn/champions')

      const data = await res.json()
      return data
    }
  },
  async created() {
    ;(this.champion_stats = await this.fetchChampionStats()),
      (this.champions = await this.fetchChampions())
  }
}
</script>

<template>
  <div class="container mx-auto py-10 w-3/5">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ChampionStatistics :champion_stats="champion_stats"></ChampionStatistics>
    </div>
  </div>
</template>
