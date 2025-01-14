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

  // 页面元数据设置
  useHead(() => ({
    title: t('site.title'),
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: '网站描述' },
      { name: 'keywords', content: '关键词1,关键词2' },
    ],
  }))

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
      class="sticky top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-black/20"
      :class="['h-[clamp(3.5rem,5vh,5rem)]']"
    >
      <nav
        class="w-full h-full mx-auto px-[clamp(1rem,2vw,2rem)] flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="flex items-center gap-[clamp(0.25rem,1vw,0.75rem)] rounded-lg p-[clamp(0.25rem,0.5vw,0.5rem)]"
        >
          <img
            src="/images/logo.svg"
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
          class="hidden 2xl:flex items-center gap-[clamp(0.5rem,1.5vw,1.5rem)] w-full justify-center px-[clamp(0.5rem,2vw,1.5rem)]"
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
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
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
              class="w-[clamp(5rem,7vw,6rem)]"
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
    <!-- Banner区域 -->
    <section class="w-full aspect-auto relative z-10 overflow-hidden">
      <img
        src="/images/banner.webp"
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
    <footer class="w-full mx-auto px-[clamp(1rem,3vw,2rem)] py-[clamp(2rem,4vw,3rem)]">
      <!-- 底部推荐链接 -->
      <div class="flex justify-center w-full">
        <div
          class="grid w-full max-w-[min(1200px,90vw)] gap-[clamp(2rem,4vw,3rem)]"
          :class="[
            'grid-cols-2 md:grid-cols-4', // 在中等屏幕以上使用4列，小屏使用2列
            'auto-rows-auto', // 自动行高
          ]"
        >
          <div
            v-for="(column, index) in footerLinks"
            :key="index"
            class="flex flex-col space-y-[clamp(0.75rem,2vw,1.5rem)]"
          >
            <h3 class="text-[clamp(1rem,1.2vw,1.25rem)] font-bold">{{ column.title }}</h3>
            <ul class="space-y-[clamp(0.5rem,1vw,0.75rem)]">
              <li
                v-for="(link, linkIndex) in column.links"
                :key="linkIndex"
              >
                <a
                  :href="link.url"
                  class="text-[clamp(0.875rem,1.1vw,1rem)] hover:text-primary-500 transition-colors duration-200"
                  >{{ link.text }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <USeparator class="my-[clamp(1.5rem,3vw,2rem)]" />
      <!-- 底部版权 -->
      <div class="h-[clamp(3rem,4vw,4rem)] flex items-center justify-center">
        <p class="text-[clamp(0.75rem,1vw,0.875rem)]">
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
