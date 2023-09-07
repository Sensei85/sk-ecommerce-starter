import { browser } from '$app/environment';
import { writable } from 'svelte/store';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectType = Record<string, any>;

export const pluck = <T extends ObjectType>(obj: T, keysToRemove: string[]): T => {
	if (typeof obj !== 'object' || !Array.isArray(keysToRemove)) {
		throw new Error(
			'Invalid input: obj must be an object and keysToRemove must be an array of strings'
		);
	}

	const result = { ...obj }; // Create a shallow copy of the input object

	keysToRemove.forEach((key) => {
		if (key in result) {
			delete result[key]; // Remove the key and its value
		}
	});

	return result;
};
