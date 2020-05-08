<template>
    <div>
        当前是Bar
        <br>
        <router-link to="/name/11">11</router-link> <br>
        <router-link to="/name/22">22</router-link>
        <router-view name="a"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Bar"
    }
</script>

<style scoped>

</style>