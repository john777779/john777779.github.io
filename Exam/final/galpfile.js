'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    spritesmith = require('gulp.spritesmith');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        style_ie:'src/ie_style/ie.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        sprite: 'src/img/sprite/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        style_ie:'src/ie_style/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        sprite: 'src/img/sprite/*.*'
    },
    clean: './build'
};
gulp.task('sprite:build', function() {
    var spriteData =
        gulp.src(path.src.sprite)
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }));
    spriteData.img.pipe(gulp.dest(path.build.img));
});
    gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));

});
gulp.task('style_ie:build', function () {
    gulp.src(path.src.style_ie)
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));

});
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer({browsers:['> 0%']}))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css));
});
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));

});
gulp.task('build', [
    'html:build',
    'js:build',
    'image:build',
    'style:build',
    'style_ie:build',
    'fonts:build',
    'sprite:build'
]);
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.style_ie], function(event, cb) {
        gulp.start('style_ie:build');
    });
    watch([path.watch.sprite], function(event, cb) {
        gulp.start('sprite:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});
gulp.task('default', ['build', 'watch']);