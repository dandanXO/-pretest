import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useThemeStore = defineStore('theme', {
  state: () => ({
    color: '#77a88d', // 默認顏色
    theme: 'light' // 默認主題
  }),
  actions: {
    setColor(color) {
      this.color = color
    },
    setTheme(theme) {
      this.theme = theme
    }
  }
})