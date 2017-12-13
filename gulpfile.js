var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');

var src = path.join(__dirname, 'less');
var dist = path.join(__dirname, 'dist');

gulp.task("default", ["less"]);

gulp.task("less", function () {
    return  gulp.src(path.join(src, "init.less"))
                .pipe(less({
                    paths: [ src ]
                }))
                .pipe(gulp.dest(dist));
});