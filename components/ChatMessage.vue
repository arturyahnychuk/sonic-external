<script setup lang="ts">

defineProps<{
    msg: BasicMessage
}>();


</script>
<template>
    <!-- Can improve this layout by incorporating this as well
    https://tailwindcomponents.com/component/messages-ui-layout
 -->
    <div v-if="msg.author === 'ai'"
        class="rounded-t-lg rounded-r-lg bg-slate-300 text-left p-2 pl-4 shadow-md max-w-fit pr-4 mr-8">
        <!-- <span class="rounded-full shadow px-3 py-2 bg-slate-200 mr-4 p-2 text-sm">R</span> -->
        <h3 class="max-w-fit"> {{
            msg.content }}</h3>
    </div>
    <div v-else
        class="rounded-t-lg rounded-l-lg text-left bg-sky-100 p-2 pr-4 shadow-md col-span-6 max-w-fit justify-self-end pl-4 ml-8">

        <h3 class="max-w-fit"> {{ msg.content }}</h3>
    </div>
</template>