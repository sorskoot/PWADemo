const path = require('path'),
      gulp = require("gulp"),
      sourcemaps = require("gulp-sourcemaps"),
      sass = require('gulp-sass'),
      webpackStream = require('webpack-stream'),
      webpack = require('webpack'),
      jshint = require('gulp-jshint'),
      named = require('vinyl-named'),
      fs = require('fs'),
      zip = require("gulp-zip");

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task("deploy", function () {
  return gulp.src(["**"])
    .pipe(zip("deploy.zip"))
    .pipe(gulp.dest("./"));
});


gulp.task('copy-images', function () {
  return gulp.src(['./sass/*.png', './sass/*.ttf', './sass/*.woff'])
         .pipe(gulp.dest('./public/stylesheets'));
})

function doWebpack(minify) {
  var plugs = [],
      devTool;

  if (minify) {
    plugs.push(new webpack.optimize.UglifyJsPlugin({ minimize: true, mangle: false }));
     } 
  else {
    devTool = 'source-map';
  }
  plugs.push( new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
)

  return webpackStream(
      {
        module: {
          loaders: [
              {
                loader: 'babel',
                // query: {
                //   presets: ['es2015']
                // },
                resolve: {
                  root: path.join(__dirname),
                  fallback: path.join(__dirname, 'node_modules'),
                  modulesDirectories: ['node_modules'],
                  extensions: ['', '.json', '.js', '.less', '.png', '.jpg', '.jpeg', '.gif']
                }
              },
          ]
        },
        devtool: devTool,
        output: {
          filename: 'index.js',
        },
        plugins: plugs
      });
}

gulp.task('js', function () {
  return gulp.src("src/index.js")
  .pipe(named())
  .pipe(doWebpack())
  .pipe(gulp.dest("public/scripts"));
});



gulp.task("compile", ['copy-images', 'sass', 'js']);
