
<script>
import TierListRow from './TierListRow.vue'
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/24/solid"

export default {
  name: 'TierList',
  props: {
    tier_list: Object,
  },
  components: {
    TierListRow,
    ArrowDownIcon,
    ArrowUpIcon
  },
  data() {
    return {
      sort_cols: [
        { 'column': 'Win Rate', 'key': 'win_bzc' },
        { 'column': 'Pick Rate', 'key': 'appear_bzc' },
        { 'column': 'Ban Rate', 'key': 'forbid_bzc' }
      ],
      sort_key: 'win_bzc',
      reverse: false,
      sorted_tier_list: undefined
    }
  },
  watch: {
    tier_list(val) {
      this.sorted_tier_list = val
    }
  },
  methods: {
    sort_by(key) {
      if (this.sort_key == key) {
        this.reverse = !this.reverse
        this.sorted_tier_list = this.sorted_tier_list.reverse()
      } else {
        this.reverse = false
        this.sort_key = key
        this.sorted_tier_list = this.sorted_tier_list.slice().sort((a, b) => b[key] - a[key])
      }
    }
  }
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="table-auto w-full">
      <thead class="text-xs h-14 uppercase bg-gray-900 text-gray-300">
        <tr>
          <th></th>
          <th class="px-6 py-3 text-left">Champion</th>
          <th class="px-6 py-3 text-center">Tier</th>
          <th :key="item.key" v-for="item in sort_cols" class="px-6 py-3"
            :class="{ 'text-indigo-600': sort_key == item.key }">
            <span class="flex justify-end">
              <ArrowUpIcon class="h-4 px-1" :class="{ hidden: sort_key != item.key || !reverse }" />
              <ArrowDownIcon class="h-4 px-1" :class="{ hidden: sort_key != item.key || reverse }" />
              <router-link to="" @click="sort_by(item.key)">{{ item.column }}</router-link>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <TierListRow :champion_ratios="champion_ratios" :key="champion_ratios.hero_id" :index="index + 1"
          v-for="(champion_ratios, index) in sorted_tier_list"></TierListRow>
      </tbody>
    </table>
  </div>
</template>
