var gulp = require('gulp'),
    log = require('gulp-util').log,
    rename = require('gulp-rename'),
    webpack = require('gulp-webpack'),
    connect = require('gulp-connect'),
    webpackConfig = require('./webpack.config.js')

var config = {
  watch: './src/**/**/*.*',
  server: {
    port: '8000',
    path: './dist'
  },
  html: {
    src: './src/index.html',
    destination: 'dist/'
  },
  js: {
    src: './src/js/**/**',
    destination: 'dist/js'
  },
  img: {
    src: './src/img/**',
    destination: 'dist/img'
  }
};

gulp.task("connect",function(){
  connect.server({
    port:config.server.port,
    livereload:true,
    root:config.server.path});
});

gulp.task('html', function() {
  gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.destination))
    .pipe(connect.reload());
})

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('images', function () {
  gulp.src(config.img.src)
    .pipe(gulp.dest(config.img.destination))
});

gulp.task('watch', function () {
  log('Watching file');
  gulp.watch(config.watch, ['build']);
});

gulp.task('build', ['html','scripts','images']);
gulp.task('default',['build','connect','watch']);
