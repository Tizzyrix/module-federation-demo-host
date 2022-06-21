const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src')
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {
    context: sourcePath,
    mode: 'development',
    entry: './index.tsx',
    output: {
        path: buildPath,
        clean: true,
        filename: 'bundle.js'

    },
    resolve: {
        extensions: ['.js', '.ts' , '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader','ts-loader'],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'assets/index.html')
        })
    ],
    devServer: {
        port: 3001,
        hot: true,
        compress: true,
    }
}