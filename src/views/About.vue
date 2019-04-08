<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter.vue';

@Component({
  components: {
    Counter,
  },
})
export default class About extends Vue {}
</script>

