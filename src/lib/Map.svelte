<script lang="ts">
	import { selectedRegionStore } from "../stores/mapStores";
	import MapSvg from "./MapSvg.svelte";
	import PinButton from "./PinButton.svelte";
</script>

<div class="*:w-full *:h-auto relative">
	<div class="absolute w- h-100 top-0 left-0 right-0 bottom-0">
		<PinButton left="77%" top="17.4%" dataId="st-gallen" />
		<PinButton left="76%" top="17.3%" dataId="st-gallen-winkeln" />
		<PinButton left="57.8%" top="19.4%" dataId="zurich-flughafen" />
		<PinButton left="65%" top="11%" dataId="frauenfled" />
		<PinButton left="34%" top="42%" dataId="bern" />
		<PinButton left="11.8%" top="62.6%" dataId="morges" />
		<PinButton left="36%" top="15%" dataId="munchenstein" />
		<PinButton left="58.5%" top="19.6%" dataId="kloten" />
	</div>
	<MapSvg />
</div>
