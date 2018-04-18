const mix = require('laravel-mix');

mix
  .disableNotifications()
  .js('resources/js/app.js', 'src/assets/js/app.js')
  .sass('resources/sass/app.scss', 'src/assets/css/app.css')
  .copy('resources/images/', './src/assets/images', true);
