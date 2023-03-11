<template>
    <div>
        {{ route.query.exercise }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<style lang="stylus" scoped>

</style>