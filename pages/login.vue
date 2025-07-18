<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white text-black px-4 h-100"
  >
    <div class="w-full max-w-4xl bg-white rounded-lg flex overflow-hidden">
     
      <img src="../public/images/phoneimg.jpg" alt="" class=" md:block w-1/2 object-cover">
      <div class="w-full md:w-1/2 p-8">
        <h1 class="text-2xl font-bold mb-8">
          Hypervent Waitlist & Referral <span class="">Program</span>
        </h1>
        <h3 class="font-bold mb-3">Login</h3>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label
              for="email"
              class="block text-sm font-bold text-gray-600 mb-1"
              >Email Address</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black bg-white"
              placeholder="Johndoe@hypervent.fi"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-600 mb-1"
              >Password</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black bg-white"
              placeholder="********"
              required
            />
          </div>

          <p v-if="errorMessage" class="text-red-500 text-sm mt-4 text-center">
            {{ errorMessage }}
          </p>
          <p
            v-if="successMessage"
            class="text-green-500 text-sm mt-4 text-center"
          >
            {{ successMessage }}
          </p>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-[#ff886d] hover:bg-orange-600 text-white font-bold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            <span v-if="isLoading">Logging in...</span>
            <span v-else>Login</span>
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <NuxtLink
            to="/signup"
            class="font-medium text-[#ff886d] hover:text-[#e67a60]"
            >Sign Up</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useHead, useRuntimeConfig } from "nuxt/app";

interface UserData {
  _id: string;
  username: string;
  email: string;
  referralCode: string;
  hvnPoints: number;
  referrals: number;
  rank: number;
}

interface LoginResponse {
  status: string;
  token: string;
  user: UserData;
  message?: string;
}

useHead({ title: "Login - Hypervent" });
definePageMeta({ layout: false });

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const email = ref("");
const password = ref("");
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);
const isLoading = ref(false);

const API_BASE_URL =
  runtimeConfig.public.apiBase || "http://localhost:4000/api";

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  successMessage.value = null;
  try {
    const responseData: LoginResponse = await $fetch(
      `${API_BASE_URL}/auth/login`,
      {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        },
      }
    );

    if (responseData && responseData.token && responseData.user) {
      if (process.client) {
        localStorage.setItem("hypervent_token", responseData.token);
        localStorage.setItem(
          "hypervent_user",
          JSON.stringify(responseData.user)
        );
      }

      successMessage.value =
        responseData.message || "Login successful! Redirecting to dashboard...";

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      errorMessage.value = "Login failed: Unexpected response from server.";
    }
  } catch (err: any) {
    console.error("Login Error:", err);

    if (err.response && err.response._data && err.response._data.message) {
      errorMessage.value = err.response._data.message;
    } else {
      errorMessage.value =
        "Login failed: An unexpected error occurred. Please try again.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.h-100 {
  height: 100vh;
}

.h-120 {
  height: 30rem;
}

@media (max-width: 767px) {
  .hidden.md\:block {
    display: none;
  }
}
</style>
