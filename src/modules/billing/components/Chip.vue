<script setup lang="ts">

const colors = {red: 'bg-red-300/60 text-red-600', green: 'bg-green-300/60 text-green-600', blue: 'bg-blue-300/60 text-blue-600', yellow: 'bg-yellow-300/60 text-yellow-600'};

interface chipProps{
    title: string;
    color: string | 'yellow';
}

const props = defineProps<chipProps>()

</script>

<template>
<div :class="colors[props.color]" class="w-fit px-2 py-0.5 rounded-md text-white font-bold text-sm">
    {{title}}
</div>
</template>