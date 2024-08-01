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
    class="relative h-full flex items-end justify-center bg-cover bg-center bg-no-repeat p-16"
    :style="backgroundStyles"
  >
    <div class="absolute left-50% top-46% mx-auto flex flex-col text-right text-zinc-900">
      <span class="text-2xl">Wacky</span>
      <span class="text-3xl">Planets</span>
    </div>
    <div class="flex flex-wrap gap-x-8 text-white">
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
