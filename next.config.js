const rehypePrism = require(`@mapbox/rehype-prism`);

const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: [`js`, `mdx`],
  target: `serverless`,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg?g|gif)$/i,
      use: [
        {
          loader: `file-loader`,
          options: {
            publicPath: `/_next`,
            name: `static/media/[name].[hash].[ext]`,
          },
        },
      ],
    });
    return config;
  },
});
