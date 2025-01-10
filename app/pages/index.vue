<script setup lang="ts">
    const cards = [
        {
        title: '风力发电',
        content: '清洁可再生能源，助力碳中和',
        image: '/images/wind1.png'
        },
        {
        title: '智能控制',
        content: '先进的自动化控制系统',
        image: '/images/wind1.png'
        },
        {
        title: '技术创新',
        content: '持续研发，引领行业发展',
        image: '/images/wind1.png'
        },
        {
        title: '专业服务',
        content: '全方位的技术支持和售后保障',
        image: '/images/wind1.png'
        }
    ]

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
</script>
<template>
  <!-- 卡片 -->
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(card, index) in cards" :key="index" class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        <div class="flex-shrink-0 aspect-auto">
          <img 
            :src="card.image" 
            :alt="card.title" 
            class="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high">
        </div>
        <div class="flex-1 p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2">{{ card.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 flex-1">{{ card.content }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- 轮播图和配置表单 -->
  <section class="mt-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- 左侧轮播图区域 -->
      <div class="w-full lg:w-2/3 rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gray-100 dark:bg-gray-800 aspect-auto">
            <!-- 轮播图将在这里实现 -->
            <UCarousel 
                v-slot="{ item }" 
                :items="bannerImages" 
                class="w-full h-full"
                loop 
                :autoplay="{ delay: 3000 }"
            >
                <img 
                :src="item.url" 
                :alt="item.url"
                class="w-full h-full object-cover"
                >
            </UCarousel>
        </div>
      </div>

      <!-- 右侧配置表单区域 -->
      <div class="w-full lg:w-1/3 rounded-lg shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        <!-- <div class="bg-gray-100 dark:bg-gray-800 p-6"> -->
          <!-- 配置表单将在这里实现 -->
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>
  