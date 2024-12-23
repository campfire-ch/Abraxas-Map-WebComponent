<script lang="ts">
    import { regionsCulture, selectedRegionStore } from "../stores/mapStores";
    import { slide } from "svelte/transition";
    import { expoInOut } from "svelte/easing";

    const handleClick = (index: string) => {
        if ($selectedRegionStore === index) {
            $selectedRegionStore = null;
        } else {
            $selectedRegionStore = index;
        }
    };
    let { lang }: { lang: string } = $props();

    let regions = regionsCulture[lang];
</script>

<div class="flex flex-col gap-4">
    {#each regions as region}
        <div>
            <button
                aria-expanded={$selectedRegionStore === region.index}
                class="bg-red-200 py-3 px-4 rounded"
                type="button"
                onclick={() => handleClick(region.index)}
            >
                {region.name}
            </button>
            {#if $selectedRegionStore === region.index}
                <div
                    transition:slide={{
                        duration: 325,
                        axis: "y",
                        easing: expoInOut,
                    }}
                >
                    {region.description}
                </div>
            {/if}
        </div>
    {/each}
</div>
