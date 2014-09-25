var gulp = require('gulp');

gulp.task('build', ['less', 'compile-js', 'bower', 'images', 'markup']);
