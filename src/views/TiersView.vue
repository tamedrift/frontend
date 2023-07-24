<script>
import TierList from '../components/TierList.vue'
import TabFilter from '../components/TabFilter.vue'

import TierListTitle from '../components/TierListTitle.vue'
export default {
  name: 'TiersView',
  data() {
    return {
      tier_list: [],
      loading: false,
      error: null,
      league: 1,
      lane: 2,
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
        `api/wildrift_cn/champion_statistics?league=${this.league}&lane=${this.lane}`
      )
      const data = await res.json()

      this.loading = false
      return data
    }
  },
  async created() {
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
    <TierListTitle></TierListTitle>
    <div class="flex py-3 h-20 justify-between">
      <TabFilter class="justify-start" :filters="[
        { key: 1, value: 'Diamond+' },
        { key: 2, value: 'Master+' },
        { key: 3, value: 'Grandmaster+' },
        { key: 4, value: 'Challenger' },
      ]" name="league" :selected='league'></TabFilter>
      <TabFilter class="justify-end" :filters="[
        { key: 1, value: 'Mid' },
        { key: 2, value: 'Solo' },
        { key: 3, value: 'Duo' },
        { key: 4, value: 'Support' },
        { key: 5, value: 'Jungle' },
      ]" name="lane" :selected='lane'></TabFilter>
    </div>
    <TierList :tier_list="tier_list"></TierList>
  </div>
</template>
