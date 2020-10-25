module.exports = {
    siteName: 'DailyStyle',
    siteDescription: "DailyStyle | Looks | Fashion | Moda | Lifestyle",
    siteUrl: "https://dailystylelooks.com",
    icon: {
        favicon: "./src/assets/icons/logoBlanco.png", // 96x96
        touchicon: "./src/assets/icons/logoBlanco.png" // 180x180
    },

    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {},
                presetEnvConfig: {},
                shouldPurge: true,
                shouldImport: true,
                shouldTimeTravel: true,
                shouldPurgeUnusedKeyframes: true,
            }
        },
        {
            use: 'gridsome-source-static-meta',
            options: {
                path: 'settings/*.json'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Author',
                path: './content/author/*.md'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/blog/**/*.md',
                refs: {
                    author: 'Author',
                    tags: {
                        typeName: 'Tag',
                        create: true
                    },
                    category: {
                        typeName: 'Category',
                        create: true
                    }
                }
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Index',
                path: './content/index/**/*.md',
                refs: {
                    author: 'Author',
                    tags: {
                        typeName: 'Tag',
                        create: true
                    },
                    category: {
                        typeName: 'Category',
                        create: true
                    },
                }
            }
        }
    ],
    templates: {
        Blog: [{
            path: '/blog/:title',
            component: './src/templates/BlogEntry.vue'
        }],
        Category: [{
            path: '/category/:title',
            component: './src/templates/Category.vue'
        }],
        Tag: [{
            path: '/tag/:title',
            component: './src/templates/Tag.vue'
        }]
    },
    chainWebpack: config => {
        config.resolve.alias.set('@modules', '@/resources/js/modules');
        config.resolve.alias.set('@utilities', '@/resources/js/utilities');
        config.resolve.alias.set('@images', '@/assets/img')
        config.resolve.alias.set('@icons', '@/assets/img/icons')
        config.resolve.alias.set('@iconLooks', '@/assets/icons/icons')
        config.resolve.alias.set('@media', '@/assets/media')
    }
}
