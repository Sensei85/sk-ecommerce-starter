import type { CartItem } from '$lib/types/cartTypes';
import { writable, get } from 'svelte/store';

// All cart items eg: [ {id: 1, quantity: 4}, { id: 4, quantity: 2 } ]
export const cartItems = writable<CartItem[]>([]);

// Add item to cart (add one)
export const addToCart = (cartItem: CartItem) => {
	// cartItems is a writable, not a value
	// get(cartItems)
	const items = get(cartItems);
	const foundItem = items.find((item) => item.id === cartItem.id);

	if (foundItem) {
		// item is already in the cart
		cartItems.update(() => {
			// items: [ { id: 1, quantity: 3 }, { id: 3, quantity: 2 }  ]
			// updated items: [ { id: 1, quantity: 4 }, { id: 3, quantity: 2 } ]
			const updatedItems = items.map((item) => {
				if (item.id === cartItem.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			return updatedItems;
		});
	} else {
		// item not in the cart, add a new item object
		cartItems.update(() => {
			cartItemCount.set(items.length + 1);
			return [...items, cartItem];
		});
	}
};

// Remove item from cart (remove one)
export const removeFromCart = (id: number | string) => {
	const items = get(cartItems);
	cartItems.update(() => {
		const updatedItems = items.filter((item) => item.id !== id);
		cartItemCount.update((n) => n - 1);
		return updatedItems;
	});
};

// Increase cart item quantity
export const increaseCartItemQuantity = (id: number | string) => {
	const items = get(cartItems);
	const updatedItems = items.map((item) => {
		if (item.id === id) {
			return { ...item, quantity: item.quantity + 1 };
		}
		return item;
	});

	return updatedItems;
};

// Decrease cart item quantity
export const decreaseCartItemQuantity = (id: number | string) => {
	const items = get(cartItems);
	const updatedItems = items.map((item) => {
		if (item.id === id) {
			// if item quantity is 1, then it means decreasing the quantity makes it 0, which means item should be removed from cart
			if (item.quantity === 1) {
				// removing item from cart
				return items.filter((item) => item.id !== id);
			} else {
				// if item quantity is more than 1
				return { ...item, quantity: item.quantity - 1 };
			}
		}
		return item;
	});

	return updatedItems;
};

// Cart items count
const itemsCount = get(cartItems).length;
export const cartItemCount = writable(itemsCount);

// Clear cart
export const clearCart = () => {
	cartItems.set([]);
	console.log('Cart has been cleared');
	cartItemCount.set(0);
	console.log('Cart count reset to: 0');
};
