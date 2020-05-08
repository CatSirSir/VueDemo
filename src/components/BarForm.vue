<template>
    <transition name="slide">
    <form>
        {{$route.params.id}} ha
    </form>
    </transition>
</template>

<script>
    export default {
        name: "BarForm"
    }
</script>

<style scoped>

</style>