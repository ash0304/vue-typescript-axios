<template>
    <div class="page">
        This is Page !
        <TableList/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TableList from '@/components/TableList.vue';

@Component({
    components: {
        TableList,
    },
})

export default class Page extends Vue {}
</script>

