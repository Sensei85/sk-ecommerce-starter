export type CartItem = {
	id: number | string;
	title: string;
	price: number;
	quantity: number;
	thumbnail: string;
	totalPrice?: number;
};

export type CartItems = CartItem | CartItem[];

export interface DiscountCalculationResult {
	discountedAmount: number | string;
	newTotalPrice: number | string;
}
