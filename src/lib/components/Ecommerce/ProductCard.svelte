<script lang="ts">
	import type { CartItem } from '$lib/types/cartTypes';
	import { addToCart, removeFromCart, toggleFavoriteItem } from '$lib/stores/cart';
	import { storeCurrency } from '$lib/stores/storeConfig';

	export let id: number | string;
	export let title: string;
	export let thumbnail: string;
	export let price: number;
	export let stock: number;

	const cartItem = {
		id,
		title,
		price,
		quantity: 1,
		thumbnail,
		totalPrice: price
	};

	const toggleFavorite = (cartItem: CartItem) => {
		toggleFavoriteItem(cartItem);
	};
</script>

<div class="group rounded-md shadow-sm relative block overflow-hidden">
	<button
		type="button"
		on:click={() => toggleFavorite(cartItem)}
		class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
	>
		<span class="sr-only">Wishlist</span>

		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
			/></svg
		>
	</button>

	<a href="/products/item/{id}">
		<img
			alt=""
			loading="lazy"
			src={thumbnail ??
				'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80'}
			class="h-64 w-full bg-gray-300 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
		/>
	</a>

	<div class="relative border border-gray-100 bg-white p-3 lg:p-4 md:p-4">
		<span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

		<h3 class="mt-4 h-10 sm:text-md lg:text-lg font-medium text-gray-600">{title}</h3>

		<div class="flex flex-row col-2 justify-between mt-6 mb-4">
			<p class="text-sm text-gray-700">
				<span class="font-bold">{$storeCurrency}</span>
				{price}
			</p>
			<p class="text-sm text-gray-700"><span class="font-bold">In Stock</span> ({stock})</p>
		</div>

		<button
			type="button"
			on:click={() => addToCart(cartItem)}
			class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
		>
			Add to Cart
		</button>

		<button
			type="button"
			on:click={() => removeFromCart(id)}
			class="block mt-2 w-full rounded bg-black hover:bg-black/80 text-white p-4 text-sm font-medium transition hover:scale-105"
		>
			Remove from Cart
		</button>
	</div>
</div>
