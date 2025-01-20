<script setup lang="ts">
  import type { FormSubmitEvent } from '#ui/types'

  const { t } = useI18n()

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
      icon: 'i-custom-gasn',
    },
    {
      name: 'frequency',
      label: t('home.search.fields.frequency.label'),
      options: [
        { label: t('home.search.fields.frequency.hz50'), value: '50' },
        { label: t('home.search.fields.frequency.hz60'), value: '60' },
      ],
      icon: 'i-custom-fren',
    },
    {
      name: 'phase',
      label: t('home.search.fields.phase.label'),
      options: [
        { label: t('home.search.fields.phase.single'), value: 'single' },
        { label: t('home.search.fields.phase.three'), value: 'three' },
      ],
      icon: 'i-custom-pha',
    },
    {
      name: 'voltage',
      label: t('home.search.fields.voltage.label'),
      options: [
        { label: t('home.search.fields.voltage.level1'), value: '220-380' },
        { label: t('home.search.fields.voltage.level2'), value: '400-690' },
        { label: t('home.search.fields.voltage.level3'), value: '6300-10500' },
      ],
      icon: 'i-custom-volta',
    },
    {
      name: 'applicationType',
      label: t('home.search.fields.applicationType.label'),
      options: [
        { label: t('home.search.fields.applicationType.emergency'), value: 'emergency' },
        { label: t('home.search.fields.applicationType.primary'), value: 'primary' },
        { label: t('home.search.fields.applicationType.grid'), value: 'grid' },
      ],
      icon: 'i-custom-type',
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
      icon: 'i-custom-range',
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
  <UCard class="w-full flex flex-col h-full">
    <template #header>
      <div class="bg-gray-100 dark:bg-gray-800 -m-4 sm:-mx-6 p-4 sm:px-6 rounded-t-lg">
        <h3 class="text-2xl font-bold text-center">
          {{ t('home.search.title') }}
        </h3>
      </div>
    </template>

    <UForm
      :schema="schema"
      :state="state"
      class="flex flex-col flex-1 gap-4 pr-10"
      @submit="onSubmit"
    >
      <div class="flex flex-col flex-1 gap-4">
        <UFormField
          v-for="field in formFields"
          :key="field.name"
          :label="field.label"
          class="grid grid-cols-[auto_1fr] items-center gap-4"
          :ui="{
            labelWrapper: 'justify-center',
          }"
        >
          <template #label>
            <div class="flex items-center gap-2 w-24">
              <UIcon
                :name="field.icon"
                mode="svg"
                class="size-5"
              />
              {{ field.label }}
            </div>
          </template>

          <!-- 为燃料类型和频率使用按钮组 -->
          <template v-if="['fuelType', 'frequency'].includes(field.name)">
            <UButtonGroup
              class="w-full"
              size="sm"
              :ui="{
                wrapper: 'w-full',
                base: 'w-full grid grid-cols-2 gap-2',
                container: 'w-full',
              }"
            >
              <template
                v-for="option in field.options"
                :key="option.value"
              >
                <UButton
                  class="flex-1 text-center cursor-pointer justify-center items-center flex"
                  :color="
                    state[field.name as keyof FormState] === option.value ? 'primary' : 'neutral'
                  "
                  :variant="
                    state[field.name as keyof FormState] === option.value ? 'solid' : 'outline'
                  "
                  @click="state[field.name as keyof FormState] = option.value"
                >
                  {{ option.label }}
                </UButton>
              </template>
            </UButtonGroup>
          </template>

          <!-- 其他字段保持使用下拉框 -->
          <template v-else>
            <USelect
              v-model="state[field.name as keyof FormState]"
              :items="field.options"
              class="w-full"
            />
          </template>
        </UFormField>
      </div>

      <UButton
        type="submit"
        color="primary"
        block
        square
      >
        {{ t('home.search.submit') }}
      </UButton>
    </UForm>
  </UCard>
</template>
