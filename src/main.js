// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

import '~/resources/scss/main.scss'

require("typeface-open-sans")

export default function (Vue, {router, head, isClient}) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    // Add attributes to HTML tag
    head.htmlAttrs = {lang: 'en', class: 'min-h-full antialiased'}

    // Add attributes to BODY tag
    head.bodyAttrs = {class: 'text-purple-900 leading-normal text-lg'}
    /*Slide Init */
    Vue.use(VueGlide)
    /*Google font-family*/
    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap"
    })
    // Add a meta tag
    head.meta.push(
        {
            name: 'description',
            content: 'My blog will give you an idea of ​​my daily fashion adventures. It is also a way to share some of my favorite things in life, fashion, inspiration, beauty tips and style.'
        },
        {property: 'language', content: 'en-ES'},
        {property: 'og:title', content: "DailyStyle | Looks | Fashion | Moda | Lifestyle"},
        {property: 'og:site_name', content: 'dailystylelooks'},
        {property: 'og:url', content: 'https://dailystylelooks.com/'},
        {property: 'og:type', content: 'website'},
        {
            property: 'og:image',
            content: 'https://res.cloudinary.com/daiilystylee/image/upload/v1589216463/logoNegro_qwvizr.png'
        },
        {name: 'robots', content: 'index,follow'},
        {
            property: 'twitter:description',
            content: 'My blog will give you an idea of ​​my daily fashion adventures. It is also a way to share some of my favorite things in life, fashion, inspiration, beauty tips and style.'
        },
        {property: 'twitter:title', content: "DailyStyle | Looks | Fashion | Moda | Lifestyle"},
        {property: 'twitter:creator', content: 'dailystylelooks'},
        {property: 'twitter:site', content: 'https://dailystylelooks.com/'},
        {property: 'twitter:type', content: 'website'},
        {
            property: 'twitter:image',
            content: 'https://res.cloudinary.com/daiilystylee/image/upload/v1589216463/logoNegro_qwvizr.png'
        },
    )
}
