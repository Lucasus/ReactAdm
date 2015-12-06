var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');

gulp.task('default', function () {
    return gulp.src('src/index.tsx')
        .pipe(gulpWebpack({
            output: {
                filename: 'all.js'
            },
            resolve: {
                root: "src",
                extensions: ['', '.tsx', '.ts', '.js']
            },
            resolveLoader: {
                modulesDirectories: [
                    __dirname + '/node_modules'
                ]
            },
            externals: {
                react: "React"
            },
            module: {
                loaders: [
                    {
                        test: /\.tsx?$/,
                        loader: 'ts-loader'
                    }
                ]
            }
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.tsx', ["default"]);
});