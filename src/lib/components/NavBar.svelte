<script>
  import { goto } from '$app/navigation';
  export let showBack = true;
</script>

<!-- iPhone-style dock -->
<div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] h-20 bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-around px-4 z-50">
  {#if showBack}
    <button 
      on:click={() => window.history.back()}
      class="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
    >
      ←
    </button>
  {/if}
  
  <button 
    on:click={() => goto('/')}
    class="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
  >
    🏠
  </button>
  
  <button 
    on:click={() => goto('/columns')}
    class="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
  >
    ≡
  </button>
</div> 

<!-- Home indicator -->
<div class="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-50"></div> 