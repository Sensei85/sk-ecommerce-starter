import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const getProducts = async () => {
		const response = await fetch('https://dummyjson.com/products?limit=10');
		const products = await response.json();
		return products;
	};

	return {
		productResponse: await getProducts()
	};
};

export const actions: Actions = {
	addToCart: async ({ request }) => {
		const formData = request.formData();

		console.log(formData);

		return;
		return {
			status: 200,
			message: 'Added to cart ✔️'
		};
	}
};
