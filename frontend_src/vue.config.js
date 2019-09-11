const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  configureWebpack: {
    plugins: [new CopyWebpackPlugin([{ from: "static" }])]
  }
};
