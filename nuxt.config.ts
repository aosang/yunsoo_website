import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui'
  ],
  css: [
    './public/css/main.css'
  ],
  ui: {
    global: false
  },
  experimental: {
    payloadExtraction: false
  },
  ssr: true,
  nitro: {
    preset: 'static',
    routeRules: {
      '/**': { cors: true }
    }
  },
  app: {
    baseURL: '/nuxt',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nuxt/favicon.ico' },
      ]
    }
  },
  vite: {
    server: {
      fs: {
        strict: false
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    // 配置资源基础路径
    base: '/nuxt/'
  }
})