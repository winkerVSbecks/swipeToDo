var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
// custom
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('dev', function() {
  // watch for sass changes
  gulp.watch(paths.sass, ['sass']);
  // start a connect server to test app locally
  connect.server({
    root: 'www',
    port: 3000,
    livereload: true
  });
  // Watch HTML and JS for live-reload
  watch({
    glob: ['./www/**/*.html', './www/**/*.js']
  })
    .pipe(connect.reload());
});

gulp.task('default', ['dev']);
