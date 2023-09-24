<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)
const email = ref('bill.sells.stuff@gmail.com')

if (user.value !== null) {
    navigateTo("/auth/profile/")
}

</script>



<template>
    <h1>Redirecting you .... </h1>
</template>