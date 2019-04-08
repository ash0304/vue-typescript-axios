<template>
  <div class="table">
    <div class="container">
      <div class="row">
        <div class="col-4"  v-for="item of userData" :key="item.id">
          <div class="card">
            <img class="card-img-top avatar" :src="item.avatar">
            <div class="card-body">
              <h5 class="card-title">{{item.first_name}} {{item.last_name}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAPIService } from '../service/getAPI.service';

@Component
export default class TableList extends Vue {
  private userData = [];
  private beforeMount() {
      this.getUser();
  }
  private getUser() {
    return getAPIService
      .getAPI('https://reqres.in/api/users')
      .then((resp: any) => {
        this.userData = resp.data.data;
      });
  }
}
</script>

<style lang="scss" scoped>
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto;
}
</style>


