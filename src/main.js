import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from "@/components/Foo";
import Bar from "@/components/Bar";
import BarForm from "@/components/BarForm";

Vue.config.productionTip = false
Vue.use(VueRouter)
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
    {
        path: '/bar', component: Bar,
            children: [{path: '/name/:id', components: {a:BarForm}}
        ]
    },
    {path: '/foo', component: Foo}

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
    render: h => h(App), router
}).$mount('#app')

// Now the app has started!