<template>
  <div class="flex justify-center bg-gray-100 text-black px-4 py-8 md:py-12">
    <div class="w-full max-w-6xl space-y-4">

      <div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2 text-gray-500">Hi James,</h1>
        <h2 class="text-xl md:text-2xl text-black">Referral Overview</h2>
      </div>

      <div class="bg-white p-2 rounded-lg rounded space-y-4">
        <div class="flex flex-row md:flex-row rounded-lg px-2  pt-2 pb-2 min-h-[120px]">
          <div class="bg-white py-2 px-4  w-full text-left border-r border-black/10">
            <p class="text-sm text-gray-500">My Rewards</p>
            <p class="text-3xl font-bold mt-1">500 <span class="text-gray-400 ">$HVN</span></p>
          </div>
          <div class="bg-white py-2 px-4  w-full text-left border-r border-black/10">
            <p class="text-sm text-gray-500">Referrals</p>
            <p class="text-3xl font-bold mt-1">25</p>
          </div>
          <div class="bg-white py-2 px-4  w-full text-left">
            <p class="text-sm text-gray-500">Leaderboard</p>
            <p class="text-3xl font-bold mt-1">22<span class="text-gray-400">nd</span></p>
          </div>
        </div>
        <hr class="border border-black/2">

        <div class="flex items-center justify-between gap-10 p-4">
          <p class="text-lg font-medium">
            Earn <span class="text-black">10 HVN</span> points when you refer.
          </p>
          <div class="flex items-center justify-end gap-6 w-[60%]">
            <div class="flex gap-2">
              <div class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-black" />
              </div>
              <div class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-black" />
              </div>
              <div class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'telegram']" class="text-black" />
              </div>
              <div class="bg-gray-200 p-1 rounded h-[30px] w-[30px] flex items-center justify-center">
                <font-awesome-icon :icon="['fab', 'discord']" class="text-black" />
              </div>
            </div>
            <div class="flex border border-black/5 rounded-md overflow-hidden bg-gray-100 w-[50%]">
              <span class="bg-white px-2 flex items-center border-r border-black/10 text-sm">https://</span>
              <input
                type="text"
                readonly
                :value="referralLink.replace('https://', '')"
                class="flex-grow px-2 py-2 text-sm bg-white text-black truncate"
              />
              <button @click="copyLink" class="bg-[#ff886d] text-black px-3 py-2">
                <font-awesome-icon :icon="['fas', 'clipboard-list']" />
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-10 border rounded border-black/5">
          <p class="text-md px-1">
            Gain <span class="text-black">100 points</span> when you follow
            <span class="text-black">@Hyperventfi</span> on X and Verify.
          </p>
          <div class="flex items-center gap-4">
            <font-awesome-icon :icon="['fab', 'x-twitter']" class="w-6 h-6 text-black" />
            <p class="text-[#ff886d] px-4 py-2 rounded-md flex items-center">Verify</p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex space-x-6 mb-2 bg-gray-100">
          <button class="pb-1 border-b-2 border-[#ff886d] text-black text-lg font-medium">Leaderboard</button>
          <button class="text-black hover:text-orange-500 text-lg font-medium">Referrals</button>
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
            <hr class="border border-black/20 w-full">
            <tbody>
              <tr
                v-for="user in leaderboardData"
                :key="user.id"
                class="hover:bg-gray-50 text-black">
                <td class="px-2 py-2">
                  <div class="flex items-center gap-2">
                    <span v-if="user.id === 1">🥇</span>
                    <span v-else-if="user.id === 2">🥈</span>
                    <span v-else-if="user.id === 3">🥉</span>
                    <span class="px-1" v-else>{{ user.id }}</span>
                  </div>
                  <!-- <hr> -->
                </td>
                <td class="px-2 py-1 whitespace-nowrap">
                  <div class="flex items-center gap-2">
                    <span>{{ user.name }}</span>
                  </div>
                </td>
                <td class="px-2 py-2">{{ user.referrals }}</td>
                <td class="px-2 py-2">{{ user.rewards }}</td>
              </tr>
              <tr v-for="user in leaderboardData" :key="'line-' + user.id">
                <td colspan="4">
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="border border-black/2">
        </div>

        <div class="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 text-sm text-gray-600">
          <p class="text-sm">Showing 10 of 160</p>

          <div class="flex items-center flex-wrap gap-[1px] rounded-md p-1">
            <button class="px-2 py-1 hover:bg-gray-200"><font-awesome-icon :icon="['fas', 'angle-double-left']" /></button>
            <button class="px-2 py-1 hover:bg-gray-200"><font-awesome-icon :icon="['fas', 'angle-left']" /></button>
            <button class="px-3 py-1 border-2 text-black border-[#ff886d] rounded">1</button>
            <button class="px-3 py-1 hover:bg-gray-200">2</button>
            <button class="px-3 py-1 hover:bg-gray-200">3</button>
            <span class="px-2">...</span>
            <button class="px-3 py-1 hover:bg-gray-200">16</button>
            <button class="px-2 py-1 hover:bg-gray-200"><font-awesome-icon :icon="['fas', 'angle-right']" /></button>
            <button class="px-2 py-1 hover:bg-gray-200"><font-awesome-icon :icon="['fas', 'angle-double-right']" /></button>
          </div>

          <div class="flex items-center gap-2 border rounded px-3 py-1 cursor-pointer">
            <span>10/page</span>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#app'

useHead({ title: 'Dashboard' })

const referralLink = ref('https://hypervent.fi/waitlist/thefaboot1234')

const leaderboardData = [
  { id: 1, name: 'Bob Smith', referrals: 599, rewards: '10001 $HVN' },
  { id: 2, name: 'Catherine Johnson', referrals: 598, rewards: '10002 $HVN' },
  { id: 3, name: 'David Brown', referrals: 597, rewards: '10003 $HVN' },
  { id: 4, name: 'Emily Davis', referrals: 596, rewards: '10004 $HVN' },
  { id: 5, name: 'Frank Wilson', referrals: 595, rewards: '10005 $HVN' },
  { id: 6, name: 'Grace Taylor', referrals: 594, rewards: '10006 $HVN' },
  { id: 7, name: 'Henry Anderson', referrals: 593, rewards: '10007 $HVN' },
  { id: 8, name: 'Isabella Thomas', referrals: 592, rewards: '10008 $HVN' },
  { id: 9, name: 'Jack Martinez', referrals: 591, rewards: '10009 $HVN' },
  { id: 10, name: 'Katherine Lee', referrals: 590, rewards: '10010 $HVN' },
]

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(referralLink.value)
    alert('Referral link copied to clipboard!')
  } catch (err) {
    alert('Failed to copy.')
  }
}
</script>
