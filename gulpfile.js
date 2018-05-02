const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Move index.html Files to dist/
gulp.task('index', function() {
    return gulp.src(['src/index.html'])
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

// Move CSS Files to dist/css
gulp.task('css', function() {
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Move JS Files to dist/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js', 'src/js/app.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Move Fonts Files to dist/fonts
gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

// Move img Files to dist/img
gulp.task('img', function() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./dist"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move Fonts to dist/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Move Font Awesome CSS to dist/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('dist/css'))
})

gulp.task('default', ['js','serve', 'fa', 'fonts', 'index', 'img']);