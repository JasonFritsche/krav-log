<template>
  <button class="bg-blue-700 rounded-sm py-1 text-white hover:bg-blue-600 px-3">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
