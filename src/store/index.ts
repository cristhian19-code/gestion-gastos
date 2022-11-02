import { defineStore } from 'pinia';

interface State {
    darkmode: boolean;
}

export const useUiStore = defineStore('ui', {
    state: () => ({
        darkmode: false,
        sidebar: false,
    }),
    actions: {
        toggleDarkmode() {
            this.darkmode = !this.darkmode;
        },
        toggleSidebar() {
            this.sidebar = !this.sidebar;
        }
    }
})