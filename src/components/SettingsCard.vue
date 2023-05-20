<template>
    <div class="card bg-light">
        <div class="card-body">
        <h5 class="card-title">Einstellungen</h5>
        <form>
            <div class="row align-items-center">
            <label for="rowRange" class="form-label"
                >Anzahl der Reihen: {{ rowCount }}</label
            >
            <div class="col-9">
                <input
                type="range"
                class="form-range mt-1"
                id="rowRange"
                :min="minRows"
                :max="maxRows"
                step="3"
                v-model.number="rowCount"
                />
            </div>
            <div class="col-3">
                <input
                type="number"
                class="form-control"
                id="rowNumber"
                :min="minRows"
                :max="maxRows"
                step="3"
                v-model.number="rowCount"
                />
            </div>
            </div>
            <div class="row align-items-center">
            <label for="increaseRange" class="form-label"
                >Zu-/Abnahme pro Reihe: {{ increasePerRow }}</label
            >
            <div class="col-9">
                <input
                type="range"
                class="form-range mt-1"
                id="increaseRange"
                :min="minIncreasePerRow"
                :max="maxIncreasePerRow"
                v-model.number="increasePerRow"
                />
            </div>
            <div class="col-3">
                <input
                type="number"
                class="form-control"
                id="increaseNumber"
                :min="minIncreasePerRow"
                :max="maxIncreasePerRow"
                v-model.number="increasePerRow"
                />
            </div>
            </div>
            <button
                class="btn btn-primary"
                type="button"
                @click="onSubmitButtonClicked">Anwenden</button>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        initialRows: Number,
        initialIncreasePerRow: Number,
    },
    data: function () {
        return {
            minRows: 13,
            maxRows: 100,
            minIncreasePerRow: 5,
            maxIncreasePerRow: 7,
            rowCount: this.initialRows,
            increasePerRow: this.initialIncreasePerRow,
        };
    },
    methods: {
        onSubmitButtonClicked () {
            this.$emit("settingsChanged", {
                rowCount: this.rowCount,
                increasePerRow: this.increasePerRow,
            });
        }
    }
};
</script>
