# Marko + Rollup

This is Marko’s official integration plugin for [the Rollup bundler](https://rollupjs.org/).

## Installation

```sh
npm install --save-dev \
  @marko/rollup \
  rollup \
  @rollup/plugin-node-resolve \
  @rollup/plugin-commonjs
```

> **Note**: The Marko runtime is CommonJS, so don’t forget the `@rollup/plugin-commonjs` package!

## Configuration

`@marko/rollup` exports two methods for use in [Rollup configuration files](https://rollupjs.org/guide/en/#configuration-files): `.browser()` and `.server()`.

You _probably_ want to use both, since that’ll get you…

- Automatic [`input` entrypoint configuration](https://rollupjs.org/guide/en/#input) for route-based bundle splitting
- Complete control over asset loading with [the `<rollup>` tag](#rollup-tag)
- The strengths behind why Marko exists in the first place: cooperation between servers and browsers for high performance in both

> **ProTip**: You _could_ use only `.browser()` or only `.server()` to build a completely client-side-rendered or server-side-rendered app. That would be a little odd, but you could.

### Config example

```js
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import marko from "@marko/rollup";

const sharedPlugins = [
  commonjs({
    extensions: [".js", ".marko"]
  }),
  // If using Marko’s `style {}` blocks, you’ll need an appropriate plugin, like npmjs.com/rollup-plugin-postcss
  postcss({ external: true })
]

const serverAssetsConfig = {
  input: "src/start-server.js",
  plugins: [
    marko.server(),
    nodeResolve({ preferBuiltins: true })
    ...sharedPlugins
  ]
};
const browsersAssetsConfig = {
  plugins: [
    marko.browser(),
    nodeResolve({ browser: true })
    ...sharedPlugins
  ]
};

export default [serverAssetsConfig, browsersAssetsConfig];
```

### Advanced config example

The following configuration file is long and hairy, which may be upsetting to some viewers. However, it does show how to accomplish the following:

- Support for Rollup’s watch mode
- A bundle analyzer
- The ability to `import` JSON files to use their data
- The ability to `import` image files to use their asset URLs for `img[src]` and such
- Dead-code elimination for development-only code
- Static compression of assets for something like [NGiNX’s `gzip_static`](https://nginx.org/en/docs/http/ngx_http_gzip_static_module.html)
- A CSS preprocessor (Sass, in this case)
- Browserslist to automatically configure:
  - Babel for JS transpilation
  - Autoprefixer for CSS transpilation

<details><summary>Big ugly production-esque Rollup config</summary>

```js
import { builtinModules } from "module";
import path from "path";
import autoprefixer from "autoprefixer";
import babelPlugin from "@rollup/plugin-babel";
import commonjsPlugin from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import markoPlugin from "@marko/rollup";
import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import replacePlugin from "@rollup/plugin-replace";
import runPlugin from "@rollup/plugin-run";
import stylesPlugin from "rollup-plugin-styles";
import urlPlugin from "@rollup/plugin-url";
import pkg from "./package.json";

const __DEV__ = process.env.NODE_ENV === "development";
const __PROD__ = !__DEV__;

const isWatch = Boolean(process.env.ROLLUP_WATCH);

const publicPath = "/s/"; // Guess what character is only 5 bits under HPACK
const assetFileNames = "[name]-[hash][extname]";

const externalDependencies = [
  ...Object.keys(pkg.dependencies),
  ...builtinModules
];

process.env.SASS_PATH = "./:./node_modules";

export default (async () => [
  compiler("server", {
    input: "index.js",
    output: {
      dir: "built/server/",
      assetFileNames: `../browser/${assetFileNames}`,
      format: "cjs",
      sourcemap: true
    },
    external: id =>
      externalDependencies.some(
        dependency => id === dependency || id.startsWith(dependency + "/")
      ),
    plugins: [isWatch && runPlugin({ execArgv: ["--enable-source-maps"] })]
  }),

  compiler("browser", {
    output: {
      dir: "built/browser/",
      chunkFileNames: __PROD__ ? "[name]-[hash].js" : null,
      entryFileNames: __PROD__ ? "[name]-[hash].js" : null,
      assetFileNames,
      sourcemap: true,
      sourcemapExcludeSources: __PROD__
    },
    plugins: [
      stylesPlugin({
        mode: "extract",
        sourceMap: true,
        config: {
          target: "browserslist:css",
          plugins: [autoprefixer({ env: "css" })]
        },
        minimize: __PROD__,
        url: {
          publicPath,
          hash: assetFileNames
        }
      }),
      __PROD__ && (await import("rollup-plugin-terser")).terser(),
      __PROD__ &&
        (await import("rollup-plugin-gzip")).default({
          filter: /\.(?:js|css|svg|json|xml|txt)$/,
          minSize: 1024,
          gzipOptions: {
            level: 9,
            memLevel: 9
          }
        }),
      __PROD__ &&
        !isWatch &&
        (await import("rollup-plugin-visualizer")).default(),
      __PROD__ &&
        !isWatch && {
          name: "bundle-visualizer-location",
          writeBundle() {
            console.info(
              `📊 Bundle visualizer at \x1b[4;36mfile://${path.join(
                __dirname,
                "../../",
                bundleAnalyzerFilename
              )}\x1b[0m`
            );
          }
        }
    ]
  })
])();

function compiler(target, config) {
  const isBrowser = target === "browser";
  const browserslistEnv = isBrowser ? "js" : "server";
  const babelConfig = {
    comments: false,
    browserslistEnv,
    compact: false,
    babelrc: false,
    caller: { target }
  };
  if (isBrowser) {
    babelConfig.presets = [
      [
        "@babel/preset-env",
        {
          browserslistEnv,
          bugfixes: true
        }
      ]
    ];
  }

  return {
    ...config,
    preserveEntrySignatures: false,
    plugins: [
      markoPlugin[target]({ babelConfig }),
      nodeResolvePlugin({
        browser: isBrowser,
        preferBuiltins: !isBrowser
      }),
      commonjsPlugin(),
      replacePlugin({
        preventAssignment: true,
        values: { __DEV__, __PROD__ }
      }),
      babelPlugin({
        babelHelpers: "bundled",
        ...babelConfig
      }),
      jsonPlugin(),
      urlPlugin({
        publicPath,
        destDir: "built/browser/",
        fileName: assetFileNames,
        include: "**/*.{svg,png,jpg,jpeg}",
        limit: 0, // Never Base64 & inline
        emitFiles: !isBrowser
      }),
      ...config.plugins
    ]
  };
}
```

</details>

## `<rollup>` tag

Using both `.server()` and `.browser()` enables **the `<rollup>` tag**, which gives you complete control over how your app loads assets. That lets you do things like:

- [Critical CSS](https://web.dev/extract-critical-css/) for components as they write out within a kB budget, or [as components first appear on the page](https://jakearchibald.com/2016/link-in-body/#a-simpler-better-way), or any other style-loading mad science
- [`module`/`nomodule` scripts](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/) for smaller bundles in modern browsers
- [Content-Security Policy `nonce`s](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce) or [Subresource `integrity` hashes](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- Anything a web page can do, really. You can even combine `<rollup>` with [the `serialize` option](#options.serialize) to be as fancy as you wanna be.

The `<rollup>` tag provides two [tag parameters](https://markojs.com/docs/syntax/#parameters):

1. `entry` is the generated `input` string that the `server` plugin gave to the `browser` plugin. You can use it to find the corresponding entry chunk from Rollup’s `output` (the next parameter).

2. `output` is an array of `AssetInfo | ChunkInfo` objects with most of [the data returned from Rollup's `generateBundle` hook](https://rollupjs.org/guide/en/#generatebundle). Some properties are omitted, like `code` and `map`, since they’re often too large to inline directly. However, each chunk also has a `size` property, to let you filter out empty chunks, inline code yourself below a certain size, or other delightful devilishness.

For example, using the `entry` name and properties of `output` items to load scripts:

```marko
<head>
  <rollup|entry, output|>
    $ const entryChunk = output.find(chunk => chunk.name === entry);

    <if(entryChunk.size /* only load non-empty JS entry points */)>
      <for|fileName| of=entryChunk.imports>
        <link rel="modulepreload" href=fileName />
      </for>

      <script async type="module" src=entryChunk.fileName></script>
    </if>
  </rollup>
</head>
```

> **Note**: It’s up to you to transform the chunk data (also called the **manifest**) into `<link>`s, `<script>`s, and other HTML to load assets. Opting into complete control means we can’t do any of it for you.

If your Rollup `browser` config contains multiple `output` options, or you have multiple `browser` configs, every `output`’s chunk is passed to the `<rollup>` tag.

For example, if you have both `esm` and `iife` build outputs configured:

```js
{
  output: [
    { dir: "dist/iife", format: "iife" },
    { dir: "dist/esm", format: "esm" }
  ];
}
```

…you could cross-reference assets from both…

```marko
<rollup|entry, iifeOutput, esmOutput|>
  $ const iifeEntryChunk = iifeOutput.find(chunk => chunk.name === entry);
  $ const esmEntryChunk = esmOutput.find(chunk => chunk.name === entry);

  <script src=esmEntryChunk.fileName type="module" async></script>
  <script src=iifeEntryChunk.fileName nomodule async></script>
</rollup>
```

…and _boom:_ you now have [a `module`/`nomodule` setup](https://philipwalton.com/articles/using-native-javascript-modules-in-production-today/).

## Options

### `options.babelConfig`

Both the `.server()` and `.browser()` plugins accept this option.

You can manually override the builtin Babel configuration by passing a `babelConfig` object. By default, [Babel’s regular config file resolution](https://babeljs.io/docs/en/config-files) will be used.

```js
marko.browser({
  babelConfig: {
    presets: ["@babel/preset-env"]
  }
});
```

### `options.runtimeId`

Both the `.server()` and `.browser()` plugins accept this option. In fact, you _really_ want to use it with both simultaneously.

In some cases, you may want to embed multiple isolated copies of Marko on the page. (If you can’t think of why, then don’t worry about this option.)

Since Marko uses some `window` properties to initialize, multiple instances can cause issues. For example, by default Marko checks `window.$components` for server-rendered hydration. Usually you can change these `window` properties by [rendering with `{ $global: { runtimeId: "MY_MARKO_RUNTIME_ID" } }` as input](https://markojs.com/docs/rendering/#global-data) on the server, but since `@marko/rollup` usually writes the autoinitialization code for you, instead this plugin exposes a `runtimeId` option to automatically set `$global.runtimeId` to initialize properly in the browser:

```js
const runtimeId = "MY_MARKO_RUNTIME_ID";
// Make the `runtimeId` the same across `server` and `browser`, or it’ll error!
marko.server({ runtimeId });
marko.browser({ runtimeId });
```

### `options.serialize`

This option is only available for the `.browser()` plugin. It lets you inspect and transform the `output` chunks before they’re passed to [the `<rollup>` tag](#rollup-tag).

For example, if you _did_ want to include the `code` property from the Rollup chunk — say, to inline code small enough that it’s not worth the overhead of an HTTP request, you’d try something like the following:

```js
marko.browser({
  serialize(output) {
    return output.map(({ type, fileName, isEntry, code }) =>
      type === "asset"
        ? { type, fileName }
        : {
            type,
            name,
            isEntry,
            fileName,
            // only inline code chunks below 1kB
            inline: code.trim().length < 1024 && code
          }
    );
  }
});
```
