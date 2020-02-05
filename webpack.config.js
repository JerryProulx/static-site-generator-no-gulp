var path = require('path');


exports.webpackconfig = {
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, '.serve/js'),
        filename: 'script.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
        }]
    }
}