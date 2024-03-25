<template>
    <div class="my-card3">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
    </div>
</template>

<script setup>
defineProps({
    title:String,
    content:String
})
</script>

<style bundle="mycard3-style" lang="scss">
    .my-card3{
        border:1px solid #ddd;
        box-sizing: border-box;
        margin:8px;
        & > .title{
            background-color: #e4ffc5;
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