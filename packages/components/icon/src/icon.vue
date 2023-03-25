<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
    
<script setup lang='ts'>
import { computed } from 'vue'
import { createNameSpace } from '@hui-zi/utils/create'
import { iconPrpos } from './icon'
defineOptions({
  name: 'z-icon'
})
const props = defineProps(iconPrpos)
const bem = createNameSpace("icon")
console.log(bem.b(), '--bem--');
console.log(props, 'props');

//计算属性 来计算样式
const style = computed(() => {
  if (!props.color && !props.size) return {}
  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { "font-size": props.size + 'px' } : {})
  }
})
</script>
    
<style></style>