# Marko + Koa

See the [the koa sample](https://github.com/marko-js/examples/tree/master/examples/vite-koa)
project for a working example.

## Installation

```terminal
npm install koa marko --save
```

## Usage

```javascript
import Koa from "koa";
import Template from "./index.marko";

const app = new Koa();

app.use((ctx, next) => {
  ctx.type = "html";
  ctx.body = Template.stream({
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
