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
</script>
<template>
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
</template>
  