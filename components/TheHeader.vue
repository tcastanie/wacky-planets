<script lang="ts" setup>
const { headerHeight } = useAppConfig()
const { menu, toggleMenu } = useMenu()
</script>

<template>
  <header class="sticky top-0 z-50 bg-zinc-950">
    <div class="header-height flex items-center justify-between gap-4 px-4 border-b border-zinc-700">
      <SearchButton />
      <NuxtLink
        v-if="menu"
        to="/"
        class="flex gap-2 py-1 px-2 text-zinc-100 border border-zinc-600 border-dashed rounded-xl hover:border-dotted hover:border-2"
        @click="toggleMenu()"
      >
        <span class="i-mingcute-rocket-line w-6 h-6 shrink-0" />
        <span class="i-mingcute-planet-line w-6 h-6 shrink-0" />
      </NuxtLink>
      <button
        class="flex rounded-lg p-1 text-zinc-100"
        @click="toggleMenu()"
      >
        <span
          class="w-6 h-6 shrink-0"
          :class="{
            'i-mingcute-menu-line': !menu,
            'i-mingcute-close-line': menu,
          }"
        />
      </button>
    </div>
    <Transition>
      <div
        v-show="menu"
        class="panel-top absolute w-full px-4 bg-zinc-950"
      >
        <TheMenu />
      </div>
    </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease-in;
}

.v-enter-from,
.v-leave-to {
  left: 100%;
}

.v-enter-to,
.v-leave-from {
  left: 0;
}
</style>
