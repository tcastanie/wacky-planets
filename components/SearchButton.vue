<script lang="ts" setup>
const { search, toggleSearch } = useSearch()
const planets = usePlanets()
const searchText = ref('')
const searchResults = computed(() => {
  return planets.value.filter(planet => planet.includes(searchText.value.toLowerCase()))
})

// Focus the search input when the search is toggled
const searchinput = ref < HTMLInputElement | null > (null)
watchEffect(() => {
  if (search) searchinput.value?.focus()
})
</script>

<template>
  <button
    class="flex rounded-full bg-zinc-100 p-2 text-zinc-900"
    @click="toggleSearch()"
  >
    <span class="i-mingcute-search-2-line h-6 w-6 shrink-0" />
  </button>
  <ClientOnly>
    <Teleport to="#page">
      <div
        v-if="search"
        class="absolute inset-x-0 top-0 z-99 h-screen flex flex-col gap-y-2 bg-zinc-900/95 px-12 py-2"
      >
        <UiTitle class="self-center">
          {{ $t('search') }}
        </UiTitle>
        <input
          ref="searchinput"
          v-model.trim="searchText"
          type="search"
          class="w-full border-2 border-zinc-400 rounded bg-transparent p-2 text-zinc-100"
        >
        <div class="grid w-full self-start px-2 divide-y divide-zinc-600 divide-dashed">
          <NuxtLink
            v-for="result in searchResults"
            :key="result"
            :to="`/planets/${result}`"
            class="flex items-center gap-x-4 py-2 text-zinc-100 capitalize hover:text-zinc-50"
            @click="toggleSearch()"
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
          class="absolute right-4 top-4 flex"
          @click="toggleSearch(false)"
        >
          <span class="i-mingcute-close-circle-line h-10 w-10 shrink-0" />
        </button>
      </div>
    </Teleport>
  </ClientOnly>
</template>
