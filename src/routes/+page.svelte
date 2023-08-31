<svelte:head>
	<title>Home - Ecommerce App</title>
</svelte:head>

<main>
	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur aliquam quam id
			laudantium dicta aspernatur dolor. Aliquid ipsum itaque, deserunt neque praesentium dolores
			debitis, incidunt quod obcaecati minus est?
		</p>
	</div>

	<div class="featured-products">
		<section>
			<div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
				<header class="text-center">
					<h2 class="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

					<p class="max-w-md mx-auto mt-4 text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
						dicta incidunt est ipsam, officia dolor fugit natus?
					</p>
				</header>

				<ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
					<li>
						<a href="#" class="relative block group">
							<img
								src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
								class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
							/>

							<div class="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 class="text-xl font-medium text-white">Casual Trainers</h3>

								<span
									class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
								>
									Shop Now
								</span>
							</div>
						</a>
					</li>

					<li>
						<a href="#" class="relative block group">
							<img
								src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
								alt=""
								class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
							/>

							<div class="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

								<span
									class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
								>
									Shop Now
								</span>
							</div>
						</a>
					</li>

					<li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
						<a href="#" class="relative block group">
							<img
								src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
								alt=""
								class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
							/>

							<div class="absolute inset-0 flex flex-col items-start justify-end p-6">
								<h3 class="text-xl font-medium text-white">Skinny Jeans Blue</h3>

								<span
									class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
								>
									Shop Now
								</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</div>

	<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

	<section
		class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80)] bg-cover bg-top bg-no-repeat"
	>
		<div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
			<div class="text-center ltr:sm:text-left rtl:sm:text-right">
				<h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Shirts</h2>

				<p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
					doloribus iure architecto quae voluptatum beatae excepturi dolores.
				</p>

				<div class="mt-4 sm:mt-8">
					<a
						href="/shop"
						class="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
					>
						Get Yours Today
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
