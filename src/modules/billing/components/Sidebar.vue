<script setup lang="ts">
import { useUiStore } from "../../../store";
import { computed } from "vue";
import {useWindowSize} from '@vueuse/core'

//components
import Link from './Link.vue';
import ButtonIcon from "./ButtonIcon.vue";

//interfaces
interface LinkInterface {
    icon: string;
    label: string;
    name: string;
}

//composables
const ui = useUiStore()
const windowSize = useWindowSize()



//computed
const isMobile = computed(()=> windowSize.width.value <= 768 );

const darkmode = computed(() => ui.darkmode)
const sidebar = computed(() => ui.sidebar)


//methods
const toggleSidebar = () => ui.toggleSidebar()

const listLinks:LinkInterface[] = [
    {
        icon: 'ri-home-line',
        label: 'Inicio',
        name: 'inicio-pagos'
    },
    {
        icon: 'ri-calendar-line',
        label: 'Planificar Pagos',
        name: 'planificar-pagos'
    },
    {
        icon: 'ri-bill-line',
        label: 'Lista Pagos',
        name: 'lista-pagos'
    }
]

</script>

<template>
<aside class="w-64 bg-white border-r-2 border-r-gray-200 py-3 transition-all duration-300 z-30 h-screen" :class="`${darkmode && 'bg-gray-800 border-r-blue-100'}  ${isMobile ? 'absolute top-0 left-0 w-3/4':'relative'} ${sidebar && '-left-full'}`">
    <button-icon v-if="isMobile" @click="toggleSidebar" class="absolute top-5 right-5" icon="ri-close-line" color="bg-blue-500"/>
    
    <h1 class="text-4xl text-blue-500 font-bold text-center mb-10">GastiApp</h1>
    <ul>
        <li v-for="link in listLinks" :key="link.name" class="mb-4"><Link :icon="link.icon" :label="link.label" :name="link.name"/></li>
    </ul>
</aside>
</template>