<script>
  import { fly } from 'svelte/transition';

  const projects = [
    {
      name: 'CloudSapphire-Neo',
      description: 'Advanced cloud platform featuring modern architecture and enhanced performance capabilities. Built with cutting-edge technologies for optimal cloud computing experience.',
      tech: ['Svelte', 'TypeScript', 'Tailwind', 'Node.js'],
      icon: '☁️',
      color: 'from-blue-500 to-blue-600',
      link: 'https://github.com/yourusername/CloudSapphire-Neo'
    },
    {
      name: 'Akhankhya-AI',
      description: 'AI-powered learning platform for students',
      tech: ['Python', 'React', 'TensorFlow'],
      icon: '🤖',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'DivineGod',
      description: 'Interactive gaming platform',
      tech: ['Lua', 'JavaScript'],
      icon: '🎮',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Love-Assessor',
      description: 'Social platform with unique features',
      tech: ['Svelte', 'TypeScript'],
      icon: '💝',
      color: 'from-red-500 to-red-600'
    }
  ];
</script>

<div class="bg-gray-900 rounded-3xl p-6 h-full text-white overflow-y-auto">
  <h1 class="text-2xl font-bold mb-6">Projects</h1>
  
  <div class="space-y-4">
    <!-- CloudSapphire-Neo -->
    <div class="bg-gray-800 rounded-xl p-4">
      <h3 class="text-lg font-bold">CloudSapphire-Neo</h3>
      <p class="text-gray-400 text-sm mt-1">
        Next generation cloud platform with advanced features.
      </p>
      <div class="flex gap-2 mt-2">
        <span class="text-xs bg-blue-500/20 px-2 py-1 rounded-full">Svelte</span>
        <span class="text-xs bg-blue-500/20 px-2 py-1 rounded-full">TypeScript</span>
      </div>
    </div>

    <!-- Akhankhya-AI -->
    <div class="bg-gray-800 rounded-xl p-4">
      <h3 class="text-lg font-bold">Akhankhya-AI</h3>
      <p class="text-gray-400 text-sm mt-1">
        AI-powered learning platform for enhanced education.
      </p>
      <div class="flex gap-2 mt-2">
        <span class="text-xs bg-blue-500/20 px-2 py-1 rounded-full">Python</span>
        <span class="text-xs bg-blue-500/20 px-2 py-1 rounded-full">React</span>
      </div>
    </div>

    <!-- Add more projects... -->
  </div>
</div> 