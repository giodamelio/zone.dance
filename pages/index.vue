<template>
  <div class="container">
    <input placeholder="Add a zone" @keyup.enter="add" />
    <ul>
      <li v-for="(zone, index) in zones" :key="index">
        {{ zone }}
        <button @click="remove(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

interface InputEvent extends KeyboardEvent {
  target: HTMLInputElement
}

export default Vue.extend({
  computed: {
    zones() {
      return this.$store.state.zones
    },
  },
  methods: {
    ...mapMutations(['add', 'remove']),
    add(event: InputEvent) {
      this.$store.commit('add', event.target.value)
      event.target.value = ''
    },
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
