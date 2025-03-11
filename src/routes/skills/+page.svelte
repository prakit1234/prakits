<script>
  import NavBar from '$lib/components/NavBar.svelte';

  const skills = {
    languages: [
      { name: 'JavaScript', level: 90, icon: '📜', color: 'from-yellow-500 to-yellow-600' },
      { name: 'TypeScript', level: 85, icon: '💪', color: 'from-blue-500 to-blue-600' },
      { name: 'Python', level: 80, icon: '🐍', color: 'from-green-500 to-green-600' },
      { name: 'Lua', level: 75, icon: '🌙', color: 'from-purple-500 to-purple-600' },
      { name: 'C', level: 70, icon: '⚡', color: 'from-gray-500 to-gray-600' }
    ],
    frameworks: [
      { name: 'Svelte', level: 95, icon: '🔥', color: 'from-orange-500 to-red-600' },
      { name: 'React', level: 85, icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
      { name: 'HTML/CSS', level: 90, icon: '🎨', color: 'from-pink-500 to-purple-600' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📚', color: 'from-orange-500 to-red-600' },
      { name: 'VS Code', level: 90, icon: '💻', color: 'from-blue-500 to-blue-600' },
      { name: 'Terminal', level: 80, icon: '⌨️', color: 'from-gray-500 to-gray-600' }
    ]
  };
</script>

<div class="bg-gray-900 rounded-3xl p-6 h-full text-white overflow-y-auto">
  <h1 class="text-2xl font-bold mb-6">Skills & Expertise</h1>
  
  <div class="space-y-8">
    <!-- Programming Languages -->
    <div class="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
      <h2 class="text-xl font-bold mb-4">Programming Languages</h2>
      <div class="space-y-4">
        {#each skills.languages as skill}
          <div class="relative">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-2">
                <span class="text-2xl">{skill.icon}</span>
                <span class="font-medium">{skill.name}</span>
              </div>
              <span class="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div class="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r {skill.color} transition-all duration-1000"
                style="width: {skill.level}%"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Frameworks -->
    <div class="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
      <h2 class="text-xl font-bold mb-4">Frameworks & Libraries</h2>
      <div class="grid grid-cols-2 gap-4">
        {#each skills.frameworks as skill}
          <div class="bg-gray-700/50 rounded-xl p-4 hover:scale-105 transition-transform">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">{skill.icon}</span>
              <span class="font-medium">{skill.name}</span>
            </div>
            <div class="h-2 bg-gray-600 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r {skill.color} transition-all duration-1000"
                style="width: {skill.level}%"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Tools -->
    <div class="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
      <h2 class="text-xl font-bold mb-4">Tools & Technologies</h2>
      <div class="grid grid-cols-3 gap-4">
        {#each skills.tools as skill}
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br {skill.color} rounded-2xl flex items-center justify-center text-2xl mb-2">
              {skill.icon}
            </div>
            <span class="text-sm font-medium">{skill.name}</span>
            <div class="mt-2 text-xs text-gray-400">{skill.level}%</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<NavBar /> 