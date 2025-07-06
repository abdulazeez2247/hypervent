<template>
  <div class="flex justify-center bg-gray-100 text-black px-4 py-8 md:py-12">
    <div class="w-full max-w-6xl space-y-4">
      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2 text-gray-500">
          Hi {{ currentUser?.username || "User" }},
        </h1>
        <h2 class="text-xl md:text-2xl text-black">Referral Overview</h2>
      </div>

      <div class="bg-white p-2 rounded-lg rounded space-y-4">
        <div
          class="flex flex-row md:flex-row rounded-lg px-2 pt-2 pb-2 min-h-[120px]"
        >
          <div
            class="bg-white py-2 px-4 w-full text-left border-r border-black/10"
          >
            <p class="text-sm text-gray-500">My Rewards</p>
            <p class="text-3xl font-bold mt-1">
              {{ currentUser?.hvnPoints || 0 }}
              <span class="text-gray-400">$HVN</span>
            </p>
          </div>
          <div
            class="bg-white py-2 px-4 w-full text-left border-r border-black/10"
          >
            <p class="text-sm text-gray-500">Referrals</p>
            <p class="text-3xl font-bold mt-1">
              {{ currentUser?.referrals || 0 }}
            </p>
          </div>
          <div class="bg-white py-2 px-4 w-full text-left">
            <p class="text-sm text-gray-500">Leaderboard</p>
            <p class="text-3xl font-bold mt-1">{{ userRankText }}</p>
          </div>
        </div>
        <hr class="border border-black/2" />

        <div class="flex items-center justify-between gap-10 p-4">
          <p class="text-lg font-medium">
            Earn <span class="text-black">10 HVN</span> points when you refer.
          </p>
          <div class="flex items-center justify-end gap-6 w-[60%]">
            <div class="flex gap-2">
              <div
                class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  class="text-black"
                />
              </div>
              <div
                class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fab', 'x-twitter']"
                  class="text-black"
                />
              </div>
              <div
                class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fab', 'telegram']"
                  class="text-black"
                />
              </div>
              <div
                class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center"
              >
                <font-awesome-icon
                  :icon="['fab', 'discord']"
                  class="text-black"
                />
              </div>
            </div>
            <div
              class="flex border border-black/5 rounded-md overflow-hidden bg-gray-100 w-[50%]"
            >
              <span
                class="bg-white px-2 flex items-center border-r border-black/10 text-sm"
                >https://</span
              >
              <input
                type="text"
                readonly
                :value="fullReferralLink.replace('https://', '')"
                class="flex-grow px-2 py-2 text-sm bg-white text-black truncate"
              />
              <button
                @click="copyLink"
                class="bg-[#ff886d] text-black px-3 py-2"
              >
                <font-awesome-icon :icon="['fas', 'clipboard-list']" />
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-between gap-10 border rounded border-black/5 p-2"
        >
          <p class="text-md px-1">
            Gain <span class="text-black">100 points</span> when you follow
            <a
              href="https://twitter.com/Hyperventfi"
              target="_blank"
              rel="noopener noreferrer"
              class="text-black font-semibold hover:underline"
              >@Hyperventfi</a
            >
            on X and Verify.
          </p>
          <div
            @click="verifyXFollow"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200',
              currentUser?.isFollowingX
                ? 'bg-green-500 text-white'
                : 'text-[#ff886d]',
              (currentUser?.isFollowingX || isVerifyingX) &&
                'opacity-50 cursor-not-allowed',
            ]"
          >
            <font-awesome-icon :icon="['fab', 'x-twitter']" class="w-6 h-6 text-black" />
            <span v-if="isVerifyingX">Verifying...</span>
            <span v-else-if="currentUser?.isFollowingX">Verified!</span>
            <span v-else>Verify</span>
          </div>
        </div>
      </div>

      <div>
        <div class="flex space-x-6 mb-2 bg-gray-100">
          <button
            class="pb-1 border-b-2 border-[#ff886d] text-black text-lg font-medium"
          >
            Leaderboard
          </button>
          <button class="text-black hover:text-orange-500 text-lg font-medium">
            Referrals
          </button>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm">
            <thead class="text-gray-500">
              <tr>
                <th class="px-4 py-2">#</th>
                <th class="px-2 py-2">Name</th>
                <th class="px-2 py-2">Referrals</th>
                <th class="px-2 py-2">Rewards</th>
              </tr>
            </thead>
            <hr class="border border-black/20 w-full" />
            <tbody>
              <tr v-if="isLoadingDashboard || isLoadingLeaderboard">
                <td colspan="4" class="text-center py-4">Loading data...</td>
              </tr>
              <tr v-else-if="dashboardError || leaderboardError">
                <td colspan="4" class="text-center py-4 text-red-500">
                  Error loading data. Please try again.
                </td>
              </tr>
              <template v-else-if="leaderboardEntries.length > 0">
                <tr
                  v-for="(user, index) in leaderboardEntries"
                  :key="user._id || user.id"
                  class="hover:bg-gray-50 text-black"
                >
                  <td class="px-2 py-2">
                    <div class="flex items-center gap-2">
                      <span v-if="index + 1 === 1">🥇</span>
                      <span v-else-if="index + 1 === 2">🥈</span>
                      <span v-else-if="index + 1 === 3">🥉</span>
                      <span class="px-1" v-else>{{ index + 1 }}</span>
                    </div>
                  </td>
                  <td class="px-2 py-1 whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span>{{ user.username }}</span>
                    </div>
                  </td>
                  <td class="px-2 py-2">{{ user.referrals }}</td>
                  <td class="px-2 py-2">{{ user.hvnPoints }} $HVN</td>
                </tr>
              </template>
              <tr v-else>
                <td colspan="4" class="text-center py-4">
                  No leaderboard data available.
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="border border-black/2" />
        </div>

        <div
          class="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 text-sm text-gray-600"
        >
          <p class="text-sm">
            Showing {{ leaderboardEntries.length }} of
            {{ totalLeaderboardUsers }}
          </p>

          <div class="flex items-center flex-wrap gap-[1px] rounded-md p-1">
            <button
              @click="changeLeaderboardPage(1)"
              :disabled="currentPage === 1"
              class="px-2 py-1 hover:bg-gray-200"
            >
              <font-awesome-icon :icon="['fas', 'angle-double-left']" />
            </button>
            <button
              @click="changeLeaderboardPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-2 py-1 hover:bg-gray-200"
            >
              <font-awesome-icon :icon="['fas', 'angle-left']" />
            </button>

            <button
              v-for="page in totalLeaderboardPages"
              :key="page"
              @click="changeLeaderboardPage(page)"
              :class="[
                'px-3 py-1 rounded',
                currentPage === page
                  ? 'border-2 text-black border-[#ff886d]'
                  : 'hover:bg-gray-200',
              ]"
            >
              {{ page }}
            </button>

            <button
              @click="changeLeaderboardPage(currentPage + 1)"
              :disabled="currentPage === totalLeaderboardPages"
              class="px-2 py-1 hover:bg-gray-200"
            >
              <font-awesome-icon :icon="['fas', 'angle-right']" />
            </button>
            <button
              @click="changeLeaderboardPage(totalLeaderboardPages)"
              :disabled="currentPage === totalLeaderboardPages"
              class="px-2 py-1 hover:bg-gray-200"
            >
              <font-awesome-icon :icon="['fas', 'angle-double-right']" />
            </button>
          </div>

          <div
            class="flex items-center gap-2 border rounded px-3 py-1 cursor-pointer"
          >
            <span>{{ itemsPerPage }}/page</span>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useHead, useRuntimeConfig } from "#app";
