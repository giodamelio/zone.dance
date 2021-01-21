<script lang="ts">
  import DebugPane, { DebugButton } from './debug-pane';
  import { count } from './stores';

  export let name: string = 'HAHA';
</script>

<main>
  <DebugPane>
    <DebugButton
      title="Increment"
      on:click={() => count.update((n) => n + 1)}
    />
    <DebugButton
      title="Decrement"
      on:click={() => count.update((n) => n - 1)}
    />
  </DebugPane>

  <h1>Hello {name}!</h1>

  <p>
    There is nothing here right now, but you should check back every day to make
    sure!
  </p>

  <p>The current count is at: {$count}</p>
  <button on:click={() => count.update((n) => n + 1)}>+</button>
  <button on:click={() => count.update((n) => n - 1)}>-</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
