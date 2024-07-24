<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string
const capSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

const planets = usePlanets()
const id = computed(() => planets.value.indexOf(slug) || 1)
const prev = computed(() => id.value - 1)
const next = computed(() => id.value + 1)

definePageMeta({
  validate: async (route) => {
    const planets = usePlanets()
    return typeof route.params.slug === 'string' && planets.value.includes(route.params.slug)
  },
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in',
  },
  middleware(to, from) {
    if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean') {
      const planets = usePlanets()
      const toIndex = planets.value.indexOf(to.params.slug as string)
      const fromIndex = planets.value.indexOf(from.params.slug as string)
      to.meta.pageTransition.name = toIndex > fromIndex ? 'slide-left' : 'slide-right'
    }
  },
})

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(`/planets/${slug}.jpg`, { width: 576 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div class="mb-16 relative">
    <div
      class="h-[576px] bg-no-repeat bg-center bg-cover sticky top-16 right-0 left-0"
      :style="backgroundStyles"
    />
    <div class="band-ttb bg-zinc-900 text-center p-24 -my-16 z-1 relative">
      <UiTitle>
        {{ capSlug }}
      </UiTitle>
    </div>
    <div class="grid gap-8 px-8 text-lg text-center text-pretty z-1 relative bg-zinc-900">
      <p>{{ $t('planetDesc1', { slug: capSlug }) }}</p>
      <p>{{ $t('planetDesc2', { slug: capSlug }) }}</p>
    </div>
    <NuxtLink
      v-if="prev > 0"
      :to="`/planets/${planets[prev].toLocaleLowerCase()}`"
      class="absolute z-2 top-[576px] left-0 flex"
    >
      <span class="i-mingcute-right-line w-8 h-8 shrink-0 rotate-180" />
    </NuxtLink>
    <NuxtLink
      v-if="next < planets.length"
      :to="`/planets/${planets[next].toLocaleLowerCase()}`"
      class="absolute z-2 top-[576px] right-0 flex"
    >
      <span class="i-mingcute-right-line w-8 h-8 shrink-0" />
    </NuxtLink>
  </div>
</template>

<style scoped>
.band-ttb {
  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 75%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s ease-in;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(100px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-100px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(100px, 0);
}
</style>
