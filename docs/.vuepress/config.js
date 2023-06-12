import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { containerPlugin } from '@vuepress/plugin-container'
import { fathomAnalyticsPlugin } from '@starzkg/vuepress-plugin-fathom-analytics'

const hostname = 'startify-docs.develogix.at'
const basePath = "/"



export default defineUserConfig({
    head:[
        ['script', {}, `
           var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://cdn.usefathom.com/script.js";
        hm.dataset.spa = "auto";
        hm.dataset.site= "RYEFFWDC"
        hm.defer = true;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
        })();
        `],
        ['meta', { name: 'twitter:image', content: `https://${ hostname }${ basePath }images/startify.png` }],
        ['link', { rel: 'icon', href: `https://${ hostname }${ basePath }images/logo.svg` }],
    ],
    lang: 'en-US',
    title: 'Filament Startify',
    description: 'Starter Kit for Filament based on Laravel Breeze with PasskeyModel support.\n' +
        'Includes 2FA, Laravel Sanctum API Tokens inside a basic user menu out of the box. \n',
    base: basePath,


    theme: defaultTheme({
        hostname,
        base: '/',
        repo: 'https://github.com/develogix-packages/filament-startify-docs',
        repoLabel: 'GitHub',
        docsRepo: 'https://github.com/develogix-packages/filament-startify-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        contributors: false,
        editLink: false,

        navbar: [
            '/index.md',
            '/getting-started/index.md',
        ],

        sidebarDepth: 1,

        sidebar: [
            {
                text: 'Getting Started',
                children: [
                    '/getting-started/index.md',
                    '/getting-started/publish-config.md',
                    '/getting-started/base-setup.md',
                ]
            },
            {
                text: "Features",
                children:[
                    {
                        text: 'Auth-Handler',
                        collapsible: true,
                        children: [
                            '/features/auth-handler/routing.md',
                            '/features/auth-handler/enable-registration.md',
                            '/features/auth-handler/email-verification.md',
                            '/features/auth-handler/password-rules.md',
                            '/features/auth-handler/components.md',
                            '/features/auth-handler/configuration.md',
                            '/features/auth-handler/extras.md',
                        ]
                    },
                    '/features/two-factor/usage.md',
                    {
                        text: 'Passkey Auth',
                        collapsible: true,
                        children: [
                            '/features/passkey/usage.md',
                            '/features/passkey/requirements.md',
                            '/features/passkey/migrations.md',
                            '/features/passkey/setup.md',
                            '/features/passkey/register-link.md',
                            '/features/passkey/config.md',
                        ]
                    },
                    '/features/lock-screen/usage.md',
                    '/features/browser-session/usage.md',
                    {
                        text: 'User Profile',
                        collapsible: true,
                        children: [
                            '/features/profile/profile-page.md',
                            '/features/profile/profile-picture.md',
                        ]
                    },
                    '/features/sanctum/usage.md',
                    '/features/spotlight/usage.md',
                    '/features/drafts/usage.md',
                    '/features/resource-lock/usage.md',
                    '/features/toggle-icon-column/usage.md',

                ]
            },
            {
                text: 'Misc',
                children: [
                    '/common/testing.md',
                    '/common/CHANGELOG.md',
                ]
            },
            {
                text: 'License',
                link: '/license.md'
            },
            {
                text: 'Issues',
                link: '/issues.md'
            }
        ]
    }),

    plugins: [
        containerPlugin({
            type: 'tip'
        }),
    ]
})
