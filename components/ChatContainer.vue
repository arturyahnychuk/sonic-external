<script setup lang="ts">
import { WebEpisode } from "@/composables/episode"
import { WebPodcast } from "@/composables/podcast"


defineProps<{
    podcast: WebPodcast
}>();
// Will want to change this up
// to make it compatible with episodes too


interface ModelActivity {
    id: number
    audioUrlWithTs: string
    metadata: ModelResponseSourceMetadata
    episode: WebEpisode
    podcast: WebPodcast
}

function secondsToTimestamp(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


async function addToSources(srcs: ModelResponseSource[]) {
    for (const src of srcs) {
        const episode = await parseEpisode.fetchEpisode(src.metadata.episode_id, supabase)
        const podcast = await parsePodcast.fetchPodcast(src.metadata.podcast_id, supabase)
        id += 1
        activity.value.push({
            id: id,
            audioUrlWithTs: episode.audioUrl + "#t=" + secondsToTimestamp(src.metadata.audio_start_time),
            metadata: src.metadata,
            episode: episode,
            podcast: podcast
        })
    }
    console.log(activity.value)
}

function formatDate(date: Date) {
    const month = date.getMonth() + 1; // getMonth() is zero-based, so add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
}


const parsePodcast = usePodcastParser()
const parseEpisode = useEpisodeParser()
const supabase = useSupabaseClient()
let id: number = 0;
const activity = ref([]) as Ref<ModelActivity[]>



</script>
<template>
    <div class="mx-auto max-w-7xl my-32 sm:px-6 lg:px-8 grid grid-cols-12 grid-flow-rows gap-12">
        <div class="col-span-12 flex items-center justify-center">
            <h1 class="text-4xl font-bold"> Chat with Podcast: {{ podcast.title }}</h1>
        </div>

        <div class="col-span-5 row-span-20">
            <ul role="list" class="space-y-6">
                <li v-if="activity.length !== 0" v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id"
                    class="relative flex gap-x-4">
                    <div
                        :class="[activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6', 'absolute left-0 top-0 flex w-6 justify-center']">
                        <div class="w-px bg-gray-200" />
                    </div>

                    <img :src="activityItem.podcast.imageUrl" alt=""
                        class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" />
                    <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                        <div class="flex justify-between gap-x-4">
                            <div class="py-0.5 text-xs leading-5 text-gray-500">
                                <span class="font-medium text-gray-900">{{ activityItem.podcast.title.slice(0, 40)
                                }}</span>
                            </div>
                            <time :datetime="formatDate(activityItem.episode.publishedDate)"
                                class="flex-none py-0.5 text-xs leading-5 text-gray-500">{{
                                    formatDate(activityItem.episode.publishedDate) }}</time>
                        </div>

                        <audio controls>
                            <source :src="activityItem.audioUrlWithTs" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>


                </li>
                <li v-else>
                    <div class="relative flex gap-x-4">
                        <div class="h-6 absolute left-0 top-0 flex w-6 justify-center">
                            <div class="w-px bg-gray-200" />
                        </div>
                        <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                            <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                        </div>
                        <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                            <span class="font-medium text-gray-900">Podcast & Episode information will show up here as you
                                chat with the Podcast</span>
                        </p>
                    </div>
                </li>
            </ul>



        </div>


        <div class="col-span-7 row-span-20">
            <Chat @ai-response="(srcs) => addToSources(srcs)" :podcast-id="podcast.id" />
        </div>

    </div>
</template>@/composables/episode