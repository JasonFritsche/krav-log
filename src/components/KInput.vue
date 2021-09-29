<template>
  <input
    class="
      focus:ring-2 focus:ring-blue-400 focus:outline-none
      w-full
      text-sm text-black
      placeholder-gray-500
      border border-gray-200
      rounded-sm
      py-2
      pl-10
    "
    :type="type"
    :placeholder="placeholder"
    :aria-placeholder="ariaPlaceholder"
    v-model="inputValue"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    placeholder: String,
    type: String,
    ariaPlaceholder: String
  },
  setup() {
    const inputValue = ref<string>('')
    return {
      inputValue
    }
  }
})
</script>
