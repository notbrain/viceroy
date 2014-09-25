var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      // include app/ here for source maps usage 
      baseDir: ['build']
    },
    files: [
      // Watch everything in build
      "build/**",
      // Exclude sourcemap files
      "!build/**.map"
    ]
  });
});
