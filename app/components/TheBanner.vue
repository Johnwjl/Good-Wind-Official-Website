<!-- components/TheBanner.vue -->
<script setup lang="ts">
  const { t, locale } = useI18n()
  const currentTextIndex = ref(0)

  onMounted(() => {
    const timer = setInterval(() => {
      currentTextIndex.value = (currentTextIndex.value + 1) % 2
    }, 3000)

    onUnmounted(() => {
      if (timer) clearInterval(timer)
    })
  })
</script>

<template>
  <section class="w-full aspect-auto relative z-10 overflow-hidden">
    <img
      src="~/assets/img/banner.webp"
      alt="Site Banner"
      class="w-full h-full object-cover object-center"
      loading="eager"
      fetchpriority="high"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45 backdrop-blur-[2px]"
    >
      <div
        class="absolute inset-0 bg-gradient-radial-to-b from-transparent via-black/10 to-transparent"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
      ></div>
    </div>
    <div class="absolute inset-0 grid place-items-center">
      <div class="w-full flex flex-col items-center justify-center">
        <Transition
          name="banner-transition"
          mode="out-in"
        >
          <h2
            :key="currentTextIndex"
            class="text-white/95 font-medium tracking-wider banner-text text-center px-4 leading-[1.2]"
            :class="[
              locale === 'en'
                ? currentTextIndex === 0
                  ? 'text-[clamp(1.5rem,3vw+1rem,4rem)]'
                  : 'text-[clamp(1.75rem,4vw+1rem,5rem)]'
                : currentTextIndex === 0
                  ? 'text-[clamp(2rem,4vw+1rem,5rem)]'
                  : 'text-[clamp(2.25rem,5vw+1rem,6rem)]',
            ]"
          >
            {{ currentTextIndex === 0 ? t('site.slogon1') : t('site.slogon2') }}
          </h2>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* Banner 文字切换动画 */
  .banner-transition-enter-active,
  .banner-transition-leave-active {
    transition: all 0.4s ease;
    position: absolute;
    width: 100%;
  }

  .banner-transition-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .banner-transition-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
