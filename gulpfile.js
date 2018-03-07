var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    csso          = require('gulp-csso'),
    imagemin      = require('gulp-imagemin');


// HTML

gulp.task('htmls', function () {
    gulp.src(['*.html'])
        .pipe(connect.reload());
});

// SCSS

gulp.task('styles', function() {
    return gulp.src(['css/scss/main.scss'] )
        .pipe(plumber())
        .pipe(sass())
        //.pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
        // .pipe(minifyCSS({keepBreaks: true}))
        .pipe(csso())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});



 // JS concat
gulp.task('js', function() {
    gulp.src([
        'js/partials/jquery-2.0.0.min.js',
        'js/partials/bootstrap.min.js',
        'js/partials/mobile-detect.min.js',
        'js/partials/jquery.easing.min.js',
        'js/partials/jquery.fadethis.min.js',
        'js/partials/jquery.fancybox.js',
        'js/partials/jquery.maskedinput.min.js',
        'js/partials/jquery.scrollbar.js',
        'js/partials/jquery.pushy.min.js',
        'js/partials/pickmeup.js',
        'js/partials/map.js'
        // 'js/partials/validation.js',
        // 'js/partials/catalog.js'
        // 'js/partials/jquery.fadethis.min.js',
        // 'js/partials/jquery.filterizr.js',
        // 'js/partials/jquery.uploadfile.js',
        // 'js/partials/jquery.googlemap.js',
        // 'js/partials/responsiveslides.min.js',
        // 'js/partials/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));

});
    // Css concat
gulp.task('css', function() {
// gulp.src('css/*.css')
    gulp.src([
        'css/partials/bootstrap.min.css',
        'css/partials/jquery.fancybox.css',
        'css/partials/jquery.scrollbar.css',
        'css/partials/pickmeup.css',
        'css/partials/pushy.css'
    ])


        .pipe(concat('partials.min.css'))
    // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));

});

// WATCH

var paths = {
    htmls:          ['*.html'],
    styles:         'css/scss/**/*.scss'
};


gulp.task('watch', function(cb) {
    autowatch(gulp, paths);
    return cb();
});

// IMAGE

gulp.task('images', function() {
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});

// LIVERELOAD 

gulp.task('connect', function() {
    connect.server({
        port: '8000',
        livereload: true
    });
});

// DEFAULT

gulp.task('default',  [
    'connect',
    'styles',
    'watch'
]);