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

// banner图片数据
const bannerImages = [
  'https://picsum.photos/1920/600?random=1',
  'https://picsum.photos/1920/600?random=2',
]

// 菜单数据
const menuItems = [
  { label: '首页', path: '/' },
  { label: '关于', path: '/about' },
  { label: '服务', path: '/services' },
  { label: '联系', path: '/contact' }
]

// 控制移动端菜单显示
const isMobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 获取颜色模式
const colorMode = useColorMode()

// 使用计算属性来确保响应性
const currentIcon = computed(() => 
  colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'
)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- 头部导航 -->
    <header class="h-16 md:h-20 bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 h-full flex items-center justify-between">
        <div class="text-2xl font-bold">Logo</div>
        
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

        <!-- 主题切换和移动端菜单按钮 -->
        <div class="flex items-center gap-4">
          <ClientOnly>
            <UButton
              :icon="currentIcon"
              color="gray"
              variant="ghost"
              class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              @click="toggleColorMode"
            />
          </ClientOnly>
          
          <!-- 汉堡菜单按钮 -->
          <button 
            class="md:hidden p-2 relative w-10 h-10 focus:outline-none"
            aria-label="菜单"
            @click="toggleMobileMenu"
          >
            <div class="hamburger-menu" :class="{ 'is-active': isMobileMenuOpen }">
              <span/>
              <span/>
              <span/>
            </div>
          </button>
        </div>
      </nav>

      <!-- 移动端菜单 -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-full opacity-0"
      >
        <div 
          v-show="isMobileMenuOpen"
          class="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50"
        >
          <div class="container mx-auto px-4 py-4">
            <TransitionGroup
              enter-active-class="transition duration-300 ease-out delay-150"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
            >
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
          :src="item" 
          class="w-full h-full object-cover"
          alt="Banner图片"
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
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
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
/* 汉堡菜单按钮样式 */
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

/* 汉堡菜单激活状态 */
.hamburger-menu.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-menu.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* 确保移动菜单有合适的最大高度和滚动 */
.mobile-menu {
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

/* 添加滚动条样式 */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 2px;
}

.dark .mobile-menu::-webkit-scrollbar-thumb {
  background: #4a5568;
}
</style>