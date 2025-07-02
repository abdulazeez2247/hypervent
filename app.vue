<template>
  <div class="min-h-screen bg-white text-black font-sans">
    <NuxtPage />
  </div>
</template>

<script setup>

</script>

<style>

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #333; 
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #555; 
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>