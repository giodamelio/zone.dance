import { writable } from 'svelte/store';

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    set,
    update,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
  };
}

export const count = createCount();

