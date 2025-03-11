<script>
  import { useSortable } from '@dnd-kit/sortable';
  import { CSS } from '@dnd-kit/utilities';
  
  export let app;
  let elementRef;
  
  const sortable = useSortable({
    id: app.id
  });

  $: style = CSS.Transform.toString(sortable.transform) + 
    (sortable.transition ? ` transition-duration: ${sortable.transition}ms` : '');
</script>

<div
  class="flex flex-col items-center"
  {style}
  bind:this={elementRef}
  {...sortable.attributes}
  {...sortable.listeners}
>
  <a 
    href={app.route}
    class="w-16 h-16 {app.bg} rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition-transform relative"
  >
    <span class="filter drop-shadow-md">{app.icon}</span>
    <!-- iOS-style app shine effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-10 rounded-2xl"></div>
  </a>
  <span class="mt-2 text-white text-sm font-medium drop-shadow-lg">{app.name}</span>
</div>

<style>
  /* Optional: Add jiggle animation when dragging */
  div[data-dragging="true"] {
    animation: jiggle 0.3s infinite;
  }

  @keyframes jiggle {
    0%, 100% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
  }
</style> 