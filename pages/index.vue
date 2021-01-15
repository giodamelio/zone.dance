<template>
  <div class="container">
    <GradientBar v-bind="{ width, height, stops }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      height: 100,
      width: 300,
      stops: [
        [0, 'red'],
        [45, 'red'],
        [55, 'blue'],
        [100, 'blue'],
      ],
    }
  },
})
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
