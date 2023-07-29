<script>
export default {
    name: "ErrorPage"
}
</script>

<template>
    <div class="py-24 sm:py-32 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <p class="text-lg font-semibold text-indigo-400">404</p>
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Page not found.</h1>
                <p class="mt-6 text-lg leading-8 text-gray-300">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <router-link to="/"
                        class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Return
                        Home</router-link>
                    <router-link to="#" class="text-sm font-semibold leading-6 text-white">Contact support <span
                            aria-hidden="true">→</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>