<script lang="ts">
	import MapSvg from "./MapSvg.svelte";

	let { src }: { src?: string } = $props();
</script>

<div class="*:w-full *:h-auto relative">
	<MapSvg />
</div>
