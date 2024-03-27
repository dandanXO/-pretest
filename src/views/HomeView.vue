<template>
  規定作業要的功能寫在這
  <select v-model="selectedType">
    <option v-for="selectItem in selectOptions" :key="selectItem.text" :value="selectItem.value" >
      {{ selectItem.text }}
    </option>
  </select>
  <DynamicInput :type="selectedType" :options="selectOptions" />
  <div>
    router功能寫這
    <router-link to="/test">Go to Test</router-link>
  </div>
  <div>
    api 功能寫在這 並且稍微排版
    <template v-if="userData">
      <div v-for="user in userData" :key="user.id.value" class="container">
        <div>
          <img :src="user.picture.large"
        </div>
        <div class="left-content">
          <div>{{ user.name.first }}{{ user.name.last }}</div>
          <div>Phone: {{ user.phone }}</div>
          <div>Email: {{ user.email }}</div>
        </div>
      </div>
    </template>


  </div>
</template>

<script setup>
import {getTestUsers} from '@/utils/data';
import { reactive, ref } from 'vue'
import DynamicInput from '@/components/type.vue'
const selectedType = ref('text')
const selectOptions = reactive([
  { value: 'text', text: 'text' },
  { value: 'radio', text: 'radio' },
  { value: 'select', text: 'select' },
])
const userData = ref([])
getTestUsers().then(res=>{
  console.log(res)
  userData.value = res
})
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    .left-content{
      margin-left: 1rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
