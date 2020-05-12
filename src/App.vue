<template>
  <div id="app">
    <bubble></bubble>
    <router-view/>
    <clear-float></clear-float>
  </div>
</template>

<script>

import Bubble from "@/components/background/bubble";
import ClearFloat from "@/components/layout/clearFloat";
export default {
  name: 'App',
  components: {
    ClearFloat,
    Bubble

  }
}
</script>

<style>


</style>
