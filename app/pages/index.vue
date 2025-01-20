<script setup lang="ts">
  import banner1 from '~/assets/img/banner1.jpg'
  import banner2 from '~/assets/img/banner2.jpg'
  import banner3 from '~/assets/img/banner3.svg'
  import c02 from '~/assets/img/c02.jpg'
  import c03 from '~/assets/img/c03.jpg'
  import c04 from '~/assets/img/c04.jpg'
  import c05 from '~/assets/img/c05.jpg'

  const { t } = useI18n()

  const cards = computed(() => [
    {
      title: t('home.cards.windPower.title'),
      content: t('home.cards.windPower.content'),
      image: c02,
    },
    {
      title: t('home.cards.smartControl.title'),
      content: t('home.cards.smartControl.content'),
      image: c03,
    },
    {
      title: t('home.cards.innovation.title'),
      content: t('home.cards.innovation.content'),
      image: c04,
    },
    {
      title: t('home.cards.service.title'),
      content: t('home.cards.service.content'),
      image: c05,
    },
  ])

  const bannerImages = ref([
    {
      id: 1,
      url: banner1,
    },
    {
      id: 2,
      url: banner2,
    },
    {
      id: 3,
      url: banner3,
    },
  ])
</script>

<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="flex-shrink-0 aspect-auto">
          <img
            :src="card.image"
            :alt="card.title"
            class="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <div class="flex-1 p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2">
            {{ card.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 flex-1">
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="w-full lg:w-2/3">
        <div class="bg-gray-100 dark:bg-gray-800 aspect-video">
          <UCarousel
            v-slot="{ item }"
            :items="bannerImages"
            fade
            :loop="true"
            :autoplay="{ delay: 3000 }"
          >
            <img
              :src="item.url"
              :alt="`Banner ${item.id}`"
              class="w-full h-full aspect-[16/9] object-cover object-center rounded-lg shadow-lg"
            />
          </UCarousel>
        </div>
      </div>

      <div class="w-full lg:w-1/3 flex h-auto">
        <TheGeneratorSearch />
      </div>
    </div>
  </section>
</template>
