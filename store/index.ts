type State = {
  zones: string[]
}

export const state: Function = () => ({
  zones: ['America/Chicago', 'America/Phoenix'],
})

export const mutations = {
  add(state: State, zone: string) {
    state.zones.push(zone)
  },
  remove(state: State, zoneIndex: number) {
    state.zones.splice(zoneIndex, 1)
  },
}
