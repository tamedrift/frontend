<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
  >
    <td scope="col" class="px-6 py-3 flex">
      <img
        class="inline-block h-14 w-14 rounded-md border-2 border-gray-150"
        :src="champion.avatar"
        alt="Champion Avatar"
      />
      <div class="ml-3 py-3">
        <p class="text-sm font-medium text-gray-800">{{ champion.name }}</p>
        <p class="text-xs text-gray-500">TBD</p>
      </div>
    </td>
    <td scope="col" class="px-6 py-3 text-center">{{ champion_stat.tier }}</td>
    <td scope="col" class="px-6 py-3 text-right">{{ parseFloat(champion_stat.win_rate * 100).toFixed(2) }}%</td>
    <td scope="col" class="px-6 py-3 text-right">{{ parseFloat(champion_stat.appear_rate * 100).toFixed(2) }}%</td>
    <td scope="col" class="px-6 py-3 text-right">{{ parseFloat(champion_stat.forbid_rate * 100).toFixed(2) }}%</td>
  </tr>
</template>

<script>
export default {
  name: 'ChampionStatistic',
  data() {
    return {
      champion: Object,
    }
  },
  props: {
    champion_stat: Object
  },
  methods: {
    async fetchChampion(id) {
      const res = await fetch(`api/wildrift_cn/champions/${id}`);
      const data = await res.json()
      return data
    },
  },
  async mounted() {
    this.champion = await this.fetchChampion(this.champion_stat.hero_id)
  }
}
</script>
