export default defineI18nConfig(async () => {
  const en = await import('./locales/en').then((m) => m.default)
  const zh = await import('./locales/zh').then((m) => m.default)

  return {
    legacy: false,
    locale: 'zh',
    messages: {
      en,
      zh,
    },
  }
})
