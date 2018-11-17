var gulp = require('gulp');

var gutil = require('gulp-util');
gulp.task('log',function(){
    gutil.log('==my first log==');
});
var sass = require('gulp-sass');


gulp.task('sass',function(){
    gulp.src('sass/style.scss')
    .pipe(sass({style:'expanded'}))
    .on('error', gutil.log)
    .pipe(gulp.dest('styles'))
});



// gulp.task('sass', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'))
// });

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});