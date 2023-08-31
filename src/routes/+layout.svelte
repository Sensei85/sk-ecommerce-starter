<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Layouts/Navbar.svelte';
	import Footer from '$lib/components/Layouts/Footer.svelte';
</script>

<Navbar />
<div class="relative min-h-screen">
	<slot />
</div>
<Footer />
