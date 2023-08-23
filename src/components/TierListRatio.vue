<template>
  <td scope="col" class="px-6 py-3 text-right">
    <p class="text-sm">{{ numPercentage }}%</p>
    <div class="flex-start flex h-4 w-full overflow-hidden rounded-full bg-gray-600 font-sans text-xs font-medium">
      <div class="flex h-full items-baseline justify-center overflow-hidden break-all text-gray-200" :class="color"
        :style="{ width: barWidth + '%' }">
      </div>
    </div>
  </td>
</template>

<script>
export default {
  name: 'TierListRatio',
  props: {
    ratio: String,
    color: String,
    barWidth: Number
  },
  computed: {
    numPercentage() {
      return parseFloat(this.ratio * 100).toFixed(2)
    }
  }
}
</script>