import { useRouter } from "vue-router";

definePageMeta({
  middleware: ["auth"],
});

useHead({ title: "Dashboard" });

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const API_BASE_URL =
  runtimeConfig.public.apiBase || "http://localhost:4000/api";

const FRONTEND_URL =
  runtimeConfig.public.frontendUrl || "http://localhost:3000";

const currentUser = ref(null);
const fullReferralLink = ref("");
const isLoadingDashboard = ref(true);
const dashboardError = ref(null);

const leaderboardEntries = ref([]);
const totalLeaderboardUsers = ref(0);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const isLoadingLeaderboard = ref(true);
const leaderboardError = ref(null);

const isVerifyingX = ref(false);

const userRankText = computed(() => {
  if (currentUser.value && typeof currentUser.value.rank === "number") {
    const rank = currentUser.value.rank;
    if (rank % 10 === 1 && rank % 100 !== 11) return `${rank}st`;
    if (rank % 10 === 2 && rank % 100 !== 12) return `${rank}nd`;
    if (rank % 10 === 3 && rank % 100 !== 13) return `${rank}rd`;
    return `${rank}th`;
  }
  return "-";
});

const totalLeaderboardPages = computed(() => {
  return Math.ceil(totalLeaderboardUsers.value / itemsPerPage.value);
});

