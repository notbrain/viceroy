var gulp     = require('gulp');
var rename   = require('gulp-rename');
var config   = require('../../gulp-config.js');
var del      = require('del');

gulp.task('html-index', function() {
  return gulp.src('client/index.' + config.env + '.html')
    .pipe(rename("index.html"))
    .pipe(gulp.dest('./client'));
});
