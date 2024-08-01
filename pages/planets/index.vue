<script setup lang="ts">
const planets = usePlanets()
</script>

<template>
  <div class="mb-16 mt-8 px-8">
    <UiTitle>{{ $t('planets') }}</UiTitle>
    <div class="grid grid-cols-2 mt-8 gap-8">
      <NuxtLink
        v-for="planet of planets"
        :key="planet"
        :to="`/planets/${planet.toLocaleLowerCase()}`"
        class="grid place-items-center gap-4 text-center"
      >
        <NuxtPicture
          :src="`/planets/${planet.toLocaleLowerCase()}.jpg`"
          :alt="`${planet} overview`"
          sizes="128px"
          width="128"
          height="128"
          :img-attrs="{ class: 'rounded-xl' }"
        />
        <div class="text-balance text-xl capitalize">
          {{ planet }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
