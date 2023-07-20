<script>
import TierList from '../components/TierList.vue'

import TierListTitle from '../components/TierListTitle.vue'
export default {
  name: 'TiersView',
  data() {
    return {
      tier_list: []
    }
  },
  components: {
    TierList,
    TierListTitle
  },
  methods: {
    async fetchTierList(league, lane) {
      const res = await fetch(
        `api/wildrift_cn/champion_statistics?league=${league}&lane=${lane}`
      )
      const data = await res.json()
      return data
    }
  },
  async created() {
    this.tier_list = await this.fetchTierList(1, 1)
  }
}
</script>

<template>
  <TierListTitle></TierListTitle>
  <TierList :tier_list="tier_list"></TierList>
</template>
