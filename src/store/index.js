import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import stepCalculation from "../modules/step-calculation";

export default createStore({
    state: {
        settings: {
            rowCount: 19,
            increasePerRow: 6
        },
        steps: []
    },
    mutations: {
        setSettings(store, settings) {
            store.settings.rowCount = settings.rowCount;
            store.settings.increasePerRow = settings.increasePerRow;
            store.steps = stepCalculation.calculate(settings.rowCount, settings.increasePerRow)
        },
        calculateSteps(store) {
            store.steps = stepCalculation.calculate(store.settings.rowCount, store.settings.increasePerRow);
        },
        invertIsCompleted(store, stepIndex) {
            store.steps[stepIndex].isCompleted = !store.steps[stepIndex].isCompleted;
        }
    },
    actions: {
        calculateSteps(store) {
            store.commit("calculateSteps");
        }
    },
    plugins: [createPersistedState()],
});