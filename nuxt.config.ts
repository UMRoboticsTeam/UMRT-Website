// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // ssr: false, // only client side rendering (static sites)

  css: [
    './assets/styles.css'
],  // imports in here so that it doesnt blink when refreshing
  // script: [
  //   { hid: "Bootstrap", src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', defer=true},
  //   { hid: "SimpleLightbox", src: 'https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js', defer=true},
  // ]

  app: {
    head: {
      // link: [
      //   { rel: 'stylesheet', href: './assets/styles.css' }
      // ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' }
      ],
    },
  },
})



// to build static:
//    npm run generate