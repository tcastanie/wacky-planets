<script setup lang="ts">
useState('statePlanets', () => ['Myrtille', 'Pandora', 'Cristaflore', 'Noirapolis', 'Prismavore', 'Exobizarre', 'BoogieWonderland', 'Nova', 'Licornellum'])
const menu = useState('isMenuOpen', () => false)
</script>

<template>
  <Body class="bg-zinc-700 sm:py-2">
    <div
      class="max-w-xl grid mx-auto bg-zinc-100 sm:rounded-lg sm:ring-4 sm:ring-zinc-900 h-screen sm:h-[calc(100vh-16px)]"
      :class="{ 'overflow-y-hidden': menu, 'overflow-y-auto': !menu }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Body>
</template>
