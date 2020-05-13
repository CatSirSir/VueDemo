import Vue from 'vue'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElmentUI, { size: 'small'})

import router from "@/router/route";
import App from './App.vue'
import store from "@/store/store";
import '@/assets/styles/app.scss'
import api from "@/api/api";

Vue.config.productionTip = false
//接口挂载到Vue的原型上
Vue.prototype.$api=api


new Vue({
    render: h => h(App), router,store
}).$mount('#app')

