<template>
    <div class="item">
        <div class="info">
            <van-skeleton avatar :row="3" />
            <img :src="discuss.head_portrait" alt="头像" />
            <div>
                <van-skeleton-paragraph row-width="60%" />
                <p class="name"><strong>{{ discuss.username }}</strong></p>
                <p class="intro">{{ discuss.publish }} {{ discuss.introduction }}</p>
            </div>
        </div>
        <div class="content">
            <van-skeloton title :loading="loading"></van-skeloton>
            <p><strong>{{ discuss.title }}</strong></p>
            <van-skeleton-paragraph :loading="loading"/>
            <p>{{ discuss.content }}</p>
            <img v-if="discuss.imgSrc" :src="discuss.imgSrc" alt="">
        </div>
        <div class="data-show">
            <van-skeleton-paragraph :loading="loading"/>
            <van-button color="" icon="eye-o"><span>{{ discuss.view }}</span></van-button>
            <van-button icon="chat-o"><span>{{ discuss.say }}</span></van-button>
            <van-button icon="good-job-o"><span>{{ discuss.good }}</span></van-button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    discuss: {
        type: Array,
        value: []
    },
    loading: {
        type: Boolean
    }
});
</script>

<style lang="stylus" scoped>
.item
    margin .266667rem /* 10/37.5 */
    .info
        display flex
        img
            width: .266667rem /* 10/37.5 */
            height: .266667rem /* 10/37.5 */
        div
            .name
                font-size .426667rem /* 16/37.5 */
            .intro
                color gray
                font-size .32rem /* 12/37.5 */
    .content
        img
            width 2.666667rem /* 100/37.5 */
            height 2.666667rem /* 100/37.5 */
            border-radius .533333rem /* 20/37.5 */
    .data-show
        display flex
        justify-content: space-between
        .van-button
            padding 0
            background transparent
            border 0
        
</style>