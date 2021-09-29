<template>
  <div
    class="grid grid-cols-1 rounded-md pb-6 pt-1 pl-3 pr-3 bg-white shadow-3xl"
  >
    <div>{{ headerText }}</div>
    <form class="flex flex-col" @submit.prevent>
      <div class="p-3">
        <k-input
          type="text"
          placeholder="Enter email"
          aria-placeholder="email"
          v-model="email"
        />
      </div>
      <div class="p-3">
        <k-input
          type="password"
          placeholder="Password"
          aria-placeholder="password"
          v-model="password"
        />
      </div>
      <div class="p-3">
        <k-input
          type="password"
          placeholder="Verify Password"
          aria-placeholder="verify password"
          v-model="verifyPassword"
        />
      </div>
      <div>
        <k-button @click="createAccount">Create Account</k-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { register } from '../../services/firebaseService'
import KInput from '../KInput.vue'
import KButton from '../KButton.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { KInput, KButton },
  props: {
    headerText: String
  },
  setup(_, context) {
    const email = ref<string>('')
    const password = ref<string>('')
    const verifyPassword = ref<string>('')
    const store = useStore()

    const createAccount = () => {
      register('testusername', email.value, password.value).then((user) => {
        store.commit('setUser', user)
        console.log(store.state)
      })
    }

    return {
      email,
      password,
      verifyPassword,
      createAccount
    }
  }
})
</script>
