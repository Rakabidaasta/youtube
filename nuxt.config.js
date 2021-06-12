export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YouTube',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/videogrid.scss',
    '@/assets/smallgridvideos.scss',
    '@/assets/navbar.scss',
    '@/assets/playlist.scss',
    '@/assets/mainnavbar.scss',
    '@/assets/idvideo.scss',
    '@/assets/idplaylist.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/style-resources",
    'bootstrap-vue/nuxt'
  ],

  styleResources: {
    scss: [
      "./assets/*.scss"
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
