
const gulp = require('gulp')

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
module.exports = () => {
  return gulp.task('watch', () => {
  	gulp.watch('source/src/stylus/**/*.styl', ['stylus'])
  	gulp.watch('source/src/js/**/*.js', ['js'])
  	gulp.watch('source/src/images/**/*.{jpg,png,gif,svg}', ['imagemin'])
  	gulp.watch([
      'source/**/*.html',
      'source/index.html',
      'source/_includes/**/*.html',
      'source/_layouts/**/*.html',
      'source/_posts/**/*'
    ], ['jekyll-rebuild'])
  })
}
