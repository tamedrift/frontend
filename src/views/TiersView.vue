<script>
import TierList from '../components/TierList.vue'
import TabFilter from '../components/TabFilter.vue'

import TierListTitle from '../components/TierListTitle.vue'

export default {
  name: 'TiersView',
  data() {
    return {
      tier_list: [],
      last_date: "",
      loading: false,
      error: null,
      league: 1,
      lane: 2,
      league_filters: {
        1: 'Diamond+',
        2: 'Master+',
        3: 'Grandmaster+',
        4: 'Challenger',
      },
      lane_filters: {
        1: 'Mid',
        2: 'Solo',
        3: 'Duo',
        4: 'Support',
        5: 'Jungle',
      }
    }
  },
  components: {
    TierList,
    TierListTitle,
    TabFilter
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null

      // League param
      if (typeof this.$route.query.league !== "undefined") {
        this.league = this.$route.query.league
      }

      // Lane param
      if (typeof this.$route.query.lane !== "undefined") {
        this.lane = this.$route.query.lane
      }

      this.tier_list = await this.fetchTierList()
    },
    async fetchTierList() {
      const res = await fetch(
        `api/wildrift_cn/tier_list?league=${this.league}&lane=${this.lane}&dtstatdate=${this.last_date}`
      )
      const data = await res.json()

      this.loading = false
      return data
    },
    async fetchLastDate() {
      const res = await fetch(
        `api/wildrift_cn/last_date`
      )
      const data = await res.json()

      return data.last_date
    }
  },
  async created() {
    this.last_date = await this.fetchLastDate()

    this.$watch(
      () => this.$route.query,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  }
}
</script>

<template>
  <div class="container mx-auto py-10 w-3/5">
    <TierListTitle :league="league" :lane="lane" :leagues="league_filters" :lanes="lane_filters">
    </TierListTitle>
    <div class="flex py-3 h-20 justify-between">
      <TabFilter class="justify-start" :filters="league_filters" name="league" :selected='league'></TabFilter>
      <TabFilter class="justify-end" :filters="lane_filters" name="lane" :selected='lane'></TabFilter>
    </div>
    <TierList :tier_list="tier_list"></TierList>
  </div>
</template>
