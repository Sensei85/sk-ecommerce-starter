import { writable } from 'svelte/store';

export const storeCurrency = writable('GHS');

export const storeNumberFormat = {
	style: 'currency',
	currency: 'GHS',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
};

export const localeFormatter = new Intl.NumberFormat('en-US', storeNumberFormat);

export const modifyLocaleNumberFormatter = (newFormat: object) => {
	return new Intl.NumberFormat('en-US', newFormat);
};
