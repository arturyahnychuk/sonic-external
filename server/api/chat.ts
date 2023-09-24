export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    console.log(body)

    const data = {
        "message": body.message + "response",
        "sources": [
            {
                "page_content": "some content",
                "metadata": {
                    "audio_start_time": 0.0,
                    "episode_id": 31,
                    "podcast_id": 9
                }
            },
            {
                "page_content": "some other content",
                "metadata": {
                    "audio_start_time": 60.0,
                    "episode_id": 61,
                    "podcast_id": 9
                }
            },
            {
                "page_content": "Some irrelevant content",
                "metadata": {
                    "audio_start_time": 60.0,
                    "episode_id": 63,
                    "podcast_id": 13
                }
            }
        ]
    }


    return data
})