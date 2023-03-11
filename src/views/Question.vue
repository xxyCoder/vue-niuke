<template>
    <div class="question">
        <div class="question-header">
            <div class="header-top">
                <van-search shape="round" placeholder="搜索" />
                <van-button color="#000" icon="calendar-o" type="primary" size="small" square />
                <van-button color="#000" icon="add-o" type="primary" size="small" square />
            </div>
            <div class="header-bottom">
                <a href="#" class="pratice">
                    <div class="image">
                    </div>
                    <strong>每日一练</strong>
                </a>
                <a href="#" class="pratice">
                    <div class="image">
                    </div>
                    <strong>公司真题</strong>
                </a>
                <a href="#" class="pratice">
                    <div class="image">
                    </div>
                    <strong>面试题库</strong>
                </a>
                <a href="#" class="pratice">
                    <div class="image">
                    </div>
                    <strong>编程题库</strong>
                </a>
            </div>
        </div>
        <div class="question-content">
            <ul class="content-title">
                <li v-for="(fav,idx) in state.favWords" :key="idx">
                    <router-link :to="{path: '/question/exercises',query: {exercise: fav}}"> {{ fav }} </router-link>
                </li>
            </ul>
            <div class="fixed">
                <van-button icon="apps-o"></van-button>
                <i style="color: gray">|</i>
                <p>添加</p>
            </div>
        </div>
        <div class="show">
            <router-view></router-view>
        </div>
        <TabBar />
    </div>
</template>

<script setup>
// 内部组件
import TabBar from './TabBar.vue';
// 外部方法
import { reactive, onMounted } from 'vue';

const state = reactive({
    favWords: [],
    active: 0
});
onMounted(() => {
    state.favWords = ['算法工程师', 'C++', 'JAVA', '安全工程师'];
})
</script>

<style lang="stylus" scoped>
.question
    .question-header
        .header-top
            display: flex
            justify-content: space-around;
            align-items: center;
            .van-search
                flex: 1
            .van-button
                margin: 0 .266667rem /* 10/37.5 */
        .header-bottom
            display: flex
            justify-content: space-around
            align-content: center
           .pratice
                padding: .16rem .533333rem
                display: flex
                flex-direction: column
                align-content: center
                justify-content: center
                .image
                    width .8rem /* 30/37.5 */
                    height: .8rem /* 30/37.5 */
                    background-color: green
                    position relative
                    left: 50%
                    transform: translate(-50%)
                .strong
                    align-content: center
    .question-content
        display: flex
        align-content: center
        justify-content: space-around
        .content-title
            display: flex
            align-items center
            overflow: scroll
            white-space: nowrap
            li
                font-size: .426667rem /* 16/37.5 */
                margin: .16rem .32rem 
                text-align: center  
                
        .fixed
            flex: 1
            width 300px
            display: flex
            align-items: center
            justify-items: center
            .van-button
                border 0
                padding 0 .16rem /* 6/37.5 */
            i
                padding-right: .08rem /* 3/37.5 */
            p
                white-space: nowrap
                padding-right: .266667rem /* 10/37.5 */


</style>