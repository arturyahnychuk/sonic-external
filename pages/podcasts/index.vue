<script setup lang="ts">
import { ChatBubbleLeftRightIcon, QueueListIcon, IdentificationIcon } from '@heroicons/vue/20/solid'
import { WebPodcast } from '@/composables/podcast';

// TODO: Why does the above thrown an error?
const parsePodcast = usePodcastParser()
const supabase = useSupabaseClient()
let podcasts: WebPodcast[] = []

console.log("here")

const { data, error } = await supabase.from('podcasts').select('*')

if (error) {
  console.log(error)
} else {
  podcasts = data.map((podcast) => {
    return parsePodcast.serverPodcastToWebPodcast(podcast)
  })
}

</script>

<template>
  <div class="mt-24 mx-64">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="podcast in podcasts" :key="podcast.title"
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div class="flex flex-1 flex-col p-8">
          <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="podcast.imageUrl" alt="" />
          <h3 class="mt-6 text-sm font-medium text-gray-900">{{ podcast.title }}</h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a :href="`${podcast.detailUrl}`"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <IdentificationIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                About
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a :href="`${podcast.chatUrl}`"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                <ChatBubbleLeftRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                Chat
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

