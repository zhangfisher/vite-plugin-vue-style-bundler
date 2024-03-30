<template>
    <div class="my-card2">
        <div class="title" data-x-123>{{ title }}</div>
        <div class="content">{{ content }}</div>
    </div>
</template>

<script setup>
defineProps({
    title:String,
    content:String
})
</script>

<style bundle="mycard-style" lang="less">
    .my-card2{
        border:1px solid #ddd;
        box-sizing: border-box;
        margin:8px;
        & > .title{
            background-color: #a7eaff;
            font-weight: bold;
            padding: 8px;                
            border-bottom:1px solid #ddd
        }
        & > .content{
            min-height: 80px;
            padding: 8px;
        }
    }
</style>