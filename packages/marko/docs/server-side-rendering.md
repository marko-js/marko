# Server-side rendering

Marko can render components on the server and/or in the browser. Components are referred to as **templates** when rendered on the server, and **UI components** when rendered in the browser.

A template can be rendered to a `Writable` stream, such as Node’s HTTP response streams:

```js
var template = require("./template"); // Import ./template.marko

module.exports = function(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  template.render({ name: "Frank" }, res);
};
```

Marko can also provide a `Readable` stream, for other code to use later:

```js
var template = require("./template"); // Import ./template.marko

module.exports = function() {
  return template.stream({ name: "Frank" });
};
```

> **ProTip:** Marko also provides integrations for server-side frameworks:
>
> - [express](./express.md)
> - [koa](./koa.md)
> - [fastify](./fastify.md)

## UI Bootstrapping

When a template renders on the server, code is added to its output HTML so its UI components automatically boot in the browser.

For each _top-level_ UI component, Marko serializes that component’s data (its `input`, `state`, and any properties added to its component instance) so it can mount when the page loads in the browser. Only a “partial” re-render happens for each top-level UI component — the DOM is not updated and no virtual DOM is produced.

Marko encodes its bootstrapping data into HTML attributes and generates `<script>` tags that will register UI components, for when the full Marko runtime loads and mounts all registered components. This lets the Marko runtime load anytime without errors.

### Bootstrapping: Lasso

If you are using [Lasso.js](https://github.com/lasso-js/lasso), then bootstrapping will be automatic as long as the JavaScript bundles for your page are included via `<lasso-body>`, like so:

_routes/index/template.marko_

```marko
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marko + Lasso</title>
        <lasso-head/> <!-- CSS includes -->
    </head>
    <body>
        <app/> <!-- Top-level UI component: -->

        <lasso-body/> <!-- JS includes -->
    </body>
</html>
```

> **ProTip:** These samples will help you get started with Marko + Lasso:
>
> - [marko-lasso](https://github.com/marko-js/examples/tree/master/examples/lasso-express)
> - [ui-components-playground](https://github.com/marko-js/examples/tree/master/examples/ui-components-playground)

### Bootstrapping: Non-Lasso

For JavaScript module bundlers other than Lasso, you will need to add some client-side code that bootstraps Marko UI components:

1. Load/import/require all UI components that were rendered on the server (loading the top-level UI component is usually sufficient, since the Marko compiler will autodiscover its descendant components).
2. Call `require('marko/components').init()`.

For example, if `client.js` is your client-side application’s entry point:

_routes/index/client.js_

```js
// Load the top-level UI component:
require("./components/app/index");

// Now that the JavaScript modules for the UI components are
// loaded and registered, we can tell Marko to bootstrap/initialize the app

// Initialize and mount all server-rendered UI components:
require("marko/components").init();
```

> **ProTip:** Some sample apps to help you get started:
>
> - [marko-webpack](https://github.com/marko-js/examples/tree/master/examples/webpack-express)

# Serialization

Marko will serialize each _top-level_ UI component’s data (its `input`, `state`, and any properties added to the UI component instance) to the browser. You can control what data is serialized by implementing [`toJSON()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) on the component’s `class`:

```js
class {
    toJSON() {
        // Do not serialize any `input`:
        return null;

        // Serialize a new object instead of the provided `input`:
        return {
            foo: 'bar'
        };
    }
}
```


…or by reassigning `this.input` in the [UI component’s `onInput(input, out)` lifecycle method](https://markojs.com/docs/class-components/#lifecycle-event-methods):

```js
class {
    onInput() {
        // Do not serialize any `input`:
        this.input = null;

        // Serialize a new object instead of the provided `input`:
        this.input = {
            foo: 'bar'
        };
    }
}
```

> NOTE: Marko allows cycles in serialized objects. Duplicated objects will only be serialized once.

## Serialization caveats

- Component data for top-level UI components must be serializable.
  - Only simple objects, numbers, strings, booleans, arrays, and `Date` objects are serializable.
  - Functions, Symbols, and objects with metaprogramming (like getters/setters) are not serializable.
- Avoid having Marko serialize too much data.
- The data in `out.global` is not serialized by default, but this can be changed…

### Serializing globals

If there are properties on the `out.global` object that must be serialized, you need to explicitly allow them when rendering the top-level template on the server. For example, to serialize `out.global.apiKey` and `out.global.locale` properties, you would do the following:

```js
template.render(
  {
    $global: {
      serializedGlobals: {
        apiKey: true,
        locale: true
      }
    }
  },
  res
);
```
