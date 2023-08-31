<script lang="ts">
	import { cartItems, clearCart } from '$lib/stores/cart';

	import { ProductCard } from '$lib/components/Ecommerce';
	import type { PageData } from './$types';

	export let data: PageData;

	const { productResponse } = data;
	const { products } = productResponse;

	$: {
		console.log($cartItems);
	}
</script>

<svelte:head>
	<title>Shop - All Products</title>
</svelte:head>

<main class="px-3 py-6 lg:px-8 lg:py-12 md:px-4 md:py-8 bg-gray-100">
	<div class="max-w-6xl mx-auto">
		<div class="page-header flex items-center justify-between">
			<h1
				class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			>
				All Products
			</h1>

			<button
				type="button"
				class="flex rounded items-center bg-red-400 text-white px-4 py-2 text-sm font-medium transition hover:scale-105"
				on:click={() => clearCart()}
				>Clear Cart <svg
					class="ml-2"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1l-1.4 1.4M7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6v.2Z"
					/></svg
				></button
			>
		</div>

		<div class="products my-10">
			<ul class="grid gap-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
				{#each products as product}
					<li>
						<ProductCard
							id={product.id}
							title={product.title}
							thumbnail={product.thumbnail}
							price={product.price}
							stock={product.stock}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
