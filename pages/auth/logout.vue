<script setup lang="ts">

const user = useSupabaseUser()
const supabase = useSupabaseClient()



if (user.value) {
    supabase.auth.signOut()
}

navigateTo("/")
</script>

<template></template>