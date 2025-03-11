<script>
  import { onMount } from 'svelte';
  import { themeStore, lockStore } from '$lib/stores';

  let apps = [
    { 
      id: 'about', 
      name: 'About Me', 
      icon: '👤', 
      route: '/about', 
      bg: 'bg-blue-500' 
    },
    { 
      id: 'projects', 
      name: 'Projects', 
      icon: '💻', 
      route: '/projects', 
      bg: 'bg-purple-500' 
    },
    { 
      id: 'skills', 
      name: 'Skills', 
      icon: '⚡', 
      route: '/skills', 
      bg: 'bg-green-500' 
    },
    { 
      id: 'game', 
      name: 'Game', 
      icon: '🎮', 
      route: '/game', 
      bg: 'bg-yellow-500' 
    },
    { 
      id: 'settings', 
      name: 'Settings', 
      icon: '⚙️', 
      route: '/settings', 
      bg: 'bg-gray-500' 
    },
    { 
      id: 'contact', 
      name: 'Contact', 
      icon: '📱', 
      route: '/contact', 
      bg: 'bg-red-500' 
    }
  ];

  let isEditing = false;
  let isDragging = false;
  let draggedApp = null;

  function handleDragStart(app, event) {
    if (!isEditing) return;
    isDragging = true;
    draggedApp = app;
    const element = event.target;
    element.style.opacity = '0.5';
  }

  function handleDragEnd(event) {
    if (!isEditing) return;
    isDragging = false;
    const element = event.target;
    element.style.opacity = '1';
  }

  function handleDragOver(event) {
    if (!isEditing) return;
    event.preventDefault();
  }

  function handleDrop(targetApp, event) {
    if (!isEditing || !draggedApp) return;
    event.preventDefault();
    
    const fromIndex = apps.indexOf(draggedApp);
    const toIndex = apps.indexOf(targetApp);
    
    if (fromIndex !== toIndex) {
      const newApps = [...apps];
      newApps.splice(fromIndex, 1);
      newApps.splice(toIndex, 0, draggedApp);
      apps = newApps;
    }
    
    draggedApp = null;
  }
</script>

<div class="relative min-h-full p-4 pt-16">
  <!-- Edit Mode Toggle -->
  <button
    class="absolute top-4 right-4 px-4 py-2 bg-gray-800/50 rounded-full text-white text-sm backdrop-blur-sm"
    on:click={() => isEditing = !isEditing}
  >
    {isEditing ? 'Done' : 'Edit'}
  </button>

  <div class="grid grid-cols-4 gap-4">
    {#each apps as app (app.id)}
      <div 
        class="relative group"
        draggable={isEditing}
        on:dragstart={(e) => handleDragStart(app, e)}
        on:dragend={handleDragEnd}
        on:dragover={handleDragOver}
        on:drop={(e) => handleDrop(app, e)}
      >
        {#if isEditing}
          <div class="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs z-10">
            ✕
          </div>
        {/if}
        <a 
          href={!isEditing ? app.route : undefined}
          class="flex flex-col items-center"
          class:animate-wiggle={isEditing}
        >
          <div class="{$themeStore.iconSize} {app.bg} {$themeStore.appStyle} flex items-center justify-center text-2xl shadow-lg transition-transform"
               class:hover:scale-105={!isEditing}
               class:cursor-grab={isEditing}
          >
            <span class="text-white">{app.icon}</span>
          </div>
          <span class="mt-2 text-white text-sm">{app.name}</span>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .animate-wiggle {
    animation: wiggle 1s ease-in-out infinite;
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
  }
</style>
