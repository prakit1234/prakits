<script>
  import { lockStore } from '$lib/stores';
  import { fly } from 'svelte/transition';
  
  let inputPin = '';
  let showPin = false;
  let startY = 0;
  let swipeDistance = 0;
  let isDragging = false;
  let wrongPinAnimation = false;
  
  let time = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
  
  setInterval(() => {
    time = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  }, 1000);

  // Handle both mouse and touch events
  function handleStart(event) {
    isDragging = true;
    startY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;
    swipeDistance = 0;
  }

  function handleMove(event) {
    if (!isDragging) return;
    event.preventDefault();
    
    const currentY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;
    swipeDistance = startY - currentY;

    // Update visual feedback
    const swipeIndicator = document.getElementById('swipeIndicator');
    if (swipeIndicator) {
      swipeIndicator.style.transform = `translateY(${Math.min(swipeDistance, 100)}px)`;
    }

    if (swipeDistance > 100) {
      showPin = true;
      isDragging = false;
      swipeDistance = 0;
    }
  }

  function handleEnd() {
    isDragging = false;
    if (swipeDistance < 100) {
      // Reset the indicator if swipe wasn't enough
      const swipeIndicator = document.getElementById('swipeIndicator');
      if (swipeIndicator) {
        swipeIndicator.style.transform = 'translateY(0)';
      }
    }
    swipeDistance = 0;
  }

  function handlePinInput(num) {
    if (inputPin.length < 4) {
      inputPin += num;
    }
    
    if (inputPin.length === 4) {
      if (inputPin === $lockStore.PIN) {
        $lockStore.isLocked = false;
      } else {
        wrongPinAnimation = true;
        setTimeout(() => {
          wrongPinAnimation = false;
          inputPin = '';
        }, 500);
      }
    }
  }

  function clearPin() {
    inputPin = '';
  }
</script>

<div 
  class="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-50"
  in:fly={{ y: -window.innerHeight, duration: 700 }}
  out:fly={{ y: -window.innerHeight, duration: 700 }}
>
  {#if !showPin}
    <!-- Lock Screen -->
    <div 
      class="h-full flex flex-col items-center justify-between p-8 select-none"
      on:mousedown={handleStart}
      on:mousemove={handleMove}
      on:mouseup={handleEnd}
      on:mouseleave={handleEnd}
      on:touchstart={handleStart}
      on:touchmove={handleMove}
      on:touchend={handleEnd}
    >
      <div class="text-white text-6xl font-light mt-20">
        {time}
      </div>
      
      <div class="text-white text-center space-y-2 mb-20">
        <div class="text-2xl font-light">Swipe up to unlock</div>
        <div class="relative h-20 flex flex-col items-center justify-center">
          <div 
            id="swipeIndicator"
            class="w-1 h-8 bg-white/30 rounded-full transition-transform duration-200"
          >
            <div class="w-full h-full bg-white animate-pulse"></div>
          </div>
          {#if isDragging}
            <div class="mt-2 text-sm text-white/50">
              {Math.min(Math.round(swipeDistance), 100)}% swiped
            </div>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <!-- PIN Screen -->
    <div class="h-full flex flex-col items-center p-8">
      <div class="text-white text-xl mb-8">Enter PIN</div>
      
      <!-- PIN Display -->
      <div class="flex gap-4 mb-12">
        {#each Array(4) as _, i}
          <div 
            class="w-4 h-4 rounded-full border-2 border-white transition-colors duration-200"
            class:bg-white={inputPin.length > i}
            class:animate-shake={wrongPinAnimation}
          ></div>
        {/each}
      </div>

      <!-- Number Pad -->
      <div class="grid grid-cols-3 gap-4 w-64">
        {#each Array(9) as _, i}
          <button
            class="w-16 h-16 rounded-full bg-white/10 text-white text-2xl font-light 
                   hover:bg-white/20 active:bg-white/30 transition-colors"
            on:click={() => handlePinInput(i + 1)}
          >
            {i + 1}
          </button>
        {/each}
        <button
          class="w-16 h-16 rounded-full bg-white/10 text-white text-2xl font-light 
                 hover:bg-white/20 active:bg-white/30 transition-colors"
          on:click={clearPin}
        >
          ⌫
        </button>
        <button
          class="w-16 h-16 rounded-full bg-white/10 text-white text-2xl font-light 
                 hover:bg-white/20 active:bg-white/30 transition-colors"
          on:click={() => handlePinInput(0)}
        >
          0
        </button>
        <button
          class="w-16 h-16 rounded-full bg-white/10 text-white text-2xl font-light 
                 hover:bg-white/20 active:bg-white/30 transition-colors"
          on:click={() => showPin = false}
        >
          ↩
        </button>
      </div>

      <div class="text-white/50 mt-8">
        PIN: {$lockStore.PIN} (Demo purposes)
      </div>
    </div>
  {/if}
</div>

<style>
  .animate-shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }

  @keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
  }

  /* Prevent text selection during swipe */
  .select-none {
    user-select: none;
    -webkit-user-select: none;
  }
</style> 