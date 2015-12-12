var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
           // 'webpack-dev-server/client?http://localhost:8080',
           // 'webpack/hot/ony-dev-server',
            './src/app.tsx'
        ]
    },
    resolve: {
        root: "src",
        extensions: ['', '.tsx', '.ts', '.js']
    },
    output: {
        filename: './public/[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                loader: 'ts-loader'
            }
        ]
    }

};

