<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Layouts/Navbar.svelte';
	import Footer from '$lib/components/Layouts/Footer.svelte';
	import Offcanvas from '$lib/components/Layouts/Offcanvas.svelte';
	import { CartSheet, FavoriteSheet } from '$lib/components/Ecommerce';
</script>

<CartSheet />
<FavoriteSheet />
<!-- <Offcanvas /> -->
<Navbar />
<div class="relative min-h-screen">
	<slot />
</div>
<Footer />
