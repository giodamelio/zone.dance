<script lang="ts">
  export let title: string;
</script>

<div class="container">
  <button on:click>{title}</button>
</div>

<style>
  .container > button {
    outline: none;
    color: var(--platinum);
    background-color: var(--oxford-blue);
    border: 2px solid var(--platinum);
    cursor: grab;
    margin: 0;
  }
</style>
