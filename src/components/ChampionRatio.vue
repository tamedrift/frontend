<template>
  <span class="px-3 font-semibold text-sm">{{ ratio }}</span>
</template>

<script>
export default {
  name: 'ChampionRatio',
  props: {
    ratio: Number
  }
}
</script>
