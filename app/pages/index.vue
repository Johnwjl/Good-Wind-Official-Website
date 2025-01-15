<script setup lang="ts">
  import type { FormSubmitEvent } from '#ui/types'
  import banner1 from '~/assets/img/banner1.jpg'
  import banner2 from '~/assets/img/banner2.jpg'
  import wind1 from '~/assets/img/wind1.png'

  const { t } = useI18n()

  const cards = computed(() => [
    {
      title: t('home.cards.windPower.title'),
      content: t('home.cards.windPower.content'),
      image: wind1,
    },
    {
      title: t('home.cards.smartControl.title'),
      content: t('home.cards.smartControl.content'),
      image: wind1,
    },
    {
      title: t('home.cards.innovation.title'),
      content: t('home.cards.innovation.content'),
      image: wind1,
    },
    {
      title: t('home.cards.service.title'),
      content: t('home.cards.service.content'),
      image: wind1,
    },
  ])

  const bannerImages = ref([
    {
      id: 1,
      url: banner1,
    },
    {
      id: 2,
      url: banner2,
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

  const formFields = computed(() => [
    {
      name: 'fuelType',
      label: t('home.search.fields.fuelType.label'),
      options: [
        { label: t('home.search.fields.fuelType.diesel'), value: 'diesel' },
        { label: t('home.search.fields.fuelType.gas'), value: 'gas' },
      ],
      icon: 'i-custom-gas-station',
    },
    {
      name: 'frequency',
      label: t('home.search.fields.frequency.label'),
      options: [
        { label: t('home.search.fields.frequency.hz50'), value: 'hz50' },
        { label: t('home.search.fields.frequency.hz60'), value: 'hz60' },
      ],
      icon: 'i-custom-frequency',
    },
    {
      name: 'phase',
      label: t('home.search.fields.phase.label'),
      options: [
        { label: t('home.search.fields.phase.single'), value: 'single' },
        { label: t('home.search.fields.phase.three'), value: 'three' },
      ],
      icon: 'i-custom-phase',
    },
    {
      name: 'voltage',
      label: t('home.search.fields.voltage.label'),
      options: [
        { label: t('home.search.fields.voltage.level1'), value: '220-380' },
        { label: t('home.search.fields.voltage.level2'), value: '400-690' },
        { label: t('home.search.fields.voltage.level3'), value: '6300-10500' },
      ],
      icon: 'i-custom-voltage',
    },
    {
      name: 'applicationType',
      label: t('home.search.fields.applicationType.label'),
      options: [
        { label: t('home.search.fields.applicationType.emergency'), value: 'emergency' },
        { label: t('home.search.fields.applicationType.primary'), value: 'primary' },
        { label: t('home.search.fields.applicationType.grid'), value: 'grid' },
      ],
      icon: 'i-custom-application-type',
    },
    {
      name: 'powerRange',
      label: t('home.search.fields.powerRange.label'),
      options: [
        { label: t('home.search.fields.powerRange.range1'), value: '0-100' },
        { label: t('home.search.fields.powerRange.range2'), value: '100-300' },
        { label: t('home.search.fields.powerRange.range3'), value: '300-700' },
        { label: t('home.search.fields.powerRange.range4'), value: '700+' },
      ],
      icon: 'i-custom-power-range',
    },
  ])

  // 动态生成 schema
  const schema = computed(() =>
    formFields.value.reduce(
      (acc, field) => {
        acc[field.name] = {
          required: true,
          message: t('home.search.validation.required', { field: field.label }),
        }
        return acc
      },
      {} as Record<string, { required: boolean; message: string }>,
    ),
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
            <h3 class="text-2xl font-bold text-center">{{ t('home.search.title') }}</h3>
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
                <template #label>
                  <div class="flex items-center gap-2">
                    <UIcon
                      :name="field.icon"
                      class="size-5"
                    />
                    {{ field.label }}
                  </div>
                </template>
                <USelect
                  v-model="state[field.name as keyof FormState]"
                  :items="field.options"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UButton
              type="submit"
              color="primary"
              block
            >
              {{ t('home.search.submit') }}
            </UButton>
          </UForm>
        </UCard>
      </div>
    </div>
  </section>
</template>
