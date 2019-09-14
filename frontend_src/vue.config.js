process.env.VUE_APP_VERSION = require('./package.json').version
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  assetsDir: './assets/',
  configureWebpack: {
    plugins: [new CopyWebpackPlugin([{ from: "static" }])]
  }
};
