
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    minifycss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify  = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat  = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

/*// HTML处理
gulp.task('html', function() {
    var htmlSrc = 'src/*.html',
        htmlDst = 'dist/',
        options = {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }

    gulp.src(htmlSrc)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(htmlDst))
});

// 样式处理
gulp.task('css', function () {
    var cssSrc = 'src/less/*.less',
        cssDst = 'dist/css';

    gulp.src(cssSrc)
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst));
});


// js处理
gulp.task('js', function () {
    var jsSrc = 'src/js/*.js',
        jsDst = 'dist/js';

    gulp.src(jsSrc)
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});


// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', function(){
    gulp.start('html','css','js');
});
*/

gulp.task('watch', function () {
  gulp.watch(['src/*.html'], ['html']);

  gulp.watch(['src/less/*.less'], ['less']);
});

gulp.task('connect', function () {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload())
});

gulp.task('default', ['connect', 'watch']);
