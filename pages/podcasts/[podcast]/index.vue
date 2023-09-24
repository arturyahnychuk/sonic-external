<script setup lang="ts">
import { WebEpisode } from '@/composables/episode'
import { RssIcon } from '@heroicons/vue/20/solid'
const route = useRoute()
const parsePodcast = usePodcastParser()
const parseEpisode = useEpisodeParser()
const supabase = useSupabaseClient()
const user = useSupabaseUser()


function createTimelineItem(episode: WebEpisode) {
    const day: number = episode.publishedDate.getDate();
    const month: number = episode.publishedDate.getMonth() + 1;
    return {
        id: episode.id,
        content: "New Podcast Episode:",
        target: episode.title.slice(0, 75) + "...",
        href: episode.episodeUrl,
        date: `${month} - ${day}`,
        datetime: episode.publishedDate,
        icon: RssIcon,
        iconBackground: 'bg-gray-400'
    }
}


const podcastId = getIdFromUrl(route.params['podcast'])
const podcast = await parsePodcast.fetchPodcast(podcastId, supabase);
let episodes: WebEpisode[] = []
const episodeTimeline = []

const rawEpisodes = await supabase
    .from('episodes')
    .select('*')
    .eq('podcast_id', podcastId)
    .order("published_date", { ascending: false })
    .limit(5) // refactor to include limit to function

if (rawEpisodes.error) {
    console.log(rawEpisodes.error)
    throw new Error("Error")
}

if (rawEpisodes.data !== null) {
    rawEpisodes.data.forEach((item) => {
        episodeTimeline.push(createTimelineItem(parseEpisode.serverEpisodeToWebEpisode(item, podcast)))
    })
}

// AUDIO: https://codepen.io/CSWApps/pen/PJevMN

</script>

<template>
    <div class="mx-auto max-w-7xl my-32 sm:px-6 lg:px-8 grid grid-cols-12 grid-flow-rows gap-12">
        <div class="col-span-12 flex items-center justify-center">
            <h1 class="text-4xl font-bold"> {{ podcast.title }}</h1>
        </div>
        <div class="col-span-12 flex items-center justify-center">
            <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="podcast.imageUrl" alt="" />
        </div>

        <div class="col-span-7">
            <div>
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">{{ podcast.title }}</h3>
                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500" v-if="podcast.author">{{
                        podcast.author
                    }}</p>
                </div>
                <div class="mt-6">
                    <dl class="grid grid-cols-1 sm:grid-cols-2">





                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2"> {{ podcast.description }}</dd>
                        </div>

                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">


                            <ButtonWithType :link="podcast.chatUrl" type="chat" />
                            <ButtonWithType :link="podcast.episodesUrl" type="episodes" />
                            <ButtonWithType :link="podcast.rssUrl" type="rss" />

                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="col-span-5 row-span-10">
            <div class="flow-root">
                <ul role="list" class="-mb-8">
                    <li v-for="(event, eventIdx) in episodeTimeline" :key="event.id">
                        <div class="relative pb-8">
                            <span v-if="eventIdx !== episodeTimeline.length - 1"
                                class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            <div class="relative flex space-x-3">
                                <div>
                                    <span
                                        :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                                        <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p class="text-sm text-gray-500">
                                            {{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{
                                                event.target }}</a>
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time :datetime="event.datetime">{{ event.date }}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="chat">
        <ChatContainer :podcast="podcast" />
    </div>
</template>
@/composables/episode