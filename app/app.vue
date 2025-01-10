<script setup lang="ts">
// 页面元数据设置
useHead({
  title: '顺风发电',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'description', content: '网站描述' },
    { name: 'keywords', content: '关键词1,关键词2' }
  ]
})

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// 菜单数据
const menuItems1 = [
  { label: '首页', path: '/' },
  { label: '关于', path: '/about' },
  { label: '服务', path: '/services' },
  { label: '联系', path: '/contact' }
]

const menuItems = ref([
  {
    label: '定点安装',
    icon: 'i-hugeicons-installing-updates-01',
    // to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: '移动/租赁',
    icon: 'i-tabler-engine',
    // to: '/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/composables/define-shortcuts'
      },
      {
        label: 'useModal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/composables/use-modal'
      },
      {
        label: 'useSlideover',
        icon: 'i-lucide-file-text',
        description: 'Display a slideover within your application.',
        to: '/composables/use-slideover'
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/composables/use-toast'
      }
    ]
  },
  {
    label: '电信应用',
    icon: 'i-tdesign-system-application',
    // to: '/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  },
  {
    label: '综合发电方案',
    icon: 'i-carbon-ibm-cloud-pak-integration',
    // to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: '资源库',
    icon: 'i-heroicons-circle-stack',
    // to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: '行业应用',
    icon: 'i-ant-design-deployment-unit-outlined',
    // to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  // {
  //   label: 'GitHub',
  //   icon: 'i-simple-icons-github',
  //   badge: '3.8k',
  //   to: 'https://github.com/nuxt/ui',
  //   target: '_blank'
  // },
  // {
  //   label: 'Help',
  //   icon: 'i-lucide-circle-help',
  //   disabled: true
  // }
])

// 添加 logo 路径
const logoUrl = '/images/logo.png'

const footerLinks = [
  {
    title: '关于我们',
    links: [
      { text: '公司简介', url: '#' },
      { text: '发展历程', url: '#' },
      { text: '企业文化', url: '#' },
      { text: '荣誉资质', url: '#' }
    ]
  },
  {
    title: '产品服务',
    links: [
      { text: '定点安装', url: '#' },
      { text: '设备租赁', url: '#' },
      { text: '技术支持', url: '#' },
      { text: '售后服务', url: '#' }
    ]
  },
  {
    title: '新闻资讯',
    links: [
      { text: '公司动态', url: '#' },
      { text: '行业新闻', url: '#' },
      { text: '技术文章', url: '#' },
      { text: '常见问题', url: '#' }
    ]
  },
  {
    title: '联系我们',
    links: [
      { text: '联系方式', url: '#' },
      { text: '在线留言', url: '#' },
      { text: '加入我们', url: '#' },
      { text: '服务网点', url: '#' }
    ]
  }
]

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NuxtLoadingIndicator />
    <header class="sticky top-0 left-0 h-16 md:h-20 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-black/20">
      <nav class="w-full h-full mx-auto px-4 flex items-center justify-between">
          <NuxtLink to="/" class="flex rounded-lg p-1 drop-shadow-sm hover:drop-shadow-md transition-all">
            <img 
              :src="logoUrl" 
              alt="GoodWind Logo" 
              class="h-8 md:h-10 w-auto"
            >
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
            
            <!-- 汉堡菜单按钮 -->
            <USlideover title="顺风发电官网">
              <UButton
              class="lg:hidden" 
              icon="i-lucide-menu" color="primary" variant="link" 
              />

              <template #body>
                <!-- 移动端菜单 -->
                <UNavigationMenu 
                  variant="link" 
                  orientation="vertical" 
                  :items="menuItems" 
                  class="w-full h-full"
                  :ui="{
                    // 自定义子菜单样式
                    childList: 'w-full',
                    childLink: 'group w-full px-4 py-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-800',
                    childLinkLabel: 'font-medium text-lg',
                    childLinkDescription: 'text-base text-gray-500 dark:text-gray-400',
                    // 自定义父菜单样式
                    link: 'group w-full px-4 py-3 text-xl hover:bg-gray-100 dark:hover:bg-gray-800',
                    linkLabel: 'font-medium text-xl'
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
      >
    </section>
    <!-- 主要内容区域 -->
    <main class="flex-1 mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <!-- 页脚 -->
    <footer class="w-full mx-auto px-4 py-8">
      <!-- 底部推荐链接 -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div v-for="(column, index) in footerLinks" :key="index" class="space-y-4 mx-auto">
          <h3 class="text-xl font-bold mb-4">{{ column.title }}</h3>
          <ul class="text-xl space-y-2">
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a :href="link.url" class="hover:text-primary-500">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <USeparator />
      <!-- 底部版权 -->
      <div class="h-16 flex items-center justify-center">
        <p class="text-sm">
          © {{ new Date().getFullYear() }} 版权所有
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
  transition: background-color var(--transition-duration) ease-in-out,
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

<style scoped>
</style>