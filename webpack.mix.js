const { mix } = require('laravel-mix');

mix.disableNotifications();

mix.setPublicPath('resources/build');

mix.js('resources/js/app.js', 'assets/js')
   .sass('resources/sass/app.scss', 'assets/css');
