var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    cssnano = require('gulp-cssnano'),
    fileinclude = require('gulp-file-include'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    order = require("gulp-order"),
    source = require('vinyl-source-stream'),
    plugins = gulpLoadPlugins();

function onError(error){
  plugins.notify().write(error.message);
  this.emit('end'); // Keep gulp from hanging on this task
}

// Build browserify and jsx
gulp.task('scripts', function() {
  browserify({
    entries: ['./src/js/index.js'],
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify.configure({
    presets : ["es2015"]
  }))
  .bundle()
  .on('error', onError)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist/scripts'))
  .pipe(plugins.notify('Scripts Gulped'));
});

// Copies over fonts to dist
gulp.task('fonts', function() {
  return gulp.src([
    './src/fonts/*'
  ])
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', function() {
  return gulp.src([
    './src/img/**/*'
  ])
  .pipe(gulp.dest('dist/img'));
});

gulp.task('vendor', function() {
  gulp.src([
      //add sources here
  ])
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('dist/scripts'));
});

// Gulp include partial files
gulp.task('fileinclude', function() {
  gulp.src(['./src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

// Sass Styles . styles is only one level deep. CSS will be library assets
// that will compile first
gulp.task('styles', function() {
  gulp.src(['./src/css/main.scss'])
  .pipe(plugins.sass({
    outputStyle: 'expanded' // nested, expanded, compact, compressed
  }).on('error', onError))
  .pipe(plugins.autoprefixer())
  .pipe(plugins.concat('style.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('dist/styles'))
  .pipe(plugins.notify('Styles Gulped'));
});


// Only used for live reload. Looks for compiled file ./dist
// change in liveConnect task.
gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload())
    .pipe(plugins.notify('HTML Reloaded'));
});

gulp.task('serve', function() {
  connect.server({
    root: './'
  });
  gulp.watch('./src/css/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch(['./src/*.html', './src/partials/*.html'], ['fileinclude']);
});

gulp.task('liveConnect', function() {
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  });
  gulp.watch('./src/css/**/*.scss', ['styles']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch(['./src/*.html', './src/partials/*.html'], ['fileinclude', 'html']);
  gulp.watch(['dist/**/*.js', 'dist/**/*.css'], ['html']); //Needs to watch when its compiled

});

gulp.task('default',
  [
    'fileinclude',
    'fonts',
    'images',
    'scripts',
    'styles',
    'serve'
  ]);
gulp.task('live',
  [
    'liveConnect',
    'fileinclude',
    'fonts',
    'images',
    'styles',
    'scripts'
  ]);

