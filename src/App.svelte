<script lang="ts">
  import { zones } from './stores';
  import CurrentDateTime from './components/CurrentDateTime.svelte';
</script>

<svelte:head>
  <!-- Will be replaced by Rollup via `@rollup/plugin-replace` -->
  <title>__site_title__</title>
</svelte:head>

<main>
  <h1>Zone Dance</h1>

  <ul>
    {#each $zones as zone}
      <li>
        {zone.name}: {zone.zone.name} = <CurrentDateTime zone={zone.zone} />
      </li>
    {/each}
  </ul>
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
