# Marko + Express

## Quick Start

```sh
npm init marko -- --template vite-express
# Or `npx create-marko --template vite-express`
```

See [Marko’s example projects](https://github.com/marko-js/examples) for working [Express](https://expressjs.com/) integration code, such as:

- [`examples/vite-express`](https://github.com/marko-js/examples/tree/master/examples/vite-express)
- [`examples/rollup-express`](https://github.com/marko-js/examples/tree/master/examples/rollup-express)
- [`examples/webpack-express`](https://github.com/marko-js/examples/tree/master/examples/webpack-express)

But if you want to do things the hard way…

## Doing things the hard way

First, install Marko, Express, and the glue to hold them together:

```sh
npm install marko express @marko/express --save
```

### Skip the view engine

Express’s builtin view engine may be asynchronous, but it doesn’t support streaming — see [Rediscovering Progressive HTML Rendering](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/) for why that’s important. So instead, we [bypass Express’s view engine](https://strongloop.com/strongblog/bypassing-express-view-rendering-for-speed-and-modularity/) to use `@marko/express` instead.

[The `@marko/express` package](https://www.npmjs.com/package/@marko/express) adds a `res.marko()` method to [Express’s response object](https://expressjs.com/en/api.html#res). This method works like [`res.render()`](https://expressjs.com/en/api.html#res.render), but without the restrictions of Express’s view engine, letting you take full advantage of Marko’s streaming and modular template organization.

> **ProTip**: By using `res.marko()`, properties from [`app.locals`](https://expressjs.com/en/api.html#app.locals) and [`res.locals`](https://expressjs.com/en/api.html#res.locals) are automatically [available on `$global`](https://markojs.com/docs/rendering/#global-data).

```js
import express from "express";
import markoPlugin from "@marko/express";
import template from "./template.marko";

const app = express();
app.use(markoPlugin()); // Enables `res.marko(template, input)`

app.get("/", function (req, res) {
  res.marko(template, {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  });
});

app.listen(8080);
```

> **Note**: Older versions of `@marko/express` used to also attach Express’s `app`, `req`, and `res` objects onto `$global`. This meant uncontrolled network data could cause new and exciting surprises in your app code. Nowadays we recommend explicitly accessing the specific pieces of the HTTP exchange you’re interested in, like this:
>
> ```js
> app.get("/", function (req, res) {
>   res.marko(template, {
>     params: req.params,
>     submitted: req.method === "POST" && req.body
>   });
> });
> ```

### BYOB (Bring Your Own Bundler)

Most of Marko’s API requires a bundler: the example code above assumes that `.marko` files can be `import`ed in your environment. [Check out Marko’s supported bundlers](https://markojs.com/docs/bundler-integrations-overview/) to see what works best for you.
