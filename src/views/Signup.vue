<template>
  <div>Signup</div>
  <login-dialog headerText="Sign Up" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginDialog from '../components/LoginDialog.vue'

export default defineComponent({
  components: { LoginDialog },
  setup() {}
})
</script>
