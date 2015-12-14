var babel = require('gulp-babel');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sass = require ('gulp-sass');
var browserify = require('browserify');
var babelify = require('babelify');


gulp.task('default', ['sass', 'es6-react-transform', 'browserify', 'watch'], function () {

});

gulp.task('es6-react-transform', function () {
  return gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist/js'))
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['es6-react-transform', 'browserify']);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/dist/css/'))
});

gulp.task('browserify', function() {
  return browserify('js/main.js', { debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('Bundle.js'))
    .pipe(gulp.dest('public/dist/js/'));
});
