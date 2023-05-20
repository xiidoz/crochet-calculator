<template>
    <li :class="{'list-group-item': true, 'list-group-item-success' : step.isCompleted}" @click="onClicked">
        <div>
            <div class="row">
                <div class="col">
                    <span>{{step.index + 1}}. {{step.stitches}} Maschen</span>
                </div>
            </div>
            <div class="row">
                <span>{{step.description}}</span>
            </div>
        </div>
    </li>
</template>

<script>
// import {
//     Email as EmailIcon,
//     At as AtIcon,
//     Fingerprint as FingerprintIcon,
//     Download as DownloadIcon,
//     AccountKey as AccountKeyIcon,
// } from "mdue";
export default {
    components: {
    },
    props: {
        step: Object
    },
    methods: {
        onClicked: function () {
            this.$store.commit("invertIsCompleted", this.step.index);
        }
    }
};
</script>
