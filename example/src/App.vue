<script setup lang="ts">
import MyCard from './components/Card.vue'
import MyCard2 from './components/Card2.vue'
import MyCard3 from './components/Card3.vue'

</script>

<template>
  <div >
    <MyCard title="VoerkaI18n" content="VoerkaI18n是一个适用于React/Vue/Nodejs的全流程国际化解决方案"/>
    <MyCard title="SpeedForm" content="SpeedForm是一款React表单开发库"/>

    <MyCard2 title="VoerkaI18n" content="VoerkaI18n是一个适用于React/Vue/Nodejs的全流程国际化解决方案"/>
    <MyCard2 title="SpeedForm" content="SpeedForm是一款React表单开发库"/>
    <MyCard3 title="SpeedForm" content="SpeedForm是一款React表单开发库"/>

    <button @click="handleClick">点击</button>

  </div>
 </template>
<script lang="ts">


export default {
  methods: {
    handleClick() {
      console.log('click')
    }
  }
}
</script>


<style bundle lang="less" scoped="false">
@import '../tree.less';
</style>  