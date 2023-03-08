import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'

import {
    Swipe,
    SwipeItem,
    Search,
    Button,
    Tabbar,
    TabbarItem
} from 'vant'

createApp(App)
.use(router)
.use(Swipe)
.use(SwipeItem)
.use(Search)
.use(Button)
.use(Tabbar)
.use(TabbarItem)
.mount('#app')
