<script setup lang="ts">
// 页面元数据设置
useHead({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  title: '网站标题',
  meta: [
    { name: 'description', content: '网站描述' },
    { name: 'keywords', content: '关键词1,关键词2' }
  ]
})

// 状态管理
const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

// 计算属性
const currentIcon = computed(() => 
  colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'
)

// 菜单数据
const menuItems = [
  { label: '首页', path: '/' },
  { label: '关于', path: '/about' },
  { label: '服务', path: '/services' },
  { label: '联系', path: '/contact' }
]

// 动画配置
const menuTransition = {
  'enter-active-class': 'transition-all duration-300 ease-out',
  'enter-from-class': 'opacity-100 transform scale-y-0 origin-top',
  'enter-to-class': 'opacity-100 transform scale-y-100 origin-top',
  'leave-active-class': 'transition-all duration-200 ease-in',
  'leave-from-class': 'opacity-100 transform scale-y-100 origin-top',
  'leave-to-class': 'opacity-100 transform scale-y-0 origin-top'
}

const menuItemTransition = {
  'enter-active-class': 'transition duration-300 ease-out delay-150',
  'enter-from-class': 'opacity-0 translate-y-4',
  'enter-to-class': 'opacity-100 translate-y-0',
  'leave-active-class': 'transition duration-200 ease-in',
  'leave-from-class': 'opacity-100 translate-y-0',
  'leave-to-class': 'opacity-0 translate-y-4'
}

// 添加 bannerImages 定义
const bannerImages = ref([
  {
    id: 1,
    url: '/images/banner1.jpg',
  },
  {
    id: 2,
    url: '/images/banner2.jpg',
  }
])

// 添加 logo 路径
const logoUrl = '/images/logo.png'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="h-16 md:h-20 bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 h-full flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center">
          <img 
            :src="logoUrl" 
            alt="GoodWind Logo" 
            class="h-8 md:h-10 w-auto"
          >
        </NuxtLink>
        
        <!-- 桌面端菜单 -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="flex items-center gap-4">
          <!-- 主题切换按钮 -->
          <ClientOnly>
            <UButton
              :icon="currentIcon"
              color="gray"
              variant="ghost"
              class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
            />
          </ClientOnly>
          
          <!-- 汉堡菜单按钮 -->
          <button 
            class="md:hidden p-2 relative w-10 h-10 focus:outline-none"
            aria-label="菜单"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <div class="hamburger-menu" :class="{ 'is-active': isMobileMenuOpen }">
              <span v-for="n in 3" :key="n"/>
            </div>
          </button>
        </div>
      </nav>

      <!-- 移动端菜单 -->
      <Transition v-bind="menuTransition">
        <div 
          v-show="isMobileMenuOpen"
          class="md:hidden absolute inset-x-0 top-16 md:top-20 bg-white dark:bg-gray-800 shadow-lg z-50"
        >
          <div class="container mx-auto px-4 py-4">
            <TransitionGroup v-bind="menuItemTransition">
              <NuxtLink 
                v-for="(item, index) in menuItems" 
                :key="item.path"
                :to="item.path"
                :style="{ transitionDelay: `${index * 50}ms` }"
                class="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </TransitionGroup>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Banner区域 -->
    <section class="w-full relative" style="aspect-ratio: 16/5;">
      <UCarousel 
        v-slot="{ item }" 
        :items="bannerImages" 
        class="w-full h-full"
        dots 
        loop 
        :autoplay="{ delay: 3000 }"
      >
        <img 
          :src="item.url" 
          :alt="item.title"
          class="w-full h-full object-cover"
        >
      </UCarousel>
    </section>

    <!-- 主要内容区域 -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <article class="prose dark:prose-invert max-w-none">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">欢迎访问</h1>
        <p class="text-lg">这里是网站的主要内容区域</p>
      </article>
    </main>

    <!-- 页脚 -->
    <footer class="h-16 md:h-20 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-4 h-full flex items-center justify-center">
        <p class="text-sm text-gray-600 dark:text-gray-400">
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

/* 添加过渡动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-100%);
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
</style>

<style scoped>
.hamburger-menu {
  position: relative;
  width: 24px;
  height: 20px;
  margin: auto;
}

.hamburger-menu span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition: all 0.3s;
}

.hamburger-menu span:nth-child(1) { 
  top: 0; 
}

.hamburger-menu span:nth-child(2) { 
  top: 50%; 
  transform: translateY(-50%); 
}

.hamburger-menu span:nth-child(3) { 
  bottom: 0; 
}

.hamburger-menu.is-active span:nth-child(1) { 
  transform: translateY(10px) rotate(45deg); 
}

.hamburger-menu.is-active span:nth-child(2) { 
  opacity: 0; 
}

.hamburger-menu.is-active span:nth-child(3) { 
  transform: translateY(-10px) rotate(-45deg); 
}

.mobile-menu {
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background-color: rgb(203, 213, 225);
  border-radius: 2px;
}

:root.dark .mobile-menu::-webkit-scrollbar-thumb {
  background-color: rgb(75, 85, 99);
}
</style>