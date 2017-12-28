var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');

var src = path.join(__dirname, 'less');
var dist = path.join(__dirname, 'dist');
/*var demoDist = path.join(__dirname, 'dist');*/
function swallowError(error) {
    // If you want details of the error in the console
  console.error(error.toString())

  this.emit('end')
}

gulp.task("default", ["less"]);

gulp.task("less", function (cb) {
    return  gulp.src(path.join(src, "init.less"))
                .pipe(less({
                    paths: [ src ]
                }))
                .on("error", swallowError)
                .pipe(gulp.dest(dist));

});


// watch 
gulp.task("watch", function () {
    var watcher = gulp.watch(path.join(src, "**/*.less"), ["less"]);
    watcher.on("change", function (event) {
        console.log("File change running task")
    });
    return watcher;
}) 
