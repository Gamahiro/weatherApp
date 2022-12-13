const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Weather App',
          favicon: './src/favicon.ico',
        }),
      ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/weatherApp/"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }, 
          {
            test: /\.(png|jpg|jpeg|gif|ico)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        ],
      },
      optimization: {
        runtimeChunk: 'single',
      },
};