<script>
import TierList from '../components/TierList.vue'
import TabFilter from '../components/TabFilter.vue'

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
    TierListTitle,
    TabFilter
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
    // League param
    let league = 1
    if (typeof this.$route.query.league !== "undefined") {
      league = this.$route.query.league
    }

    // Lane param
    let lane = 1
    if (typeof this.$route.query.lane !== "undefined") {
      lane = this.$route.query.lane
    }

    this.tier_list = await this.fetchTierList(league, lane)
  }
}
</script>

<template>
  <TierListTitle></TierListTitle>
  <TabFilter></TabFilter>
  <TierList :tier_list="tier_list"></TierList>
</template>
