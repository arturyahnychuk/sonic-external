  
<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
    podcasts: [
        { name: 'All Podcasts', href: '/podcasts/all' },
        { name: 'Featured Podcasts', href: '#' },
        { name: 'Top Podcasts', href: '#' },
        { name: 'Top Episdoes', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '/#pricing' },
        // { name: 'Documentation', href: '#' },
        { name: 'Support', href: 'mailto:support@chatwithpodcast.com' },
        // { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        // { name: 'Jobs', href: '#' },
        // { name: 'Press', href: '#' },
        // { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Contact', href: 'mailto:contact@chatwithpodcast.com' },
        { name: 'Privacy', href: '/legal/privacy' },
        { name: 'Terms', href: '/legal/terms' },
    ],
    social: [
        // {
        //     name: 'Facebook',
        //     href: '#',
        //     icon: defineComponent({
        //         render: () =>
        //             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
        //                 h('path', {
        //                     'fill-rule': 'evenodd',
        //                     d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
        //                     'clip-rule': 'evenodd',
        //                 }),
        //             ]),
        //     }),
        // },
        {
            name: 'Discord',
            href: 'https://discord.gg/fkAanQGp2R',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 127.14 96.36' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/bllchmbrs',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/bllchmbrs',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        // {
        //     name: 'YouTube',
        //     href: '#',
        //     icon: defineComponent({
        //         render: () =>
        //             h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
        //                 h('path', {
        //                     'fill-rule': 'evenodd',
        //                     d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
        //                     'clip-rule': 'evenodd',
        //                 }),
        //             ]),
        //     }),
        // },
    ],
}
</script>

<template>
    <footer class="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <!-- <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Company name" />
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Podcasts</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.podcasts" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{
                                        item.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.support" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{
                                        item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.company" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{
                                        item.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.legal" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{
                                        item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
            <div
                class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
                    <!-- <p class="mt-2 text-sm leading-6 text-gray-600">The latest news, articles, and resources, sent to your
                        inbox weekly.</p> -->
                </div>
                <form class="mt-6 sm:flex sm:max-w-md lg:mt-0">
                    <label for="email-address" class="sr-only">Email address</label>
                    <input type="email" name="email-address" id="email-address" autocomplete="email" required=""
                        class="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
                        placeholder="Enter your email" />
                    <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button type="submit"
                            class="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Subscribe</button>
                    </div>
                </form>
            </div>
            <div class="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                <div class="flex space-x-6 md:order-2">
                    <a v-for="item in navigation.social" :key="item.name" :href="item.href"
                        class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">{{ item.name }}</span>
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">&copy; 2023 Hopkins Digital Ventures,
                    LLC. All rights reserved. </p>
            </div>
        </div>
    </footer>
</template>
