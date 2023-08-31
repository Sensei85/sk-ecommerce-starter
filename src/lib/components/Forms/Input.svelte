<script lang="ts">
	export let id: string = ''
	export let value: string = ''
	export let label: string = ''
	export let type: string = 'text'
	export let placeholder: string = ''
	export let disabled: boolean = false
	export let required: boolean = false

	export let errors: []
</script>

<label
	for={id}
	class="block overflow-hidden rounded-md border {errors
		? 'border-red-500'
		: 'border-gray-200'} px-3 py-2 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600"
>
	<span class="font-medium text-xs text-gray-700">
		{label} <span class="text-red-500">{required ? '*' : ''}</span></span
	>

	<input
		class="mt-1 w-full border-none px-0 py-1 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>
</label>
{#if errors}
	<div class="mt-1">
		{#each errors as error}
			<span class="block text-sm text-red-500">{error}</span>
		{/each}
	</div>
{/if}
