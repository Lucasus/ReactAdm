var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'src');
var host = (process.env.HOST || 'localhost');
var port = parseInt(process.env.PORT) + 1 || 3001;

module.exports = {
    debug: true,
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
        path.resolve('src/index.tsx')
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, '..', 'public'),
        publicPath: 'http://' + host + ':' + port + '/public/'
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

