<script lang="ts">
  import { slide } from 'svelte/transition';

  let visible = true;

  function toggleVisibility() {
    visible = !visible;
  }
</script>

<div class="container">
  <div class="title">
    <span>Debug</span>
    <button on:click={toggleVisibility}>
      {#if visible}
        ▲
      {:else}
        ▼
      {/if}
    </button>
  </div>

  {#if visible}
    <div class="body" transition:slide>
      <slot />
    </div>
  {/if}
</div>

<style>
  :root {
    /* https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff */
    --black: #000000ff;
    --oxford-blue: #14213dff;
    --orange-web: #fca311ff;
    --platinum: #e5e5e5ff;
    --white: #ffffffff;
  }

  .container {
    /* Make it stick to the upper left corner */
    position: absolute;
    top: 0;
    left: 0;

    padding: 0.3rem;

    color: var(--platinum);
    background-color: var(--oxford-blue);
  }

  .title {
    margin: 0 auto;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  .title > span {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  .title > button {
    outline: none;
    color: var(--platinum);
    background-color: var(--oxford-blue);
    border: none;
    cursor: grab;
    margin: 0;
  }
</style>
