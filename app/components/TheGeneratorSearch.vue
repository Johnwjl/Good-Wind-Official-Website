<script setup lang="ts">
  import type { FormSubmitEvent } from '#ui/types'
  import type { PropType } from 'vue'
  import * as z from 'zod'

  const { t } = useI18n()

  const form = useTemplateRef('form')

  // 添加错误处理函数
  const validateField = async (fieldName: keyof FormState) => {
    try {
      await form.value?.validate({ name: fieldName })
    } catch {
      // 验证失败是预期的行为，不需要额外处理
    }
  }

  // 使用 Zod 定义 schema
  const schema = z.object({
    applicationType: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.applicationType.label'),
      }),
    }),
    powerRange: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.powerRange.label'),
      }),
    }),
    voltage: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.voltage.label'),
      }),
    }),
    fuelType: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.fuelType.label'),
      }),
    }),
    frequency: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.frequency.label'),
      }),
    }),
    phase: z.string().min(1, {
      message: t('home.search.validation.required', {
        field: t('home.search.fields.phase.label'),
      }),
    }),
  })

  // 从 schema 中推导出类型
  type FormState = z.input<typeof schema>

  // 完整定义所有表单字段
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
      options: computed(() => {
        const { fuelType, frequency, phase } = state
        if (!fuelType || !frequency || !phase) return []

        return (
          voltageOptionsMap[fuelType as keyof typeof voltageOptionsMap]?.[
            frequency as '50' | '60'
          ]?.[phase as 'single' | 'three'] ?? []
        )
      }).value,
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

  // 更新 props 定义中的类型
  const props = defineProps({
    layout: {
      type: String,
      default: 'vertical',
      validator: (value: string) => ['vertical', 'horizontal'].includes(value),
    },
    initialState: {
      type: Object as PropType<Partial<FormState>>,
      default: () => ({}),
    },
  })

  // 使用 initialState 初始化表单状态
  const state = reactive<Partial<FormState>>({
    applicationType: props.initialState.applicationType || '',
    powerRange: props.initialState.powerRange || '',
    voltage: props.initialState.voltage || '',
    fuelType: props.initialState.fuelType || '',
    frequency: props.initialState.frequency || '',
    phase: props.initialState.phase || '',
  })

  // 修改表单提交处理
  const onSubmit = async (event: FormSubmitEvent<FormState>) => {
    try {
      // 将表单数据转换为查询参数
      const query = Object.entries(event.data)
        .filter(([_, value]) => value) // 过滤掉空值
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

      // 使用 navigateTo 跳转到产品页
      await navigateTo({
        path: '/products',
        query,
      })
    } catch (error) {
      console.error('提交表单时出错:', error)
    }
  }

  const buttonGroupFields = computed(() =>
    formFields.value.filter((field) => ['fuelType', 'frequency', 'phase'].includes(field.name)),
  )
  const selectFields = computed(() =>
    formFields.value.filter((field) => !['fuelType', 'frequency', 'phase'].includes(field.name)),
  )

  // 定义表单字段的顺序
  const fieldOrder = [
    'fuelType',
    'frequency',
    'phase',
    'voltage',
    'applicationType',
    'powerRange',
  ] as const

  // 使用计算属性来判断字段是否可用
  const isFieldEnabled = computed(() => {
    const result: Record<string, boolean> = {
      [fieldOrder[0]]: true, // 第一个字段永远可用
    }

    // 从第二个字段开始，检查前一个字段是否有值
    for (let i = 1; i < fieldOrder.length; i++) {
      const prevField = fieldOrder[i - 1] as keyof FormState
      const currentField = fieldOrder[i] as keyof FormState
      result[currentField] = Boolean(state[prevField])
    }

    return result
  })

  // 定义电压选项映射表
  const voltageOptionsMap = {
    // 柴油发电机组
    diesel: {
      // 50Hz
      '50': {
        // 单相
        single: [{ label: '230 V (m)', value: '230-m' }],
        // 三相
        three: [
          { label: '400/230 V', value: '400-230' },
          { label: '415/240 V', value: '415-240' },
          { label: '200/115 V', value: '200-115' },
          { label: '380/220 V', value: '380-220' },
          { label: '230 V (t)', value: '230-t' },
          { label: '3,3 kV', value: '3300' },
          { label: '6 kV', value: '6000' },
          { label: '6,3 kV', value: '6300' },
          { label: '6,6 kV', value: '6600' },
          { label: '10 kV', value: '10000' },
          { label: '11 kV', value: '11000' },
        ],
      },
      // 60Hz
      '60': {
        // 单相
        single: [{ label: '240/120 V', value: '240-120' }],
        // 三相
        three: [
          { label: '380/220 V', value: '380-220' },
          { label: '416/240 V', value: '416-240' },
          { label: '480/277 V', value: '480-277' },
          { label: '208/120 V', value: '208-120' },
          { label: '220/127 V', value: '220-127' },
          { label: '440/254 V', value: '440-254' },
          { label: '460/265 V', value: '460-265' },
          { label: '600/347 V', value: '600-347' },
          { label: '4,16 kV', value: '4160' },
          { label: '6,6 kV', value: '6600' },
          { label: '7,2 kV', value: '7200' },
          { label: '12,47 kV', value: '12470' },
          { label: '13,8 kV', value: '13800' },
        ],
      },
    },
    // 燃气发电机组
    gas: {
      // 50Hz
      '50': {
        // 单相
        single: [{ label: '230 V (m)', value: '230-m' }],
        // 三相
        three: [
          { label: '400/230 V', value: '400-230' },
          { label: '415/240 V', value: '415-240' },
          { label: '200/115 V', value: '200-115' },
          { label: '380/220 V', value: '380-220' },
          { label: '230 V (t)', value: '230-t' },
        ],
      },
      // 60Hz
      '60': {
        // 单相
        single: [{ label: '240/120 V', value: '240-120' }],
        // 三相
        three: [
          { label: '380/220 V', value: '380-220' },
          { label: '416/240 V', value: '416-240' },
          { label: '480/277 V', value: '480-277' },
          { label: '208/120 V', value: '208-120' },
          { label: '220/127 V', value: '220-127' },
          { label: '440/254 V', value: '440-254' },
          { label: '460/265 V', value: '460-265' },
          { label: '600/347 V', value: '600-347' },
          { label: '240/138 V', value: '240-138' },
        ],
      },
    },
  }

  // 监听前三个字段的变化，清空电压值
  watch([() => state.fuelType, () => state.frequency, () => state.phase], () => {
    state.voltage = ''
  })
