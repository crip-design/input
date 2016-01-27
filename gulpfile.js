var gulp = require('gulp'),
    crip = require('cripweb');

crip.sass(
    './src/sass/crip-input.scss',
    './src/sass/**/*.scss',
    'compile-sass',
    false,
    './build'
);

crip.scriptsConfig({
    dir: 'src/js',
    dest: 'build'
});

crip.scripts(
    'app.js',
    'crip-input',
    'compile-app'
);

crip.scripts([
        'angular.js',
        '*.angular.js'
    ],
    'crip-input.angular',
    'compile-angular'
);

gulp.task('default', function () {
    crip.gulp.start('crip-default'); // run all required task
    crip.watch();
});
