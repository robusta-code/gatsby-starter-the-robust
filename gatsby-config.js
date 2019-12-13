module.exports = {
    siteMetadata: {
        title: `Robusta Code`,
        description: `Thinking, Coding, Training`,
        author: `Nicolas Zozol`,
    },
    plugins: [
        /* pretty standard, maybe don't need sass plugin*/
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-sass',
        'gatsby-plugin-catch-links',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content/blog`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                "excerpt_separator": `---`,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                //jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
}
