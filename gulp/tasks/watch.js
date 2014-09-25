/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('app/less/**', ['less']);
  gulp.watch('app/js/**/*.js', ['compile-js']);
  gulp.watch('app/jslib/**/*.js', ['bower']);
  gulp.watch('app/images/**', ['images']);
  gulp.watch('app/**/*.html', ['markup']);
});
