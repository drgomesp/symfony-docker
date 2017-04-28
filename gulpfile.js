'use strict';

const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const BrowserSync = require('browser-sync');

const browserSync = BrowserSync.create();

const paths = {
    clean: [],
    templates: [],
    styles: {
        sources: [
            'node_modules/font-awesome/scss/*.scss',
            'node_modules/bootstrap/scss/*.scss',
            'web/scss/**/*.scss',
        ],
        concat: 'main.min.css',
        dest: 'web/css'
    },
    scripts: {
        sources: [
            'node_modules/tether/dist/js/tether.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
        ],
        concat: 'main.min.js',
        dest: 'web/js'
    }
};

function clean() {
    return del(paths.clean);
}

function styles() {
    return gulp.src(paths.styles.sources)
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat(paths.styles.concat))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src(paths.scripts.sources)
        .pipe(uglify())
        .pipe(concat(paths.scripts.concat))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        proxy: 'symfony-docker.dev:81',
        open: false,
    });
}

function watch() {
    gulp.watch(paths.styles.sources, styles);
    gulp.watch(paths.scripts.sources, scripts);
    gulp.watch(paths.templates).on('change', browserSync.reload);
}

const build = gulp.series(
    clean,
    gulp.parallel(
        styles,
        scripts
    )
);

const dev = gulp.series(
    build,
    gulp.parallel(
        serve,
        watch
    )
);

gulp.task('build', build);
gulp.task('default', dev);
