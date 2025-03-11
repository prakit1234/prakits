<script>
  import { themeStore } from '$lib/stores';
  import NavBar from '$lib/components/NavBar.svelte';
  
  const backgroundOptions = [
    { value: 'from-purple-900 to-blue-900', label: 'Purple Blue', icon: '🌌' },
    { value: 'from-blue-900 to-green-900', label: 'Blue Green', icon: '🌊' },
    { value: 'from-red-900 to-purple-900', label: 'Red Purple', icon: '🌅' },
    { value: 'from-gray-900 to-black', label: 'Dark', icon: '🌑' }
  ];

  const appStyleOptions = [
    { value: 'rounded-2xl', label: 'Squared', icon: '⬜' },
    { value: 'rounded-full', label: 'Circular', icon: '⭕' }
  ];

  const iconSizeOptions = [
    { value: 'w-14 h-14', label: 'Small', icon: '🔽' },
    { value: 'w-16 h-16', label: 'Medium', icon: '➖' },
    { value: 'w-20 h-20', label: 'Large', icon: '🔼' }
  ];

  let showResetConfirm = false;

  function resetSettings() {
    $themeStore = {
      background: 'from-purple-900 to-blue-900',
      appStyle: 'rounded-2xl',
      iconSize: 'w-16 h-16'
    };
    showResetConfirm = false;
  }
</script>

<div class="bg-gray-900 rounded-3xl p-6 h-full text-white overflow-y-auto">
  <h1 class="text-2xl font-bold mb-6">Settings</h1>

  <div class="space-y-6">
    <!-- Background Theme -->
    <div class="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
      <h2 class="text-lg font-semibold mb-3">Background Theme</h2>
      <div class="grid grid-cols-2 gap-3">
        {#each backgroundOptions as option}
          <button
            class="p-4 rounded-xl bg-gradient-to-br {option.value} hover:opacity-90 transition-opacity flex flex-col items-center gap-2"
            class:ring-2={$themeStore.background === option.value}
            on:click={() => $themeStore.background = option.value}
          >
            <span class="text-2xl">{option.icon}</span>
            {option.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- App Icon Style -->
    <div class="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
      <h2 class="text-lg font-semibold mb-3">App Icon Style</h2>
      <div class="flex gap-3">
        {#each appStyleOptions as option}
          <button
            class="flex-1 p-4 rounded-xl hover:bg-gray-700 transition-colors flex flex-col items-center gap-2"
            class:bg-blue-500={$themeStore.appStyle === option.value}
            on:click={() => $themeStore.appStyle = option.value}
          >
            <span class="text-2xl">{option.icon}</span>
            {option.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Icon Size -->
    <div class="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
      <h2 class="text-lg font-semibold mb-3">Icon Size</h2>
      <div class="flex gap-3">
        {#each iconSizeOptions as option}
          <button
            class="flex-1 p-4 rounded-xl hover:bg-gray-700 transition-colors flex flex-col items-center gap-2"
            class:bg-blue-500={$themeStore.iconSize === option.value}
            on:click={() => $themeStore.iconSize = option.value}
          >
            <span class="text-2xl">{option.icon}</span>
            {option.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Reset Settings -->
    {#if !showResetConfirm}
      <button
        class="w-full p-4 bg-red-500/20 rounded-xl hover:bg-red-500/30 transition-colors"
        on:click={() => showResetConfirm = true}
      >
        Reset to Default
      </button>
    {:else}
      <div class="bg-red-500/20 rounded-xl p-4">
        <p class="text-center mb-4">Are you sure you want to reset all settings?</p>
        <div class="flex gap-4">
          <button
            class="flex-1 p-3 bg-gray-700 rounded-xl hover:bg-gray-600"
            on:click={() => showResetConfirm = false}
          >
            Cancel
          </button>
          <button
            class="flex-1 p-3 bg-red-500 rounded-xl hover:bg-red-600"
            on:click={resetSettings}
          >
            Confirm Reset
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<NavBar /> 