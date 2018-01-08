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
> - [express](/docs/express.md)
> - [hapi](/docs/hapi.md)
> - [koa](/docs/koa.md)
> - [huncwot](/docs/huncwot.md)

## UI Bootstrapping

When a page is rendered on the server, additional code is added to the output HTML to allow the UI to instantly boot in the browser. This additional code allows UI components rendered on the server to be mounted in the browser automatically. For each _top-level_ UI component, Marko will serialize the component's data (including `input` and `state` and any properties added to the UI component instance) so that each top-level UI component can be re-rendered and mounted when the page loads in the browser. Only a "partial" re-render is done for each top-level UI component. That is, when doing the partial re-render in the browser, the DOM is not updated and no virtual DOM is actually produced.

Marko encodes required information into attributes of rendered HTML elements and it also generates `<script>` tags that will cause UI components to be mounted. The code inside the `<script>` simply registers UI components and when the Marko runtime finally loads, all of the registered UI components will then be mounted. This allows the Marko runtime to be loaded at anytime without causing JavaScript errors.

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

# Serialization

For each _top-level_ UI component, Marko will serialize the component's data (including `input` and `state` and any properties added to the UI component instance) down to the browser. You can control which data gets serialized by implementing [`toJSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) or by reassigning `this.input` in the UI component's `onInput(input, out)` lifecycle method as shown below:

```javascript
class {
    onInput() {
        // Do not serialize any input:
        this.input = null;

        // Serialize a new object instead of the provided input:
        this.input = {
            foo: 'bar'
        };
    }
}
```

> NOTE: Marko does allow cycles in serialized objects and Duplicate objects will only be serialized once

# Caveats

There are some caveats associated with rendering a page on the server:

- The UI component data for top-level UI components must be serializable:
    - Only simple objects, numbers, strings, booleans, arrays and `Date` objects are serializable
    - Functions are not serializable
- Care should be taken to avoid having Marko serialize too much data
- None of the data in `out.global` is serialized by default, but this can be changed as shown below

## Serializing globals

If there are specific properties on the `out.global` object that need to be serialized then they must be whitelisted when the top-level page is rendered on the server. For example, to have the `out.global.apiKey` and the `out.global.locale` properties serialized you would do the following:

```js
template.render({
        $global: {
            serializedGlobals: {
                apiKey: true,
                locale: true
            }
        }
    }, res);
```
