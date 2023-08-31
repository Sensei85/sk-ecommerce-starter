import { z } from 'zod';

export const addToCart = z.object({
	productId: z
		.number({
			required_error: 'Product ID is required',
			invalid_type_error: 'Product ID must be a number'
		})
		.lt(0, { message: 'Invalid product ID' })
});
