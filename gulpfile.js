const gulp = require('gulp');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

function compilaSass(){
    return gulp.src(['./assets/scss/*.scss'])
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
};

function javascript(){
    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js'],['./assets/js/*.js'])
        .pipe(minifyJS())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./assets/js/'))
        .pipe(browserSync.stream());
};

function browser(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
};

function watch(){
    gulp.watch(['./*.html']).on('change', browserSync.reload);
    gulp.watch(['./template/*.html', './template/**/*.html']).on('change', browserSync.reload)
    gulp.watch(['./template-parts/*.html', './template-parts/*/*.html']).on('change', browserSync.reload);
    gulp.watch(['./assets/scss/*.scss', './assets/scss/**/*.scss'], compilaSass);
    gulp.watch('./assets/js/*.js', javascript);
    // gulp.watch('./assets/scss/**/*.scss', 'compilaSass');
};

gulp.task('default', gulp.parallel([compilaSass, javascript, browser,watch]));