import Vue from 'vue'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElmentUI)

import router from "@/router/route";
import App from './App.vue'
import store from "@/store/store";
import '@/assets/styles/app.scss'

Vue.config.productionTip = false



new Vue({
    render: h => h(App), router,store
}).$mount('#app')

