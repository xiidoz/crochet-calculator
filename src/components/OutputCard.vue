<template>
    <div class="card bg-light">
        <div class="card-body">
            <h5 class="card-title">Schritte</h5>
            <ol class="list-group">
                <StepListItem v-for="step in steps" :key="step.index" :step="step"></StepListItem>
            </ol>
        </div>
    </div>
</template>

<script>
// import {
//     Email as EmailIcon,
//     At as AtIcon,
//     Fingerprint as FingerprintIcon,
//     Download as DownloadIcon,
//     AccountKey as AccountKeyIcon,
// } from "mdue";

import StepListItem from "./StepListItem.vue";

export default {
    components: {
        StepListItem
    },
    props: {
        rowCount: Number,
        steps: Array
    }
};
</script>
