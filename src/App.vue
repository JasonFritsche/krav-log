<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <navbar></navbar>
    <div class="flex flex-grow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/singleUseComponent/Navbar.vue'

export default defineComponent({
  components: { Navbar }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
