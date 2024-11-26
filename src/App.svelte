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
  <div class="map-title">{title}</div>
  <Map src={mapScr} />
  <Accordion />
</main>

<style>
</style>
