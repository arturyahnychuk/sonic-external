
<script setup lang="ts">

import { FingerPrintIcon, CpuChipIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/20/solid'
import { CheckIcon } from '@heroicons/vue/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

// FEATURES SECTION
const features = [
  {
    name: 'Chat with any Podcast or Episode',
    description: "Don't just listen—converse. Chat directly with episodes or podcasts.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'AI-Enabled',
    description:
      "Our AI listens to podcasts so you don't have to. Get the best moments, quotes, and summaries in seconds.",
    icon: CpuChipIcon,
  },

  {
    name: 'Mastermind Groups',
    description: 'Craft your unique podcast universe, chat with multiple podcasts to sift the signal from the noise.',
    icon: FingerPrintIcon,
  },

]


const howItWorks = [
  {
    name: 'Interactive Chat',
    description:
      'Chat with a podcast and jump right ot key moments. No more scrubbing audio trying to find that right detail.',
  },
  {
    name: 'Search across Podcast Episodes',
    description:
      'What to know what your favorite podcasters are saying about AI? Chat across episodes as simple as texting a friend.',
  },
  {
    name: 'See Summaries and Key Moments',
    description:
      'Our AI listens to your favorite podcasts, summarizes them, and gives you the key moments - so you can get the information you need, faster.',
  },
  {
    name: 'Keep your Podcast Player',
    description:
      'No need to switch to a new podcast player, our platform works alongside the tools you already use.',
  },
  {
    name: 'Email Digests (coming soon)',
    description:
      'Get the key ideas from your favorite podcasts delivered to your inbox in seconds.',
  },
  {
    name: 'Create a Mastermind Group (coming soon)',
    description:
      'Want to get insights and mentorship from top podcasts like Chamath or Shaan Puri? Chat across podcasts and use them as mentors to level up faster.',
  },

]


// PRICING SECTION
const tiers = [
  {
    name: 'The Grazer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$0',
    description: 'The essentials to get started for free.',
    features: [
      '5 turbo chats / day',
      "100 rapid chats / day",
      'Access unlimited podcast summaries',
      'Access unlimited episodes',
    ],
    mostPopular: false,
    cta: 'Get started for free',
  },
  {
    name: 'The Enthusiast',
    id: 'tier-startup',
    href: 'mailto:contact@chatwithpodcast.com',
    priceMonthly: '$19',
    description: 'A plan for regular podcast consumers.',
    features: [
      '100 turbo chats / day',
      "1000 rapid chats / day",
      'Access to mastermind groups (coming soon)',
      'Access to email digests (coming soon)',
      'Access new features first',
    ],
    mostPopular: false,
    cta: 'Contact us',
  },
  {
    name: ' The Maniac',
    id: 'tier-enterprise',
    href: 'mailto:contact@chatwithpodcast.com',
    priceMonthly: '$99',
    description: 'For those that need all the answer, right away',
    features: [
      '1000 turbo chats / day',
      "Unlimited rapid chats / day",
      'Build your own mastermind groups (coming soon)',
      'Build your own email digests (coming soon)',
      'Access new features first'
    ],
    mostPopular: false,
    cta: 'Contact us',
  },
]

// FAQ Section
const faqs = [
  {
    question: "What is a turbo chat?",
    answer:
      "We use the best AI models and the best retrieval to get the best information back to you as fast as possible.",
  },
  {
    question: "What is a rapid chat?",
    answer:
      "We use a less powerful AI model than the turbo chat that can handle less information. You'll see get great information and accurate references, but it's more limited than our turbo model.",
  },
  {
    question: "What is a mastermind group?",
    answer:
      "A mastermind group offers users the ability to chat with multiple podcasts at the same time.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "We've got a '1 question asked cancellation policy'. If at any point in the first 30 days you're unsatisfied with the experience, we'll give you a full refund, just asking why you're cancelling so that we can improve :).",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We don't offer a free trial at this time, users find that our 'Grazer' plan is a great way to get started for free.",
  },
]

</script>
<template>
  <div class="bg-white">
    <main>
      <div class="relative isolate">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1"
              patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true">
          <div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
        </div>
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Cut Through the Noise. </h1>
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-4"> Access
                  Podcast Insights in Seconds.</h2>
                <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">With an ocean of
                  content out there, we understand that time is of the essence.
                </p>
                <p class="relative mt-3 text-lg leading-2 text-gray-600 sm:max-w-md lg:max-w-none">
                  Dive deep, get informed, and save time by seeing <span class="font-bold">summaries</span>, <span
                    class="font-bold"> key moments</span>,
                  and <span class="font-bold"> chatting with your favorite
                    podcasts</span>.
                </p>

                <p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-bold">
                  Ready to start the conversation?
                </p>
                <div class="mt-10 flex items-center gap-x-6">
                  <a href="#"
                    class="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Try
                    it out</a>
                  <a href="#how-it-works" class="text-sm font-semibold leading-6 text-gray-900">Learn More <span
                      aria-hidden="true">→</span></a>
                </div>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div
                  class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img src="https://static.chatwithpodcast.com/images/huberman-lab.jpeg" alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img src="https://static.chatwithpodcast.com/images/the-diary-of-a-ceo-with-steven-bartlett.jpg"
                      alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <img src="https://static.chatwithpodcast.com/images/hbr-ideacast.jpeg" alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img src="https://static.chatwithpodcast.com/images/fantasy-football-today.jpeg" alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <img src="https://static.chatwithpodcast.com/images/startups-for-the-rest-of-us.png" alt=""
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-emerald-600">revolutionize your podcast experience
                </h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get to the clips and
                  podcasts that matter</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">With our cutting-edge technology, instantly access pivotal
                  clips and dive into the heart of discussions.
                </p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                      <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                        aria-hidden="true" />
                      {{ feature.name }}
                    </dt>
                    {{ ' ' }}
                    <dd class="inline">{{ feature.description }}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first">
              <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432"
                height="1442" />
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works" class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one Platform for Podcast
              Insights</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Our platform sifts the signal from the noise in the podcast
              universe by listening to podcasts for you - getting you the information you need, faster.</p>
          </div>
          <dl
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in howItWorks" :key="feature.name">
              <dt class="font-semibold text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-1 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>


      <div id='pricing' class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base font-semibold leading-7 text-emerald-600">Pricing</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for everyone
            </p>
          </div>
          <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">With a generous free tier, you can
            get started easily and figure out what plan works best for you.</p>
          <div
            class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
              :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
              <div>
                <div class="flex items-center justify-between gap-x-4">
                  <h3 :id="tier.id"
                    :class="[tier.mostPopular ? 'text-emerald-600' : 'text-gray-900', 'text-lg font-semibold leading-8']">
                    {{ tier.name }}</h3>
                  <p v-if="tier.mostPopular"
                    class="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-emerald-600">
                    Most popular</p>
                </div>
                <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
                  <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                    <CheckIcon class="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <a :href="tier.href" :aria-describedby="tier.id"
                :class="[tier.mostPopular ? 'bg-sky-600 text-white shadow-sm hover:bg-sky-500' : 'text-emerald-600 ring-1 ring-inset ring-emerald-200 hover:ring-emerald-300', 'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600']">
                {{ tier.cta }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
              <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                <dt>
                  <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                    <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                    <span class="ml-6 flex h-7 items-center">
                      <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                      <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" class="mt-2 pr-12">
                  <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
