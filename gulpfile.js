var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
let jsdoc = require('gulp-jsdoc3');

gulp.task('doc', function (cb) {
    gulp.src(['./src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});
