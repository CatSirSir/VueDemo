import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/aa', component: ()=>import("@/views/login/index" )
    }
]
/**
 * router过多需要拆分时，建立多个子模块，此处导入再汇总
 * @type {VueRouter}
 */
const router = new VueRouter({
    routes
})


export default router;