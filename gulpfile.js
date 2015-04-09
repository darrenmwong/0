var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');

var images = 'static/images';
var javascripts = 'static/js';
var stylesheets = 'static/css';

var gzip_options = {
	threshold: '1kb',
	gzipOptions: {
		level: 9
	}
};

gulp.task('javascripts', function() {
	gulp.src(['src/js/main.js'])
	.pipe(plugins.concat('main.js'))
	.pipe(gulp.dest(javascripts))
	.pipe(plugins.rename({suffix: '.min'}))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(javascripts))
  .pipe(plugins.notify({ message: "Javascripts minified"}))
  .pipe(plugins.livereload());
});

// gulp.task('css', function() {
// 	gulp.src(['bower_components/famous/dist/famous.css'])
// 	.pipe(plugins.concat('main.css'))
// 	.pipe(gulp.dest(stylesheets))
// 	.pipe(plugins.rename({suffix: '.min'}))
// 	.pipe(plugins.uglify())
// 	.pipe(gulp.dest(stylesheets))
//   .pipe(plugins.notify({ message: "CSS minified"}))
//   .pipe(plugins.livereload());
// });

gulp.task('vendor', function() {
	gulp.src([
		'bower_components/jquery/dist/jquery.js',
		'bower_components/famous/dist/*.js',
		'bower_components/famous/examples/assets/lib/*.js'
		])
	.pipe(plugins.concat('vendor.js'))
	.pipe(gulp.dest(javascripts))
	.pipe(plugins.rename({suffix: '.min'}))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(javascripts))
  .pipe(plugins.notify({ message: "Vendor minified"}))
});

gulp.task('watch', function() {
    plugins.livereload.listen();
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['javascripts']);
});

gulp.task('default', ['javascripts', 'vendor', 'watch']);
