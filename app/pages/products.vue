<script setup lang="ts">
  const { t } = useI18n()
  const route = useRoute()

  // 从 URL 查询参数中获取初始表单状态
  const initialState = {
    applicationType: (route.query.applicationType as string) || '',
    powerRange: (route.query.powerRange as string) || '',
    voltage: (route.query.voltage as string) || '',
    fuelType: (route.query.fuelType as string) || '',
    frequency: (route.query.frequency as string) || '',
    phase: (route.query.phase as string) || '',
  }

  // 模拟产品数据
  const products = ref([
    {
      id: 1,
      name: 'YC6K1340-D30',
      power: '1000kW',
      voltage: '400V',
      fuelType: 'diesel',
      frequency: '50',
      phase: 'three',
      image: '/img/products/p1.jpg',
    },
    {
      id: 2,
      name: 'GC1000-G60',
      power: '800kW',
      voltage: '400V',
      fuelType: 'gas',
      frequency: '60',
      phase: 'three',
      image: '/img/products/p2.jpg',
    },
    {
      id: 3,
      name: 'YC4D200-D20',
      power: '150kW',
      voltage: '220-380',
      fuelType: 'diesel',
      frequency: '50',
      phase: 'single',
      image: '/img/products/p3.jpg',
    },
    {
      id: 4,
      name: 'YC6C1020L-D20',
      power: '750kW',
      voltage: '400-690',
      fuelType: 'diesel',
      frequency: '50',
      phase: 'three',
      image: '/img/products/p4.jpg',
    },
    {
      id: 5,
      name: 'GC500-G30',
      power: '400kW',
      voltage: '400V',
      fuelType: 'gas',
      frequency: '60',
      phase: 'three',
      image: '/img/products/p5.jpg',
    },
  ])

  // 过滤产品列表
  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      const matchFuelType = !initialState.fuelType || product.fuelType === initialState.fuelType
      const matchFrequency = !initialState.frequency || product.frequency === initialState.frequency
      const matchPhase = !initialState.phase || product.phase === initialState.phase
      const matchVoltage = !initialState.voltage || product.voltage.includes(initialState.voltage)

      // 处理功率范围
      let matchPower = true
      if (initialState.powerRange) {
        const power = parseInt(product.power)
        const powerRangeParts = initialState.powerRange.split('-')
        const min = Number(powerRangeParts[0]) || 0
        const max = powerRangeParts[1] ? Number(powerRangeParts[1]) : null
        matchPower = power >= min && (max !== null ? power <= max : true)
      }

      return matchFuelType && matchFrequency && matchPhase && matchVoltage && matchPower
    })
  })
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 搜索区域 -->
    <section class="mb-8">
      <UCard>
        <TheGeneratorSearch
          layout="horizontal"
          :initial-state="initialState"
        />
      </UCard>
    </section>

    <!-- 产品列表 -->
    <section>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <UCard
          v-for="product in filteredProducts"
          :key="product.id"
          class="flex flex-col"
        >
          <template #header>
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full aspect-[4/3] object-cover object-center rounded-t-lg"
            />
          </template>

          <div class="flex flex-col gap-4 flex-1">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>

            <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-custom-range"
                  class="size-4"
                />
                <span>{{ product.power }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-custom-volta"
                  class="size-4"
                />
                <span>{{ product.voltage }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-custom-fren"
                  class="size-4"
                />
                <span>{{ product.frequency }}</span>
              </div>
            </div>

            <UButton
              color="primary"
              variant="solid"
              class="mt-auto"
              :to="`/products/${product.id}`"
            >
              {{ t('products.viewDetails') }}
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- 无搜索结果提示 -->
      <div
        v-if="filteredProducts.length === 0"
        class="text-center py-12 text-gray-500"
      >
        {{ t('products.noResults') }}
      </div>
    </section>
  </div>
</template>
