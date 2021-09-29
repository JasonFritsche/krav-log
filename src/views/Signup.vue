<template>
  <div class="flex-row self-center justify-self-center">
    <signup-dialog headerText="Create Your Account" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignupDialog from '../components/singleUseComponent/SignupDialog.vue'

export default defineComponent({
  components: { SignupDialog },
  setup() {}
})
</script>
