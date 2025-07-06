<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white text-black px-4 h-100"
  >
    <div class="w-full max-w-4xl  bg-white rounded-lg flex overflow-hidden">
      <img
        src="../public/images/phoneimg.jpg"
        alt=""
        class="md:block h-100 w-1/2 object-cover mt-15"
      />

      <div class="w-full md:w-1/2 p-8">
        <h1 class="text-2xl font-bold mb-8">
          Hypervent Waitlist & Referral <span class="">Program</span>
        </h1>
        <h3 class="font-bold mb-3">Sign Up</h3>

        <form @submit.prevent="handleSignup">
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-bold text-gray-600 mb-1"
              >Username</label
            >
            <input
              id="username"
              v-model="username"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black bg-white"
              placeholder="John Doe"
              required
            />
          </div>

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

          <div class="mb-4">
            <label
              for="referralCode"
              class="block text-sm font-medium text-gray-600 mb-1"
              >Referral Code (Optional)</label
            >
            <input
              id="referralCode"
              v-model="receivedReferralCode"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-black bg-white"
              placeholder="e.g., INVITE123"
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
            <span v-if="isLoading">Getting Referral Link...</span>
            <span v-else>Get My Referral Link</span>
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <NuxtLink
            to="/login"
            class="font-medium text-[#ff886d] hover:text-[#e67a60]"
            >Login</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { useRouter, useRoute, type LocationQueryValue } from "vue-router";
import { useHead, useRuntimeConfig } from "nuxt/app";

interface UserData {
  _id?: string;
  username: string;
  email: string;
  referralCode: string;
  hvnPoints: number;
  referrals: number;
  rank: number;
}

interface SignupResponse {
  status: string;
  token: string;
  user: UserData;
  message?: string;
}

useHead({ title: "Sign Up - Hypervent" });
definePageMeta({ layout: false });

const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const username = ref("");
const email = ref("");
const password = ref("");

const receivedReferralCode: Ref<string | null> = ref(null);

const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);
const isLoading = ref(false);

const API_BASE_URL =
  runtimeConfig.public.apiBase || "http://localhost:4000/api";

onMounted(() => {
  const refParam: LocationQueryValue | LocationQueryValue[] | undefined =
    route.query.ref;

  let finalRefCode: string | null = null;

  if (typeof refParam === "string") {
    finalRefCode = refParam;
  } else if (Array.isArray(refParam) && refParam.length > 0) {
    const firstElement = refParam[0];
    if (typeof firstElement === "string") {
      finalRefCode = firstElement;
    }
  }

  receivedReferralCode.value = finalRefCode;
});

const handleSignup = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  successMessage.value = null;

  try {
    const responseData: SignupResponse = await $fetch(
      `${API_BASE_URL}/auth/register`,
      {
        method: "POST",
        body: {
          username: username.value,
          email: email.value,
          password: password.value,

          referredBy: receivedReferralCode.value,
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
        responseData.message ||
        "Account created! Redirecting to your dashboard...";

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      errorMessage.value = "Sign up failed: Unexpected response from server.";
    }
  } catch (err: any) {
    console.error("Signup Error:", err);
    if (err.response && err.response._data && err.response._data.message) {
      errorMessage.value = err.response._data.message;
    } else {
      errorMessage.value =
        "Sign up failed: An unexpected error occurred. Please try again.";
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
