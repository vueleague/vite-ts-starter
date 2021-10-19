import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import store from '@/store'

import App from './App.vue'

import ElementPlus from 'element-plus'

// import 'element-plus/lib/theme-chalk/index.css'
// element 国际化
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib/locale/lang/en'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import Fonts from '@/assets/fonts'

import { sync } from 'vuex-router-sync'
import GlobalComponents from '@/components'
import Mixin from './mixins'
import Widgets from './widgets'
// import language from './language'
// import i18n from './language'

const app = createApp(App)

app
  .use(router)
  .use(store)

sync(store, router)

app
  .use(ElementPlus, {
    size: 'small'
    // locale: zhCn
  })
  // .use(language)
  .use(GlobalComponents)
  .use(Widgets)
  .use(Fonts)
  .mixin(Mixin)
  .mount('#app')

export default app
