<script setup lang="ts">
  const { setLocale, t, locale } = useI18n()

  const items = computed(() => [
    { label: t('site.languages.zh'), value: 'zh' },
    { label: t('site.languages.en'), value: 'en' },
  ])

  const value = ref(locale.value)

  const handleLanguageChange = (newValue: string) => {
    setLocale(newValue as 'en' | 'zh')
  }

  const colorMode = useColorMode()

  const isDark = computed({
    get: () => colorMode.value === 'dark',
    set: () => (colorMode.preference = isDark.value ? 'light' : 'dark'),
  })

  // 导航菜单配置
  const menuItems = computed(() => [
    {
      label: t('nav.fixed'),
      icon: 'i-custom-installing',
      children: [
        {
          label: t('menu.introduction'),
          description: t('descriptions.introduction'),
          icon: 'i-lucide-house',
        },
        {
          label: t('menu.installation'),
          description: t('descriptions.installation'),
          icon: 'i-lucide-cloud-download',
        },
        {
          label: t('menu.icons'),
          description: t('descriptions.icons'),
          icon: 'i-lucide-smile',
        },
        {
          label: t('menu.colors'),
          description: t('descriptions.colors'),
          icon: 'i-lucide-swatch-book',
        },
        {
          label: t('menu.theme'),
          description: t('descriptions.theme'),
          icon: 'i-lucide-cog',
        },
      ],
    },
    {
      label: t('nav.rental'),
      icon: 'i-custom-tabler-engine',
      children: [
        {
          label: t('menu.shortcuts'),
          icon: 'i-lucide-file-text',
          description: t('descriptions.shortcuts'),
          to: '/composables/define-shortcuts',
        },
        {
          label: t('menu.modal'),
          icon: 'i-lucide-file-text',
          description: t('descriptions.modal'),
          to: '/composables/use-modal',
        },
        {
          label: t('menu.slideover'),
          icon: 'i-lucide-file-text',
          description: t('descriptions.slideover'),
          to: '/composables/use-slideover',
        },
        {
          label: t('menu.toast'),
          icon: 'i-lucide-file-text',
          description: t('descriptions.toast'),
          to: '/composables/use-toast',
        },
      ],
    },
    {
      label: t('nav.telecom'),
      icon: 'i-custom-application',
      active: true,
      children: [
        {
          label: t('menu.introduction'),
          description: t('descriptions.introduction'),
          icon: 'i-lucide-house',
        },
        {
          label: t('menu.installation'),
          description: t('descriptions.installation'),
          icon: 'i-lucide-cloud-download',
        },
        {
          label: t('menu.icons'),
          description: t('descriptions.icons'),
          icon: 'i-lucide-smile',
        },
        {
          label: t('menu.colors'),
          description: t('descriptions.colors'),
          icon: 'i-lucide-swatch-book',
        },
        {
          label: t('menu.theme'),
          description: t('descriptions.theme'),
          icon: 'i-lucide-cog',
        },
      ],
    },
    {
      label: t('nav.integrated'),
      icon: 'i-custom-cloud-pak-integration',
      children: [
        {
          label: t('menu.introduction'),
          description: t('descriptions.introduction'),
          icon: 'i-lucide-house',
        },
        {
          label: t('menu.installation'),
          description: t('descriptions.installation'),
          icon: 'i-lucide-cloud-download',
        },
        {
          label: t('menu.icons'),
          description: t('descriptions.icons'),
          icon: 'i-lucide-smile',
        },
        {
          label: t('menu.colors'),
          description: t('descriptions.colors'),
          icon: 'i-lucide-swatch-book',
        },
        {
          label: t('menu.theme'),
          description: t('descriptions.theme'),
          icon: 'i-lucide-cog',
        },
      ],
    },
    {
      label: t('nav.resources'),
      icon: 'i-custom-circle-stack',
      children: [
        {
          label: t('menu.introduction'),
          description: t('descriptions.introduction'),
          icon: 'i-lucide-house',
        },
        {
          label: t('menu.installation'),
          description: t('descriptions.installation'),
          icon: 'i-lucide-cloud-download',
        },
        {
          label: t('menu.icons'),
          description: t('descriptions.icons'),
          icon: 'i-lucide-smile',
        },
        {
          label: t('menu.colors'),
          description: t('descriptions.colors'),
          icon: 'i-lucide-swatch-book',
        },
        {
          label: t('menu.theme'),
          description: t('descriptions.theme'),
          icon: 'i-lucide-cog',
        },
      ],
    },
    {
      label: t('nav.industry'),
      icon: 'i-custom-outlined',
      children: [
        {
          label: t('menu.introduction'),
          description: t('descriptions.introduction'),
          icon: 'i-lucide-house',
        },
        {
          label: t('menu.installation'),
          description: t('descriptions.installation'),
          icon: 'i-lucide-cloud-download',
        },
        {
          label: t('menu.icons'),
          description: t('descriptions.icons'),
          icon: 'i-lucide-smile',
        },
        {
          label: t('menu.colors'),
          description: t('descriptions.colors'),
          icon: 'i-lucide-swatch-book',
        },
        {
          label: t('menu.theme'),
          description: t('descriptions.theme'),
          icon: 'i-lucide-cog',
        },
      ],
    },
  ])
