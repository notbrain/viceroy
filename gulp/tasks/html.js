var gulp       = require('gulp');
var config     = require('../../gulp-config.js');

gulp.task('html', ['html-index'], function() {
  return gulp.src(config.src.markup)
  .pipe(gulp.dest(config.dest));
});
