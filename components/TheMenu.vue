<script lang="ts" setup>
const planets = useState<string[]>('statePlanets')
const links = [
  { to: '/home', localeKey: 'exoplanets' },
  {
    to: '/planets',
    localeKey: 'planets',
    children: planets.value.map(planet => ({
      to: `/planets/${planet.toLocaleLowerCase()}`,
      text: planet,
    })),
  },
  { to: '/about', localeKey: 'about' },
]
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
        <div class="w-12 h-8 grid place-items-center text-zinc-700">
          <span
            v-if="children"
            class="i-mingcute-right-line w-4 h-4 shrink-0 cursor-pointer transition-transform"
            :class="{ 'rotate-90': openSubs.includes(to) }"
            @click="openSubs.includes(to) ? openSubs.splice(openSubs.indexOf(to), 1) : openSubs.push(to)"
          />
        </div>
        <NuxtLink
          v-if="!children"
          :to="to"
        >
          {{ $t(localeKey) }}
        </NuxtLink>
        <div
          v-else-if="children"
          v-auto-animate
        >
          <div
            class="cursor-pointer"
            @click="openSubs.includes(to) ? openSubs.splice(openSubs.indexOf(to), 1) : openSubs.push(to)"
          >
            {{ $t(localeKey) }}
          </div>
          <ul
            v-if="openSubs.includes(to)"
            class="grid gap-4 text-lg font-medium mt-4 pl-8"
          >
            <li
              v-for="{ to: childrenTo, text } of children"
              :key="text"
            >
              <NuxtLink :to="childrenTo">
                {{ text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
