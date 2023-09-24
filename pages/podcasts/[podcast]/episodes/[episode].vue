<script setup lang="ts">
import { WebEpisode } from '@/composables/episode';

const route = useRoute()
const parsePodcast = usePodcastParser()
const parseEpisode = useEpisodeParser()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const podcastId = getIdFromUrl(route.params['podcast'])
const episodeId = getIdFromUrl(route.params['episode'])
const podcast = await parsePodcast.fetchPodcast(podcastId, supabase)
let episode: WebEpisode

const { data, error } = await supabase
    .from('episodes')
    .select('*')
    .eq('id', episodeId)
    .single()

if (error) {
    console.error(error)
    throw error
}

if (data !== null) {
    episode = parseEpisode.serverEpisodeToWebEpisode(data, podcast)
}




</script>

<template>
    <div class="mx-auto max-w-7xl my-32 sm:px-6 lg:px-8 grid grid-cols-12 grid-flow-rows gap-12">
        <div class="col-span-7">
            <div>
                <div class="px-4 sm:px-0">
                    <h1 class="text-base font-semibold leading-7 text-gray-900">{{ episode.title }}</h1>
                    <h2 class="text-base font-semibold leading-7 text-gray-900">{{ podcast.title }}</h2>

                </div>
                <div class="mt-6">
                    <dl class="grid grid-cols-1 sm:grid-cols-2">





                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">About this episode</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2" v-html="episode.description"></dd>
                        </div>

                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">

                            <ButtonWithType :link="podcast.rssUrl" type="rss" />
                            <ButtonWithType :link="podcast.chatUrl" type="chat" />
                            <ButtonWithType :link="podcast.episodes" type="episodes" />

                        </div>
                    </dl>
                </div>
            </div>
        </div>


    </div>
</template>
