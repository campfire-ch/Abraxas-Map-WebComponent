<script lang="ts">
  import Accordion from "./lib/Accordion.svelte";
  import { selectedRegionStore } from "./stores/mapStores";

  //import Counter from "./lib/Counter.svelte";
  import Map from "./lib/Map.svelte";

  let mainApp = document.getElementById("abraxas-map-webcomponent");
  let title: string | undefined;
  let mapScr: string | undefined;

  if (mainApp) {
    title = mainApp.dataset.title;
    mapScr = mainApp.dataset.mapSrc;
  }
</script>

<main>
  <h2 class="text-petrol-100 text-[32px]">{title}</h2>
  <div class="md:flex">
    <div class="md:flex-none md:w-1/2 bg-[#E5EFF1] md:mr-3">
      <Map src={mapScr} />
    </div>
    <div class="md:flex-none md:w-1/2 md:ml-3">
      <Accordion />
    </div>
  </div>
</main>

<style>
</style>
