import { writable, get } from 'svelte/store';
import type { CartItem, DiscountCalculationResult } from '$lib/types/cartTypes';
import { localeFormatter } from './storeConfig';

// All cart items eg: [ {id: 1, quantity: 4}, { id: 4, quantity: 2 } ]
export const cartItems = writable<CartItem[]>([]);

// Favorite items
export const favoriteItems = writable<CartItem[]>([]);

// Calculate total of items in the cart
const calculateCartTotal = () => {
	const cart = get(cartItems);
	return cart.reduce((total, cartItem) => {
		const itemTotal = cartItem.totalPrice || cartItem.price;
		return total + itemTotal;
	}, 0);
};

const createCartItem = (cartItem: CartItem) => {
	return {
		id: cartItem.id,
		title: cartItem.title,
		price: cartItem.price,
		quantity: cartItem.quantity,
		thumbnail: cartItem.thumbnail,
		totalPrice: cartItem.price * cartItem.quantity
	};
};

/**
 *  Calculate sub total of items in the cart
 * Taking in to consideration potential discounts in percentages
 * @param discount
 * @param totalPrice eg: 100 || 9.99
 */
const calculateDiscountedPrice = (
	discount: number,
	totalPrice: number
): DiscountCalculationResult => {
	const parsedDiscount = parseFloat(discount.toFixed(2));
	const parsedTotalPrice = parseFloat(totalPrice.toFixed(2));

	// Check for NaN or non-positive values
	if (
		isNaN(parsedDiscount) ||
		isNaN(parsedTotalPrice) ||
		parsedDiscount <= 0 ||
		parsedTotalPrice <= 0
	) {
		return {
			discountedAmount: 0.0,
			newTotalPrice: parsedTotalPrice
		};
	}

	const discountedAmount = (parsedDiscount / 100) * parsedTotalPrice;
	const newTotalPrice = parsedTotalPrice - discountedAmount;

	// Format the results using Intl.NumberFormat
	const formattedDiscountAmount = localeFormatter.format(+discountedAmount.toFixed(2));
	const formattedNewTotalPrice = localeFormatter.format(+newTotalPrice);

	return {
		discountedAmount: formattedDiscountAmount,
		newTotalPrice: formattedNewTotalPrice
	};
};

// Add item to cart (add one)
export const addToCart = (cartItem: CartItem) => {
	const items = get(cartItems);
	const newCartItem = createCartItem(cartItem);
	const foundItem = items.find((item) => item.id === newCartItem.id);

	if (foundItem) {
		// item is already in the cart
		cartItems.update(() => {
			// items: [ { id: 1, quantity: 3 }, { id: 3, quantity: 2 }  ]
			// updated items: [ { id: 1, quantity: 4 }, { id: 3, quantity: 2 } ]
			const updatedItems = items.map((item) => {
				if (item.id === newCartItem.id) {
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
			return [...items, newCartItem];
		});
	}

	const subTotalResults: DiscountCalculationResult = calculateDiscountedPrice(
		get(cartDiscount),
		calculateCartTotal()
	);

	const { discountedAmount, newTotalPrice } = subTotalResults;

	cartSubTotal.set(calculateCartTotal());
	cartTotal.set(newTotalPrice);
	cartDiscountedPrice.set(discountedAmount);
};

// Remove item from cart (remove one)
export const removeFromCart = (id: number | string) => {
	cartItems.update((items) => {
		const updatedItems = [...items];
		updatedItems.filter((item) => item.id !== id);
		cartItemCount.update((n) => n - 1);
		return updatedItems;
	});

	const subTotalResults: DiscountCalculationResult = calculateDiscountedPrice(
		get(cartDiscount),
		calculateCartTotal()
	);

	const { discountedAmount, newTotalPrice } = subTotalResults;

	cartSubTotal.set(calculateCartTotal());
	cartTotal.set(newTotalPrice);
	cartDiscountedPrice.set(discountedAmount);
};

// Add to favorites
export const toggleFavoriteItem = (cartItem: CartItem) => {
	// favoriteItems is a writable, not a value
	const items = get(favoriteItems);
	const foundItem = items.find((item) => item.id === cartItem.id);

	// increase count by 1 if item not already in favorites
	if (!foundItem) {
		favoriteItems.update(() => {
			favoriteItemsCount.set(items.length + 1);
			return [...items, cartItem];
		});
	} else {
		// reduce count by 1 if item removed from favorites
		favoriteItems.update(() => {
			const updatedItems = items.filter((item) => item.id !== cartItem.id);
			favoriteItemsCount.update((n) => n - 1);
			return updatedItems;
		});
	}
};

// Increase cart item quantity
export const increaseCartItemQuantity = (id: number | string) => {
	cartItems.update((items) => {
		const updatedCartItems = [...items];
		const cartItemIndex = updatedCartItems.findIndex((item) => item.id === id);

		if (cartItemIndex !== -1) {
			updatedCartItems[cartItemIndex].quantity += 1;
			updatedCartItems[cartItemIndex] = createCartItem(updatedCartItems[cartItemIndex]);
		}

		return updatedCartItems;
	});

	const subTotalResults: DiscountCalculationResult = calculateDiscountedPrice(
		get(cartDiscount),
		calculateCartTotal()
	);

	const { discountedAmount, newTotalPrice } = subTotalResults;

	cartSubTotal.set(calculateCartTotal());
	cartTotal.set(newTotalPrice);
	cartDiscountedPrice.set(discountedAmount);
};

// Decrease cart item quantity
export const decreaseCartItemQuantity = (id: number | string) => {
	cartItems.update((items) => {
		const updatedCartItems = [...items];
		const cartItemIndex = updatedCartItems.findIndex((item) => item.id === id);

		// if item quantity is 1, then it means decreasing the quantity makes it 0, which means item should be removed from cart
		if (cartItemIndex !== -1 && updatedCartItems[cartItemIndex].quantity === 1) {
			return updatedCartItems.filter((item) => item.id !== id);
		} else if (cartItemIndex !== -1 && updatedCartItems[cartItemIndex].quantity > 1) {
			// if item is found in cart and quantity is > 1, decrease by 1
			updatedCartItems[cartItemIndex].quantity -= 1;
			updatedCartItems[cartItemIndex] = createCartItem(updatedCartItems[cartItemIndex]);
		}

		return updatedCartItems;
	});

	const subTotalResults: DiscountCalculationResult = calculateDiscountedPrice(
		get(cartDiscount),
		calculateCartTotal()
	);

	const { discountedAmount, newTotalPrice } = subTotalResults;

	cartSubTotal.set(calculateCartTotal());
	cartTotal.set(newTotalPrice);
	cartDiscountedPrice.set(discountedAmount);
};

// Cart items count
export const cartItemCount = writable<number>(get(cartItems).length);

// Favorite items count
export const favoriteItemsCount = writable<number>(get(favoriteItems).length);

// Cart items total price
export const cartTotal = writable<number | string>(0);

// Cart items sub-total
export const cartSubTotal = writable<number | string>(0);

// Cart discount global store
export const cartDiscount = writable<number>(15);

// Cart total discounted price
export const cartDiscountedPrice = writable<number | string>(0);

// Clear cart
export const clearCart = () => {
	cartItems.set([]);
	console.log('Cart has been cleared');
	cartItemCount.set(0);
	console.log('Cart count reset to: 0');
	cartTotal.set(0);
	console.log('Cart total set to: 0');
	cartSubTotal.set(0);
	console.log('Cart sub total set to: 0');
};

// Clear favorites
export const clearFavorites = () => {
	favoriteItemsCount.set(0);
	favoriteItems.set([]);
};
