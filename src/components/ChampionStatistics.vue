<template>
  <table class="table-auto w-full">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-3 text-left">Champion</th>
        <th class="px-6 py-3 text-center">Tier</th>
        <th class="px-6 py-3 text-right">Win Rate</th>
        <th class="px-6 py-3 text-right">Pick Rate</th>
        <th class="px-6 py-3 text-right">Ban Rate</th>
      </tr>
    </thead>
    <tbody>
      <ChampionStatistic
        :champion_stat="stat"
        :key="stat.hero_id"
        v-for="stat in champion_stats"
      ></ChampionStatistic>
    </tbody>
  </table>
</template>

<script>
import ChampionStatistic from './ChampionStatistic.vue'

export default {
  name: 'ChampionStatistics',
  components: {
    ChampionStatistic
  },
  props: {
    champion_stats: Array
  }
}
</script>
