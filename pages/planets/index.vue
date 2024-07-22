<script setup lang="ts">
const planets = usePlanets()
</script>

<template>
  <div class="px-8 mt-8 mb-16">
    <UiTitle>{{ $t('planets') }}</UiTitle>
    <div class="grid grid-cols-2 gap-8 mt-8">
      <NuxtLink
        v-for="planet of planets"
        :key="planet"
        :to="`/planets/${planet.toLocaleLowerCase()}`"
        class="grid gap-4 place-items-center text-center"
      >
        <NuxtPicture
          :src="`/planets/${planet.toLocaleLowerCase()}.jpg`"
          :alt="`${planet} overview`"
          sizes="128px"
          width="128"
          height="128"
          :img-attrs="{ class: 'rounded-xl' }"
        />
        <div class="text-xl text-balance">
          {{ planet }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
