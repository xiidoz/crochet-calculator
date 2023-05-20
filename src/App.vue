<template>
    <div class="container">
        <header class="border-bottom pb-3 mb-4">
            <h1 class="display-1">
                <a class="text-reset text-decoration-none" href="/">
                    xiidoz.com
                </a>
            </h1>
        </header>
        <div class="row">
            <div class="col-lg-8 mb-3">
                <OutputCard :rowCount="rowCount" :steps="steps"/>
            </div>
            <div class="col-lg-4">
                <SettingsCard :initialRows="rowCount"
                    :initialIncreasePerRow="increasePerRow"
                    @settingsChanged="onSettingsChanged" />
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
import SettingsCard from "./components/SettingsCard.vue"
import OutputCard from "./components/OutputCard.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        SettingsCard,
        OutputCard,
        Footer,
    },
    data () {
        return {
            //rowCount: settings.initialRowCount,
            //increasePerRow: settings.initialIncreasePerRow
            //steps: stepCalculation.calculate(settings.initialRowCount, settings.initialIncreasePerRow)
        }
    },
    computed: {
        steps () {
            return this.$store.state.steps;
        },
        rowCount () {
            return this.$store.state.settings.rowCount;
        },
        increasePerRow () {
            return this.$store.state.settings.increasePerRow;
        }
    },
    // watch: {
    //     rowCount: function() {
    //         this.steps = [];
    //     },
    //     increasePerRow: function() {
    //         this.steps = [];
    //     }
    // },
    methods: {
        onSettingsChanged: function(settings) {
            this.$store.commit("setSettings", settings);
        }
    },
    mounted () {
        console.log(this.$store.state.steps);
        if(typeof this.$store.state.steps == "undefined"
            || !Array.isArray(this.$store.state.steps)
            || this.$store.state.steps.length == 0) {
            this.$store.dispatch("calculateSteps");
        }
    }
};
</script>
