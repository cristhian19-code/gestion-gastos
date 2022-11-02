<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { useUiStore } from "../../../store";
import { computed } from "vue";
import ButtonIcon from "../components/ButtonIcon.vue";

const toggleDarkmode = () => ui.toggleDarkmode();
const toggleSidebar = () => ui.toggleSidebar();

const ui = useUiStore()

const darkmode = computed(() => ui.darkmode)
const sidebar = computed(() => ui.sidebar)

</script>

<template>
  <div class="flex w-screen h-screen transition-all" :class="`${darkmode && 'bg-gray-800'}`">
      <Sidebar />
      
      <main class="w-full overflow-auto">
        <router-view></router-view>
      </main>
      <ButtonIcon v-if="sidebar" @click="toggleSidebar" class="absolute top-20 right-5 transition-all" icon="ri-menu-line" :color="!darkmode?'bg-blue-500':'bg-white text-blue-500'"/>

      <ButtonIcon @click="toggleDarkmode" class="absolute top-10 right-5 transition-all" :icon="darkmode ? 'ri-sun-line' : 'ri-moon-line'" :color="!darkmode?'bg-blue-500':'bg-white text-blue-500'"/>

  </div>
</template>