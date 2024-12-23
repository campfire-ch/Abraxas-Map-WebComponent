<script lang="ts">
  import Accordion from "./lib/Accordion.svelte";
  import { selectedRegionStore } from "./stores/mapStores";

  //import Counter from "./lib/Counter.svelte";
  import Map from "./lib/Map.svelte";

  let mainApp = document.getElementById("abraxas-map-webcomponent");
  let title: string | undefined;
  let lang: string = document.documentElement.lang || "de";
  if (lang !== "fr" && lang !== "de") {
    lang = "de";
  }

  if (mainApp) {
    title = mainApp.dataset.title;
  }
</script>

<main>
  {import.meta.env.BASE_URL}
  <h2 class="text-petrol-100 text-[32px]">{title}</h2>
  <div class="md:flex">
    <div class="md:flex-none md:w-1/2 bg-[#E5EFF1] md:mr-3">
      <Map />
    </div>
    <div class="md:flex-none md:w-1/2 md:ml-3">
      <Accordion {lang} />
    </div>
  </div>
</main>

<style>
</style>
