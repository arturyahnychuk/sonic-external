<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)
const email = ref('mtbsnapshot@gmail.com')

if (user.value !== null) {
    navigateTo("/auth/profile/")
}
async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'spotify',
    })
}



// TODO: add a redirect if already logged in

// const handleLogin = async () => {
//     try {
//         loading.value = true
//         const { error } = await supabase.auth.signInWithOtp({
//             email: email.value,
//             options: {
//                 emailRedirectTo: 'http://localhost:3000/auth/profile',
//             }
//         })
//         if (error) throw error
//         alert('Check your email for the login link!')
//     } catch (error) {
//         alert(error.error_description || error.message)
//     } finally {
//         loading.value = false
//     }
// }
definePageMeta({
    layout: "minimal",
});
</script>



<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login with Spotify
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" @submit.prevent="signInWithSpotify">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" v-model='email' required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>


                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        :value="loading ? 'Loading' : 'Login with Spotify'" :disabled="loading">Send
                        me my login link</button>
                </div>
            </form>

            <!-- <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free
                    trial</a>
            </p> -->
        </div>
    </div>
</template>