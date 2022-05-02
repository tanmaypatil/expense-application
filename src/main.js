import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/style.css'
import gAuthPlugin from './plugins/vue3-google-oauth2';
import HelloWorld from './components/HelloWorld.vue'
import ExpenseApp from "./components/ExpenseApp.vue"
import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/expense', component: ExpenseApp }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(router);
let gauthClientId = process.env.VUE_APP_GAUTH_ID;
console.log('gauthClientId : '+process.env.VUE_APP_GAUTH_ID);
app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false })

app.use(ElementPlus);
app.mount('#app');
export default router;
