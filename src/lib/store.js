import { writable } from 'svelte/store';

export const pwData = writable([]);
export const ccData = writable([]);
export const userId = writable(null);
export const showModal = writable(false);
export const currentKey = writable('');
export const rowIndex = writable('');
export const page = writable('');