<template>
  <div>
    <NuxtPicture
      src="/nasa-1.jpg"
      alt="nasa-hubble-space-telescope"
      sizes="576px"
      width="576"
      height="432"
    />
    <div class="my-8 px-8">
      <UiTitle>{{ $t('exo1title') }}</UiTitle>
      <p>{{ $t('exo1') }}</p>
    </div>
    <NuxtPicture
      src="/nasa-2.jpg"
      alt="nasa-hubble-space-telescope"
      sizes="576px"
      width="576"
      height="445"
    />
    <UiDiagonalBand :btt="false">
      <blockquote>
        <p class="mb-4 text-balance text-xl italic">
          {{ $t('quote1') }}
        </p>
        <footer class="text-sm">
          Gandalf
        </footer>
      </blockquote>
    </UiDiagonalBand>
    <div class="my-8 px-8">
      <UiTitle>{{ $t('exo2title') }}</UiTitle>
      <p>{{ $t('exo2') }}</p>
    </div>
    <NuxtPicture
      src="/nasa-3.jpg"
      alt="nasa-hubble-space-telescope"
      sizes="576px"
      width="576"
      height="720"
    />
    <UiDiagonalBand>
      <blockquote>
        <p class="mb-4 text-balance text-xl italic">
          {{ $t('quote2') }}
        </p>
        <footer class="text-sm">
          Dark Vador
        </footer>
      </blockquote>
    </UiDiagonalBand>
    <NuxtPicture
      src="/nasa-4.jpg"
      alt="nasa-hubble-space-telescope"
      sizes="576px"
      width="576"
      height="348"
    />
    <div class="my-8 px-8">
      <UiTitle>{{ $t('exo3title') }}</UiTitle>
      <p>{{ $t('exo3') }}</p>
    </div>
    <NuxtPicture
      src="/nasa-5.jpg"
      alt="nasa-hubble-space-telescope"
      sizes="576px"
      width="576"
      height="487"
    />
    <div class="my-8 px-8">
      <UiTitle>{{ $t('exo4title') }}</UiTitle>
      <p>{{ $t('exo4') }}</p>
    </div>
    <div class="my-8 px-8 pt-8">
      <UiSubtitle class="text-center">
        <NuxtLink to="/planets">
          {{ $t('explorePlanets') }}
        </NuxtLink>
      </UiSubtitle>
    </div>
  </div>
</template>
