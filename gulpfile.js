'use strict';

// Load Plugins
const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-better-rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-html-minifier');
const mustache = require('gulp-mustache');
const version = require('gulp-version-number');
const sitemap = require('gulp-sitemap');
const pretty = require('gulp-pretty-data');

// Mustache
function html_render() {
    return gulp.src("src/html/*.html")
        .pipe(mustache('./src/html/variables.json', {}, {})) // mustache(view, options, partials)
        .pipe(version({
            'value': '%MDS%',
            'append': {
                'key': 'v',
                'to': ['css', 'js', 'jpg', 'png']
            }
        }))
        .pipe(gulp.dest("./assets/html"));
}

// HTML
function html_minifier() {
    return gulp.src('src/page/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest('./public'));
}

// Styles
function styles() {
    return gulp.src(['src/scss/theme.scss'])
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass({
            includePaths: [
                './node_modules/bootstrap/scss/',
                './node_modules/@fortawesome/fontawesome-free/scss/'
            ]
        }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream({ match: 'src/scss/**/*.scss' }))
        // .pipe(browserSync.stream());
}

function styles_login() {
    return gulp.src('src/scss/login.scss')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass({
            includePaths: [
                './node_modules/bootstrap/scss/',
                './node_modules/@fortawesome/'
            ]
        }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(browserSync.stream({ match: 'src/scss/**/*.scss' }))
        .pipe(gulp.dest('./assets'));
}

// Scripts
function scripts() {
    return gulp.src(['src/js/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(rollup({ plugins: [resolve(), commonjs()] }, 'umd'))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('theme.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(browserSync.stream({ match: 'src/js/**/*.js' }))
        .pipe(gulp.dest('./public'));
}

// Images
function images() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(sourcemaps.write('./'))
        .pipe(browserSync.stream({ match: 'src/images/*' }))
        .pipe(gulp.dest('./public/images'));
}

// Fonts
function fonts() {
    return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*', 'src/fonts/*'])
        .pipe(sourcemaps.write('./'))
        .pipe(browserSync.stream({ match: 'node_modules/@fortawesome/fontawesome-free/webfonts/*' }))
        .pipe(gulp.dest('./public/fonts'));
}

// Default task
gulp.task('default', gulp.series(html_minifier, styles, scripts, images, fonts));

// Watch task
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './public',
            index: 'index.html',
            serveStaticOptions: {
                extensions: ['html']
            }
        }
    });

    // gulp.watch(['src/*.html', 'src/variables.json'], html_render).on('change', browserSync.reload);
    // gulp.watch('src/templates/*.mustache', html_render).on('change', browserSync.reload);
    gulp.watch('src/page/*.html', html_minifier).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', scripts).on('change', browserSync.reload);
    gulp.watch('src/scss/**/*.scss', styles).on('change', browserSync.reload);
    // gulp.watch('src/scss/**/*.scss', styles_login).on('change', browserSync.reload);
    gulp.watch('src/images/*', images).on('change', browserSync.reload);
    gulp.watch('node_modules/@fortawesome/fontawesome-free/webfonts/*', fonts).on('change', browserSync.reload);
});

gulp.task('dev', function() {
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/scss/**/*.scss', styles);
    // gulp.watch('src/scss/**/*.scss', styles_login);
    gulp.watch('src/images/*', images);
    gulp.watch('node_modules/@fortawesome/fontawesome-free/webfonts/*', fonts);
});
