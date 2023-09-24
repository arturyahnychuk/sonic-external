export default {
    async fetch(request, env, ctx) {
        const url: string = "http://127.0.0.1:8000/api/v0/streaming"
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'text/event-stream',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: await request.body
            })
        }


        let response = await fetch(url, fetchOptions);

        // Create an identity TransformStream (a.k.a. a pipe).
        // The readable side will become our new response body.
        let { readable, writable } = new TransformStream();

        // Start pumping the body. NOTE: No await!
        response.body.pipeTo(writable);

        // ... and deliver our Response while that’s running.
        return new Response(readable, response);
    }
}


// WIP

async function StreamBodyText(body) {
    const reader = body.getReader()
    const decoder = new TextDecoder();
    let isOpen = true

    console.log("reading")
    async function read() {
        const { done, value } = await reader.read();
        if (done) {
            console.log("done")
            return
        }
        const chunk = decoder.decode(value, { stream: true })
        console.log(chunk)
        return read()
    }

    return read()
}



//     const url: string = "http://127.0.0.1:8000/api/v0/streaming"
//     const healthCheck = "http://127.0.0.1:8000/api/v0/"
//     console.log("Making Request")
//     const fetchOptions = {
//         method: 'POST',
//         headers: {
//             'Accept': 'text/event-stream',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             input: "write me a song about sparkling water"
//         })
//     }
//     const response = fetch(url, fetchOptions)
//         .then(response => response.body)
//         .then(StreamBodyText)


//     console.log("Request Complete")
//     // const result = await streamText(response.body)
//     // console.log(result)





// import { get } from "http"

// async function StreamBodyText(body) {
//     const reader = body.getReader()
//     const decoder = new TextDecoder();
//     let isOpen = true

//     console.log("reading")
//     async function read() {
//         const { done, value } = await reader.read();
//         if (done) {
//             console.log("done")
//             return
//         }
//         const chunk = decoder.decode(value, { stream: true })
//         console.log(chunk)
//         return read()
//     }

//     return read()
// }

// export default defineEventHandler(async (event) => {
//     const url: string = "http://127.0.0.1:8000/api/v0/streaming"
//     const healthCheck = "http://127.0.0.1:8000/api/v0/"
//     console.log("Making Request")
//     const fetchOptions = {
//         method: 'POST',
//         headers: {
//             'Accept': 'text/event-stream',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             input: "write me a song about sparkling water"
//         })
//     }
//     const response = fetch(url, fetchOptions)
//         .then(response => response.body)
//         .then(StreamBodyText)


//     console.log("Request Complete")
//     // const result = await streamText(response.body)
//     // console.log(result)
//     return "hello"
//     // const reader = response.body.getReader()
//     // let result = ''
//     // reader.read().then(function process({ done, value }) {
//     //     if (done) {
//     //         console.log('Stream complete result =>', result)
//     //         return
//     //     }
//     //     console.log("value")
//     //     const decoder = new TextDecoder('utf-8')
//     //     result += decoder.decode(value, { stream: true })
//     //     // Read some more, and call this function again
//     //     return reader.read().then(process)
//     // })

// })

// // https://www.designcise.com/web/tutorial/how-to-convert-javascript-readablestream-object-to-json
// // async function toJSON(body) {
// //     const reader = body.getReader(); // `ReadableStreamDefaultReader`
// //     const decoder = new TextDecoder();
// //     const chunks = [];
// //     async function read() {
// //         const { done, value } = await reader.read();
// //         // all chunks have been read?
// //         if (done) {
// //             return JSON.parse(chunks.join(''));
// //         }
// //         const chunk = decoder.decode(value, { stream: true });
// //         chunks.push(chunk);
// //         return read(); // read the next chunk
// //     }
// //     return read();
// // }