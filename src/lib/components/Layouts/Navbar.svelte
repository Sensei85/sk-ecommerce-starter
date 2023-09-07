<script>
	import { cartItemCount, favoriteItemsCount } from '$lib/stores/cart';
	import { isSheetOpen, favoriteSheetOpen } from '$lib/utils';
</script>

<header class="bg-white shadow-md sticky top-0 z-40">
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="md:flex md:items-center md:gap-12">
				<a class="block text-yellow-600" href="/">
					<span class="sr-only">Home</span>
					<svg class="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
							fill="currentColor"
						/>
					</svg>
				</a>
			</div>

			<div class="hidden md:block">
				<nav aria-label="Global">
					<ul class="flex items-center gap-6 text-sm">
						<li>
							<a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
						</li>

						<li>
							<a class="text-gray-500 transition hover:text-gray-500/75" href="/shop/products">
								Shop
							</a>
						</li>

						<li>
							<a class="text-gray-500 transition hover:text-gray-500/75" href="/blog"> Blog </a>
						</li>
					</ul>
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<div class="sm:flex sm:gap-4">
					<a
						class="rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white shadow"
						href="/"
					>
						Login
					</a>

					<div class="hidden sm:flex">
						<a
							class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-slate-500"
							href="/"
						>
							Register
						</a>
					</div>
				</div>

				<div class="block md:hidden">
					<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				<div class="relative flex gap-2">
					<!-- Favorites Icon -->
					<div>
						<button
							class="hover:bg-gray-200/70 rounded-full p-2"
							type="button"
							on:click={() => ($favoriteSheetOpen = !$favoriteSheetOpen)}
						>
							<svg
								class="text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
								/></svg
							>
						</button>
						<!-- Favorite item count positioning -->
						<div
							class="absolute top-2 right-2 pointer-events-none transform translate-x-1/2 -translate-y-1/2"
						>
							<!-- Favorite item count -->
							{#if $favoriteItemsCount}
								<div
									class="min-w-[1.75rem] inline-flex items-center justify-center h-7 text-l text-black bg-yellow-400 rounded-full px-1"
								>
									{$favoriteItemsCount}
								</div>
							{/if}
						</div>
					</div>

					<!-- Shopping Cart Icon -->
					<div>
						<button
							class="hover:bg-gray-200/70 rounded-full p-2"
							type="button"
							on:click={() => ($isSheetOpen = !$isSheetOpen)}
						>
							<svg
								class="text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
								/></svg
							>
						</button>
						<!-- Cart item count positioning -->
						<div
							class="absolute top-2 right-2 pointer-events-none transform translate-x-1/2 -translate-y-1/2"
						>
							<!-- shopping cart count -->
							{#if $cartItemCount}
								<div
									class="min-w-[1.75rem] inline-flex items-center justify-center h-7 text-l text-black bg-yellow-400 rounded-full px-1"
								>
									{$cartItemCount}
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
