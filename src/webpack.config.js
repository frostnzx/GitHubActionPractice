const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/app.js', // Adjust this to your actual entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'production', // or 'development' based on your needs
};;
