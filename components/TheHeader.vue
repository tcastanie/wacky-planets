<script lang="ts" setup>
const { headerHeight } = useAppConfig()

const menu = useState('isMenuOpen')
const toggleMenu = useToggle(menu)
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="header-height flex items-center justify-between gap-4 px-4">
      <button class="flex bg-zinc-800 text-white rounded-full p-2 shadow shadow-zinc-800">
        <span class="i-mingcute-search-2-line w-6 h-6 shrink-0" />
      </button>
      <NuxtLink
        v-if="menu"
        to="/"
        class="flex gap-2 py-1 px-2 text-zinc-800 border border-zinc-800 border-dashed rounded-xl hover:border-dotted hover:border-2 hover:shadow-lg"
      >
        <span class="i-mingcute-rocket-line w-6 h-6 shrink-0" />
        <span class="i-mingcute-planet-line w-6 h-6 shrink-0" />
      </NuxtLink>
      <button
        class="flex bg-zinc-100 rounded-lg p-1 text-zinc-800"
        @click="toggleMenu()"
      >
        <span
          class="w-6 h-6 shrink-0"
          :class="{ 'i-mingcute-menu-line': !menu, 'i-mingcute-close-line': menu }"
        />
      </button>
    </div>
    <div
      v-if="menu"
      class="panel-top absolute w-full px-4 bg-zinc-100"
    >
      <TheMenu />
    </div>
  </header>
</template>

<style scoped>
.header-height {
  height: v-bind(headerHeight);
}
.panel-top {
  top: calc(v-bind(headerHeight) - 1px);
  height: calc(100vh - v-bind(headerHeight) - 15px);
}
</style>
