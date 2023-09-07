<script lang="ts">
	export let open: boolean;
	export let badgeCount: number;
</script>

<div>
	<button
		class="hover:bg-gray-200/70 rounded-full p-2"
		type="button"
		on:click={() => (open = !open)}
	>
		<slot />
	</button>
	<!-- Favorite item count positioning -->
	<div
		class="absolute top-2 right-2 pointer-events-none transform translate-x-1/2 -translate-y-1/2"
	>
		<!-- Favorite item count -->
		{#if badgeCount}
			<div
				class="min-w-[1.75rem] inline-flex items-center justify-center h-7 text-l text-black bg-yellow-400 rounded-full px-1"
			>
				{badgeCount}
			</div>
		{/if}
	</div>
</div>
