<template>
  <table class="table-auto w-full">
    <thead class="text-xs h-14 uppercase bg-gray-900 text-gray-300">
      <tr>
        <th></th>
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
        :key="i"
        :index="i + 1"
        v-for="[i, stat] in champion_stats.entries()"
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
  },
}
</script>
