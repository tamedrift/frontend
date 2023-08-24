<template>
  <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300">
    <td scope="col" class="pl-6 py-3 text-center">{{ index }}</td>
    <td scope="col" class="pl-6 py-3 items-center flex">
      <img class="inline-block h-12 w-12 mr-3 rounded-md border-2 border-gray-600" :src="getChampionAvatar(champion.name)"
        :alt="champion.name" />
      <!-- <div class="ml-3 py-3 text-gray items-center"> -->
      <p class="text-sm font-medium mr-3">{{ champion.name }}</p>
      <!-- </div> -->
    </td>
    <td scope="col" :class="getTextColor(champion_ratios.tier)" class="py-3 text-center font-bold">{{
      this.tiers[champion_ratios.tier] }}</td>
    <TierListRatio :barWidth="champion_ratios.win_pct * 10" :ratio="champion_ratios.win_rate" color="bg-indigo-700" />
    <TierListRatio :barWidth="champion_ratios.appear_pct * 20" :ratio="champion_ratios.appear_rate"
      color="bg-emerald-700" />
    <TierListRatio :barWidth="champion_ratios.forbid_pct * 20" :ratio="champion_ratios.forbid_rate" color="bg-rose-700" />
  </tr>
</template>

<script>
import TierListRatio from './TierListRatio.vue';

export default {
  name: 'TierListRow',
  data() {
    return {
      champion: Object,
      tiers: {
        1: "S",
        2: "A",
        3: "B",
        4: "C",
        5: "D"
      }
    }
  },
  components: {
    TierListRatio
  },
  props: {
    champion_ratios: Object,
    index: Number,
  },
  methods: {
    async fetchChampion(id) {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/champions/${id}`);
      const data = await res.json()
      return data
    },
    getTextColor(hue) {
      if (hue == 1) {
        return "text-amber-500"
      } else if (hue == 2) {
        return "text-emerald-500"
      } else if (hue == 3) {
        return "text-emerald-300"
      } else if (hue == 4) {
        return "text-rose-300"
      } else {
        return "text-rose-500"
      }
    },
    getChampionAvatar(name) {
      // Get rid of non alphabetical
      name = name.replace(/[^a-zA-Z]/g, '');
      if (name == "Wukong") {
        name = "MonkeyKing"
      }
      return `https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${name}.png`
    }
  },
  async mounted() {
    this.champion = await this.fetchChampion(this.champion_ratios.hero_id)
  },

}
</script>
