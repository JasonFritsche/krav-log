<template>
  <div class="flex flex-col flex-grow align-center justify-center">
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
