<template>
    <tr 
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
        <td scope="col" class="px-6 py-3 flex">
            <img class="flex-none inline-block w-10 h-10 sm:w-12 sm:h-12 rounded-full mt-1" src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="User Avatar">
            <div class="ml-3 py-3">
                <p class="text-sm font-medium text-gray-800">Ashe</p>
                <p class="text-xs text-gray-500">The Frost Archer</p>
            </div>
        </td>
        <td scope="col" class="px-6 py-3 text-center">1</td>
        <td scope="col" class="px-6 py-3 text-right">{{ champion_stat.fields.win_rate }}</td>
        <td scope="col" class="px-6 py-3 text-right">{{ champion_stat.fields.appear_rate }}</td>
        <td scope="col" class="px-6 py-3 text-right">{{ champion_stat.fields.forbid_rate }}</td>
    </tr>
</template>

<script>
export default {
    name: "ChampionStatistic",
    props: {
        champion_stat: Object
    },
}
</script>