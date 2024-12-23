<script lang="ts">
	import MapSvg from "./MapSvg.svelte";
	import Pin from "./Pin.svelte";

	let { src }: { src?: string } = $props();
</script>

<div class="*:w-full *:h-auto relative">
	<div class="absolute w- h-100 top-0 left-0 right-0 bottom-0">
		<Pin left="77%" top="17.4%" />
		<Pin left="76%" top="17.3%" />
		<Pin left="57.8%" top="19.4%" />
		<Pin left="65%" top="11%" />
		<Pin left="34%" top="42%" />
		<Pin left="11.8%" top="62.6%" />
		<Pin left="36%" top="15%" />
		<Pin left="58.5%" top="19.6%" />
	</div>
	<MapSvg />
</div>
