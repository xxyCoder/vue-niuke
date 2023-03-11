import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

import {
    Search,
    Button,
    Tabbar,
    TabbarItem,
    Tabs,
    Tab,
    Image as VanImage,
    Lazyload,
    Icon
} from 'vant'

createApp(App)
.use(router)
.use(Tabs)
.use(Tab)
.use(Search)
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.use(VanImage)
.use(Lazyload)
.use(Icon)
.mount('#app')
