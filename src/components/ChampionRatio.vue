<template>
  <td scope="col" class="px-6 py-3 text-right">
    {{ parseFloat(ratio * 100).toFixed(2) }}%
  </td>
</template>

<script>
export default {
  name: 'ChampionRatio',
  props: {
    ratio: Number
  }
}
</script>
