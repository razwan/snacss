var gulp 			= require('gulp'),
	rtlcss 			= require('rtlcss'),
	postcss 		= require('gulp-postcss'),
	rename 			= require('gulp-rename');

require('es6-promise').polyfill();

gulp.task('styles', function() {
    return gulp.src('./assets/css/src/*.css')
    	.pipe(postcss([
            require('precss')({ /* options */ }),
        	require('postcss-short')({ /* options */ }),
        	require('postcss-clearfix')({ /* options */ }),
        	require('perfectionist')({ /* options */ })
        	// require('cssnano')({ /* options */})
        ]))
        .pipe(gulp.dest('./assets/css'))
        .pipe(postcss([
            require('rtlcss')({ /* options */ })
        ]))
		.pipe(rename("rtl.css"))
        .pipe(gulp.dest('./assets/css'));
});