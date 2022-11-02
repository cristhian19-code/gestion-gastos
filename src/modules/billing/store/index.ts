import { defineStore,StoreDefinition } from "pinia";

interface State {
    darkmode: boolean;
}

export const useillingStore = defineStore('billing',{
    state:():State => ({
    }),
    getters: {

    },
    actions: {
    }
})