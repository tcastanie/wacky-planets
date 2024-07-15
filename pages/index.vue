<script lang="ts" setup>
const { setLocale } = useI18n()
definePageMeta({ layout: false })

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/eclipse.jpg', { width: 576 })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div
    class="relative h-full bg-no-repeat bg-center bg-cover flex items-end justify-center p-16"
    :style="backgroundStyles"
  >
    <div class="absolute mx-auto top-46% left-50% text-right flex flex-col">
      <span class="text-2xl">Wacky</span>
      <span class="text-3xl">Planets</span>
    </div>
    <div class="flex gap-x-8 flex-wrap text-white">
      <NuxtLink
        to="/home"
        class="border border-white rounded p-2 px-4"
        @click="setLocale('en')"
      >
        English
      </NuxtLink>
      <NuxtLink
        to="/home"
        class="border border-white rounded p-2 px-4"
        @click="setLocale('fr')"
      >
        French
      </NuxtLink>
    </div>
  </div>
</template>
