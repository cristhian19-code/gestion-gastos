<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute();

interface Props {
    icon: string;
    label: string;
    name: string
}

const props = defineProps<Props>()

const isActive = () => {
    return route.name === props.name;
}

</script>

<template>
<router-link :to="{name}" class="flex items-center gap-2 transition-all pl-2 py-1" :class="isActive()  ? 'border-l-4 border-blue-400 text-blue-500 rounded-sm' : 'text-gray-400'">
    <i class="text-2xl" :class="icon"></i>
    <span class="text-md font-semibold">{{label}}</span>
</router-link>
</template>