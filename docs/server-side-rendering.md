# Server-side rendering

Marko allows any Marko template/UI component to be rendered on the server or in the browser. A page can be rendered to a `Writable` stream such as an HTTP response stream as shown below:

```js
var template = require('./template'); // Import ./template.marko

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    template.render({ name: 'Frank' }, res);
};
```

Marko can also provide you with a `Readable` stream.

```js
var template = require('./template'); // Import ./template.marko

module.exports = function(req) {
    // Return a Readable stream for someone to do something with:
    return template.stream({ name: 'Frank' });
};
```

> **ProTip:** Marko also provides server-side framework integrations:
> - [express](/docs/express)
> - [hapi](/docs/hapi)
> - [koa](/docs/koa)

## Bootstrapping Components

When a server-rendered page loads in the browser it's possible for marko to automatically detect UI components rendered on the server and create and mount them with the correct `state` and `input` in the browser.

### Bootstrapping: Lasso

If you are using [Lasso.js](https://github.com/lasso-js/lasso) then the bootstrapping will happen automatically as long as the JavaScript bundles for your page are included via the `<lasso-body>` tag. A typical HTML page structure will be the following:

_routes/index/template.marko_

```marko
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marko + Lasso</title>

        <!-- CSS includes -->
        <lasso-head/>
    </head>
    <body>
        <!-- Top-level UI component: -->
        <app/>

        <!-- JS includes -->
        <lasso-body/>
    </body>
</html>
```

> **ProTip:** We have provided some sample apps to help you get started with Marko + Lasso
> - [marko-lasso](https://github.com/marko-js-samples/marko-lasso)
> - [ui-components-playground](https://github.com/marko-js-samples/ui-components-playground)


### Bootstrapping: Non-Lasso

 If a JavaScript module bundler other than Lasso is being used then you will need to add some client-side code to bootstrap your application in the browser by doing the following:

1. Load/import/require all of the UI components that were rendered on the server (loading the top-level UI component is typically sufficient)
2. Call `require('marko/components').init()`

For example, if `client.js` is the entry point for your client-side application:

_routes/index/client.js_
```js
// Load the top-level UI component:
require('./components/app/index');

// Now that all of the JavaScript modules for the UI component have been
// loaded and registered we can tell marko to bootstrap/initialize the app

// Initialize and mount all of the server-rendered UI components:
require('marko/components').init();
```

> **ProTip:** We have provided some sample apps to help you get started:
> - [marko-webpack](https://github.com/marko-js-samples/marko-webpack)
> - [marko-browserify](https://github.com/marko-js-samples/marko-browserify)
> - [marko-rollup](https://github.com/marko-js-samples/marko-rollup)
