const path = require('path')

module.exports = {
    entry: {
        login: ['babel-polyfill', './src/login.js'],
        movies: ['babel-polyfill', './src/movies.js'],
        signup: ['babel-polyfill', './src/signup.js'],
        show_movie: ['babel-polyfill', './src/show-movie.js'],
        new_movie: ['babel-polyfill', './src/new_movie.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}
