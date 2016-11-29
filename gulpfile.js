var zip = require("gulp-zip");
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task("deploy", function () {
  return gulp.src(["**"])
    .pipe(zip("deploy.zip"))
    .pipe(gulp.dest("./"));
});

const fs = require('fs');

gulp.task('compile', function () {
  gulp.src(['views/*.pug'])
   .pipe(pug())
   .pipe(gulp.dest('./'))
});