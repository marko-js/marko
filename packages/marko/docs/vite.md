# Marko + Vite

# Installation

```console
npm install @marko/vite vite
```

# Example config

```javascript
import { defineConfig } from "vite";
import marko from "@marko/vite";
export default defineConfig({
  plugins: [marko()]
});
```

# Linked Mode

By default this plugin operates in `linked` mode (you can disabled this by passing [`linked: false` as an option](#optionslinked)). In `linked` mode the plugin automatically discovers all of the entry `.marko` files while compiling the server, and tells `Vite` which modules to load in the browser.

With this you _do not_ create `.html` files for `Vite`, it's Marko all the way down!
Scripts, styles and other content that _would have_ been injected into the `.html` files is instead automatically injected into your `.marko` templates.

In this mode you must use the [Vite SSR API](https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server).

Here's an example using `express`.

```js
import { createServer } from "vite";

const app = express();
let loadTemplate;

if (process.env.NODE_ENV === "production") {
  // Use Vite's built asset in prod mode.
  loadTemplate = () => import("./dist");
} else {
  // Hookup the vite dev server.
  const vite = await createServer({
    server: { middlewareMode: true }
  });

  app.use(vite.middlewares);
  loadTemplate = () => vite.ssrLoadModule("./template.marko");
}

app.get("/", async (req, res) => {
  const template = (await loadTemplate()).default;
  // When the template is loaded, it will automatically have `vite` assets inlined.
  template.render({ hello: "world" }, res);
);

app.listen(3000);
```

> For a more real world setup check out our [vite express](https://github.com/marko-js/examples/tree/master/examples/vite-express) example app.

# Options

### options.babelConfig

You can manually override Marko's Babel configuration by passing a `babelConfig` object to the `@marko/vite` plugin. By default Babel's regular [config file resolution](https://babeljs.io/docs/en/config-files) will be used.

```javascript
marko({
  babelConfig: {
    presets: ["@babel/preset-env"]
  }
});
```

### options.runtimeId

In some cases you may want to embed multiple isolated copies of Marko on the page. Since Marko relies on some `window` properties to initialize this can cause issues. For example, by default Marko will read the server rendered hydration code from `window.$components`. In Marko you can change these `window` properties by rendering with `{ $global: { runtimeId: "MY_MARKO_RUNTIME_ID" } }` as input on the server side.

This plugin exposes a `runtimeId` option produces output that automatically sets `$global.runtimeId` on the server side and initializes properly in the browser.

```js
marko({ runtimeId: "MY_MARKO_RUNTIME_ID" });
```

### options.linked

Set this to `false` to opt out of [linked mode](#linked-mode). When this is false, the plugin will only handle resolving and transforming `.marko` files.
