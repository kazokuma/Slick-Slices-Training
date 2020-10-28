import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Washington, DC',
    twitter: '@KazushigeOkuma',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ipg92o71',
        dataset: 'develop',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
