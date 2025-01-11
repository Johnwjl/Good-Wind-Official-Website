<script setup lang="ts">
  const { setLocale, t } = useI18n()
  const items = ref([
    { label: '中文', value: 'zh' },
    { label: 'English', value: 'en' },
  ])
  const value = ref('zh')

  // 直接处理语言切换事件
  const handleLanguageChange = (newValue: string) => {
    setLocale(newValue as 'en' | 'zh')
  }

  // 页面元数据设置
  useHead({
    title: '顺风发电',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: '网站描述' },
      { name: 'keywords', content: '关键词1,关键词2' },
    ],
  })

  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    },
  })

  // 导航菜单配置
  const menuItems = computed(() => [
    {
      label: t('nav.fixed'),
      icon: 'i-hugeicons-installing-updates-01',
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
      icon: 'i-tabler-engine',
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
      icon: 'i-tdesign-system-application',
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
      icon: 'i-carbon-ibm-cloud-pak-integration',
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
      icon: 'i-heroicons-circle-stack',
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
      icon: 'i-ant-design-deployment-unit-outlined',
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

  // 添加 logo 路径
  const logoUrl = '/images/logo.png'

  const footerLinks = computed(() => [
    {
      title: t('footer.about.title'),
      links: [
        { text: t('footer.about.company'), url: '#' },
        { text: t('footer.about.history'), url: '#' },
        { text: t('footer.about.culture'), url: '#' },
        { text: t('footer.about.honors'), url: '#' },
      ],
    },
    {
      title: t('footer.services.title'),
      links: [
        { text: t('footer.services.fixed'), url: '#' },
        { text: t('footer.services.rental'), url: '#' },
        { text: t('footer.services.support'), url: '#' },
        { text: t('footer.services.after'), url: '#' },
      ],
    },
    {
      title: t('footer.news.title'),
      links: [
        { text: t('footer.news.company'), url: '#' },
        { text: t('footer.news.industry'), url: '#' },
        { text: t('footer.news.technical'), url: '#' },
        { text: t('footer.news.faq'), url: '#' },
      ],
    },
    {
      title: t('footer.contact.title'),
      links: [
        { text: t('footer.contact.info'), url: '#' },
        { text: t('footer.contact.message'), url: '#' },
        { text: t('footer.contact.join'), url: '#' },
        { text: t('footer.contact.locations'), url: '#' },
      ],
    },
  ])
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator />
    <header
      class="sticky top-0 left-0 h-16 md:h-20 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-black/20"
    >
      <nav class="w-full h-full mx-auto px-4 flex items-center justify-between">
        <NuxtLink
          to="/"
          class="flex rounded-lg p-1 drop-shadow-sm hover:drop-shadow-md transition-all"
        >
          <img
            :src="logoUrl"
            alt="GoodWind Logo"
            class="h-8 md:h-10 w-auto"
          />
        </NuxtLink>

        <!-- 桌面端菜单 -->
        <UNavigationMenu
          variant="link"
          :items="menuItems"
          class="hidden lg:flex items-center gap-8 w-full justify-center px-4 text-shadow hover:text-shadow-lg"
          :ui="{
            link: 'text-lg font-medium tracking-wide transition-all duration-200 hover:text-primary-500',
          }"
        />

        <div class="flex items-center gap-4">
          <!-- 主题切换按钮 -->
          <ClientOnly>
            <UButton
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="link"
              @click="isDark = !isDark"
            />
          </ClientOnly>

          <ClientOnly>
            <USelect
              v-model="value"
              :items="items"
              class="w-24"
              @update:model-value="handleLanguageChange"
            />
          </ClientOnly>

          <!-- 汉堡菜单按钮 -->
          <USlideover title="顺风发电官网">
            <UButton
              class="lg:hidden"
              icon="i-lucide-menu"
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
                    'group w-full px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800',
                  childLinkLabel: 'font-medium text-lg',
                  childLinkDescription: 'text-base text-gray-500 dark:text-gray-400',
                  link: 'group w-full px-4 py-3 text-xl hover:bg-gray-100 dark:hover:bg-gray-800',
                  linkLabel: 'font-medium text-xl',
                }"
              />
            </template>
          </USlideover>
        </div>
      </nav>
    </header>
    <!-- Banner区域 -->
    <section class="w-full aspect-auto relative z-10 overflow-hidden">
      <img
        src="/images/banner.gif"
        alt="Site Banner"
        class="w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />
    </section>
    <!-- 主要内容区域 -->
    <main class="flex-1 mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <!-- 页脚 -->
    <footer class="w-full mx-auto px-4 py-8">
      <!-- 底部推荐链接 -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div
          v-for="(column, index) in footerLinks"
          :key="index"
          class="space-y-4 mx-auto"
        >
          <h3 class="text-xl font-bold mb-4">{{ column.title }}</h3>
          <ul class="text-xl space-y-2">
            <li
              v-for="(link, linkIndex) in column.links"
              :key="linkIndex"
            >
              <a
                :href="link.url"
                class="hover:text-primary-500"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
      <USeparator />
      <!-- 底部版权 -->
      <div class="h-16 flex items-center justify-center">
        <p class="text-sm">
          {{ t('copyright', { year: new Date().getFullYear() }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
  html {
    font-size: 16px;
  }

  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  /* 主题切换过渡效果 */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  /* 确保过渡效果平滑 */
  :root {
    --transition-duration: 200ms;
    transition:
      background-color var(--transition-duration) ease-in-out,
      color var(--transition-duration) ease-in-out;
  }

  /* 支持 view transitions API 的浏览器 */
  @supports (view-transition-name: none) {
    body {
      view-transition-name: body;
    }
  }

  /* 添加文字阴影工具类 */
  .text-shadow {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .text-shadow-lg {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  /* 深色模式下的文字阴影 */
  @media (prefers-color-scheme: dark) {
    .text-shadow {
      text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
    }

    .text-shadow-lg {
      text-shadow: 0 2px 4px rgba(255, 255, 255, 0.15);
    }
  }
</style>
