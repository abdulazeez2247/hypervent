<template>
  <div class="min-h-screen flex items-center justify-center bg-white text-black px-4 h-100">
    <div class="w-full max-w-4xl bg-white rounded-lg  flex overflow-hidden">

      <img src="/images/phoneimg.jpg" alt="Phone login illustration" class=" h-120 object-cover mt-5" />
      <div class="w-full md:w-1/2 p-8 ">
        <h1 class="text-2xl font-bold mb-8">Hypervent Waitlist & Referral <span class="">Program</span></h1>
        <h3 class="font-bold mb-3">Login</h3>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-bold text-gray-600 mb-1">Email Address</label>
            <input v-model="email" type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Johndoe@hypervent.fi" required />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input v-model="password" type="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="********" required />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-600 mb-1">Name (Optional)</label>
            <input type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="John Doe" />
          </div>

          <button type="submit"
            class="w-full bg-[#ff886d]  hover:bg-orange-600 text-white font-bold py-3 rounded-md transition">
            Get My Referral Link
          </button>
        </form>

        <p v-if="error" class="text-red-500 text-sm mt-4 text-center">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from 'nuxt/app'

useHead({ title: 'Login - Hypervent' })
definePageMeta({ layout: false })

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref<string | null>(null)

const handleLogin = () => {
  error.value = null
  if (email.value === 'test@hypervent.com' && password.value === 'password') {
    router.push('/dashboard')
  } else {
    error.value = 'Invalid email or password.'
  }
}
</script>
