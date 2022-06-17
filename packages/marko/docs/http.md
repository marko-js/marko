# Marko + HTTP Server

See the [the http sample](https://github.com/marko-js/examples/tree/master/examples/vite-http)
project for a working example.

## Usage

```js
import http from "http";
import Template from "./index.marko";

const port = 8080;
const server = http.createServer();

server.on("request", (req, res) => {
  Template.render(
    {
      name: "Frank",
      count: 30,
      colors: ["red", "green", "blue"]
    },
    res
  );
});

server.listen(port, () => {
  console.log(`Successfully started server on port ${port}`);
});
```

### BYOB (Bring your own bundler)

For the large portion of Marko's API a bundler is required. The example code above assumes that Marko templates can be loaded in your environment.
Marko supports a number of bundlers, [take a look through our supported bundlers](#bundler-integrations) and pick what works best for you.
