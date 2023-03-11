<template>
    <div>
        <van-tabbar :active="state.active" @change="onChange" route>
            <van-tabbar-item :name="0" icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item  icon="points" to="/question">题库</van-tabbar-item>
            <van-tabbar-item :name="2" icon="friends-o" to="/employment">求职</van-tabbar-item>
            <van-tabbar-item :name="3" icon="comment-o" to="/message" dot>消息</van-tabbar-item>
            <van-tabbar-item :name="4" icon="contact" to="/mine">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
let state = reactive({
    active: 0
});
const onChange = (index) => {
    // console.log(index);
    state.active = index;
}
</script>

<style  scoped></style>