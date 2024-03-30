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


<style bundle lang="less" scope>

.lite-tree-nodes {
  color: #555;
  display: flex;
  flex-direction: column;
  list-style: none!important;;  
  padding: 0;
  text-align: left;
  &.root{
    padding: 8px;
    border: 1px solid #eee;
    
  }
  > li{
    width: 100%;
  }
  .open{
    transition: height 0.3s;  
    height: auto;      
  }
  .close{
    transition: height 0.3s;  
    height: 0;  
    overflow: hidden; 
  }

  
  span.lite-tree-node{
    cursor: pointer;
    display: flex;
    width: 100%;
    padding:4px;
    margin:0px;     
    align-items: center;

    &.success{
      background-color: #f3ffec;
      color:green;
    }
    &.warning{
      background-color: #fff6e9;
      color:orange;
    }
    &.error{
      background-color: #ffeaea;
      color:red
    }
    &.info{
      background-color: #f5f5f5;

    } 
    &>.title{
      flex-grow: 1;
    } 
    &>.tag{
        background-color: #eee;
        color: #333;
        padding: 2px 4px;
        border-radius: 4px;
        border: 1px solid #ddd;
        margin-left: 2px;
        margin-right: 2px;
        font-size: 12px;
    }
    &>.comment{
      color: #aaa;    
    }

    &.diff{     
      height: 100%;
    }
    &.diff:before{
      content: attr(data-diff);        
    }
    &.diff-add{
      background-color: #f3ffec;
      color:green;
    }
    &.diff-modify{
      background-color: #fff6e9;
      color:orange;
    }
    &.diff-delete{
      background-color: #ffeaea;
      color:red
    }

    .arrow{
      width: 20px;
      height:10px;  
      border-left: 10px solid #999;   
      border-right: 10px solid transparent;  
      border-bottom: 5px solid transparent;   
      border-top: 5px solid transparent;  
      transform-origin: 5px center;
      transform: rotate(0deg);
      transition: all 0.2s;
      &.open{
        transform-origin: 5px center;
        transform: rotate(90deg);
        transition: all 0.2s;
      }     
    } 
    
 
    &:hover{
       background-color: #f8f8f8;       
       border-radius: 4px;
    } 
  }
}  
</style>  