export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/vendor/font-awesome-4.7.0/css/font-awesome.min.css',
    // '~assets/css/style.css',
    // SCSS file in the project
    '~assets/sass/style.scss',
  ],

  loading: {
    color: 'orange',
    height: '5px'
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/assets/js/bootstrap.bundle.min.js', ssr: false},
    {src: '~/assets/js/cost-calculator.js', ssr: false},
    {src: '~/plugins/vue-slider-component.js', ssr: false},
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints:{
          login:{
            url:'/login'
          },
          logout:{
            url:'/logout'
          }
        }
      },
    },
    watchLoggedIn: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "http://localhost:8000",
    // browserBaseURL: "http://localhost:8000",
    credentials:true
  },

  router:{
    middleware:['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
