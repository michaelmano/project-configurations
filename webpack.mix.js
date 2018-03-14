let mix = require("laravel-mix");

mix
  .disableNotifications()
  .js("resources/js/app.js", "app/js/app.js")
  .sass("resources/sass/app.scss", "app/css/app.css")
  .copy("resources/images/", `./app/images`, true);
