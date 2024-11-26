<script lang="ts">
    import { selectedRegionStore } from "../stores/mapStores";
    import { slide } from "svelte/transition";
    import { expoInOut } from "svelte/easing";

    let regions = [
        {
            index: "frauenfled",
            name: "Fraeunfeld",
        },
        {
            index: "bern",
            name: "bern",
        },
    ];
    const handleClick = (index: string) => {
        if ($selectedRegionStore === index) {
            $selectedRegionStore = null;
        } else {
            $selectedRegionStore = index;
        }
    };
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio non necessitatibus, officia impedit molestiae
                    repellendus tempore ratione deserunt sunt temporibus animi
                    accusantium perferendis laboriosam. Facere non cum iure ipsa
                    in!
                </div>
            {/if}
        </div>
    {/each}
</div>
