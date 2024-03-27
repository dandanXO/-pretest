

<template>
  <header>
    
  </header>
  <div :style="{background: themeStore.color}">
    這裡是　router view 之外用來設定 整個主題的地方使用 Pinia <br>
    當前顏色{{ themeStore.color }} <input v-model="themeStore.color" @change="selectColor" type="color"><br>
   <div @click="changeTheme"> 當前明暗主題{{themeStore.theme}} 點我可以換主題</div><br>    
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/counter'
import axios from 'axios';

const themeStore = useThemeStore()
onMounted(() => {
  // 設置頁面標題
  document.title = 'Dan title'

  // 更新或添加頁面描述
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'dan content')
  } else {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'dan content')
    metaDescription.setAttribute('content', 'dan content')
    document.getElementsByTagName('head')[0].appendChild(metaDescription)
  }
})
const selectColor = (color)=>{
  themeStore.setColor = color
}
function changeTheme() {
  themeStore.setTheme(themeStore.theme === 'light' ? 'dark' : 'light')
  if(themeStore.theme === 'light'){
    document.body.style.backgroundColor = '#fff'
  }else{
    document.body.style.backgroundColor = '#000'
  }
  
}
</script>

<style lang="scss" scope>
  
</style>