
import { Database } from './utils/database.types.ts'

export interface WebPodcast {
    id: number
    title: string
    chatUrl: string
    author: string
    description: string
    copyright: string
    rssUrl: string
    updateTime: Date
    episodesUrl: string
    detailUrl: string
    imageUrl: string
}

import { SupabaseClient } from '@supabase/supabase-js'

// by convention, composable function names start with "use"
export function usePodcastParser() {


    function serverPodcastToWebPodcast(podcast: Database['public']['Tables']["podcasts"]): WebPodcast {
        const cleanedTitle = makeKeySafe(podcast.title)
        return {
            id: podcast.id,
            title: podcast.title,
            copyright: podcast.copyright,
            author: podcast.author,
            description: podcast.description,
            imageUrl: podcast.public_image_url,
            rssUrl: podcast.original_rss_url,
            updateTime: podcast.etl_time,
            detailUrl: `/podcasts/${cleanedTitle}-${podcast.id}`,
            episodesUrl: `/podcasts/${cleanedTitle}-${podcast.id}/episodes`,
            chatUrl: `/podcast/${cleanedTitle}-${podcast.id}#chat`,
        }
    }

    async function fetchPodcast(podcastId: number, supabase: SupabaseClient): Promise<WebPodcast> {
        log("Fetching podcast by id: " + podcastId)
        const { data, error } = await supabase
            .from('podcasts')
            .select('*')
            .eq('id', podcastId)
            .single()

        if (error) {
            console.log(error)
            throw new Error(error.message)
        } else {
            return new Promise<WebPodcast>(function (resolve, reject) {
                resolve(serverPodcastToWebPodcast(data))
                reject(new Error("Could not fetch podcast"))
            })
        }
    }

    return { serverPodcastToWebPodcast, fetchPodcast }
}