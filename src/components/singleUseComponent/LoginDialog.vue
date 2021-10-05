<template>
  <div
    class="grid grid-cols-1 rounded-md pb-6 pt-1 pl-3 pr-3 bg-white shadow-3xl"
  >
    <div>{{ headerText }}</div>
    <form class="flex flex-col" @submit.prevent>
      <div class="p-3">
        <k-input
          type="text"
          placeholder="Email"
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
      <div>
        <k-button @click="loginUser">Log In</k-button>
      </div>
      <div>
        Need an account?
        <router-link class="text-blue-900" to="/signup">Click Here</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { login } from '../../services/firebaseService'
import KInput from '../KInput.vue'
import KButton from '../KButton.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: { KInput, KButton },
  props: {
    headerText: String
  },
  setup() {
    const email = ref<string>('')
    const password = ref<string>('')
    const store = useStore()
    const router = useRouter()
    const loginUser = () => {
      login(email.value, password.value).then((firebaseResponse) => {
        if ('user' in firebaseResponse) {
          store.commit('setUser', firebaseResponse.user)
          console.log(firebaseResponse.user)
          router.push('/home')
        } else {
          // TODO: handle this, make it a generic message "username or password invalid"
          console.log(firebaseResponse)
        }
      })
    }

    return {
      email,
      password,
      loginUser
    }
  }
})
</script>
