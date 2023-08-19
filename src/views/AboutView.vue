<script>
import { ArrowPathIcon, CloudArrowUpIcon } from '@heroicons/vue/20/solid'
import { ArrowTrendingUpIcon } from '@heroicons/vue/24/solid';

export default {
    name: "AboutView",
    data() {
        return {
            features: [
                {
                    name: 'Data',
                    description:
                        'As of today, Riot does not have an official API for Wild Rift. The only available source data are the win, pick and ban rates from the chinese server. The tier list on this page is calculated based on that data. The champion pool is split by league and lane. The tier list is essentialy each champion\'s quantile.',
                    icon: CloudArrowUpIcon,
                },
                {
                    name: 'Frequency',
                    description:
                        'The source data is updated on a weekly basis. You might notice a delay of up to one day before the data is scraped and displayed here.',
                    icon: ArrowPathIcon,
                },
                {
                    name: 'Visualizations',
                    description:
                        'The bars in the tier list are a visual representation of the percentiles to which the champion belongs with regards to the given variable (ratio in this case).',
                    icon: ArrowTrendingUpIcon,
                },
            ]
        }
    }
}
</script>

<template>
    <div class="py-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base font-semibold leading-7 text-indigo-400">Lose faster</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to climb out of
                    bronze</p>
                <p class="mt-6 text-lg leading-8 text-gray-300">Do you suck at solo queue? Is it always your team's fault?
                    Check out our tier list data and finally unravel the secret behind your 40% win rate!</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                        <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                            <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                            <p class="flex-auto">{{ feature.description }}</p>

                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>