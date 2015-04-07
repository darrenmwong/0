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
});


gulp.task('vendor', function() {
	gulp.src([
		'bower_components/requirejs/require.js',
		'bower_components/famous/src/core/*.js',
		'bower_components/famous/src/views/*.js'
		])
	.pipe(plugins.concat('vendor.js'))
	.pipe(gulp.dest(javascripts))
	.pipe(plugins.rename({suffix: '.min'}))
	.pipe(plugins.uglify())
	.pipe(gulp.dest(javascripts))
});

gulp.task('default', ['javascripts', 'vendor']);