const fetchCurrentUser = async () => {
  isLoadingDashboard.value = true;
  dashboardError.value = null;
  const token = localStorage.getItem("hypervent_token");

  if (!token) {
    router.push("/login");
    return;
  }

  try {
    const response = await $fetch(`${API_BASE_URL}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    currentUser.value = response.user;

    fullReferralLink.value = `${FRONTEND_URL}/signup?ref=${currentUser.value.referralCode}`;
  } catch (err) {
    console.error("Failed to fetch current user:", err);
    dashboardError.value =
      "Failed to load user data. Please try logging in again.";

    if (err.statusCode === 401 || err.statusCode === 403) {
      localStorage.removeItem("hypervent_token");
      localStorage.removeItem("hypervent_user");
      router.push("/login");
    }
  } finally {
    isLoadingDashboard.value = false;
  }
};

const fetchLeaderboard = async () => {
  isLoadingLeaderboard.value = true;
  leaderboardError.value = null;
  const token = localStorage.getItem("hypervent_token");

  if (!token) {
    router.push("/login");
    return;
  }

  try {
    const response = await $fetch(
      `${API_BASE_URL}/users/leaderboard?page=${currentPage.value}&limit=${itemsPerPage.value}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    leaderboardEntries.value = response.users;
    totalLeaderboardUsers.value = response.totalCount;
  } catch (err) {
    console.error("Failed to fetch leaderboard:", err);
    leaderboardError.value = "Failed to load leaderboard data.";
    if (err.statusCode === 401 || err.statusCode === 403) {
      localStorage.removeItem("hypervent_token");
      localStorage.removeItem("hypervent_user");
      router.push("/login");
    }
  } finally {
    isLoadingLeaderboard.value = false;
  }
};

const changeLeaderboardPage = (page) => {
  if (page >= 1 && page <= totalLeaderboardPages.value) {
    currentPage.value = page;
    fetchLeaderboard();
  }
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(fullReferralLink.value);
    alert("Referral link copied to clipboard!");
  } catch (err) {
    alert("Failed to copy.");
  }
};

const verifyXFollow = async () => {
  if (currentUser.value?.isFollowingX || isVerifyingX.value) {
    return;
  }

  isVerifyingX.value = true;
  const token = localStorage.getItem("hypervent_token");

  try {
    const response = await $fetch(
      `${API_BASE_URL}/users/verify-twitter-follow`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === "success") {
      alert(
        "X (Twitter) follow verified successfully! You gained 100 HVN points."
      );

      if (currentUser.value && response.user) {
        currentUser.value.hvnPoints = response.user.hvnPoints;
        currentUser.value.isFollowingX = response.user.isFollowingX;
      }
    } else {
      alert(
        response.message ||
          "X (Twitter) verification failed for an unknown reason."
      );
    }
  } catch (err) {
    console.error("X (Twitter) verification failed:", err);

    if (err.statusCode === 400) {
      alert(
        err.data?.message ||
          "Verification failed. Please ensure you are following @Hyperventfi."
      );
    } else if (err.statusCode === 401 || err.statusCode === 403) {
      alert("Authentication failed. Please log in again.");
      localStorage.removeItem("hypervent_token");
      localStorage.removeItem("hypervent_user");
      router.push("/login");
    } else {
      alert(
        `Failed to verify X (Twitter) follow: ${
          err.data?.message || err.message || "Server error"
        }`
      );
    }
  } finally {
    isVerifyingX.value = false;
  }
};

onMounted(() => {
  fetchCurrentUser();
  fetchLeaderboard();
});
</script>
