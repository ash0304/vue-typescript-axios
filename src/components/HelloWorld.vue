<template>
  <div class="hello">
    <div v-on:click="test">
      {{ testMsg }}
    </div>
    <br>
    <div>
      <button class="btn btn-primary" @click="login">Login</button>
    </div>
    <br>
    <input type="text" v-model="vertifyCode">
    <p>{{ vertifyCode }}</p>
    <div>
      <img :src="vertifyUrl">
    </div>
    <br>
    <div>
      <button class="btn btn-primary" @click="getMemberData">Get MemberData</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getAPIService } from '../service/getAPI.service';
import { Md5 } from 'md5-typescript';
import { baseService } from '../service/base.service';
import { authService } from '../service/auth.service';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private vertifyKey: string = '';
  private vertifyUrl: string = '';
  private vertifyCode: string = '';
  private testMsg: string = 'Test Call API';

  private test() {
    return getAPIService.getAPI('https://ptx.transportdata.tw/MOTC/v2/Air/Airport?$top=30&$format=JSON')
    .then((resp) => {
      console.log(resp);
    });
  }
  private beforeMount() {
    this.getCaptcha();
  }

  private getMemberData() {
    return baseService.post<any , any>('/API/Agent/GetAsync', {}).then((resp) => {
      console.log(resp.data.Data);
    });
  }

  private login() {
    const password = Md5.init('123456');
    return baseService.postByHeadersForm<string , any>(
      '/API/Agent/LoginAsync',
      'grant_type=password&userName=' +
      'mx' +
      '&password=' +
      password +
      '&resolution=' +
      '' +
      '&userAgent=' +
      '' +
      '&verifyKey=' +
      this.vertifyKey +
      '&verifyCode=' +
      this.vertifyCode,
      ).then( async (resp) => {
        authService.setAccessToken(resp.data.access_token);
        authService.setAuthenticated('true');
      });
  }
  // 生成驗證碼字串
  private generateString(minLength: number, maxLength: number, value: string) {
    value = value || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let length = 0;
    length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);

    let randomString = '';
    for (let i = 0; i < length; i++) {
      let randomPoz = 0;
      randomPoz = Math.floor(Math.random() * value.length);
      randomString += value.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }

  // 取得驗證碼
  private getCaptchaService(key: string) {
    return 'http://agentapi.dev.ssope.com/API/VerifyCode/Get?key=' + key;
  }

  private getCaptcha() {
    // 生成隨機字串
    this.vertifyKey = this.generateString(10, 15, '');
    // 生成驗證圖片
    this.vertifyUrl = this.getCaptchaService(this.vertifyKey);
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
