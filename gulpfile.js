// Import Gulp
var gulp = require('gulp');

// Import Plugins
var sass = require('gulp-sass');

//sass.compiler = require('node-sass');

gulp.task('default', ['styles']);

gulp.task('ConvertSass', function() {
    return gulp.src('./src/mystyle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets/style.css'));
});

exports.build = gulp.series(ConvertSass);