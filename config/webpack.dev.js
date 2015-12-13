var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'src');

module.exports = {
    debug: true,
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve('src/index.tsx')
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '..', 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['babel', 'ts'],
            include: APP_DIR
        }]
    },
    resolve: {
        root: [path.resolve('src')],
        extensions: ['', '.tsx', '.ts', '.js']
    }
};

