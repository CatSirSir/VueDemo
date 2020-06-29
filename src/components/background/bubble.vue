<template>
  <ul class="bg-bubbles">
    <li v-for="i in 10" :key="i"></li>
  </ul>
</template>

<script>
import "@/assets/styles/background/bubble.scss";
export default {
  name: "bubble"
};
</script>

<style scoped></style>
