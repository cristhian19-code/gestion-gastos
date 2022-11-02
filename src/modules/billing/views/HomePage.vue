<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import Collapse from "../components/Collapse.vue";
import { computed } from "vue";
import { useUiStore } from "../../../store";

const ui = useUiStore();

const darkmode = computed(() => ui.darkmode)

</script>

<template>
    <div class="grid grid-cols-12 h-full">
        <div class="col-start-2 col-span-10 h-full py-9 px-5">
            <div class="grid grid-cols-2 w-full gap-3">
                <div
                    class="col-span-1 h-52 w-full rounded-xl p-5 border border-gray-200 font-bold flex flex-col justify-between items-start bg-white">
                    <div>
                        <p class="text-gray-600 text-lg">Pago del mes</p>
                        <h1 class="text-3xl  text-gray-800 mt-1">S/.1600<span class="text-xs">.00</span> </h1>
                        <p class="text-xs mt-2 text-gray-500">18/04/2022</p>
                    </div>
                    <button class="mt-7 px-5 py-2 bg-blue-700 text-white rounded-md shadow-md shadow-blue-400">Cambiar
                        Monto</button>
                </div>
                <div
                    class="col-span-1 h-52 w-full rounded-xl p-5 border border-gray-200 font-bold flex flex-col justify-between items-start bg-white">
                    <div class="flex justify-between w-full">
                        <div>
                            <p class="text-gray-600 text-lg">Gasto mes</p>
                            <h1 class="text-3xl  text-gray-800 mt-1">S/.400<span class="text-xs">.00</span> </h1>
                        </div>
                        <div class="h-20 w-20">
                         <circle-progress :border-width="20" style="width: 100%;height: 100%;" :percent="70" />
                        </div>
                    </div>

                    <button class="mt-7 px-5 py-2 bg-gray-900 text-white rounded-md shadow-md shadow-gray-400">Ver
                        Detalles</button>
                </div>
            </div>
            <div class="mt-10">
                <h1 class="text-2xl font-bold" :class="darkmode ? 'text-gray-400' : 'text-gray-700'">Historia de pagos</h1>
                <div class="flex flex-col mt-5">
                    <div class="w-full py-3 px-5 grid grid-cols-12 rounded-lg font-bold text-gray-600" :class="darkmode ? 'bg-gray-100' : 'bg-gray-300/50'">
                        <div class="col-span-3">Monto</div>
                        <div class="col-span-3">Estado</div>
                        <div class="col-span-2">Categoria</div>
                        <div class="col-span-2">Fecha</div>
                        <div class="col-span-2"></div>
                    </div>
                    
                    <collapse />
                    <collapse />
                    <collapse />
                    <collapse />
                    <collapse />
                    <collapse />
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
tr:nth-child(1) {
    border-radius: 50px;
}
</style>