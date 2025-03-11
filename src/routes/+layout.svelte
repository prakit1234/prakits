<script>
	import "../app.css";
	import { themeStore, lockStore } from '$lib/stores';
	import LockScreen from '$lib/components/LockScreen.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="min-h-screen bg-gradient-to-b {$themeStore.background} flex items-center justify-center p-4">
	<div class="w-[380px] h-[780px] bg-black rounded-[3rem] border-8 border-gray-800 relative overflow-hidden shadow-2xl">
		<!-- Dynamic Island -->
		<div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-32 bg-black rounded-b-3xl z-40"></div>
		
		<!-- Main Content -->
		<main class="relative h-full w-full overflow-hidden">
			{#if $lockStore.isLocked}
				<LockScreen />
			{:else}
				<div class="h-full overflow-y-auto">
					<slot />
				</div>
				<NavBar />
			{/if}
		</main>

		<!-- Home Indicator -->
		<div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
	</div>
</div>
