<template>
    <div>
      <input v-if="isTextInput" type="text" v-model="modelValue" />
      <input v-else-if="isRadioInput" type="radio" v-model="modelValue" />
      <select v-else-if="isSelectInput" v-model="modelValue">
        <!-- 假定你有一個選項列表可供選擇 -->
        <option v-for="option in props.options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue'
  
  const props = defineProps({
    type: String,
    options: Array // 假設這是用於select輸入類型的選項列表
  })
  
  const modelValue = ref('')

  const isTextInput = computed(() => props.type === 'text')
  const isRadioInput = computed(() => props.type === 'radio')
  const isSelectInput = computed(() => props.type === 'select')
  </script>
  