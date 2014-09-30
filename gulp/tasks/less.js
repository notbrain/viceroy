var gulp         = require('gulp');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');

gulp.task('less', function () {
  return gulp.src('app/less/master.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('../maps'))
    .on('error', handleErrors)
    .pipe(gulp.dest('build/css'));
});
