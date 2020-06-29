const gulp = require("gulp");
const browserSync = require("browser-sync");

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("*.js").on("change", browserSync.reload);
  gulp.watch("*.css").on("change", browserSync.reload);
  gulp.watch("index.html").on("change", browserSync.reload);
}

exports.watch = watch;
exports.default = watch;
