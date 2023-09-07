<script lang="ts">
	import {
		decreaseCartItemQuantity,
		increaseCartItemQuantity,
		removeFromCart,
		toggleFavoriteItem,
		favoriteItemsCount
	} from '$lib/stores/cart';
	import { storeCurrency } from '$lib/stores/storeConfig';

	export let id: number | string;
	export let title: string;
	export let price: number;
	export let stock: string = 'In Stock';
	export let quantity: number;
	export let thumbnail: string;

	const cartItem = {
		id,
		title,
		price,
		quantity,
		thumbnail
	};

	const decreaseQty = (id: number | string) => {
		quantity = quantity - 1;
		if (quantity < 1) {
			removeFromCart(id);
			return;
		}
		decreaseCartItemQuantity(id);
	};

	const increaseQty = (id: number | string) => {
		quantity = quantity + 1;
		increaseCartItemQuantity(id);
	};

	$: {
		console.log(`favorites count: ${$favoriteItemsCount}`);
	}
</script>

<li class="flex py-4">
	<div class="w-28 h-28 flex-shrink-0 overflow-hidden rounded-md border-0 border-gray-200">
		<img
			loading="lazy"
			src={thumbnail}
			alt="alt-text"
			class="h-28 w-28 object-cover object-center bg-gray-300/80"
		/>
	</div>

	<div class="ml-4 flex flex-1 flex-col gap-y-2">
		<div>
			<div class="flex justify-between text-base font-medium text-gray-900">
				<h3 class="w-2/3 text-md">
					<a href="/shop/product/${id}">{title}</a>
				</h3>
				<p class="ml-4 text-sm text-slate-600">{$storeCurrency} {price}</p>
			</div>
			<p class="mt-1 text-xs text-gray-500">{stock}</p>
		</div>

		<div class="flex flex-1 items-center justify-between text-sm">
			<div>
				<label for="Quantity" class="sr-only"> Quantity </label>

				<div class="flex items-center gap-2">
					<button
						on:click={() => decreaseQty(id)}
						type="button"
						class="h-10 w-10 rounded-full leading-10 text-gray-600 transition hover:bg-gray-200/80 hover:opacity-75"
						>&minus;</button
					>

					<input
						type="number"
						id="quantity"
						bind:value={quantity}
						class="h-10 w-12 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
						min="1"
					/>

					<button
						on:click={() => increaseQty(id)}
						type="button"
						class="h-10 w-10 rounded-full leading-10 text-gray-600 transition hover:bg-gray-200/80 hover:opacity-75"
						>&plus;</button
					>
				</div>
			</div>

			<div class="flex gap-2">
				<button
					on:click={() => toggleFavoriteItem(cartItem)}
					type="button"
					class="rounded-full p-2 font-medium text-slate-400 hover:text-slate-600 hover:bg-gray-200/80"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
						/></svg
					></button
				>

				<button
					on:click={() => removeFromCart(id)}
					type="button"
					class="-mr-1 rounded-full p-2 font-medium text-slate-400 hover:text-slate-600 hover:bg-gray-200/80"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"
						/></svg
					></button
				>
			</div>
		</div>
	</div>
</li>
