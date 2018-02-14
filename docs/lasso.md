# Marko + Lasso

The [lasso-marko](https://github.com/lasso-js/lasso-marko) plugin for [Lasso.js](https://github.com/lasso-js/lasso) will automatically compile all imported Marko templates during bundling. In addition, the `lasso-marko` plugin will automatically bundle any template dependencies (including required CSS).

Lasso.js provides Marko custom tags for injecting JavaScript and CSS bundles, images and other resources.

The sample [marko-lasso](https://github.com/marko-js-samples/marko-lasso) app demonstrates how to build a production-ready web application using Marko and Lasso.

## Installation

```
npm install lasso-marko --save
```

## Registering the plugin

```js
require('lasso').configure({
    "plugins": [
        ...
        "lasso-marko"
    ]
    ...
});
```

## Lasso custom tags

To inject the required JavaScript and CSS into the page you will want to use the `<lasso-page>`, `<lasso-head>` and `<lasso-body>` tags.

If you are using lasso@^3 (latest), make sure to install the [lasso-marko-taglib](https://github.com/lasso-js/lasso-marko-taglib), so that you can use the lasso custom tags.

```
npm install lasso-marko
npm install @lasso/marko-taglib
```

After installing, the lasso custom tags can be used in your templates:

```html
<lasso-page package-path="./browser.json" />

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marko + Lasso</title>
        <lasso-head/>
    </head>
    <body>
        <lasso-body/>
    </body>
</html>
```

The `browser.json` provides a simple way for declaring _top-level_ page dependencies. For example:

_browser.json_
```json
{
    "dependencies": [
        "./style.css",
        "require-run: ./client.js"
    ]
}
```

Lasso.js will automatically bundle up transitive dependencies by building and walking a dependency graph.

## Client-side rendering

Marko templates can be imported and rendered by any JavaScript module. The code below shows how to render a top-level UI component and have it be mounted to the DOM as a child `document.body`:

_client.js_
```js
require('./components/app/index.marko')
    .renderSync({})
    .appendTo(document.body);
```

When Lasso.js bundles up the code above it will automatically bundle up the required `./components/app/index.marko` file.

## Server-side rendering

If you are rendering the initial UI on the server then it is necessary to make sure that all UI components are bundled and sent to the browser so that UI components can be mounted in the browser. For example:


_about-me/index.marko_
```marko
<lasso-page package-path="./browser.json" />

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marko + Lasso</title>

        <!-- CSS will be inserted here -->
        <lasso-head/>
    </head>
    <body>
        <!-- Top-level UI component: -->
        <app/>

        <!-- JS will be inserted here -->
        <lasso-body/>
    </body>
</html>
```

Typically, adding the top-level UI component as a page dependency is all that is required:

_about-me/browser.json_
```json
{
    "dependencies": [
        "./style.css",
        "require: ./components/app/index.marko"
    ]
}
```

## Browser refresh

[browser-refresh](https://github.com/patrick-steele-idem/browser-refresh) is recommended in development for instant page refreshes and hot reloading of Marko templates, styles and other resources. `browser-refresh` works well with Lasso and Marko and is very easy to use as a drop-in replacement for `node`:

```bash
browser-refresh server.js
```