</script>

<template>
  <header
    class="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-black/20"
    :class="['h-[clamp(3.5rem,5vh,5rem)]']"
  >
    <nav class="w-full h-full mx-auto px-[clamp(1rem,2vw,2rem)] flex items-center justify-between">
      <NuxtLink
        to="/"
        class="flex items-center gap-[clamp(0.25rem,1vw,0.75rem)] rounded-lg p-[clamp(0.25rem,0.5vw,0.5rem)]"
      >
        <img
          src="~/assets/img/logo.svg"
          alt="GoodWind Logo"
          class="w-[clamp(2rem,4vw,3rem)]"
          width="50"
          height="50"
          loading="eager"
          decoding="async"
        />
        <span
          class="font-bold tracking-wide whitespace-nowrap transition-colors duration-300 text-primary-600 dark:text-primary-400"
          :class="
            locale === 'en'
              ? 'text-[clamp(0.875rem,1.5vw,1.5rem)]'
              : 'text-[clamp(1rem,1.75vw,1.75rem)]'
          "
        >
          {{ t('site.title') }}
        </span>
      </NuxtLink>

      <!-- 桌面端导航菜单 -->
      <UNavigationMenu
        variant="link"
        :items="menuItems"
        class="hidden min-[1440px]:flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)] w-full justify-center px-[clamp(0.5rem,2vw,1.5rem)]"
        :ui="{
          item: 'text-[clamp(0.75rem,1vw,1rem)]',
          link: 'gap-[0.35em]',
          linkLeadingIcon: 'text-[1em]',
        }"
      />

      <div class="flex items-center gap-[clamp(0.5rem,1vw,1rem)]">
        <!-- 主题切换按钮 -->
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-custom-lucide-moon' : 'i-custom-lucide-sun'"
            color="neutral"
            variant="link"
            class="text-[clamp(1rem,1.25vw,1.25rem)]"
            @click="isDark = !isDark"
          />
        </ClientOnly>

        <!-- 语言选择器 -->
        <ClientOnly>
          <USelect
            v-model="value"
            :items="items"
            class="w-auto min-w-[4.5rem]"
            :ui="{
              base: 'h-8',
              value: 'text-sm',
              item: 'text-sm',
            }"
            size="sm"
            @update:model-value="handleLanguageChange"
          />
        </ClientOnly>

        <!-- 移动端菜单 -->
        <USlideover
          :title="t('site.title')"
          :ui="{
            header: 'text-[clamp(0.875rem,1.1vw,1.125rem)]',
            overlay: 'backdrop-blur-sm',
          }"
        >
          <UButton
            class="2xl:hidden text-[clamp(1.25rem,1.5vw,1.5rem)]"
            icon="i-custom-lucide-menu"
            color="primary"
            variant="link"
          />

          <template #body>
            <UNavigationMenu
              variant="link"
              orientation="vertical"
              :items="menuItems"
              class="w-full h-full"
              :ui="{
                childList: 'w-full',
                childLink:
                  'group w-full px-3 py-2 text-[clamp(0.875rem,1.1vw,1.125rem)] hover:bg-gray-100 dark:hover:bg-gray-800',
                childLinkLabel: 'font-medium',
                childLinkDescription:
                  'text-[clamp(0.75rem,1vw,0.875rem)] text-gray-500 dark:text-gray-400',
                link: 'group w-full px-3 py-2 text-[clamp(1rem,1.2vw,1.25rem)] hover:bg-gray-100 dark:hover:bg-gray-800',
                linkLabel: 'font-medium',
              }"
            />
          </template>
        </USlideover>
      </div>
    </nav>
  </header>
</template>
