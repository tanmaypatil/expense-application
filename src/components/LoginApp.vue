<template>

  <h1>Expense application</h1>
  <h2 v-if="user">signed user: {{user}}</h2>
  <el-form>
  <el-button type="primary" @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">sign in using google</el-button>
  <el-button type="info" @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</el-button>
  <el-button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized" round>disconnect</el-button>
  </el-form>

</template>

<script>
import { inject, toRefs } from "vue";
import {  onUpdated } from 'vue'

export default {
  name: "LoginApp",
  props: {
    msg: String,
  },

  data(){
    return {
      user: '',
    }
  },

  methods: {
    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log("getId", this.user);
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
        console.log('move to expense page');
        this.$router.push('/expense');

      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickGetAuthCode(){
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch(error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
    
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    const handleClickLogin = () => {};
    onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log('updated hook called');
   
});
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<style>

</style>
