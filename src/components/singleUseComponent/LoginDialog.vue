<template>
  <div
    class="grid grid-cols-1 rounded-md pb-6 pt-1 pl-3 pr-3 bg-white shadow-3xl"
  >
    <div>{{ headerText }}</div>
    <form class="flex flex-col" @submit.prevent>
      <div class="p-3">
        <k-input />
      </div>
      <div class="p-3">
        <k-input />
      </div>
      <div>
        <k-button> Submit </k-button>
      </div>
      <div>
        Need an account?
        <router-link class="text-blue-900" to="/signup">Click Here</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KInput from '../KInput.vue'
import KButton from '../KButton.vue'

export default defineComponent({
  components: { KInput, KButton },
  props: {
    headerText: String
  },
  setup() {}
})
</script>
