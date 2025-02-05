<script setup lang="ts">
  const { t } = useI18n()

  // 页面元数据设置
  useHead(() => ({
    title: t('site.title'),
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      {
        name: 'description',
        content:
          '固定式发电机组、租赁发电机组、通信电源、集成供能解决方案的专业供应商，提供全方位的发电机组销售、租赁、维修保养等服务',
      },
      {
        name: 'keywords',
        content:
          '固定式发电机组,租赁发电机组,通信电源,集成供能,发电机组销售,发电机组租赁,发电机组维修,发电机组保养',
      },
    ],
  }))

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
    <TheHeader />
    <TheBanner />

    <!-- 主要内容区域 -->
    <main class="flex-1 md:mx-auto px-4 py-8">
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
    <TheSocialBar />
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

  /* 增强文字阴影效果 */
  .text-shadow-xl {
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* 优化过渡动画 */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  /* 纯透明度过渡，禁用所有 transform */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
    transform: none !important; /* 禁用 Vue transition 的默认 transform 行为 */
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: none !important;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
    transform: none !important;
  }

  /* 简化 Banner 文字效果 */
  .banner-text {
    /* 保留核心文字阴影效果 */
    text-shadow:
      0 2px 4px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.2);

    /* 移除多余的滤镜效果 */
    backdrop-filter: none;
    -webkit-backdrop-filter: none;

    /* 移除复杂的渐变，使用简单的颜色 */
    color: rgba(255, 255, 255, 0.95);
  }

  /* 简化 Banner 文字切换动画 */
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
