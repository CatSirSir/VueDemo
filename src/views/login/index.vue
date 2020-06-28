<template>
    <div :class="$style.loginContainer" @click="ckEvent">
        <p>ddd</p>
        {{this.$store.state.settings.st}} <br>
        {{this.$store.getters['settings/getSt']}}
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {

        },
        methods:{
            ckEvent(){
                this.$store.commit('settings/increment');
            }
        }

    }
</script>

<style module>
    .loginContainer {
        color: green;
    }
</style>