</script>

<template>
  <UCard class="w-full h-full flex flex-col">
    <template #header>
      <div class="bg-gray-100 dark:bg-gray-800 -m-4 sm:-mx-6 p-4 sm:px-6 rounded-t-lg">
        <h3 class="text-2xl font-bold text-center">
          {{ t('home.search.title') }}
        </h3>
      </div>
    </template>

    <UForm
      ref="form"
      :schema="schema"
      :state="state"
      class="flex flex-1 gap-4 pr-10"
      :class="[
        'flex-col', // 默认垂直布局
        props.layout === 'horizontal' ? 'md:flex-row md:flex-wrap pr-0' : '', // 在 md 断点以上时,如果是水平布局则启用
      ]"
      @submit="onSubmit"
    >
      <!-- 搜索字段 -->
      <div
        :class="[
          'flex gap-4 flex-col', // 默认垂直布局
          props.layout === 'horizontal' ? 'md:flex-row md:flex-wrap md:flex-1' : '', // 在 md 断点以上时,如果是水平布局则启用
        ]"
      >
        <UFormField
          v-for="field in buttonGroupFields"
          :key="field.name"
          :name="field.name"
          :label="field.label"
          :class="[
            'grid grid-cols-[auto_1fr] items-center gap-4', // 默认网格布局
            props.layout === 'horizontal' ? 'md:flex-1 md:min-w-[200px]' : '', // 在 md 断点以上时,如果是水平布局则启用
          ]"
        >
          <template #label>
            <div class="flex items-center gap-2 w-24">
              <UIcon
                :name="field.icon"
                class="size-5"
              />
              {{ field.label }}
            </div>
          </template>

          <!-- 为燃料类型和频率使用按钮组 -->
          <UButtonGroup
            class="w-full"
            size="sm"
          >
            <template
              v-for="option in field.options"
              :key="option.value"
            >
              <UButton
                class="flex-1 flex justify-center items-center text-center cursor-pointer"
                :class="[!isFieldEnabled[field.name] && 'cursor-not-allowed opacity-50']"
                :disabled="!isFieldEnabled[field.name]"
                :color="
                  state[field.name as keyof FormState] === option.value ? 'primary' : 'neutral'
                "
                :variant="
                  state[field.name as keyof FormState] === option.value ? 'solid' : 'outline'
                "
                @click="
                  async () => {
                    if (isFieldEnabled[field.name]) {
                      state[field.name as keyof FormState] = option.value
                      await validateField(field.name as keyof FormState)
                    }
                  }
                "
              >
                {{ option.label }}
              </UButton>
            </template>
          </UButtonGroup>
        </UFormField>
        <!-- 其他字段使用下拉框 -->
        <UFormField
          v-for="field in selectFields"
          :key="field.name"
          :name="field.name"
          :class="[
            'grid grid-cols-[auto_1fr] items-center gap-4', // 默认网格布局
            props.layout === 'horizontal' ? 'md:flex-1 md:min-w-[200px]' : '', // 在 md 断点以上时,如果是水平布局则启用
          ]"
        >
          <template #label>
            <div class="flex items-center gap-2 w-24">
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
            :disabled="!isFieldEnabled[field.name]"
          />
        </UFormField>
      </div>

      <!-- 搜索按钮 -->
      <UButton
        type="submit"
        color="primary"
        :class="[
          'w-full flex items-center justify-center', // 默认样式
          props.layout === 'horizontal' ? 'md:self-end md:w-auto md:px-8' : '', // 在 md 断点以上时,如果是水平布局则启用
        ]"
      >
        {{ t('home.search.submit') }}
      </UButton>
    </UForm>
  </UCard>
</template>
