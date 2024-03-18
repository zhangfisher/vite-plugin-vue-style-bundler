<script setup lang="ts">
import MyCard from './components/Card.vue'
import MyCard2 from './components/Card2.vue'
import MyCard3 from './components/Card3.vue'

</script>

<template>
  <div>
    <MyCard title="VoerkaI18n" content="VoerkaI18n是一个适用于React/Vue/Nodejs的全流程国际化解决方案"/>
    <MyCard title="SpeedForm" content="SpeedForm是一款React表单开发库"/>

    <MyCard2 title="VoerkaI18n" content="VoerkaI18n是一个适用于React/Vue/Nodejs的全流程国际化解决方案"/>
    <MyCard2 title="SpeedForm" content="SpeedForm是一款React表单开发库"/>
    <MyCard3 title="SpeedForm" content="SpeedForm是一款React表单开发库"/>

  </div>
 </template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
