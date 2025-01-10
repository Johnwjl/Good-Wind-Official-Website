<script setup lang="ts">
  import type { FormSubmitEvent } from '#ui/types'

  const cards = [
    {
      title: '风力发电',
      content: '清洁可再生能源，助力碳中和',
      image: '/images/wind1.png',
    },
    {
      title: '智能控制',
      content: '先进的自动化控制系统',
      image: '/images/wind1.png',
    },
    {
      title: '技术创新',
      content: '持续研发，引领行业发展',
      image: '/images/wind1.png',
    },
    {
      title: '专业服务',
      content: '全方位的技术支持和售后保障',
      image: '/images/wind1.png',
    },
  ]

  const bannerImages = ref([
    {
      id: 1,
      url: '/images/banner1.jpg',
    },
    {
      id: 2,
      url: '/images/banner2.jpg',
    },
  ])

  interface FormState {
    applicationType: string
    powerRange: string
    voltage: string
    fuelType: string
    frequency?: string
    phase?: string
  }

  const formFields = [
    {
      name: 'applicationType',
      label: '应用类型',
      options: [
        { label: '应急备用', value: 'emergency' },
        { label: '主用电源', value: 'primary' },
        { label: '并网发电', value: 'grid' },
      ],
    },
    {
      name: 'powerRange',
      label: '功率范围',
      options: [
        { label: '0-100 kVA', value: '0-100' },
        { label: '100-300 kVA', value: '100-300' },
        { label: '300-700 kVA', value: '300-700' },
        { label: '700+ kVA', value: '700+' },
      ],
    },
    {
      name: 'voltage',
      label: '电压等级',
      options: [
        { label: '220V/380V', value: '220-380' },
        { label: '400V/690V', value: '400-690' },
        { label: '6.3kV/10.5kV', value: '6300-10500' },
      ],
    },
    {
      name: 'fuelType',
      label: '燃料类型',
      options: [
        { label: '柴油', value: 'diesel' },
        { label: '天然气', value: 'gas' },
        { label: '双燃料', value: 'dual' },
      ],
    },
  ]

  // 动态生成 schema
  const schema = formFields.reduce(
    (acc, field) => {
      acc[field.name] = {
        required: true,
        message: `请选择${field.label}`,
      }
      return acc
    },
    {} as Record<string, { required: boolean; message: string }>,
  )

  const state = ref<FormState>({
    applicationType: '',
    powerRange: '',
    voltage: '',
    fuelType: '',
    frequency: '',
    phase: '',
  })

  const onSubmit = async (event: FormSubmitEvent<FormState>) => {
    try {
      console.log('表单数据:', event.data)
    } catch (error) {
      console.error('提交表单时出错:', error)
    }
  }
</script>

<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
      >
        <div class="flex-shrink-0 aspect-auto">
          <img
            :src="card.image"
            :alt="card.title"
            class="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        <div class="flex-1 p-6 flex flex-col">
          <h3 class="text-xl font-semibold mb-2">
            {{ card.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 flex-1">
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="w-full lg:w-2/3">
        <div class="bg-gray-100 dark:bg-gray-800 aspect-video">
          <UCarousel
            v-slot="{ item }"
            :items="bannerImages"
            fade
            :loop="true"
            :autoplay="{ delay: 3000 }"
          >
            <img
              :src="item.url"
              :alt="`Banner ${item.id}`"
              class="w-full h-full aspect-[16/9] object-cover object-center rounded-lg shadow-lg"
            />
          </UCarousel>
        </div>
      </div>

      <div class="w-full lg:w-1/3 flex h-auto">
        <UCard class="w-full flex flex-col h-full">
          <template #header>
            <h3 class="text-2xl font-bold text-center">机组搜索</h3>
          </template>

          <UForm
            :schema="schema"
            :state="state"
            class="flex flex-col flex-1 gap-4"
            @submit="onSubmit"
          >
            <div class="flex flex-col flex-1 gap-4">
              <UFormField
                v-for="field in formFields"
                :key="field.name"
                :name="field.name"
                :label="field.label"
                class="grid grid-cols-[auto_1fr] items-center gap-4"
                :ui="{
                  labelWrapper: 'justify-center',
                }"
              >
                <USelect
                  v-model="state[field.name as keyof FormState]"
                  :options="field.options"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UButton
              type="submit"
              color="primary"
              block
            >
              搜索机组
            </UButton>
          </UForm>
        </UCard>
      </div>
    </div>
  </section>
</template>
