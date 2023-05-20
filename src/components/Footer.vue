<template>
    <nav class="navbar fixed-bottom">
        <div class="container-fluid">
            <span class="navbar-text">
                <CopyrightIcon title="hui" />&nbsp;xiidoz.com
            </span>
        </div>
    </nav>
</template>

<script>
import { Copyright as CopyrightIcon } from "mdue";
export default {
    components: {
        CopyrightIcon,
    },
};
</script>
