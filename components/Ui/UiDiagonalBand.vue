<script setup lang="ts">
const props = withDefaults(defineProps<{
  btt?: boolean // bottom to top
}>(), {
  btt: true,
})
const { btt } = toRefs(props)
</script>

<template>
  <div
    class="bg-zinc-800 text-white text-center p-24 -my-12"
    :class="{ 'band-btt': btt, 'band-ttb': !btt }"
  >
    <slot />
  </div>
</template>

<style scoped>
.band-btt {
  clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);
}
.band-ttb {
  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 75%);
}
</style>
