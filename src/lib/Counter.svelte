<script lang="ts">
  let {
    title,
    lead,
    amount,
  }: { title?: string; lead?: string; amount?: number } = $props();

  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
</script>

<button onclick={increment}>
  count is {count}: {title}
</button>
