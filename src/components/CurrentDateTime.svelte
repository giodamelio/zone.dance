<script lang="ts">
  import { Zone, DateTime } from 'luxon';
  import { onInterval } from '../utils';

  export let zone: Zone;
  export let format = DateTime.DATETIME_MED_WITH_SECONDS;

  function currentDateTime(): string {
    return DateTime.fromObject({
      zone,
    }).toLocaleString(format);
  }

  $: dateTimeString = currentDateTime();

  onInterval(() => (dateTimeString = currentDateTime()), 250);
</script>

<span>{dateTimeString}</span>

<style>
</style>
