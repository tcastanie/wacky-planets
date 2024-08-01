<script lang="ts" setup>
const { toggleMenu } = useMenu()

const planets = usePlanets()
const links = [
  { to: '/home', localeKey: 'exoplanets' },
  {
    to: '/planets',
    localeKey: 'planets',
    children: planets.value.map(planet => ({
      to: `/planets/${planet}`,
      text: planet,
    })),
  },
  { to: '/about', localeKey: 'about' },
]

const toggleSub = (to: string) => {
  if (openSubs.value.includes(to)) {
    openSubs.value = openSubs.value.filter(sub => sub !== to)
  }
  else if (openSubs.value.some(sub => sub.includes(to))) {
    openSubs.value = openSubs.value.filter(sub => !sub.includes(to))
  }
  else {
    openSubs.value = [...openSubs.value, to]
  }
}
const route = useRoute()
const openSubs = ref<string[]>([route.path])
</script>

<template>
  <nav class="px-16 pt-16">
    <ul class="grid gap-4 text-2xl font-medium">
      <li
        v-for="{ to, localeKey, children } of links"
        :key="to"
        class="flex"
      >
        <div class="grid h-8 w-12 place-items-center text-zinc-600">
          <span
            v-if="children"
            class="i-mingcute-right-line h-4 w-4 shrink-0 cursor-pointer transition-transform"
            :class="{ 'rotate-90': openSubs.includes(to) || openSubs.some(sub => sub.includes(to)) }"
            @click="toggleSub(to)"
          />
        </div>
        <NuxtLink
          v-if="!children"
          :to="to"
          @click="toggleMenu()"
        >
          {{ $t(localeKey) }}
        </NuxtLink>
        <div
          v-else-if="children"
        >
          <NuxtLink
            :to="to"
            @click="toggleMenu()"
          >
            {{ $t(localeKey) }}
          </NuxtLink>
          <ul
            v-if="openSubs.includes(to) || openSubs.some(sub => sub.includes(to))"
            class="grid mt-4 gap-4 pl-8 text-lg font-medium"
          >
            <li
              v-for="{ to: childrenTo, text } of children"
              :key="text"
            >
              <NuxtLink
                :to="childrenTo"
                class="capitalize"
                @click="toggleMenu()"
              >
                {{ text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
