export default {
  site: {
    title: '顺风发电',
    languages: {
      zh: '中文',
      en: '英文',
    },
  },
  nav: {
    fixed: '定点安装',
    rental: '移动/租赁',
    telecom: '电信应用',
    integrated: '综合发电方案',
    resources: '资源库',
    industry: '行业应用',
  },
  menu: {
    introduction: '介绍',
    installation: '安装',
    icons: '图标',
    colors: '颜色',
    theme: '主题',
    shortcuts: '快捷键',
    modal: '模态框',
    slideover: '侧边栏',
    toast: '提示框',
  },
  descriptions: {
    introduction: '完全风格化和可定制的 Nuxt 组件',
    installation: '了解如何在应用程序中安装和配置 Nuxt UI',
    icons: '无需配置，Nuxt Icon 将自动处理',
    colors: '从 Tailwind CSS 主题中选择主要和中性颜色',
    theme: '您可以使用 class 或 ui 属性自定义组件',
    shortcuts: '为您的应用程序定义键盘快捷键',
    modal: '轻松创建模态对话框',
    slideover: '为您的应用程序创建滑动面板',
    toast: '向用户显示提示通知',
  },
  footer: {
    about: {
      title: '关于我们',
      company: '公司简介',
      history: '发展历程',
      culture: '企业文化',
      honors: '荣誉资质',
    },
    services: {
      title: '产品服务',
      fixed: '定点安装',
      rental: '设备租赁',
      support: '技术支持',
      after: '售后服务',
    },
    news: {
      title: '新闻资讯',
      company: '公司动态',
      industry: '行业新闻',
      technical: '技术文章',
      faq: '常见问题',
    },
    contact: {
      title: '联系我们',
      info: '联系方式',
      message: '在线留言',
      join: '加入我们',
      locations: '服务网点',
    },
  },
  copyright: '© {year} 版权所有',
  home: {
    cards: {
      windPower: {
        title: '风力发电',
        content: '清洁可再生能源，助力碳中和',
      },
      smartControl: {
        title: '智能控制',
        content: '先进的自动化控制系统',
      },
      innovation: {
        title: '技术创新',
        content: '持续研发，引领行业发展',
      },
      service: {
        title: '专业服务',
        content: '全方位的技术支持和售后保障',
      },
    },
    search: {
      title: '机组搜索',
      submit: '搜索机组',
      fields: {
        fuelType: {
          label: '燃料类型',
          diesel: '柴油',
          gas: '燃气',
          placeholder: '请选择燃料类型',
        },
        frequency: {
          label: '频率类型',
          hz50: '50赫兹',
          hz60: '60赫兹',
          placeholder: '请选择频率',
        },
        phase: {
          label: '相位类型',
          single: '单相',
          three: '三相',
          placeholder: '请选择相位',
        },
        applicationType: {
          label: '应用类型',
          emergency: '应急备用',
          primary: '主用电源',
          grid: '并网发电',
          placeholder: '请选择应用类型',
        },
        powerRange: {
          label: '功率范围',
          range1: '0-100 kVA',
          range2: '100-300 kVA',
          range3: '300-700 kVA',
          range4: '700+ kVA',
          placeholder: '请选择功率范围',
        },
        voltage: {
          label: '电压等级',
          level1: '220V/380V',
          level2: '400V/690V',
          level3: '6.3kV/10.5kV',
          placeholder: '请选择电压等级',
        },
      },
      validation: {
        required: '请选择{field}',
      },
    },
  },
}
