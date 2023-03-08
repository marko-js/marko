# Rendering

To render a Marko view, you need to `import` it.

_example.js_

```js
import FancyButton from "./components/fancy-button.marko";
```

> **Note:** If you are targeting node.js, you will need to enable the [require extension](./installing.md#require-marko-views) in order to require `.marko` files or you will need to precompile all of your templates using [Marko CLI](https://github.com/marko-js/cli). If you are targeting the browser, you will need to use a bundler like [`lasso`](./lasso.md), [`webpack`](./webpack.md) or [`rollup`](./rollup.md).

Once you have a view, you can pass input data and render it:

_example.js_

```js
import FancyButton from "./components/fancy-button.marko";
const html = FancyButton.renderToString({ label: "Click me!" });

console.log(html);
```

The data passed to `renderToString` becomes available as `input` in the component, so if `fancy-button.marko` looked like this:

_./components/fancy-button.marko_

```marko
<button>${input.label}</button>
```

The output HTML would be:

```html
<button>Click me!</button>
```

## Rendering methods

We used the `renderToString` method above to render the view, but there are a number of different method signatures that can be used to render.

Many of these methods return a [`RenderResult`](#renderresult) which is an object with helper methods for working with the rendered output.

### `renderSync(input)`

| params       | type                            | description                            |
| ------------ | ------------------------------- | -------------------------------------- |
| `input`      | `Object`                        | the input data used to render the view |
| return value | [`RenderResult`](#renderresult) | The result of the render               |

Using `renderSync` forces the render to complete synchronously. If a tag attempts to run asynchronously, an error will be thrown.

```js
import View from "./view.marko";
var result = View.renderSync({});

result.appendTo(document.body);
```

### `render(input)`

| params       | type                             | description                            |
| ------------ | -------------------------------- | -------------------------------------- |
| `input`      | `Object`                         | the input data used to render the view |
| return value | `AsyncStream`/`AsyncVDOMBuilder` | the async `out` render target          |

The `render` method returns an async `out` which is used to generate HTML on the server or a virtual DOM in the browser. In either case, the async `out` has a `then` method that follows the Promises/A+ spec, so it can be used as if it were a Promise. This promise resolves to a [`RenderResult`](#renderresult).

```js
import View from "./view.marko";
var resultPromise = View.render({});

resultPromise.then(result => {
  result.appendTo(document.body);
});
```

### `render(input, callback)`

| params         | type                             | description                                    |
| -------------- | -------------------------------- | ---------------------------------------------- |
| `input`        | `Object`                         | the input data used to render the view         |
| `callback`     | `Function`                       | a function to call when the render is complete |
| callback value | [`RenderResult`](#renderresult)  | The result of the render                       |
| return value   | `AsyncStream`/`AsyncVDOMBuilder` | the async `out` render target                  |

```js
import View from "./view.marko";

View.render({}, (err, result) => {
  result.appendTo(document.body);
});
```

### `render(input, stream)`

| params       | type                             | description                            |
| ------------ | -------------------------------- | -------------------------------------- |
| `input`      | `Object`                         | the input data used to render the view |
| `stream`     | `WritableStream`                 | a writeable stream                     |
| return value | `AsyncStream`/`AsyncVDOMBuilder` | the async `out` render target          |

The HTML output is written to the passed `stream`.

```js
import http from "http";
import View from "./view.marko";

http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  View.render({}, res);
});
```

### `render(input, out)`

| params       | type                             | description                            |
| ------------ | -------------------------------- | -------------------------------------- |
| `input`      | `Object`                         | the input data used to render the view |
| `out`        | `AsyncStream`/`AsyncVDOMBuilder` | The async `out` to render to           |
| return value | `AsyncStream`/`AsyncVDOMBuilder` | The `out` that was passed              |

The `render` method also allows passing an existing async `out`. If you do this, `render` will not automatically end the async `out` (this allows rendering a view in the middle of another view). If the async `out` won't be ended by other means, you are responsible for ending it.

```js
import View from "./view.marko";
var out = View.createOut();

View.render({}, out);

out.on("finish", () => {
  console.log(out.getOutput());
});

out.end();
```

### `renderToString(input)`

| params       | type     | description                            |
| ------------ | -------- | -------------------------------------- |
| `input`      | `Object` | the input data used to render the view |
| return value | `String` | The HTML string produced by the render |

Returns an HTML string and forces the render to complete synchronously. If a tag attempts to run asynchronously, an error will be thrown.

```js
import View from "./view.marko";
var html = View.renderToString({});

document.body.innerHTML = html;
```

### `renderToString(input, callback)`

| params         | type        | description                            |
| -------------- | ----------- | -------------------------------------- |
| `input`        | `Object`    | the input data used to render the view |
| callback value | `String`    | The HTML string produced by the render |
| return value   | `undefined` | N/A                                    |

An HTML string is passed to the callback.

```js
import View from "./view.marko";

View.renderToString({}, (err, html) => {
  document.body.innerHTML = html;
});
```

### `stream(input)`

The `stream` method returns a Node.js-style stream of the output HTML.

```js
import fs from "fs";
import View from "./view.marko";
const writeStream = fs.createWriteStream("output.html");

View.stream({}).pipe(writeStream);
```

This method is available on the server, but not available by default in the browser. If you need to use streams in the browser, you may `import 'marko/stream'` as part of your client-side bundle.

## RenderResult

### `getComponent()`

### `getComponents(selector)`

### `afterInsert(doc)`

### `getNode(doc)`

### `getOutput()`

### `appendTo(targetEl)`

### `insertAfter(targetEl)`

### `insertBefore(targetEl)`

### `prependTo(targetEl)`

### `replace(targetEl)`

### `replaceChildrenOf(targetEl)`

## Global data

If you need to make data available to all rendered views, use the `$global` property on the input data object. This property will be removed from `input` and provided to the template through a variable called `$global`. It is also made available on the `out.global` property.

Global values persist across renders.

```js
View.render({
  $global: {
    flags: ["mobile"]
  }
});
```

Within the template you can access `$global` similar to accessing `input`.

```marko
<div>
  You are on ${$global.flags.includes("mobile") ? "mobile" : "desktop"}
</div>
```

> **Note:** `$global` is not available within [`static`](./syntax.md#static-javascript) parts of the template. In order to reference `$global` within the component class you must use `out.global` from one of the lifecycle methods that provide it.

> **Warning:** Use `$global` with caution; it is visible in any component.

### Sending global data to browsers

⚠️ To prevent accidentally exposing sensitive data, by default **no keys** in `$global` are sent to browsers. To serialize data to the frontend, name the desired properties in `$global.serializedGlobals`.

Values must be serializable by [the `warp10` module](https://www.npmjs.com/package/warp10).

```js
import Page from "./index.marko";

app.get("/", (req, res) => {
  const ua = req.get("User-Agent");

  Page.render(
    {
      $global: {
        isIos: /iPad|iPhone/.test(ua), // Serialized and available on the server and browser as `$global.isIos`
        isAndroid: /Android/.test(ua), // Serialized and available on the server and browser as `$global.isAndroid`
        req, // Only available server-side and not serialized, because it’s not in `serializedGlobals`

        serializedGlobals: {
          isIos: true, // Tell Marko to serialize `isIos`
          isAndroid: true // Tell Marko to serialize `isAndroid`
        }
      }
    },
    res
  );
});
```

For details, check [#672: “Serialize only input and state on top-level server-rendered UI components”](https://github.com/marko-js/marko/pull/672).
