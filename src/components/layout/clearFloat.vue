<template>
  <div :class="$style.clearDiv"></div>
</template>

<script>
export default {
  name: "clearFloat"
};
</script>

<style module>
.clearDiv {
  clear: both;
}
</style>
