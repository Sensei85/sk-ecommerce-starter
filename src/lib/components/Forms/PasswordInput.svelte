<script lang="ts">
	export let id: string = '';
	export let value: string = '';
	export let label: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let autocomplete: string = '';
	export let inputMode: string = 'password' || 'text';
	export let enterKeyHint: string = 'next';
	export let constraints: object = {};
	export let errors: [];

	let passwordInput: HTMLInputElement;
	let showPassword = false;

	const togglePasswordVisibility = () => {
		if (passwordInput.type === 'text') {
			passwordInput.type = 'password';
			showPassword = false;
		} else {
			passwordInput.type = 'text';
			showPassword = true;
		}
	};
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

	<div class="relative inline-block w-full">
		<button
			class="absolute inset-y-0 right-0 left-auto flex items-center justify-center w-6 text-sm leading-5"
			type="button"
			on:click={togglePasswordVisibility}
		>
			{#if showPassword}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-gray-400 mt-1"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
					/></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-gray-400 mt-1"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
					/></svg
				>
			{/if}
		</button>

		<input
			bind:this={passwordInput}
			class="mt-1 flex w-full items-center border-none px-0 py-2 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
			{id}
			{type}
			{value}
			name={id}
			{required}
			{disabled}
			{placeholder}
			{autocomplete}
			enterkeyhint={enterKeyHint}
			inputmode={inputMode}
			{...constraints}
		/>
	</div>
</label>
{#if errors}
	<div class="mt-1">
		{#each errors as error}
			<span class="block text-sm text-red-500">{error}</span>
		{/each}
	</div>
{/if}
