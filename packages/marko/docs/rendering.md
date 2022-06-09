# Rendering

To render a Marko view, you need to `require` it.

_example.js_

```js
import fancyButton from "./components/fancy-button";
```

> **Note:** If you are targeting node.js, you will need to enable the [require extension](./installing.md#require-marko-views) in order to require `.marko` files or you will need to precompile all of your templates using [Marko CLI](https://github.com/marko-js/cli). If you are targeting the browser, you will need to use a bundler like [`lasso`](./lasso.md), [`webpack`](./webpack.md) or [`rollup`](./rollup.md).

Once you have a view, you can pass input data and render it:

_example.js_

```js
import button from "./components/fancy-button";
var html = button.renderToString({ label: "Click me!" });

console.log(html);
```

The input data becomes available as `input` within a view, so if `fancy-button.marko` looked like this:

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
import view from "./view"; // Shorthand to import `./view.marko`
var result = view.renderSync({});

result.appendTo(document.body);
```

### `render(input)`

| params       | type                             | description                            |
| ------------ | -------------------------------- | -------------------------------------- |
| `input`      | `Object`                         | the input data used to render the view |
| return value | `AsyncStream`/`AsyncVDOMBuilder` | the async `out` render target          |

The `render` method returns an async `out` which is used to generate HTML on the server or a virtual DOM in the browser. In either case, the async `out` has a `then` method that follows the Promises/A+ spec, so it can be used as if it were a Promise. This promise resolves to a [`RenderResult`](#renderresult).

```js
import view from "./view"; // Shorthand to import `./view.marko`
var resultPromise = view.render({});

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
import view from "./view"; // Shorthand to import `./view.marko`

view.render({}, (err, result) => {
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
import view from "./view"; // Shorthand to import `./view.marko`

http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  view.render({}, res);
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
import view from "./view.marko";
var out = view.createOut();

view.render({}, out);

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
import view from "./view.marko";
var html = view.renderToString({});

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
import view from "./view.marko";

view.renderToString({}, (err, html) => {
  document.body.innerHTML = html;
});
```

### `stream(input)`

The `stream` method returns a node.js style stream of the output HTML. This method is available on the server, but is not available by default in the browser. If you need to use streams in the browser, you may `import('marko/stream')` as part of your client-side bundle.

```js
import fs from "fs";
import view from "./view.marko";
var writeStream = fs.createWriteStream("output.html");

view.stream({}).pipe(writeStream);
```

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

If you need to make data available globally to all views that are rendered by one of the above render methods, you can pass the data as a `$global` property on the input data object. This object will be removed from `input` and merged into the `out.global` property.

```js
view.render({
  $global: {
    flags: ["mobile"]
  }
});
```

⚠️ To prevent accidentally shipping sensitive data to the browser, by default **no keys** in `out.global` are sent to the browser.

To serialize data to to the frontend, you need to specify it in `serializedGlobals` inside the `$global` object, and they persist across renders. Values must be serializable by [the `warp10` module](https://www.npmjs.com/package/warp10).

```js
import markoComponent from "./index.marko";

app.get("/", (req, res) => {
  const ua = req.get("User-Agent");

  markoComponent.render(
    {
      $global: {
        isIos: /iPad|iPhone/.test(ua), // `isIos` is serialized and available on the server and browser as `out.global.isIos`
        isAndroid: /Android/.test(ua), // `isAndroid` is serialized and available on the server and browser  as `out.global.isAndroid`
        req, // `req` is available only server-side, and will not be serialized because it’s not present in `serializedGlobals` below

        serializedGlobals: {
          isIos: true, // Tell Marko to serialize `isIos` above
          isAndroid: true // Tell Marko to serialize `isAndroid` above
        }
      }
    },
    res
  );
});
```

⚠️ Use `$global` with judgement. It is global and visible in any component.

For more details, check [#672: “Serialize only input and state on top-level server-rendered UI components”](https://github.com/marko-js/marko/pull/672).
