<script lang="ts">
  import { selectedRegionStore } from "../stores/mapStores";
  import Pin from "./icons/Pin.svelte";

  let {
    left,
    top,
    dataId,
  }: {
    left: string;
    top: string;
    dataId: string;
  } = $props();

  const openCarouselID = () => {
    selectedRegionStore.set(dataId);
  };
</script>

<button
  class="absolute w-[15px] xl:w-[34px] -translate-x-4 -translate-y-full"
  style="left:{left};top:{top}; "
  aria-label="show-city"
  onclick={openCarouselID}
>
  <Pin />
</button>
