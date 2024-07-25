<script lang="ts" setup>
const { search, toggleSearch } = useSearch()
const planets = usePlanets()
const searchText = ref('')
const searchResults = computed(() => {
  return planets.value.filter(planet => planet.includes(searchText.value))
})

// Focus the search input when the search is toggled
const searchinput = ref<HTMLInputElement | null>(null)
watchEffect(() => {
  if (search) searchinput.value?.focus()
})
</script>

<template>
  <button
    class="flex bg-zinc-100 text-zinc-900 rounded-full p-2"
    @click="toggleSearch()"
  >
    <span class="i-mingcute-search-2-line w-6 h-6 shrink-0" />
  </button>
  <ClientOnly>
    <Teleport to="#page">
      <div
        v-if="search"
        class="absolute inset-x-0 top-0 h-screen z-99 bg-zinc-900/95 flex flex-col gap-y-2 py-2 px-12"
      >
        <UiTitle class="self-center">
          {{ $t('search') }}
        </UiTitle>
        <input
          ref="searchinput"
          v-model="searchText"
          type="search"
          class="w-full rounded p-2 bg-transparent border-2 border-zinc-400 text-zinc-100"
        >
        <div class="grid divide-y divide-dashed divide-zinc-600 self-start w-full px-2">
          <NuxtLink
            v-for="result in searchResults"
            :key="result"
            :to="`/planets/${result}`"
            class="text-zinc-100 hover:text-zinc-50 capitalize flex items-center gap-x-4 py-2"
          >
            <NuxtPicture
              :src="`/planets/${result}.jpg`"
              :alt="`${result} avatar`"
              sizes="48px"
              width="48"
              height="48"
              :img-attrs="{ class: 'rounded' }"
            />
            <p>{{ result }}</p>
          </NuxtLink>
        </div>
        <button
          class="absolute top-4 right-4 flex"
          @click="toggleSearch(false)"
        >
          <span class="i-mingcute-close-circle-line w-10 h-10 shrink-0" />
        </button>
      </div>
    </Teleport>
  </ClientOnly>
</template>
