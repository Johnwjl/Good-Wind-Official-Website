<script setup lang="ts">
  import { useWindowScroll, useWindowSize } from '@vueuse/core'

  interface SocialItem {
    id: string
    icon: string
    label: string
    content: string
    type: 'qrcode' | 'text' | 'link'
    link?: string
  }

  const socialItems = ref<SocialItem[]>([
    {
      id: 'phone',
      icon: 'i-heroicons-phone',
      label: '电话咨询',
      content: '+86 123 4567 8901',
      type: 'text',
    },
    {
      id: 'email',
      icon: 'i-heroicons-envelope',
      label: '邮件咨询',
      content: 'contact@example.com',
      type: 'link',
      link: 'mailto:contact@example.com',
    },
    {
      id: 'wechat',
      icon: 'i-simple-icons-wechat',
      label: '微信咨询',
      content: '/images/wechat-qr.png', // 二维码图片路径
      type: 'qrcode',
    },
    {
      id: 'whatsapp',
      icon: 'i-simple-icons-whatsapp',
      label: 'WhatsApp',
      content: '+86 123 4567 8901',
      type: 'link',
      link: 'https://wa.me/8612345678901',
    },
  ])

  const activeItem = ref<string | null>(null)

  // 使用 vueuse 的 useWindowScroll 和 useWindowSize 来处理滚动显示逻辑
  const { y: scrollY } = useWindowScroll()
  const { height: windowHeight } = useWindowSize()

  const isVisible = computed(() => scrollY.value > windowHeight.value * 0.3)
</script>

<template>
  <Transition name="fade">
    <div
      v-show="isVisible"
      class="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
    >
      <div
        v-for="item in socialItems"
        :key="item.id"
        class="relative group"
        @mouseenter="activeItem = item.id"
        @mouseleave="activeItem = null"
      >
        <!-- 图标按钮 -->
        <UButton
          :icon="item.icon"
          color="primary"
          variant="solid"
          class="!w-10 !h-10 !p-0 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          :tooltip="item.label"
          :tooltip-placement="'left'"
        />

        <!-- 悬浮内容 -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform -translate-x-2 opacity-0"
          enter-to-class="transform translate-x-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform translate-x-0 opacity-100"
          leave-to-class="transform -translate-x-2 opacity-0"
        >
          <div
            v-if="activeItem === item.id"
            class="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 min-w-[140px]"
          >
            <!-- 二维码类型 -->
            <template v-if="item.type === 'qrcode'">
              <img
                :src="item.content"
                :alt="item.label"
                class="w-32 h-32 object-cover"
              />
            </template>

            <!-- 文本类型 -->
            <template v-else-if="item.type === 'text'">
              <p class="text-sm font-medium">{{ item.content }}</p>
            </template>

            <!-- 链接类型 -->
            <template v-else-if="item.type === 'link'">
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {{ item.content }}
              </a>
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>
