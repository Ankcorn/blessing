module.exports = {
  siteMetadata: {
    title: `Blessingz as a Service`,
    description: `You never know when you will need a blessing. Now with our premium blessingz service you will never worry about this again`,
    author: `@gillkyle`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
