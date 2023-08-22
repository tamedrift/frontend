<script>
import TierList from '../components/TierList.vue'
import ListBox from '../components/ListBox.vue'
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
      lane: 1,
      leagues: [
        { name: 'Diamond', key: 1, image: 'ranks/s13/mini/diamond.svg' },
        { name: 'Master', key: 2, image: 'ranks/s13/mini/master.svg' },
        { name: 'Grandmaster', key: 3, image: 'ranks/s13/mini/grandmaster.svg' },
        { name: 'Challenger', key: 4, image: 'ranks/s13/mini/challenger.svg' }
      ],
      lanes: [
        { name: 'Mid', key: 1, image: 'roles/mid.svg' },
        { name: 'Solo', key: 2, image: 'roles/top.svg' },
        { name: 'Duo', key: 3, image: 'roles/bot.svg' },
        { name: 'Support', key: 4, image: 'roles/supp.svg' },
        { name: 'Jungle', key: 5, image: 'roles/jung.svg' }
      ],
      api: import.meta.env.VITE_API_URL,
    }
  },
  components: {
    TierList,
    ListBox,
    TierListTitle
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
        `${this.api}/tier_list?league=${this.league}&lane=${this.lane}&dtstatdate=${this.last_date}`
      )
      const data = await res.json()

      this.loading = false
      return data
    },
    async fetchLastDate() {
      const res = await fetch(`${this.api}/last_date`)
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
  <div class="container mx-auto w-3/5">
    <TierListTitle :league="league" :lane="lane" :date="last_date"></TierListTitle>
    <div class="flex py-3 space-x-4 sm:flex-row">
      <ListBox class="z-20" :filters="leagues" category="league"></ListBox>
      <ListBox class="z-10" :filters="lanes" category="lane"></ListBox>
    </div>
    <TierList :tier_list="tier_list"></TierList>
  </div>
</template>
