const state = {
    st: 1
};
const mutations = {
    increment : (state)=>{
        state.st += 1;
    }
};
//异步访问
const actions = {

};
const getters = {
    getSSS: (state) => {
        return state.st + 1 + 'getter';
    }
}
export default {namespaced: true, state, mutations, actions,getters};
