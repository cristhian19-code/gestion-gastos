<script setup lang="ts">
interface Props {
    icon: string | null;
    label?: string | null;
    color: string | null;
}

defineProps<Props>()

const emit = defineEmits(["click"])

const onClick = ()=>{
    emit("click")
}
</script>

<template>
<button @click="onClick" :class="`${color} text-white px-2 py-1 rounded-md flex justify-center items-center`">
    <i v-if="icon" class="text-xl" :class="icon"></i>
    <span v-if="label">{{label}}</span>
</button>
</template>