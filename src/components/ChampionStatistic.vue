<template>
  <tr
    class="border-b bg-gray-800 border-gray-700 hover:bg-gray-900 text-gray-300"
  >
    <td scope="col" class="pl-6 py-3 text-center">{{ index }}</td>
    <td scope="col" class="pl-6 py-3 flex ">
      <img
        class="inline-block h-14 w-14 rounded-md border-2 border-gray-600"
        :src="champion.avatar"
        alt="Champion Avatar"
      />
      <div class="ml-3 py-3 text-gra">
        <p class="text-sm font-medium">{{ champion.name }}</p>
        <p class="text-xs text-gray-400">TBD</p>
      </div>
    </td>
    <td scope="col" class="px-6 py-3 text-center">{{ champion_stat.tier }}</td>
    <ChampionRatio 
    :ratio="champion_stat.win_rate" 
    :percentile="champion_stat.win_pct"
    color="bg-indigo-700"
    />
    <ChampionRatio 
    :ratio="champion_stat.appear_rate" 
    :percentile="champion_stat.appear_pct"
    color="bg-emerald-700"
    />
    <ChampionRatio 
    :ratio="champion_stat.forbid_rate" 
    :percentile="champion_stat.forbid_pct"
    color="bg-rose-700"
    />
  </tr>
</template>

<script>
import ChampionRatio from './ChampionRatio.vue';

export default {
  name: 'ChampionStatistic',
  data() {
    return {
      champion: Object,
    }
  },
  components: {
      ChampionRatio
  },
  props: {
    champion_stat: Object,
    index: Number,
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
