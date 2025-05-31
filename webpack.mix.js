const mix = require('laravel-mix');

mix.setPublicPath('WORK');

mix.js('WORK/app.js', 'js')       // Джерело: WORK/app.js -> Компільований файл: WORK/js/app.js
   .sass('WORK/scss/style.scss', 'css')  // Джерело: WORK/scss/style.scss -> Компільований файл: WORK/css/style.css
   .sourceMaps();

   if (mix.inProduction()) {
    mix.version();
} else {
    mix.webpackConfig({
        devServer: {
            hot: true,
            liveReload: true,
            watchFiles: ['WORK/js/**/*.js', 'WORK/scss/**/*.scss', 'WORK/**/*.php'], // шляхи для відслідковування змін
            open: true, // браузер відкриється автоматично
            port: 8080,
        },
    });
}
   // Додаємо кастомні Webpack-настройки через метод .webpackConfig()
   // .webpackConfig({
    /* Тут можна додавати будь-які налаштування Webpack
    module: {
      rules: [
        {
          test: /\.txt$/, // наприклад, завантажувати .txt файли як сирий текст
          use: 'raw-loader'
        }
      ]
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'WORK/js'), // створюємо alias '@' для зручного імпорту
      }
    },

    plugins: [
      // Тут можна додати додаткові плагіни Webpack
    ],

    output: {
      // додаткові налаштування для output, якщо потрібно
    },
  }); 
  */