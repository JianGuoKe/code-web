const CracoLessPlugin = require("craco-less");
const isPro = (dev) => dev === "production";
const PUBLIC_PATH = 'https://static.jianguoke.cn/code/';

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  babel: {
    plugins: [
      ["import", { libraryName: 'antd', style: true }]
    ]
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (isPro(env)) {
        webpackConfig.output.publicPath = PUBLIC_PATH;
        webpackConfig.plugins[4].definitions['process.env'].PUBLIC_PATH = JSON.stringify(PUBLIC_PATH)
      }
      webpackConfig.ignoreWarnings = [/Failed to parse source map/];
      return webpackConfig;
    }
  }
};

