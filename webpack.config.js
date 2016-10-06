/**
 * Created by jeffersonmourak on 9/4/16.
 */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'dev');

var config = {
    entry: ['babel-polyfill', APP_DIR + '/inert.js'],
    output: {
        path: BUILD_DIR,
        filename: 'inert.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    }
};

module.exports = config;
