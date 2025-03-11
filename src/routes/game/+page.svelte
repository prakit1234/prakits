<script>
  import { onMount } from 'svelte';
  
  let cards = [];
  let flipped = [];
  let matched = [];
  let moves = 0;
  
  const emojis = ['🎮', '🎲', '🎯', '🎨'];
  
  function initGame() {
    cards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }));
    flipped = [];
    matched = [];
    moves = 0;
  }

  async function flipCard(index) {
    if (flipped.length === 2 || matched.includes(index) || flipped.includes(index)) return;

    cards[index].isFlipped = true;
    flipped = [...flipped, index];

    if (flipped.length === 2) {
      moves++;
      const [first, second] = flipped;
      
      if (cards[first].emoji === cards[second].emoji) {
        matched = [...matched, first, second];
        flipped = [];
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        cards[first].isFlipped = false;
        cards[second].isFlipped = false;
        flipped = [];
      }
    }
  }

  onMount(() => {
    initGame();
  });
</script>

<div class="bg-gray-900 rounded-3xl p-6 h-full text-white overflow-y-auto">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Memory Game</h1>
    <button 
      class="bg-blue-500 px-4 py-2 rounded-full text-sm font-medium"
      on:click={initGame}
    >
      New Game
    </button>
  </div>

  <div class="text-center mb-4">
    Moves: {moves}
  </div>

  <div class="grid grid-cols-2 gap-4">
    {#each cards as card, index}
      <button
        class="aspect-square bg-gray-800 rounded-xl flex items-center justify-center text-2xl"
        on:click={() => flipCard(index)}
      >
        {#if card.isFlipped}
          {card.emoji}
        {:else}
          ❓
        {/if}
      </button>
    {/each}
  </div>

  {#if matched.length === cards.length}
    <div class="mt-6 text-center text-green-400">
      Congratulations! You won in {moves} moves!
    </div>
  {/if}
</div> 