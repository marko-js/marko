# Marko + Express

## Quick Start

```terminal
npm init marko -- --template vite-express
```

See the [the express sample](https://github.com/marko-js/examples/tree/master/examples/vite-express)
project for a working example.

## From Scratch

First install Marko and the express related dependencies:

```terminal
npm install marko @marko/express express --save
```

### Skip the view engine

The built in view engine for express may be asynchronous, but it doesn't support streaming (check out [Rediscovering Progressive HTML Rendering](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/) to see why this is so important). So instead we'll [bypass the view engine](https://strongloop.com/strongblog/bypassing-express-view-rendering-for-speed-and-modularity/) and use [`@marko/express`](https://github.com/marko-js/express/).

### Usage

The [`@marko/express`](https://github.com/marko-js/express/) adds a `res.marko` method to the express response object. This function works much like `res.render`, but doesn't impose the restrictions of the express view engine and allows you to take full advantage of Marko's streaming and modular approach to templates.

By using `res.marko` you'll automatically have access to `req`, `res`, `app`, `app.locals`, and `res.locals` from within your Marko template and custom tags. These values are added to `out.global`.

```javascript
import express from "express";
import markoPlugin from "@marko/express";
import Template from "./template.marko";

const app = express();

app.use(markoPlugin()); //enable res.marko(template, data)

app.get("/", function (req, res) {
  res.marko(Template, {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  });
});

app.listen(8080);
```

### BYOB (Bring your own bundler)

For the large portion of Marko's API a bundler is required. The example code above assumes that Marko templates can be loaded in your environment.
Marko supports a number of bundlers, [take a look through our supported bundlers](#bundler-integrations) and pick what works best for you.
