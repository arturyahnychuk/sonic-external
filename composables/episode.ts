
import { WebPodcast, usePodcastParser } from './podcast.js'
import { Database } from './utils/database.types.ts'
import { SupabaseClient } from '@supabase/supabase-js'

export interface WebEpisode {
    id: number
    title: string
    description: string
    imageUrl: string
    episodeUrl: string
    author: string
    publishedDate: Date
    audioUrl: string
    updateTime: Date
    available: boolean
}

const podcastParser = usePodcastParser()

export function useEpisodeParser() {

    async function fetchEpisodesFromPodcastId(id: number, supabase: SupabaseClient): Promise<WebEpisode[]> {
        const { data, error } = await supabase
            .from('episodes')
            .select('*')
            .eq('podcast_id', id)
            .order("published_date", { ascending: false })
            .limit(10) // refactor to include limit to function

        let podcast: WebPodcast

        await podcastParser.fetchPodcast(id, supabase).then((podcastData) => {
            podcast = podcastData
        }).catch((error) => {
            throw new Error(error.message)
        })

        if (error) {
            throw new Error(error.message)
        } else {
            if (data === null) {
                throw new Error("Episode does not exist")
            } else {
                return data.map((episode) => {
                    return serverEpisodeToWebEpisode(episode, podcast)
                })
            }

        }
    }

    async function fetchEpisode(id: number, supabase: SupabaseClient): Promise<WebEpisode> {
        log("Fetching episode by id: " + id)
        const { data, error } = await supabase
            .from('episodes')
            .select('*')
            .eq('id', id)
            .single()

        let podcast: WebPodcast

        if (error) {
            console.log(error)
            throw new Error(error.message)
        } else if (data === null) {
            throw new Error("Data is null")
        } else {
            await podcastParser.fetchPodcast(data.podcast_id, supabase).then((podcastData) => {
                podcast = podcastData
                log("Podcast data: " + podcastData)
            }).catch((error) => {
                throw new Error(error.message)
            })

            return new Promise<WebEpisode>(function (resolve, reject) {
                resolve(serverEpisodeToWebEpisode(data, podcast))
                reject(new Error("Could not fetch episode"))
            })
        }
    }


    function serverEpisodeToWebEpisode(episode: Database['public']['Tables']["episodes"], podcast: WebPodcast): WebEpisode {

        const urlTitle = makeKeySafe(episode.title);
        return {
            id: episode.id,
            title: episode.title,
            description: episode.description.replaceAll("<a href=", "<a class='text-blue-500' href="),
            imageUrl: episode.public_image_url,
            publishedDate: new Date(episode.published_date),
            episodeUrl: `${podcast.episodesUrl}/${urlTitle}-${episode.id}`,
            author: episode.author,
            audioUrl: episode.public_audio_url,
            updateTime: new Date(episode.etl_time),
            available: episode.available,

        }
    }


    return { serverEpisodeToWebEpisode, fetchEpisodesFromPodcastId, fetchEpisode }

}