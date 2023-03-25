import { writable } from 'svelte/store';

export const currentRoute = writable("index");
export const theme = writable('system')
export const language = writable('english');