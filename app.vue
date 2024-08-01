<script setup lang="ts">
const { menu } = useMenu()
const { search } = useSearch()
</script>

<template>
  <Body class="bg-zinc-700 text-zinc-50 sm:py-2">
    <div
      class="grid mx-auto h-screen max-w-xl overflow-x-hidden bg-zinc-900 sm:h-[calc(100vh-16px)] sm:rounded-lg sm:ring-4 sm:ring-black"
      :class="{ 'overflow-y-hidden': menu || search, 'overflow-y-auto': !menu && !search }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Body>
</template>
