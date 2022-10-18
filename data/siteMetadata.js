const siteMetadata = {
  title: 'Next Parking Log',
  author: 'Xun Ding',
  headerTitle: 'Next Parking Log',
  description: 'A blog of restlessness. Probably will be abandoned soon',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/favicon.svg',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  locale: 'en-US',
  analytics: {
    // // If you want to use an analytics provider you have to add it to the
    // // content security policy in the `next.config.js` file.
    // // supports plausible, simpleAnalytics, umami or googleAnalytics
    // plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // simpleAnalytics: false, // true or false
    // umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    // posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // // Please add your .env file and modify it according to your selection
    // provider: 'buttondown',
  },
  comment: {},
}

module.exports = siteMetadata
