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
  <div class="relative mb-16">
    <div
      class="sticky left-0 right-0 top-16 h-[576px] bg-cover bg-center bg-no-repeat"
      :style="backgroundStyles"
    />
    <div class="band-ttb relative z-1 bg-zinc-900 p-24 text-center -my-16">
      <UiTitle>
        {{ capSlug }}
      </UiTitle>
    </div>
    <div class="relative z-1 grid gap-8 bg-zinc-900 px-8 text-center text-pretty text-lg">
      <p>{{ $t('planetDesc1', { slug: capSlug }) }}</p>
      <p>{{ $t('planetDesc2', { slug: capSlug }) }}</p>
    </div>
    <NuxtLink
      v-if="prev > 0"
      :to="`/planets/${planets[prev].toLocaleLowerCase()}`"
      class="absolute left-0 top-[576px] z-2 flex"
    >
      <span class="i-mingcute-right-line h-8 w-8 shrink-0 rotate-180" />
    </NuxtLink>
    <NuxtLink
      v-if="next < planets.length"
      :to="`/planets/${planets[next].toLocaleLowerCase()}`"
      class="absolute right-0 top-[576px] z-2 flex"
    >
      <span class="i-mingcute-right-line h-8 w-8 shrink-0" />
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
