import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
/**
 * store在模块化时，依然可以再根节点上绑定action，mutation，getters等节点
 * @type {Store<unknown>}
 */
const store = new Vuex.Store({
  namespaced: true,
  modules
});
export default store;
