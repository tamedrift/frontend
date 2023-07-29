<template>
    <!-- TODO:  Dynamic league, lane and patch info -->
    <div class="mx-auto max-w-2xl pb-6 text-center">
        <h1 class="text-xl font-bold tracking-tight text-white sm:text-3xl">Champion Tier List</h1>
        <p class="mt-6 text-l leading-8 text-gray-300">
            {{ lanes[lane] }} lane champion ratios based on {{ leagues[league].slice(0, -1) }} solo queue players.
        </p>
    </div>
</template>

<script>
export default {
    name: 'TierListTitle',
    props: {
        league: [String, Number],
        lane: [String, Number],
        leagues: Object,
        lanes: Object,
    }
}
</script>