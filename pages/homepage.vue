<template>
  <div class="">
    <div class="bg-gradient-to-b from-[#ffe9e5] via-white to-white px-4 py-20 text-center">
      <h1 class="font-extrabold text-[#ff886d] text-3xl">
        The First Institutional-Grade<span>,</span>
      </h1>
      <h1 class="font-bold text-3xl">Lightning-Fast, Gamified Perp</h1>
      <h1 class="font-bold text-2xl">DEX on Keeta</h1>

      <div class="text-center text-sm mt-4">
        <p>
          Trade proposals, swap tokens, launch projects and stake <br />
          rewards. Level up your Defi experience.
        </p>
      </div>

      <div class="mt-10 text-sm flex justify-center gap-2">
        <button class="bg-[#ff886d] border rounded px-3 py-2 text-white font-semibold">
          Trade Perp Now
        </button>
        <button class="bg-white border border-[#ff886d] text-[#ff886d] font-semibold rounded px-3 py-2">
          Join Waitlist
        </button>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-20 text-center">Why HyperVent?</h2>
    <div class="flex justify-center text-center mt-7">
      <div class="flex flex-col gap-10">
        <div class="flex flex-row gap-5">
          <div class="rounded-lg border border-black/5 shadow-sm px-5 h-90 text-left w-full">
            <div class="flex items-start gap-2 mt-7">
              <font-awesome-icon :icon="['fas', 'bolt']" class="text-[#ff886d] text-xl mt-1" />
              <p class="font-bold">Blistering Speed & Low Fees</p>
            </div>
            <p class="mt-2">Sub-second settlements, near-zero gas on Keeta's DAG.</p>
            <img src="/images/whyhypervent1.jpg" alt="" class="h-60 object-cover mt-5 w-full" />
          </div>

          <div class="rounded-lg border border-black/5 shadow-sm px-5 h-90 text-left w-full">
            <div class="flex items-start gap-2 mt-7">
              <font-awesome-icon :icon="['fas', 'shield-halved']" class="text-[#ff886d] text-xl mt-1" />
              <p class="font-bold">Institutional-Grade Perpetuals</p>
            </div>
            <p class="mt-2">50× leverage, cross/isolation margin, secure oracles, <br> robust circuit
              breakers.</p>
            <img src="/images/whyhypervent2.jpg" alt="" class="h-60 object-cover mt-5 w-full" />
          </div>
        </div>

        <div class="flex flex-row gap-5">
          <div class="rounded-lg border border-black/5 shadow-sm px-5 h-90 text-left w-full">
            <div class="flex items-start gap-2 mt-7">
              <font-awesome-icon :icon="['fas', 'hammer']" class="text-[#ff886d] text-xl mt-1" />
              <p class="font-bold">No-Code Token Factory</p>
            </div>
            <p class="mt-2">Launch tokens instantly, no coding required — built-in <br> vesting, governance,
              staking modules.</p>
            <img src="/public/images/whyhypervent3.jpg" alt="" class="h-60 object-cover mt-5 w-full" />
          </div>

          <div class="rounded-lg border border-black/5 shadow-sm px-5 h-90 text-left w-full">
            <div class="flex items-start gap-2 mt-7">
              <font-awesome-icon :icon="['fas', 'gamepad']" class="text-[#ff886d] text-xl mt-1" />
              <p class="font-bold">Gamified Experience</p>
            </div>
            <p class="mt-2">Earn XP, unlock loot boxes, climb leaderboards, and win <br> exclusive NFTs and
              tokens.</p>
            <img src="/public/images/whyhyprvent4.jpg" alt="" class="h-60 object-cover mt-5 w-full" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black text-white rounded-2xl mt-10 mx-20">
      <div class="mt-10 p-10">
        <h1 class="text-3xl font-bold text-center">
          Your Hypervent Journey In <br />
          <span class="text-[#ff886d]">3 Steps</span>
        </h1>
      </div>

      <div class="flex flex-row md:flex-row p-4 px-17 gap-10 justify-center">
        <div class="bg-[#80808041] p-10 rounded-2xl text-left px-5 w-full">
          <div class="flex items-start gap-2 mt-2">
            <font-awesome-icon :icon="['fas', 'list-ul']" class="text-[#ff886d] text-xl mt-1" />
            <p class="text-2xl font-bold mt-10 pl-0 ">Join the Waitlist</p>
          </div>
          <p class="mt-2">
            Secure your spot, get a unique <br />
            referral link, and start earning <br />
            exclusive pre-market whitelist <br />
            spots and airdrop perks.
          </p>
        </div>

        <div class="bg-[#80808041] p-10 px-5 rounded-2xl text-left w-full">
          <div class="flex items-start gap-2 mt-2">
            <font-awesome-icon :icon="['fas', 'rocket']" class="text-[#ff886d] text-xl mt-1" />
            <p class="text-2xl font-bold mt-10 pl-0">Build & Launch</p>
          </div>
          <p class="mt-2">
            Create tokens with ease, host <br />
            engaging IDQs, and earn rewards <br />
            by referring friends.
          </p>
        </div>

        <div class="bg-[#80808041] p-10 px5 rounded-2xl text-left w-full">
          <div class="flex items-start gap-2 mt-2">
            <font-awesome-icon :icon="['fas', 'chart-line']" class="text-[#ff886d] text-xl mt-1" />
            <p class="text-2xl font-bold mt-10 text-left px-0 ">Trade & Stake</p>
          </div>
          <p class="mt-2">
            Access perpetual trading, <br />
            optimal swap pricing, and staking <br />
            to boost your XP.
          </p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row md:flex-row mt-16 p-6 md:p-10 shadow-xl rounded-3xl bg-[#FDF2EC] gap-4 md:gap-10 items-center justify-between max-w-3xl mx-auto">
      <div class="flex items-center gap-6 text-center md:text-left md:max-w-sm">
        <div class="relative w-12 h-8 flex-shrink-0">
          <div class="absolute top-0 left-0 w-0 h-0 border-b-[14px] border-l-6 border-r-6 border-b-white border-transparent"></div>
          <div class="absolute top-1 left-2 w-0 h-0 border-b-[14px] border-l-6 border-r-6 border-b-white border-transparent rotate-12"></div>
          <div class="absolute top-2 left-4 w-0 h-0 border-b-[14px] border-l-6 border-r-6 border-b-white border-transparent rotate-24"></div>
        </div>
        <div>
          <h1 class="font-bold text-2xl text-gray-800">Referral Campaign</h1>
          <p class="mt-2 text-xs text-gray-600">
            Join the HyperVent Waitlist & Referral Campaign for <br class="hidden md:inline">Exclusive Rewards
          </p>
        </div>
      </div>
      <div class="w-full md:w-auto">
        <button
          class="p-4 w-full md:w-auto flex items-center justify-center gap-2 bg-[#ff886d] shadow-md rounded-lg text-sm text-white font-semibold whitespace-nowrap">
          Join Referral Campaign
          <font-awesome-icon :icon="['fas', 'plus']" class="text-white" />
        </button>
      </div>
    </div>

<div class="bg-amber-50 h-180">
        <div class="mt-20 flex justify-center">
      <h1 class="text-2xl font-bold">Feature <span class="font-bold text-2xl text-[#ff886d]">Highlights</span>
      </h1>
    </div>
    <div class="flex flex-row gap-10  mt-15 justify-center">
      <div class="shadow-sm bg-black text-white p-5 rounded-2xl ">
        <img src="/public/images/img3.jpg" alt="" class="h-70 w-80 rounded-2xl">
        <h2 class="font-bold text-2xl mt-8">Institutional-Grade Perps</h2>
        <p class="mt-8 text-xm">Ultra-low latency (sub-400ms) <br> High leverage (up to 50x) <br> Safe
          liquidations, tight spreads, <br> API integrations</p>
      </div>
      <div>
        <div class="flex flex-row gap-5 justify-center shadow-sm bg-white rounded-2xl">
          <img src="/public/images/img2.jpg" alt="">
          <div class="mt-7">
            <h2 class="font-bold text-2xl">Token Factory & Launchpad</h2>
            <div class="mt-5 text-xm">
              <p>No code deployment</p>
              <p>Pre-built governance, staking, revenue-sharing modules</p>
              <p>Quest-based IDOs, built-in KYC options</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-5 justify-center mt-8 shadow-sm rounded-2xl bg-white">
          <img src="/public/images/img1.jpg" alt="">
          <div class="mt-7">
            <h2 class="font-bold text-2xl">Swap Engine & Gamified Staking</h2>
            <div class="mt-5 text-xm">
              <p>Optimal multi-pool routing</p>
              <p>TWAP price proection, minimal slippage</p>
              <p>Earn rewards via staking and quests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    <div class="flex flex-row gap-15 mt-10 justify-center">
      <div class="text-black mt-25">
        <h2 class="font-bold text-2xl mt-8">The <span class="text-[#ff886d]">$HVN Token</span></h2>
        <p class="mt-2 text-xm font-bold text-2xl">& Exchange</p>
        <p class="mt-2 text-xm font-bold text-2xl">Integration</p>
      </div>
      <div>
        <div class="flex flex-row gap-5 justify-center bg-white ">
          <div class="mt-7">
            <h2 class="font-bold text-2xl">Utility $ Governance</h2>
            <div class="mt-5 text-xm">
              <p>$HVN powers HyperVent's ecosystem, facilitating</p>
              <p>staking, trading fees, governance voting, and</p>
              <p>rewards distribution</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-5 justify-center mt-8 bg-white">
          <div class="mt-7">
            <h2 class="font-bold text-2xl">Exchange Listings</h2>
            <div class="mt-5 text-xm">
              <p>Plans underway to list $HVN on top-tier exchanges,</p>
              <p>including Binance, Bybit, and more, ensuring</p>
              <p>widespread liquidity and ease of access.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="bg-black flex justify-center flex-col align-middle text-center">
        <h3 class="text-font-bold mt-7 text-xs text-[#ff886d] font-bold">TRUST & SECURITY</h3>
        <h1 class="text-white text-2xl font-bold">Built Securely on Keeta</h1>
        <div class="flex flex-row px-4 justify-center mt-10">
          <div class="rounded border text-white border-white/11 text-left p-8 shadow-sm">
            <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xl mb-4 text-[#ff886d]" />
            <h1 class="font-bold">DAG Scalability</h1>
            <h3 class="mt-3 text-xs font-light">Sub-second, millions</h3>
            <p class="text-xs font-light">TPS</p>
          </div>

          <div class="rounded border text-white border-white/11 text-left p-8 shadow-sm">
            <font-awesome-icon :icon="['fas', 'code']" class="text-xl mb-4 text-[#ff886d]" />
            <h1 class="font-bold">KeetaVM & <br />KeetaScript</h1>
            <h3 class="mt-3 text-xs font-light">Auditable smart</h3>
            <p class="text-xs font-light">contracts</p>
          </div>

          <div class="rounded border text-white border-white/11 text-left p-8 shadow-sm">
            <font-awesome-icon :icon="['fas', 'shield-halved']" class="text-xl mb-4 text-[#ff886d]" />
            <h1 class="font-bold">Security</h1>
            <h3 class="mt-3 text-xs font-light">
              Audits (CertiK, <br />PeckShield), Immunefi
            </h3>
            <p class="text-xs font-light">Bug Bounty</p>
          </div>

          <div class="rounded border text-white border-white/11 text-left p-8 shadow-sm">
            <font-awesome-icon :icon="['fas', 'cloud']" class="text-xl mb-4 text-[#ff886d]" />
            <h1 class="font-bold">Compliance</h1>
            <h3 class="mt-3 text-xs font-light">Opt-in KYC or</h3>
            <p class="text-xs font-light">anonymous trading</p>
            <p class="text-xs font-light">options</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center text-center">
      <h1 class="mt-7 font-semibold text-2xl">Roadmap Timeline</h1>

      <div class="flex flex-col items-center justify-center w-full">
        <div class="mt-7 shadow-2xl border border-black/5 px-8 py-2 w-[50%] bg-white rounded text-left">
          <h3 class="font-bold">Q2 2025</h3>
          <p class="text-xs font-semibold text-[#00000063]">Testnet Launch (Swap, Token Factory)</p>
        </div>
        <div class="mt-2 shadow-2xl border border-black/5 px-8 py-2 w-[50%] bg-white rounded text-left">
          <h3 class="font-bold">July 2025</h3>
          <p class="text-xs font-semibold text-[#00000063]">Gamified Launchpad, Referral Leaderboard</p>
        </div>
        <div class="mt-2 shadow-2xl border border-black/5 px-8 py-2 w-[50%] bg-white rounded text-left">
          <h3 class="font-bold">Aug 2025</h3>
          <p class="text-xs font-semibold text-[#00000063]">Perps Module, Institutional API Beta</p>
        </div>
        <div class="mt-2 shadow-2xl border border-black/5 px-8 py-2 w-[50%] bg-white rounded text-left">
          <h3 class="font-bold">Q3 2025</h3>
          <p class="text-xs font-semibold text-[#00000063]">$HVN IDO, Mainnet Launch</p>
        </div>
        <div class="mt-2 shadow-2xl border border-black/5 px-8 py-2 w-[50%] bg-white rounded text-left">
          <h3 class="font-bold">Q4 2025</h3>
          <p class="text-xs font-semibold text-[#00000063]">V2 (Cross-margin, DAO, Institutional Dashboard)
          </p>
        </div>
      </div>

      <button class="text-black rounded bg-[#ff886d] w-[32%] p-2 mt-8 text-center">
        Keep Me Updated
      </button>
    </div>

    <div class="flex flex-row gap-15 mt-30 justify-center">
      <div>
        <h1 class="text-left font-extrabold text-2xl mt-25">
          Frequently <br>Asked <br>Questions
        </h1>
        <p>Discover quick and comprehensive answers to <br>common questions about our platform, services,
          <br>and features.
        </p>
      </div>
      <div>
        <div class="flex justify-center flex-col">
          <div class="bg-[#80808011] p-5 shadow-sm flex justify-between items-start">
            <div class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-[#ff886d] mt-1 text-sm" />
              <div>
                <h3 class="text-[#ff886d] mt-1">What is HyperVent?</h3>
                <p class="text-xs font-semibold text-[#00000063]">
                  Institutional-Grade perpetuals DEX, gamified staking, token launchpad, referral
                  <br />
                  program on Keeta.
                </p>
              </div>
            </div>
          </div>

          <h2
            class="mt-2 flex items-center gap-2 shadow-2xl border border-black/5 px-8 py-2 w-full bg-white rounded font-bold">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-[#ff886d] text-sm" />
            Joining Waitlist?
          </h2>

          <h2
            class="mt-2 flex items-center gap-2 shadow-2xl border border-black/5 px-8 py-2 w-full bg-white rounded font-bold">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-[#ff886d] text-sm" />
            $HVN Token?
          </h2>

          <h2
            class="mt-2 flex items-center gap-2 shadow-2xl border border-black/5 px-8 py-2 w-full bg-white rounded font-bold">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-[#ff886d] text-sm" />
            Mainnet launch?
          </h2>

          <h2
            class="mt-2 flex items-center gap-2 shadow-2xl border border-black/5 px-8 py-2 w-full bg-white rounded font-bold">
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-[#ff886d] text-sm" />
            Capital safety?
          </h2>
        </div>
      </div>
    </div>

    <footer class="bg-[#1c1b1b] text-white mt-32 pt-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-row md:flex-row justify-between items-start gap-y-10 md:gap-x-10 mb-10">
          <div class="flex flex-col max-w-xs w-full">
            <img src="/images/logo-icon.jpg" alt="HyperVent Logo" class="h-12 w-auto mb-3" />
            <p class="text-sm text-gray-400">
              The First Institutional-Grade, Lightning-Fast, Gamified Perp DEX on Keeta
            </p>
          </div>

          <div class="text-sm w-full md:w-auto">
            <h3 class="font-bold mb-2">Quick Links</h3>
            <ul class="space-y-1 text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>Roadmap</li>
              <li>FAQ</li>
              <li>Whitepaper</li>
            </ul>
          </div>

          <div class="text-sm w-full md:w-auto">
            <h3 class="font-bold mb-2">Contact</h3>
            <p class="text-gray-400">support@hypervent.fi</p>
            <p class="text-gray-400 mt-1">Made in USA</p>
          </div>

          <div class="text-sm w-full md:w-auto">
            <h3 class="font-bold mb-2">Social</h3>
            <ul class="space-y-1 text-gray-400">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Telegram</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

        <div
          class="flex flex-row md:flex-row justify-between items-center border-t border-white/10 pt-4 pb-8 text-xs text-gray-500 gap-4 md:gap-0">
          <p>©2025 HyperVent Labs</p>

          <div
            class="flex flex-row md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Risk Disclaimer</span>
          </div>

          <div class="flex space-x-5 text-lg text-white">
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
            <font-awesome-icon :icon="['fab', 'discord']" />
            <font-awesome-icon :icon="['fab', 'github']" />
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

