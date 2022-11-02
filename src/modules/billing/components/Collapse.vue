<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import { useUiStore } from "../../../store";
//components
import ButtonIcon from "../components/ButtonIcon.vue";
import Chip from "../components/Chip.vue";

//composables
const ui = useUiStore()

//data
const collapse = ref(false)

//computed
const darkmode = computed(() => ui.darkmode)


</script>
<template>
  <div
    class="w-full py-5 px-5 grid grid-cols-12 mt-3 items-center font-bold transition-colors duration-200" :class="`${collapse ? 'bg-blue-500/80 text-white': 'bg-white text-gray-500'} ${!darkmode && 'border'} ${collapse ? 'rounded-t-lg' : 'rounded-lg'}`">
    <div class="col-span-3">S/65.00</div>
    <div class="col-span-3">
      <chip title="Pendiente" color="blue" />
    </div>
    <div class="col-span-2">Servicio</div>
    <div class="col-span-2">12/04/2022</div>
    <div class="col-span-2 flex justify-center">
      <button-icon @click="collapse = !collapse" class="text-gray-500" color="bg-gray-200"
        icon="ri-arrow-down-s-line" />
    </div>
  </div>
  <transition name="slide">
    <div v-if="collapse" class="bg-white description grid grid-cols-12 rounded-b-lg mt-0 p-3 shadow-lg">
      <div class="col-span-4 p-2">
        <h3 class="text-lg font-medium text-md text-gray-800">Gasto para la comida</h3>
        <p class="text-sm pr-2"><i class="ri-error-warning-line"></i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, quam asperiores. Eum deleniti libero fugit, saepe ipsa in doloribus ducimus!</p>
      </div>
      <div class="col-span-5 grid grid-cols-2 grid-rows-2">
        <div class="p-2 font-bold">
          <h5 class="text-sm text-gray-600 font-medium">STATUS</h5>
          <p class="text-md text-gray-800">Pendiente</p>
        </div>
        <div class="p-2 font-bold">
          <h5 class="text-sm text-gray-600 font-medium">ID GEN.</h5>
          <p class="text-md text-gray-800">S$%58763DFR</p>
        </div>
        <div class="p-2 font-bold">
          <h5 class="text-sm text-gray-600 font-medium">PROGRAMADA</h5>
          <p class="text-md text-gray-800 ">20/05/2022</p>
        </div>
        <div class="p-2 font-bold">
          <h5 class="text-sm text-gray-600 font-medium">EJECUTADA</h5>
          <p class="text-md text-gray-800">26/05/2022</p>
        </div>
      </div>
      <div class="col-span-3 text-right p-2">
        <h4 class="text-lg font-medium text-md text-gray-600">Monto Utilizado</h4>
        <p class="text-2xl font-bold text-gray-800">S/65.00</p>
      </div>
    </div>
  </transition>
</template>

<style>
.description {
  width: 100%;
  list-style-type: none;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>
