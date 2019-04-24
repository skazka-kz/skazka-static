module.exports = {
  siteMetadata: {
    title: `Сказка - Дистрибьютор по северу Казахстана`,
    description: `Сказка - оптовый дистрибьютор в городах Кокшетау, Петропавл, Костанай и областях. Мы специализируемся в кондитерских изделиях лучших производителей Казахстана, России и Украины.`,
    author: `@slavabez`,
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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-138945667-1`,
      },
    },
  ],
};
