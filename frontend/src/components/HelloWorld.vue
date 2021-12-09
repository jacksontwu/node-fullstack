<template>
    <div v-html="mdText"></div>
</template>

<script lang="ts">
import { marked } from 'marked';
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const { msg } = toRefs(props);
        const mdText = computed(() => {
            return marked(msg.value);
        });

        return {
            mdText,
        };
    },
});
</script>
