var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');

gulp.task('default', function() {
    return gulp.src('src/code/app.js')
        .pipe(gulpWebpack({
            output: {
                filename: 'all.js'
            },
            resolve: {
                // Add `.ts` and `.tsx` as a resolvable extension.
                root: "src/code",
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
            },
            resolveLoader: {
                modulesDirectories: [
                    __dirname + '/node_modules'
                ]
            },
            externals: {
                // require("jquery") is external and available
                //  on the global var jQuery
                "jquery": "jQuery"
            },
            module: {
                loaders: [
                    // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                    { test: /\.tsx?$/, loader: 'ts-loader' }
                ]
            }
        }))
        .pipe(gulp.dest('dist/'));
});