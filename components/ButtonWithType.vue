<script setup lang="ts">
defineProps<{
    link: String,
    type: String,
}>();
import { ChatBubbleLeftRightIcon, RssIcon } from '@heroicons/vue/20/solid'

function linkText(type: String): String {
    if (type === 'rss') {
        return 'RSS Feed'
    } else if (type === "chat") {
        return 'Chat'
    } else if (type === "episodes") {
        return 'Episodes'
    }

    throw new Error(`Unknown type: ${type}`)
}
</script>

<template>
    <NuxtLink :to="link" v-if="type === 'chat'"
        class="inline-flex items-center gap-x-2 rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
        <ChatBubbleLeftRightIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        <span>{{ linkText(type) }}</span>
    </NuxtLink>
    <NuxtLink :to="link" v-if="type === 'episodes'"
        class="inline-flex ml-5 items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <ChatBubbleLeftRightIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        <span>{{ linkText(type) }}</span>
    </NuxtLink>
    <NuxtLink :to="link" v-if="type === 'rss'"
        class=" inline-flex ml-5 items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <RssIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        <span>{{ linkText(type) }}</span>
    </NuxtLink>
</template>