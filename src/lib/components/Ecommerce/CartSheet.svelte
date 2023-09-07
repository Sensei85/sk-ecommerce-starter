<script lang="ts">
	import { browser } from '$app/environment';
	import { handleEscClose, handleSheetClose, isSheetOpen } from '$lib/utils';
	import {
		clearCart,
		cartItems,
		cartTotal,
		cartDiscount,
		cartSubTotal,
		cartItemCount,
		cartDiscountedPrice
	} from '$lib/stores/cart';
	import { storeCurrency } from '$lib/stores/storeConfig';
	import { buttonVariants } from '$lib/components/ui/button';
	import { CartItem } from '$lib/components/Ecommerce';

	export let isOpen: boolean = $isSheetOpen;
	// export let position: string = 'left';

	$: {
		isOpen = $isSheetOpen;
	}

	if (browser) {
		handleEscClose($isSheetOpen);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class:hidden={!isOpen}
	on:click={() => ($isSheetOpen = !$isSheetOpen)}
	class="transition ease-in-out duration-200 fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
/>

<div
	class:hidden={!isOpen}
	class:translate-x-0={isOpen}
	class="-translate-x-full w-screen max-w-md fixed top-0 left-0 transition-all duration-300 transform h-full z-[60] bg-white dark:bg-gray-800 dark:border-gray-700"
	tabindex="-1"
>
	<div class="flex h-screen flex-col border bg-white shadow-md">
		<!-- Header -->
		<div class="flex items-center justify-between border-b p-2">
			<p class="font-normal text-xl ml-2">Shopping Cart</p>
			<div class="flex">
				<button
					on:click={() => ($isSheetOpen = !$isSheetOpen)}
					class="inline-flex rounded-full p-2 hover:bg-gray-200/80"
					type="button"
				>
					<span class="sr-only">Close modal</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Content -->
		{#if $cartItemCount === 0}
			<div class="flex items-center justify-center text-center flex-col max-w-xs mx-auto">
				<svg
					class="w-40 h-40"
					xmlns="http://www.w3.org/2000/svg"
					data-name="Layer 1"
					viewBox="0 0 650 512"
					><circle cx="337.969" cy="243.395" r="167.695" fill="#dbe8ec" /><path
						fill="#dbe8ec"
						d="M574.583 223.757v-18.11a13.02 13.02 0 0 0-13.02-13.02h-55.96a13.02 13.02 0 0 1-13.02-13.021v-18.11a13.02 13.02 0 0 1 13.02-13.02h21.451a13.02 13.02 0 0 0 13.021-13.022v-18.11a13.02 13.02 0 0 0-13.02-13.02h-383.92a13.02 13.02 0 0 0-13.02 13.02v18.11a13.02 13.02 0 0 0 13.02 13.021 13.02 13.02 0 0 1 13.021 13.021v18.11a13.02 13.02 0 0 1-13.02 13.02H82.781a13.02 13.02 0 0 0-13.02 13.021v18.11a13.02 13.02 0 0 0 13.02 13.021h59.758a13.02 13.02 0 0 1 13.021 13.02v18.11c.319 16.572-35.83 13.022-43.02 13.022h-.049a13.02 13.02 0 0 0-13.02 13.02v18.11a13.02 13.02 0 0 0 13.02 13.02h32.859a13.02 13.02 0 0 1 13.02 13.022v18.11a13.02 13.02 0 0 1-13.02 13.02h-36.914a13.02 13.02 0 0 0-13.02 13.021v18.11a13.02 13.02 0 0 0 13.02 13.02h415.608a13.02 13.02 0 0 0 13.02-13.02v-18.11a13.02 13.02 0 0 0-13.02-13.02h-21.29a13.02 13.02 0 0 1-13.02-13.022v-18.11a13.02 13.02 0 0 1 13.02-13.02h36.62a13.02 13.02 0 0 0 13.021-13.021v-18.11a13.02 13.02 0 0 0-13.02-13.02H521.3a13.02 13.02 0 0 1-13.02-13.021v-18.11a13.02 13.02 0 0 1 13.02-13.021h40.263a13.02 13.02 0 0 0 13.02-13.02Z"
					/><circle cx="340.677" cy="148.55" r="46.959" fill="#3086a3" /><path
						fill="none"
						stroke="#f9ae2b"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="4"
						d="m324.053 138.772-.001-.175a16.626 16.626 0 1 1 16.866 16.624v15.097"
					/><path
						fill="none"
						stroke="#3086a3"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-width="3"
						d="M419.668 116.939h32.303M419.668 126.25h32.303M419.668 135.56h32.303M119.153 293.762h32.303M119.153 303.072h32.303M119.153 312.383h32.303M481.64 360.156h32.303M481.64 369.467h32.303M481.64 378.777h32.303"
					/><circle cx="520.577" cy="300.496" r="13.807" fill="#b9d4db" /><circle
						cx="484.141"
						cy="310.461"
						r="7.159"
						fill="#b9d4db"
					/><circle cx="502.32" cy="266.711" r="10.228" fill="#b9d4db" /><circle
						cx="206.393"
						cy="389.674"
						r="16.428"
						fill="#b9d4db"
					/><circle cx="175.001" cy="377.974" r="8.557" fill="#b9d4db" /><circle
						cx="182.861"
						cy="348.886"
						r="4.936"
						fill="#b9d4db"
					/><circle cx="210.185" cy="352.378" r="11.833" fill="#b9d4db" /><circle
						cx="218.423"
						cy="143.059"
						r="16.428"
						fill="#b9d4db"
					/><circle cx="219.09" cy="109.564" r="8.557" fill="#b9d4db" /><circle
						cx="276.085"
						cy="114.564"
						r="7.406"
						fill="#b9d4db"
					/><circle cx="249.141" cy="107.367" r="4.936" fill="#b9d4db" /><circle
						cx="254.877"
						cy="134.31"
						r="11.833"
						fill="#b9d4db"
					/><path
						fill="#409cb5"
						d="M480.858 233.243H202.62l-9.072-23h287.309a2.722 2.722 0 0 1 2.722 2.722v17.556a2.722 2.722 0 0 1-2.722 2.722Z"
					/><path
						fill="#f9ae2b"
						d="M440.323 354.09H251.127a4.536 4.536 0 0 1-4.247-2.943l-44.258-117.904h268.547l-26.42 117.307a4.536 4.536 0 0 1-4.426 3.54Z"
					/><path
						fill="#3086a3"
						d="M457.562 293.669c-19.355 1.241-38.71 1.89-58.065 2.332-9.677.276-19.355.338-29.032.5l-29.033.166q-29.032.027-58.065-.657c-19.355-.44-38.71-1.092-58.065-2.341 19.355-1.249 38.71-1.902 58.065-2.341q29.033-.652 58.065-.657l29.033.165c9.677.163 19.355.224 29.032.5 19.355.442 38.71 1.092 58.065 2.333Z"
					/><path
						fill="#3086a3"
						d="M419.704 233.243c-1.103 10.546-2.788 20.96-4.648 31.336q-2.827 15.554-6.31 30.961-3.463 15.411-7.565 30.679a560.269 560.269 0 0 1-4.335 15.214c-.789 2.521-1.54 5.05-2.36 7.564l-.633 1.91a4.919 4.919 0 0 1-1.182 1.859 4.675 4.675 0 0 1-3.813 1.323 4.373 4.373 0 0 0 3.12-1.908 3.914 3.914 0 0 0 .633-1.61l.252-1.94c.336-2.622.742-5.23 1.11-7.845a560.198 560.198 0 0 1 2.606-15.604q2.827-15.554 6.316-30.96 3.476-15.408 7.574-30.676c2.767-10.171 5.71-20.303 9.235-30.303zM311.586 354.09a4.681 4.681 0 0 1-3.924-1.458 6.696 6.696 0 0 1-1.156-1.882l-.897-1.857c-1.194-2.476-2.32-4.978-3.484-7.466a613.184 613.184 0 0 1-6.603-15.07q-6.391-15.15-12.154-30.534-5.78-15.38-10.948-30.988c-3.416-10.416-6.66-20.898-9.34-31.59 5.02 9.814 9.474 19.84 13.757 29.932q6.39 15.15 12.146 30.538 5.77 15.383 10.94 30.99a613.07 613.07 0 0 1 4.945 15.692c.761 2.64 1.56 5.264 2.29 7.915l.547 1.988a5.887 5.887 0 0 0 .667 1.776 4.37 4.37 0 0 0 3.214 2.014z"
					/><circle cx="298.105" cy="428.058" r="18.743" fill="#409cb5" /><circle
						cx="298.105"
						cy="428.058"
						r="8.651"
						fill="#dbe8ec"
					/><circle cx="406.224" cy="428.058" r="18.743" fill="#409cb5" /><circle
						cx="406.224"
						cy="428.058"
						r="8.651"
						fill="#dbe8ec"
					/><path
						fill="#3086a3"
						d="M343.092 233.243c1.84 9.997 3.083 20.029 4.147 30.072q1.559 15.066 2.447 30.173.907 15.105 1.161 30.25c.138 10.097.093 20.206-.555 30.351-1.847-9.996-3.092-20.028-4.154-30.071q-1.559-15.067-2.44-30.173-.894-15.106-1.152-30.25c-.136-10.099-.093-20.208.546-30.352Z"
					/><path
						fill="#409cb5"
						d="M437.938 399.801H268.384a3 3 0 0 1-2.8-1.925l-98.2-255.978h-52.013a3 3 0 0 1 0-6h54.076a3 3 0 0 1 2.801 1.926L270.446 393.8h167.492a3 3 0 0 1 0 6Z"
					/><rect x="103.858" y="130.248" fill="#409cb5" rx="2" /><circle
						cx="340.677"
						cy="179.6"
						r="2.7"
						fill="#f9ae2b"
					/></svg
				>
				<p class="text-base text-slate-600 mb-4">
					There is nothing in your cart. Add some items from the shop.
				</p>

				<div>
					<a
						href="/shop/products"
						class={buttonVariants({ variant: 'outline', size: 'lg', class: 'py-6' })}
					>
						Go To Shop
					</a>
				</div>
			</div>
		{:else}
			<div class="flex-1 overflow-y-auto px-6 py-2">
				<div class="flex justify-end mb-2">
					<button
						type="button"
						class="flex rounded items-center bg-gray-200/50 text-gray-400 px-3 py-1 text-sm font-medium transition hover:scale-105"
						on:click={() => clearCart()}
					>
						Clear Cart
						<svg
							class="ml-2"
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1l-1.4 1.4M7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6v.2Z"
							/></svg
						></button
					>
				</div>

				<ul role="list" class="divide-y divide-gray-200">
					{#each $cartItems as item}
						<CartItem {...item} />
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Footer -->
		{#if $cartItemCount !== 0}
			<div class="border-t px-6 py-4">
				<div class="flex items-center justify-between">
					<p class="text-gray-800">Sub Total</p>
					<p class="font-medium text-slate-500">{$storeCurrency} {$cartSubTotal}</p>
				</div>
				<p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

				{#if $cartDiscount}
					<div class="flex justify-between my-4">
						<p class="text-gray-800 text-sm">Discount</p>
						<div class="flex flex-col gap-2 text-right">
							<p class="font-medium text-sm text-slate-500">{$cartDiscount}%</p>
							<p class="font-medium text-sm text-slate-500">- {$cartDiscountedPrice}</p>
						</div>
					</div>
				{/if}

				<div class="my-4 flex items-center justify-between">
					<p class="text-black">Total</p>
					<p class="font-bold text-slate-700">{$cartTotal}</p>
				</div>

				<div class="flex flex-col gap-y-4">
					<div>
						<a
							href="/cart/checkout"
							class={buttonVariants({ variant: 'default', size: 'lg', class: 'w-full py-6' })}
						>
							CHECKOUT
						</a>
					</div>

					<div class="flex justify-center text-center text-sm text-gray-500">
						<p>
							or
							<a
								href="/shop/products"
								class={buttonVariants({
									variant: 'link',
									class: 'font-medium text-yellow-700 hover:text-yellow-600'
								})}
							>
								Continue Shopping
								<span
									class="ml-2 transform hover:translate-x-1 duration-200 ease-in-out"
									aria-hidden="true"
								>
									&rarr;</span
								>
							</a>
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
