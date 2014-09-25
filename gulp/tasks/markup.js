var gulp = require('gulp');

gulp.task('markup', function() {
  return gulp.src([
    'app/index.html',
    'app/**/*.html'
  ])
  .pipe(gulp.dest('build'));
});
