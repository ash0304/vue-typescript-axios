<template>
  <div class="formList">
    <h2>Vue Form Validation</h2>

    <div class="container">
      <div class="row">
        <div class="col-4 form-area">
          <form autocomplete="off">
            <div class="form-group">
              <label for="exampleInputAccount1">Account</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputAccount1"
                placeholder="Enter Account"
                name="account"
                v-model="account"
              >
              <small class="errorMsg">{{ accountErrMsg }}</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                v-model="password"
              >
              <small class="errorMsg">{{ passwordErrMsg }}</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class FormList extends Vue {
    private account = '';
    private password = '';
    private accountError = false;
    private passwordError = false;
    private accountErrMsg = '';
    private passwordErrMsg = '';

    // Watch Account
    @Watch('account')
    private checkAccount() {
        const isText = /^[a-zA-Z0-9]+$/;
        if (!isText.test(this.account)) {
            this.accountError = true;
            this.accountErrMsg = '請勿包含特殊字元';
        } else if (this.account.length > 10) {
            this.accountError = true;
            this.accountErrMsg = '請勿超過10個字';
        } else {
            this.accountError = false;
            this.accountErrMsg = '';
        }
    }
    // Watch Password
    @Watch('password')
    private checkPassword() {
        const isText = /^[a-zA-Z0-9]+$/;
        const isclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if (!isText.test(this.password)) {
            this.passwordError = true;
            this.passwordErrMsg = '請勿包含特殊字元';
        } else if (this.password.length < 6) {
            this.passwordError = true;
            this.passwordErrMsg = '請勿少於6個字';
        } else if (this.password.length > 15) {
            this.passwordError = true;
            this.passwordErrMsg = '請勿超過15個字';
        } else if (!isclde.test(this.password)) {
            this.passwordError = true;
            this.passwordErrMsg = '請至少包括一個大小寫字母或數字';
        } else {
            this.passwordError = false;
            this.passwordErrMsg = '';
        }
    }
}
</script>

<style lang="scss" scoped>

.form-area {
    margin: 0 auto;
}

.errorMsg {
    color: red;
}

</style>

