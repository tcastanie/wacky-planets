<script lang="ts" setup>
const { headerHeight } = useAppConfig()
const { menu, toggleMenu } = useMenu()
</script>

<template>
  <header class="sticky top-0 z-50 bg-zinc-950">
    <div class="header-height flex items-center justify-between gap-4 border-b border-zinc-700 px-4">
      <SearchButton />
      <NuxtLink
        v-if="menu"
        to="/"
        class="flex gap-2 border border-zinc-600 rounded-xl border-dashed px-2 py-1 text-zinc-100 hover:border-2 hover:border-dotted"
        @click="toggleMenu()"
      >
        <span class="i-mingcute-rocket-line h-6 w-6 shrink-0" />
        <span class="i-mingcute-planet-line h-6 w-6 shrink-0" />
      </NuxtLink>
      <button
        class="flex rounded-lg p-1 text-zinc-100"
        @click="toggleMenu()"
      >
        <span
          class="h-6 w-6 shrink-0"
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
        class="panel-top absolute w-full bg-zinc-950 px-4"
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
