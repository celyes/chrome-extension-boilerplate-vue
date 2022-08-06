let mix = require('laravel-mix')
let path = require('path')

mix.setPublicPath('./')
mix.alias({
    '@': path.join(__dirname, 'src')
});
// compile css files
mix.css('src/assets/css/style.css', 'dist/assets/css')
    .css('src/assets/css/popup.css', 'dist/assets/css')

// compile javascript files
mix.js('src/app.js', 'dist')
    .js('src/popup.js', 'dist')
    .js('src/background.js', 'dist')
    .js('src/content.js', 'dist')
    .vue()

// copy static files,. views and  
mix.copy('src/views/', 'dist/views/')
    .copy('src/manifest.json', 'dist/')
    // .copy('src/assets/img/', 'dist/assets/img') // uncomment when you add images
    .options({
        processCssUrls: false
    })
