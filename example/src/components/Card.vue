<template>
    <div class="my-card">
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

<style bundle>
    .my-card{
        border:1px solid #ddd;
        box-sizing: border-box;
        margin:8px;
    }
    .my-card > .title{
        background-color: #F2F2F2;
        font-weight: bold;
        padding: 8px;                
        border-bottom:1px solid #ddd
    }
    .my-card > .content{
        min-height: 80px;
        padding: 8px;
    }
</style>