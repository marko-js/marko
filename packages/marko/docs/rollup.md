# Marko + Rollup

# Installation

```console
npm install @marko/rollup rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs -D
```

# Basic example config

**Note: The Marko runtime is authored in commonjs, this means the `@rollup/plugin-commonjs` is required!**

```javascript
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import marko from "@marko/rollup";

export default {
  ...,
  plugins: [
    marko.browser(),
    nodeResolve({
      browser: true,
      extensions: [".js", ".marko"]
    }),
    // NOTE: The Marko runtime uses commonjs so this plugin is also required.
    commonjs({
      extensions: [".js", ".marko"]
    }),
    // If using `style` blocks with Marko you must use an appropriate plugin.
    postcss({
      external: true
    })
  ]
};
```

Likewise, if bundling the components for the server use `marko.server()` as the plugin.

# Linked config

If you use _both_ the `server` and `browser` plugins (in a [multi rollup config setup](https://rollupjs.org/guide/en/#configuration-files:~:text=export%20an%20array)) `@marko/rollup` will go into a _linked_ mode.
In the linked mode you will have access to the [`<rollup>` tag](#rollup-tag) on the server, and the browser config
will automatically have the [`input`](https://rollupjs.org/guide/en/#input) option set.

```javascript
export default [{
  // Config object for bundling server assets.
  input: "src/your-server-entry.js",
  plugins: [
    marko.server()
    ...
  ]
}, {
  // Config object for bundling browser assets.
  plugins: [
    marko.browser()
    ...
  ]
}];
```

## `<rollup>` tag

In a [linked setup](#linked-config) you have access to the `<rollup>` tag which will provide two [tag parameters](https://markojs.com/docs/syntax/#parameters) that allow you to write out the asset links for your server rendered app.

The first parameter `entry` is the generated `input` name that the server plugin gave to the browser compiler.
You can use it to find the corresponding entry chunk from rollups build.

The second parameter `output` is an array of `AssetInfo | ChunkInfo` objects with most of the same properties returned from rollup's [`generateBundle` hook](https://rollupjs.org/guide/en/#generatebundle). Some properties have been stripped, notably `code` and `map` since they would be too large to inline directly. A `size` property is also available for all chunks to allow you to be able to filter out empty chunks, or inline chunks of certain size.

```marko
<head>
  <rollup|entry, output|>
    $ const entryChunk = output.find(chunk => chunk.name === entry);

    <if(entryChunk.size /* skip scripts all together if empty js file */)>
      <for|fileName| of=entryChunk.imports>
        <link rel="modulepreload" href=fileName/>
      </for>

      <script async type="module" src=entryChunk.fileName/>
    </if>
  </rollup>
</head>
```

Ultimately it is up to you to map the chunk data (sometimes referred to as a manifest) into the `<link>`'s and `<script>`'s rendered by your application.

If your rollup browser config contains multiple `output` options, or you have multiple browser configs, all of the `chunks` for each `output` are passed into the `<rollup>` tag.

For example if you have an `esm` and `iife` build:

```javascript
{
  plugins: [
    marko.browser()
    ...
  ],
  output: [
    { dir: 'dist/iife', format: 'iife' },
    { dir: 'dist/esm', format: 'esm' }
  ]
}
```

we could access the assets from both builds:

```marko
<head>
  <rollup|entry, iifeOutput, esmOutput|>
    $ const iifeEntryChunk = iifeOutput.find(chunk => chunk.name === entry);
    $ const esmEntryChunk = esmOutput.find(chunk => chunk.name === entry);

    <script async type="module" src=esmEntryChunk.fileName/>
    <script nomodule src=iifeEntryChunk.fileName></script>
  </rollup>
</head>
```

and _boom_ you now have a [`module/nomodule` setup](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/).

# Top level components

Marko was designed to send as little JavaScript to the browser as possible. One of the ways we do this is by automatically determining which templates in your app should be shipped to the browser. When rendering a template on the server, it is only necessary to bundle the styles and interactive components rendered by that template.

To send the minimal amount of Marko templates to the browser you can provide a Marko template directly as the `input`.
This will also automatically invoke code to initialize the components in the browser, so there is no need to call
`template.render` yourself in the browser.

> Note: if you are using _linked_ plugins then the server plugin will automatically tell the browser compiler which Marko templates to load.

```js
export default {
  input: "./my-marko-page.marko",
  plugins: [
    marko.browser(),
    ...
  ],
  ...
}
```

## Options

Both the `server` and `browser` plugins can receive the same options.

### options.babelConfig

You can manually override the Babel configuration used by passing a `babelConfig` object to the `@marko/rollup` plugin. By default Babels regular [config file resolution](https://babeljs.io/docs/en/config-files) will be used.

```javascript
marko.browser({
  babelConfig: {
    presets: ["@babel/preset-env"]
  }
});
```

### options.runtimeId

In some cases you may want to embed multiple isolated copies of Marko on the page. Since Marko relies on some `window` properties to initialize this can cause issues. For example, by default Marko will read the server rendered hydration code from `window.$components`. In Marko you can change these `window` properties by rendering with `{ $global: { runtimeId: "MY_MARKO_RUNTIME_ID" } }` as input on the server side.

This plugin exposes a `runtimeId` option produces output that automatically sets `$global.runtimeId` on the server side and initializes properly in the browser.

```js
const runtimeId = "MY_MARKO_RUNTIME_ID";
// Make sure the `runtimeId` is the same across all of your plugins!
marko.server({ runtimeId });
marko.browser({ runtimeId });
```

### options.serialize

This option is only available for the `browser` plugin. It allows you to transform the list of chunks serialzed in a [_linked config_](#linked-config) to include whatever you like.
For example if you _did_ want to include the `code` property from the rollup chunk, to say inline some content, the following would work:

```js
marko.browser({
  serialize(output) {
    return output.map(chunk =>
      chunk.type === "asset"
        ? {
            type: "asset",
            fileName: chunk.fileName
          }
        : {
            type: "chunk",
            name: chunk.name,
            isEntry: chunk.isEntry,
            fileName: chunk.fileName,
            code:
              chunk.code.replace(/^\s+$/, "").length < 1024
                ? chunk.code
                : undefined // only inline small code chunks
          }
    );
  }
});
```
