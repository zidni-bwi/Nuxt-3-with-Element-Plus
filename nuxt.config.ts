import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt v3 + Element Plus'
        }
    },
    vite: {
        plugins: [
            ElementPlus()
        ]
    },
    build: {
        transpile: [
            'element-plus/es'
        ]
    }
})