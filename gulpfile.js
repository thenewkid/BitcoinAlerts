var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('default', [], () => {
    log("Default running");
});

gulp.task("browserfresh", function() {

    browserSync.init({
        proxy: "localhost:8080"
    });

    gulp.watch(paths.css_file_path).on('change', reload);

});

let log = (msg) => {
    console.log(msg);
}

