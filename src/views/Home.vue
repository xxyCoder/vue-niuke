<template>
    <div class="home">
        <div class="home-header">
            <van-search :placeholder="state.keyWord" shape="round" background="#00dc87" />
            <van-button icon="plus" type="success"></van-button>
            <van-button icon="plus" @click="showPopup" type="success"></van-button>
            <van-popup :show="state.show" round position="bottom" :style="{ height: '20%' }" @click-overlay="closePopup">
                <ul>
                    <li><a href="#">扫一扫</a></li>
                    <li><a href="#">发动态</a></li>
                    <li><a href="#">写文章</a></li>
                </ul>
            </van-popup>
        </div>
        <div class="content">
            <van-tabs background="#00dc87" :active="active" swipeable>
                <van-tab v-for="(t,i) in state.title" :title="t" :key="i">
                    <Item v-for="(d,i) in state.dynamic" :discuss="d" :key="i" :loading="state.loading"></Item>
                </van-tab>
            </van-tabs>
        </div>
        <TabBar />
    </div>
</template>

<script setup>
// 引入组件
import TabBar from './TabBar.vue';
import Item from '@/components/Item.vue';
// 引入方法
import { reactive, onMounted } from 'vue';
// 获取数据方法
import { getHomeData } from '@/service/home.js';
const state = reactive({
    keyWords: [],
    dynamic: [],
    title: [],
    keyWord: '',
    show: false,
    loading: false
});
let idx = 1;
onMounted(async () => {
    // 获得首页数据
    const data = await getHomeData();
    // console.log(data);
    // 初始化数据
    state.keyWords = data.keyWords;
    state.dynamic = data.dynamic;
    state.title = data.title;
    state.keyWord = data.keyWords[0];
    state.loading = true;
    // 设置搜索框文字周期性变化
    setInterval(() => {
        if (idx === state.keyWords.length) {
            idx = 0;
        };
        state.keyWord = state.keyWords[idx++];
    }, 3000);
})
const closePopup = () => {
    state.show = false;
};
const showPopup = () => {
    state.show = true;
}
</script>

<style lang="stylus" scoped>
.home
    background-image linear-gradient(to bottom,#00dc87 30%,#fff 70%)
    height 100vh
    .home-header
        display flex
        justify-content space-around
        align-items center
        .van-search
            flex 1
        .van-button
            width .8rem /* 30/37.5 */
            height: .8rem /* 30/37.5 */
            margin .133333rem /* 5/37.5 */
        .van-popup
            ul
                li
                    font-size .426667rem /* 16/37.5 */
                    margin .453333rem /* 17/37.5 */ .8rem /* 30/37.5 */
</style>