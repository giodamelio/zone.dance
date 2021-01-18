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
import { mapMutations, Store } from 'vuex'
import Tweakpane from 'tweakpane'

// Simple Debugging pane
const store: Store<any> = global.__VUE_DEVTOOLS_GLOBAL_HOOK__.store
const pane = new Tweakpane()
const PARAMS = {
  zonesCount: store.state.zones.length,
}
pane.addMonitor(PARAMS, 'zonesCount')
store.subscribe((_mutation, state) => {
  PARAMS.zonesCount = state.zones.length
})
const addLA = pane.addButton({
  title: 'Add "America/Los_Angeles" zone',
})
addLA.on('click', () => {
  store.commit('add', 'America/Los_Angeles')
})

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
