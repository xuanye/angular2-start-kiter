/**
 * @author: xuanye
 */
var path = require('path')
var config = require('./config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
var isProd = process.env.NODE_ENV === 'production';
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills:'./src/polyfills.ts',
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts',".js",".json"],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'SRC': path.resolve(__dirname, '../src'),
            'ASSETS': path.resolve(__dirname, '../src/assets'),
            "LIBS": path.resolve(__dirname, '../src/app/libs')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ].concat(isProd ? [] :'@angularclass/hmr-loader?pretty='+!isProd+'&prod='+isProd),
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(html)$/,
                loader: 'raw-loader',
                include: [utils.root('app')]
            },
            {
                test: /\.scss$/,
                include: [utils.root('app')],
                loaders: ["raw-loader","sass-loader"]
            }
        ],
        node: {
            global: 'window',
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    }
}