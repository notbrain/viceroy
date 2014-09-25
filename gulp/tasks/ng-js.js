var gulp         = require('gulp');
var concat       = require('gulp-concat');

gulp.task('compile-js', function() {
  
  return gulp.src([
      'app/js/app.js',
      'app/js/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/js'))
})