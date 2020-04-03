module.exports = {
  siteMetadata: {
    title: ` Hello World!`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      }
    },
    // {
    //   resolve: `gatsby-source-cosmicjs`,
    //   options: {
    //     bucketSlug: `my-portfolio-site`, // Get this value in Bucket > Settings
    //     objectTypes: [`pages`],
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem', 
      options: { 
        name: `src`,
        path: `${__dirname}/src/`,
      }, 
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
      `gatsby-transformer-remark`,

          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#6b37bf`,
              theme_color: `#6b37bf`,
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: `standalone`,
              icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
    ],
  }
