const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";
const assetPrefix = "dist/";

// 使用了withLess和withCss之后, 所有css/less均为全局作用域
module.exports = withPlugins([[withCSS], [withLess]], {
  // Use the CDN in production and localhost for development.
  assetPrefix,
  webpack: function (config) {
    config.module.rules.push(
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            fallback: require.resolve("file-loader"),
            limit: 8192,
            esModule: false,
            publicPath: `${assetPrefix}_next/static/chunks/fonts/`,
            outputPath: `static/chunks/fonts/`,
            name: "[name]-[hash].[ext]",
          },
        },
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico|webp|jp2)$/,
        use: {
          loader: "url-loader",
          options: {
            fallback: require.resolve("file-loader"),
            limit: 8192,
            esModule: false,
            publicPath: `${assetPrefix}_next/static/images/`,
            outputPath: `static/images/`,
            name: "[name]-[hash].[ext]",
          },
        },
      }
    );
    return config;
  },
  env: {
    ASSET_PREFIX: "dist/",
  },
});
