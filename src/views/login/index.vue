<template>
    <div :class="$style.login-container">
        <p >ddd</p>
        {{this.$store.state.settings.st}} <br>
        {{this.$store.getters['settings/getSSS']}}
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            console.log(1);
        }

    }
</script>

<style module>
p{
    color:black;
}
</style>