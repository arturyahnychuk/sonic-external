


interface ModelResponseSourceMetadata {
    audio_start_time: number
    episode_id: number
    podcast_id: number
}
interface ModelResponseSource {
    page_content: string
    metadata: ModelResponseSourceMetadata
}


interface ModelResponseMessage {
    message: string
    sources: ModelResponseSource[]
}



// what we get back from the API
interface ResponseSource {
    title: string
    published_date: string
    podcast: string
    // TODO: Needs to be updated with timestamps
}
interface RawResponseMessage {
    response: string
    sources: ResponseSource[]
}

