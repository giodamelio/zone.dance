import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import luxon from 'luxon';

function createZones(initial: Zone[]) {
  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    set,
    update,
  };
}

interface Zone {
  zone: luxon.Zone;
  name: string;
}

export const zones: Writable<Zone[]> = createZones([
  {
    name: 'Austin',
    zone: luxon.DateTime.local().zone,
  },
  {
    name: 'Seattle',
    zone: luxon.IANAZone.create('America/Los_Angeles'),
  },
]);
