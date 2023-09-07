import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const isSheetOpen = writable(false);

export const favoriteSheetOpen = writable(false);

export const handleSheetClose = (isOpen: boolean) => {
	isSheetOpen.set(isOpen ?? !isSheetOpen);
};

export const handleEscClose = (isOpen: boolean) => {
	if (browser) {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				handleEscClose(isOpen);
			}
		});
	}
};
