<template>
  <div class="grid grid-cols-1 bg-blue-600 rounded-md pb-6 pt-1 pl-3 pr-3">
    <div>{{ headerText }}</div>
    <div class="flex flex-col">
      <div class="p-3">
        <input type="text" />
      </div>
      <div class="p-3">
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    headerText: String
  },
  setup() {}
})
</script>
