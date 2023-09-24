<script setup lang="ts">
const props = defineProps<{
    podcastId: number
}>()

const user = useSupabaseUser()

const loggedInUser = ref(user.value === null ? false : true)

const placeholder = ref(loggedInUser.value ? "Ask a question" : "Login to ask a question")

interface PodcastChatRequest {
    message: string
    user_id: string
    podcast_id: number
}

interface BasicMessage {
    author: string
    content: string
    id: number
}

let history = ref([]) as Ref<BasicMessage[]>

function pushToHistory(value: BasicMessage) {
    history.value.push(value)
}

const emit = defineEmits(['ai-response'])


const basicChatUrl: string = "http://localhost:8000/api/v0/chat/podcast"

async function askAI(q: string) {
    log("Sending request: " + q)
    pushToHistory({
        author: "human",
        content: q,
        id: id++
    })
    const body: PodcastChatRequest = {
        message: q,
        user_id: user.value.id,
        podcast_id: props.podcastId
    }
    console.log(body)
    const { data } = await useFetch<ModelResponseMessage>(basicChatUrl, {
        method: "POST",
        body: body,
    })
    log("Received following message from server:")
    log(data)

    // rewrite this if statement so that it behaves more like episodes
    // and podcasts
    if (data.value !== null) {
        pushToHistory({
            author: "ai",
            content: data.value?.message,
            id: id++
        })
        // could send the incoming message, just to be able to link them
        // but don't think it's necessary

        emit('ai-response', data.value?.sources)

    } else {
        console.error("No response from AI")
    }
}



// https://vuejs.org/tutorial/#step-13
const question = ref("")


let id = 0

pushToHistory({
    author: "ai",
    content: "Hello, I'm the AI",
    id: id++
})
pushToHistory({
    author: "human",
    content: "Hello, I'm the AI",
    id: id++
})
</script>


<template>
    <div class="container mx-auto grid grid-flow-row auto-rows-max">
        <div class="space-y-5 p-4 rounded-xl h-96 max-h-screen overflow-y-auto shadow-md">
            <div class="grid justify-items-stretch" v-for="msg in history">
                <ChatMessage :msg="msg" />
            </div>
        </div>

    </div>
    <div class="container mx-auto grid grid-flow-row auto-rows-max">
        <div class="p-4 mt-4 shadow-sm">
            <form class="grid grid-cols-6" @submit.prevent="askAI(question)">
                <input :disabled='!loggedInUser' type="text"
                    class="rounded-l-lg col-span-5 border-grey-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-slate-200"
                    :placeholder="placeholder" v-model="question" />
                <button :disabled='!loggedInUser'
                    class="bg-sky-300 p-4 border-grey-300 rounded-r-lg col-span-1 hover:bg-sky-400 disabled:bg-slate-200">
                    Send
                </button>
            </form>
        </div>
    </div>
</template>


