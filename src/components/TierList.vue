<template>
  <div class="container mx-auto py-10 w-3/5">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          <TierListRow :champion_ratios="champion_ratios" :key="i" :index="i + 1"
            v-for="[i, champion_ratios] in tier_list.entries()"></TierListRow>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TierListRow from './TierListRow.vue'

// this is how you sort on a property
// homes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

// computed: {
//   sortedData: function() {
//      return this.data.sort(function(a, b) {
//         return a.name > b.name;
//      });
//   }
// }

export default {
  name: 'TierList',
  components: {
    TierListRow
  },
  props: {
    tier_list: Array
  },
}
</script>
