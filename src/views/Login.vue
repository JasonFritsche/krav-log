<template>
  <div class="flex-row self-center justify-self-center">
    <login-dialog headerText="Login to your Account" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginDialog from '../components/singleUseComponent/LoginDialog.vue'

export default defineComponent({
  components: { LoginDialog },
  setup() {}
})
</script>
