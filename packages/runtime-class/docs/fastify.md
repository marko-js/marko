# Marko + Fastify

## Quick Start

```terminal
npm init marko -- --template vite-fastify
```

See the [the fastify sample](https://github.com/marko-js/examples/tree/master/examples/vite-fastify)
project for a working example.

## From Scratch

First install Marko and the fastify related dependencies:

```terminal
npm install marko @marko/fastify fastify --save
```

### Usage

The [`@marko/fastify`](https://github.com/marko-js/fastify/) adds a `reply.marko` decorator to the `reply` object. This function allows us to pass in a Marko template and supports Marko's streaming and modular approach to templates.

By using `reply.marko` you'll automatically have access to `app.locals`, and `reply.locals` from within your Marko template and custom tags. These values are added to `$global`.

```javascript
import fastify from "fastify";
import markoPlugin from "@marko/fastify";
import Template from "./template.marko";

const app = fastify();

app.register(markoPlugin);

app.get("/", (request, reply) => {
  // Streams Marko template into the response.
  // Forwards errors into fa error handler.
  reply.marko(Template, { hello: "world" });
});

await fastify.listen(3000);
```

### Global Outputs

We can add global outputs from the server side using the reply object or fastify instance.

```javascript
reply.locals.newProperty = "Your value";
```

To use this in marko components we just need to refer out.global

```marko
$ const { newProperty } = $global;
```

To know more about sending the data to the browser checkout:

### [Sending global data to browsers](https://markojs.com/docs/rendering/#sending-global-data-to-browsers)

### BYOB (Bring your own bundler)

For the large portion of Marko's API a bundler is required. The example code above assumes that Marko templates can be loaded in your environment.
Marko supports a number of bundlers, [take a look through our supported bundlers](https://markojs.com/docs/bundler-integrations-overview/) and pick what works best for you.
