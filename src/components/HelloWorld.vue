<template>
  <div class="hello">
    <div v-on:click="test">
      {{ testMsg }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getAPIService } from '../service/getAPI.service';
import { Md5 } from 'md5-typescript';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private testMsg: string = 'Test Call API';

  private test() {
    return getAPIService.getAPI('https://ptx.transportdata.tw/MOTC/v2/Air/Airport?$top=30&$format=JSON')
    .then((resp) => {
      console.log(resp);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
