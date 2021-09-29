<template>
  <nav class="w-full flex opacity-90 p-5 bg-gray-900 hover:opacity-80 mb-3">
    <div class="text-gray-300">Krav Log</div>
    <div class="ml-auto">
      <router-link class="text-gray-300" to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
