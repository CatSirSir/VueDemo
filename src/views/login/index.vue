<template>
    <div :class="$style.loginContainer">
        <p>ddd</p>
        {{this.$store.state.settings.st}} <br>
        {{this.$store.getters['settings/getSSS']}}
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {

        }

    }
</script>

<style module>
    .loginContainer {
        color: green;
    }
</style>