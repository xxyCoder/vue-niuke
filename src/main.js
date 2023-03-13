import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
// 引入自定义样式
import './assets/common/index.styl'

import {
    Search,
    Button,
    Tabbar,
    TabbarItem,
    Tabs,
    Tab,
    Image as VanImage,
    Lazyload,
    Icon,
    Popup,
    Skeleton,
    SkeletonTitle,
    SkeletonImage,
    SkeletonAvatar,
    SkeletonParagraph,
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
    .use(Popup)
    .use(Skeleton)
    .use(SkeletonTitle)
    .use(SkeletonImage)
    .use(SkeletonAvatar)
    .use(SkeletonParagraph)
    .mount('#app');
