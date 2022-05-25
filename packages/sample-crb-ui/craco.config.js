const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function () {
  return {
    webpack: {
      plugins: [new NodePolyfillPlugin()],
    },
  };
};
