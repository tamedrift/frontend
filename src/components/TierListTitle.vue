<template>
    <div class="py-3 px-3 text-left flex">
        <h1 class="text-xl font-bold tracking-tight text-white sm:text-3xl">Wild Rift Tier List</h1>
        <h1 class="ml-2 tracking-tight text-white sm:text-3xl">for {{ this.lanes[lane] }}, {{ this.leagues[league] }}</h1>
        <div class="bg-gray-800 px-3 py-1 ml-6 rounded-lg text-sm bg-opacity-50 leading-8 text-gray-300">
            {{ this.formatDate(date) }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TierListTitle',
    props: {
        league: Number,
        lane: Number,
        date: String,
    },
    data() {
        return {
            leagues: {
                1: 'Diamond',
                2: 'Master',
                3: 'Grandmaster',
                4: 'Challenger',
            },
            lanes: {
                1: 'Mid',
                2: 'Top',
                3: 'ADC',
                4: 'Support',
                5: 'Jungle',
            },
        }
    },
    methods: {
        formatDate(inputDate) {
            const months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            const dateParts = inputDate.split("-");
            const year = dateParts[0];
            const monthIndex = parseInt(dateParts[1], 10) - 1;
            const day = parseInt(dateParts[2], 10);

            const daySuffix = this.getDaySuffix(day);
            const formattedDate = `${day}${daySuffix} ${months[monthIndex]} ${year}`;

            return formattedDate;
        },

        getDaySuffix(day) {
            if (day >= 11 && day <= 13) {
                return "th";
            }
            switch (day % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }
    }
}
</script>