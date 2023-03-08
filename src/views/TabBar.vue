<template>
    <div>
        <van-tabbar active="{{ active }}" bind:change="onChange">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="points">题库</van-tabbar-item>
            <van-tabbar-item icon="friends-o">求职</van-tabbar-item>
            <van-tabbar-item icon="comment-o" dot>消息</van-tabbar-item>
            <van-tabbar-item icon="contact">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>

</script>

<style  scoped></style>