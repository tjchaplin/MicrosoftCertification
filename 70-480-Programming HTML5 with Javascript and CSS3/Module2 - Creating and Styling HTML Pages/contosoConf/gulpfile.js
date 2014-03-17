var gulp = require('gulp'),
	path = require('path'),
	livereload = require('tiny-lr')();
	connect = require('connect-livereload'),
    express = require('express'),
    watch = require('gulp-watch');

function startExpress() {
  var app = express();
  app.use(connect());
  app.use(express.static(path.join(__dirname, 'public'),{index:"index.htm"}));
  app.listen(3000);
};

function startLivereload() {
  livereload.listen(35729);
};

function notifyLivereload(event) {
  var fileName = path.relative(__dirname, event.path);
 
  livereload.changed({
    body: {
      files: [fileName]
    }
  });
  
};

gulp.task('default', function() {
	startExpress();
	startLivereload();
	gulp.watch(['**/*.*','!node_modules'], notifyLivereload);
});