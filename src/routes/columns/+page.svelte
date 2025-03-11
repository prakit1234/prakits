<script>
  import NavBar from '$lib/components/NavBar.svelte';
  
  const sections = [
    {
      title: 'Quick Access',
      items: [
        { name: 'About Me', icon: '👤', route: '/about' },
        { name: 'Projects', icon: '💻', route: '/projects' },
        { name: 'Contact', icon: '📱', route: '/contact' }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Memory Game', icon: '🎮', route: '/game' },
        { name: 'Settings', icon: '⚙️', route: '/settings' }
      ]
    },
    {
      title: 'Skills',
      items: [
        { name: 'Languages', icon: '📜', route: '/skills' },
        { name: 'Frameworks', icon: '⚛️', route: '/skills' },
        { name: 'Tools', icon: '🔧', route: '/skills' }
      ]
    }
  ];
</script>

<div class="bg-gray-900 rounded-3xl p-6 h-full text-white overflow-y-auto">
  <h1 class="text-2xl font-bold mb-6">All Sections</h1>

  <div class="space-y-6">
    {#each sections as section}
      <div class="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
        <h2 class="text-lg font-semibold mb-3">{section.title}</h2>
        <div class="grid grid-cols-2 gap-3">
          {#each section.items as item}
            <a
              href={item.route}
              class="flex items-center gap-3 bg-gray-700/50 p-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <span class="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<NavBar showBack={false} /> 