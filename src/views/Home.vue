<template>
    <div class="home-wrap">
        <div class="home-header">
            <van-search shape="round" :placeholder="state.keyWord" />
            <van-button color="#000" icon="calendar-o" type="primary" size="small" square="true"/>
            <van-button color="#000" icon="add-o" type="primary" size="small" square="true"/>
        </div>
        <div class="home-content">

        </div>
        <TabBar/>
    </div>
</template>

<script setup>
import TabBar from './TabBar.vue'
import { reactive,onMounted } from 'vue'
const keyWords = ['百度面试','携程笔试','华为','米哈游笔试','比亚迪','泰隆银行','春招'];

const state = reactive({
    keyWord: '百度面试',
    idx: 1
});
onMounted(() => {
    setInterval(() => {
        if(state.idx === keyWords.length) {
            state.idx = 0;
        }
        state.keyWord = keyWords[state.idx ++];
    },2000);
})
</script>

<style lang="stylus" scoped>
.home-header
    display: flex;
    justify-content: space-around;
    align-items: center;
</style>