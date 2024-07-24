<script setup lang="ts">
const { menu } = useMenu()
</script>

<template>
  <Body class="bg-zinc-700 text-zinc-50 sm:py-2">
    <div
      class="max-w-xl grid mx-auto bg-zinc-900 sm:rounded-lg sm:ring-4 sm:ring-black h-screen sm:h-[calc(100vh-16px)] overflow-x-hidden"
      :class="{ 'overflow-y-hidden': menu, 'overflow-y-auto': !menu }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Body>
</template>
