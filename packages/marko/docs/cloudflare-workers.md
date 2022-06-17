# Marko + Cloudflare Workers

See the [the cloudflare sample](https://github.com/marko-js/examples/tree/master/examples/vite-cloudflare)
project for a working example.

## Usage

When using Marko with [Cloudflare Workers](https://workers.cloudflare.com/), make sure that Marko is loaded with a `worker` [export condition](https://nodejs.org/api/packages.html#conditional-exports). Most bundlers support defining export conditions.

After that point, imported `.marko` files will export a `.stream` method that returns a worker compatible [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream). You can then respond with that returned stream:

```js
import Template from "./index.marko";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response(Template.stream(), {
    headers: {
      status: 200,
      headers: { "content-type": "text/html;charset=UTF-8" }
    }
  });
}
```

### BYOB (Bring your own bundler)

For the large portion of Marko's API a bundler is required. The example code above assumes that Marko templates can be loaded in your environment.
Marko supports a number of bundlers, [take a look through our supported bundlers](#bundler-integrations) and pick what works best for you.
