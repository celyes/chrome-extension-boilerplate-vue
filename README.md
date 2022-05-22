# Chrome extension boilerplate Vue
Build a Chrome extension with Vue.js and Webpack (via Laravel mix)

## Compiling project files

```sh
# install dependencies
npm install

# compile javascript files
npm run dev
```

You'll get a `dist` folder which is the actual extension.

## Watching for changes

When developing the extension, We need a way to compile `.vue` and ES6 JavaScript files immediately with hot reloading and without any interference from us. Therefore, we're using Laravel mix (don't get fooled by the name. It has nothing to do with PHP) which is built on top of Webpack module bundler and has a much more simple config file syntax.
To watch for changes, run this command:

```sh
npm run watch
```
## Loading the extension to Chrome
Open Google Chrome browser and visit the URL: `chrome://extensions`. Activate developer mode and click on `Load unpacked`. Select the newly generated `dist` folder. 

The extension should be loaded and working perfectly.
