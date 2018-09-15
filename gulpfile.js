const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './src',
}

gulp.task('css', function() {
    return gulp.src('./src/scss/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src([
            './src/scss/main.scss',
            './src/scss/style.scss',
            './src/scss/tree.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
    return gulp.src([
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/tether/dist/js/tether.min.js',
            './node_modules/popper.js/dist/umd/popper.min.js'
        ])
        .pipe(gulp.dest("./src/js"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['./src/scss/*.scss'], ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['css', 'fonts', 'js', 'serve']);