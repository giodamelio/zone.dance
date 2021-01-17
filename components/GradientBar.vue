<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="gradient">
      <stop
        v-for="stop in convertedStops"
        :key="stop.offset"
        :offset="stop.offset"
        :stop-color="stop.color"
      />
    </linearGradient>
    <rect
      x="0"
      y="0"
      :width="width"
      :height="height"
      :rx="radius"
      fill="url(#gradient)"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

type Stop = [number, string]

export default Vue.extend({
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    radius: {
      type: Number,
      default: 0,
    },
    stops: {
      type: Array as () => Stop[],
      required: true,
      validator(value: Stop[]) {
        return value.every(([offset, color]) => {
          return (
            typeof offset === 'number' &&
            typeof color === 'string' &&
            offset <= 100 &&
            offset >= 0
          )
        })
      },
    },
  },
  computed: {
    convertedStops() {
      return this.stops.map((stop: Stop) => {
        return {
          offset: `${stop[0]}%`,
          color: stop[1],
        }
      })
    },
  },
})
</script>
