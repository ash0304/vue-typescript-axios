<template>
    <div class="formPage">
        This is Form Page
        <br>
        <FormList/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormList from '@/components/FormList.vue';

@Component({
    components: {
        FormList,
    },
})
export default class Form extends Vue {}
</script>
