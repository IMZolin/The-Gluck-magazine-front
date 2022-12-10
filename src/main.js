import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue2Editor from "vue2-editor";
// import './interceptors/axios'
createApp(App).use(Vue2Editor);

createApp(App).use(router).mount('#app')