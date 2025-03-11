import { writable } from 'svelte/store';

export const themeStore = writable({
    background: 'from-purple-900 to-blue-900',
    appStyle: 'rounded-2xl',
    iconSize: 'w-16 h-16'
});

export const lockStore = writable({
    isLocked: true,
    PIN: '1234', // Demo PIN
    attempts: 0
}); 