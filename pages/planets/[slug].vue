<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string
const capSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

definePageMeta({
  validate: async (route) => {
    const planets = usePlanets()
    return typeof route.params.slug === 'string' && planets.value.map(planet => planet.toLocaleLowerCase()).includes(route.params.slug)
  },
})

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img(`/planets/${slug.toLocaleLowerCase()}.jpg`, { width: 576 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div class="mb-16">
    <!-- <NuxtPicture
      :src="`planets/${slug}.jpg`"
      :alt="`${slug} picture`"
      sizes="576px"
      width="576"
      height="576"
    /> -->

    <div
      class="h-[576px] bg-no-repeat bg-center bg-cover sticky top-16 right-0 left-0"
      :style="backgroundStyles"
    />
    <div class="band-ttb bg-zinc-900 text-center p-24 -my-16 z-1 relative">
      <UiTitle class="capitalize">
        {{ slug }}
      </UiTitle>
    </div>
    <div class="grid gap-8 px-8 text-lg text-center text-pretty z-1 relative bg-zinc-900">
      <p>{{ $t('planetDesc1', { slug: capSlug }) }}</p>
      <p>{{ $t('planetDesc2', { slug: capSlug }) }}</p>
    </div>
  </div>
</template>

<style scoped>
.band-ttb {
  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 75%);
}
</style>
