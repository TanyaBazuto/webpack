// const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude : /node_modules/, 
                loader: 'babel-loader'
            },
    //         {
    //         test: /\.html$/,
    //         use: [
    //             {
    //             loader: 'html-loader',
    //             },
    //         ],
    //         },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                // filename: './index.html'
            }
        ),
        new MiniCssExtractPlugin(
            // {
            //     filename: '[name].css'
            // }
        )
    ]
}