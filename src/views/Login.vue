<template>
  <div class="flex flex-col align-center mt-24">
    <login-dialog headerText="Login to your Account" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginDialog from '../components/LoginDialog.vue'

export default defineComponent({
  components: { LoginDialog },
  setup() {}
})
</script>
