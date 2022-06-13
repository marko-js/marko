# Compiler

> **Note:**
> The compiler is an advanced API intended for integrating with build tools (webpack, rollup, etc.) and experimenting with new language features in userland. It's best to use existing official plugins and the standard tag library when possible.

## Compile API

### Compile Functions

The compile functions take an input Marko template [`CompileOptions`](#options)and produce a `CompileResult` containing the executable JavaScript:

```ts
type CompileResult = {
  meta: Record<string, unknown>; // Meta data gathered while compiling
  map?: SourceMap; // A sourcemap
  code: string; // The translated code
};
```

#### `compiler.compileFile(filename: string, options?: CompileOptions): Promise<CompileResult>`

#### `compiler.compileFileSync(filename: string, options?: CompileOptions): CompileResult`

`compileFile` and `compileFileSync` load the source template at `filename` from disk and translate it into JavaScript.

```js
import * as compiler from "@marko/compiler";

const asyncResult = await compiler.compileFile("./src/index.marko", {
  modules: "cjs"
});
const syncResult = compiler.compileFileSync("./src/index.marko", {
  modules: "cjs"
});
```

#### `compiler.compile(src: string, filename: string, options?: CompileOptions): Promise<CompileResult>`

#### `compiler.compileSync(src: string, filename: string, options?: CompileOptions): CompileResult`

`compile` and `compileSync` allow passing the source template as a string rather than loading from disk. The `filename` location is used for resolving taglibs and imports, but does not have to actually exist on disk.

```js
import * as compiler from "@marko/compiler";

const asyncResult = await compiler.compile(
  "<h1>Hello!</>",
  "./src/index.marko",
  { modules: "cjs" }
);
const syncResult = compiler.compileSync("<h1>Hello!</>", "./src/index.marko", {
  modules: "cjs"
});
```

### Options

Configuration options may be passed when calling the above compile functions or the compiler may be configured globally, overriding the default compiler options:

```js
import * as compiler from "@marko/compiler";
compiler.configure({ output: "dom" });
```

#### `output`

Type: `string`<br>
Default: `"html"`

- `"html"` - compiles the template to JavaScript that generates HTML strings.
- `"dom"` - compiles the template to JavaScript that generates DOM nodes.
- `"hydrate"` - similar to DOM, but only includes the assets & components needed in the browser, assuming the page was rendered on the server.
- `"migrate"` - only runs migrations (not transforms or translation) and returns the migrated template code.
- `"source"` - parses Marko file without running any migrations / transforms. (useful with `ast: true`)

When using output `dom` or `hydrate`, you should also specify a [`resolveVirtualDependency`](#resolvevirtualdependency) function.

#### `code`

Type: `boolean`<br>
Default: true

If set to false, Marko will not generate the compiled source code string.

#### `ast`

Type: `boolean`<br>
Default: false

Set to true to have the compiler provide the `ast` in it's output.

#### `runtimeId`

Type: `string`<br>
Default: undefined

Optionally use to override the runtime id (used to differentiate multiple copies of Marko on the same page) passed to `marko/components.init(runtimeId)` when compiling in the `hydrate` output.

#### `writeVersionComment`

Type: `boolean`<br>
Default: `true`

Whether the version should be written to the template as a comment e.g.

```js
// Compiled using marko@x.x.x - DO NOT EDIT
```

#### `ignoreUnrecognizedTags`

Type: `boolean`<br>
Default: `false`

Whether unrecognized tags should be silently ignored rather than throwing a compile error. The the ignored tag will be output as a native element. Some test setups use this alongside `@marko/compiler/taglib`'s `excludeDir` and `excludePackage` to simulate "shallow" rendering.

#### `sourceMaps`

Type: `boolean` or `string`<br>
Default: `false`

Whether source maps should be output with the compiled templates.

- When `true` a `map` property will be available on the compile result.
- When `"inline"` the sourcemap will be inlined as a comment in the output code.
- When `"both"` both of the above will be used.

#### `meta`

Type: `boolean`<br>
Default: `false,

_Deprecated_. This option inlines the metadata in the output Javascript code. Metadata should be accessed instead from the `CompileResult`.

#### `fileSystem`

Type: typeof [`fs`](https://nodejs.org/api/fs.html) (specifically read APIs)<br>
Default: Cached `fs`

Use a different file system object (eg. webpack's [CachedInputFileSystem](https://github.com/webpack/enhanced-resolve/blob/f08fe3f1a22c90c722eca14b38a9300ad00c62e8/lib/CachedInputFileSystem.js) or [`arc-fs`](https://github.com/eBay/arc/tree/master/packages/arc-fs))

#### `modules`

Type: `string` (`"esm"` or `"cjs"`)<br>
Default: `"esm"`

By default Marko outputs ES Modules, you can optionally specify commonjs.

#### `optimize`

Type: `boolean`<br>
Default: [environment based](https://github.com/marko-js/marko/blob/0f212897d2d3ec30b12c2f18ba950818bccb83b4/packages/compiler/src/babel-plugin/index.js#L277-L284) (`false` in development, `true` in production)

Enables production mode optimizations

#### `resolveVirtualDependency`

Type:

```ts
(
  filename: string,
  dep: {
    code: string;
    virtualPath: string;
    map?: SourceMap;
  }
) => string;
```

Default: `undefined`

This option should be set when `dom` or `hydrate` output is specified. Since Marko templates can represent multiple output files (eg. JS renderer, CSS styles), we need to be able to treat a single source `.marko` file as multiple virtual files.

Different build tools have different mechanisms for handling virtual files. You should pass a function that returns a virtual path that can be handled by your build tool.

##### Example based on `@marko/webpack/loader`:

```js
// lookup is shared between resolveVirtualDependency and markoLoader
const virtualSources = new Map();

function resolveVirtualDependency(filename, { virtualPath, code, map }) {
  const virtualFilename = `${filename}?virtual=${virtualPath}`;

  // Add the virtual source to the lookup
  // to be later accessed by the loader
  virtualSources.set(virtualFilename, { code, map });

  // Generate the webpack path, from right to left...
  // 1. Pass the virtualFilename so webpack can find the real file
  //    located at sourceFilename, but the virtualPath is also present
  //    (eg. "./index.marko?virtual=./index.marko.css")
  // 2. Use an inline loader to run this file through @marko/webpack/loader
  //    https://webpack.js.org/concepts/loaders/#inline
  // 3. Use an inline matchResource to redefine this as the virtualPath
  //    which allows the appropriate loaders to match the virtual dependency
  //    https://webpack.js.org/api/loaders/#inline-matchresource
  return `${virtualPath}!=!@marko/webpack/loader!${virtualFilename}`;
}

export default function markoLoader(source) {
  let code, map;

  if (virtualSources.has(this.resource)) {
    // If the resource has a ?virtual query param, we should
    // find it in the lookup and then return the virtual code
    // rather than performing the normal compilation
    { code, map } = virtualSources.get(this.resource);
    virtualSources.delete(this.resource);
  } else {
    // The default behavior is to compile the template in dom output mode
    { code, map } = markoCompiler.compileSync(source, this.resourcePath, {
      output: "dom",
      resolveVirtualDependency
    });
  }

  return this.callback(null, code, map);
}
```

#### `hydrateIncludeImports`

This option is only used for `output: "hydrate"`. By default any `import`'s in server only files are not included in the hydrate output. However for some assets, for example stylesheets, it is useful to have them still be included in hydrate mode.

The `hydrateIncludeImports` option allows you to provide a function which receives an import path, or a regexp to match against that path which tells Marko to include that import in the hydrate mode output.

The default regexp includes a list of common known asset file extensions and is as follows:

```js
/\.(css|less|s[ac]ss|styl|png|jpe?g|gif|svg|ico|webp|avif|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/;
```

Looking at a partial Marko file such as:

```marko
import "./bar"
import "./foo.css";
import "./baz.wasm";

<div/>
```

In the `hydrate` output, with the default `hydrateIncludeImports`, would only cause `./foo.css` to be loaded in the browser.

#### `cache`

Type: typeof [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) (specifically, `get` is required)<br>
Default: `new Map()`

Compiling a Marko template may require other (used) Marko templates to compile.
To prevent compiling templates more than once, most of the compilation is cached.

The default cache strategy is to clear the cache on every macrotask.
If the default cache is overwritten it is up to the user to determine when the
cache is cleared.

#### `babelConfig`

Type: see [babel options](https://babeljs.io/docs/en/options)<br>
Default: babel defaults, plus

```js
{
  filename,
  sourceType: "module",
  sourceMaps: config.sourceMaps
}
```

#### `translator`

Type: `{ analyze: Visitor, transform:Visitor }`<br>
Default: [autodiscovers](https://github.com/marko-js/marko/blob/0f212897d2d3ec30b12c2f18ba950818bccb83b4/packages/compiler/src/config.js#L46-L89) a translator package starting with `@marko/translator-` or `marko-translator-`

The translator is a collection of transforms that translates the Marko AST into a valid JavaScript AST based on the `output` option. There is a default translator that ships with Marko, but this option may be used to switch to experimental translators for alternate runtimes.

The translator is an object with two [Babel Visitors](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#visitors): `analyze` and `transform`. The result of the analyze visitor is cached and may be requested by other templates. The transform visitor transforms the AST to it's final JavaScript AST.

See [`@marko/translator-default`](https://github.com/marko-js/marko/blob/11a10f82cdb5389880e6deca5f77d17727acb831/packages/translator-default/src/index.js) for a reference implementation.

## Hooks

![Marko compiler hooks](./compiler-hooks.png)

The Marko compiler runs through a series of stages to produce the final JavaScript output.
These stages are intended for different aspects of processing the template and can be hooked into using [`marko.json`](./marko-json.md) configuration.

All compiler hooks must export a visitor which will receive a [babel NodePath](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#paths) with a `MarkoTag` node.

The hook will also receive a `types` object that matches the [@babel/types](https://babeljs.io/docs/en/babel-types) API extended with the [Marko AST types](#marko-ast). You can also get a reference to this by importing `{ types }` from the `@marko/compiler` module.

Here is an example hook:

```js
export default (tag, types) => {
  if (types.isStringLiteral(tag.node.name)) {
    console.log(`Found a tag called ${tag.node.name.value}`);
    tag.remove();
  }
};
```

Hooks can also export an `enter` (alias of `default`) and an `exit` function. These map to [@babel/traverse's](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse) `enter` and `exit` methods.

### Parse

The first step to Marko's compilation is to take the raw text of your Marko template and convert it into an "Abstract Syntax Tree".
If you've not heard the term before, put simply it is just an object representation of your code.

```marko
<h1>Hello!</h1>
```

Will roughly become

```json
{
  "type": "MarkoTag",
  "name": {
    "type": "StringLiteral",
    "value": "h1"
  },
  "body": {
    "type": "MarkoTagBody",
    "body": [
      {
        "type": "MarkoText",
        "value": "Hello!"
      }
    ]
  }
}
```

This might look a bit verbose, but we are aiming for completeness, not terseness in this output.

Marko takes a two-step parsing approach to remain flexible with the ever-changing syntax of JavaScript.
The first pass of parsing happens in our very own [htmljs-parser](https://github.com/marko-js/htmljs-parser), which understands the HTML parts of your template.

For JavaScript expressions, Marko defers to [@babel/parser](https://babeljs.io/docs/en/babel-parser). The [Marko AST](#marko-ast) above is a superset of what would be returned from `@babel/parser`.

To hook into the `parse` stage you can use the `parse` option in the `marko.json` file.
The `parse` hook deviates from the rest of the compiler hooks in that it does not support the `enter` & `exit` API and you _must return_ a replacement AST node.

### Migrate

That's right, Marko has _ first-class_ support for migrations. This compiler hook allows for translating outdated APIs into their modern counterparts, leaving the rest of the compilation non the wiser.
These migrations run automatically in the background and can be written to disk when users are ready by running the [`@marko/migrate` CLI command](https://github.com/marko-js/cli/blob/master/packages/migrate/README.md).

To hook into the `migrate` stage you can use the `migrate` option in the `marko.json` file.

> **Note:**
> To make the compiler to stop at this point and output the migrated template rather than continuing on to produce the JavaScript output, pass `"migrate"` as the value for the `output` compilation option.

### Transform

The transform stage of the compiler is meant for userland transformations of Marko code, into other Marko code. Think of it like [babel.transform](https://babeljs.io/docs/en/babel-core#transform) for Marko templates.
At this stage, you are given a fully parsed and migrated AST to do what you will with.

To hook into the `transform` stage you can use the `transform` option in the `marko.json` file.

### Analyze

Next up is the analyze stage. This stage is intended to do non mutative analysis of the entire AST in a way that is cached in memory.
Meta data should be stored on the `.extra` property of nodes and typically read in the [translate](#translate) stage, or using the child template analysis helpers.

To hook into the `analyze` stage you can use the `analyze` option in the `marko.json` file.

### Translate

Finally, we have the translation stage. This stage is Marko's "Rosetta Stone" and is responsible for turning your beautiful Marko code into the optimized JavaScript you'd rather avoid writing.

To hook into the `translate` stage you can use the `translate` option in the `marko.json` file.

## Utilities

The [`@marko/babel-utils`](https://github.com/marko-js/marko/tree/master/packages/babel-utils/index.d.ts) package exposes a handful of utilities for performing various tasks on the [Marko AST](#marko-ast).

## Marko AST

Marko extends Babel's AST types adding nodes for `MarkoTag`, `MarkoAttribute`, etc.
For AST creation and assertion utilities you can import Marko's superset of `@babel/types` through the compiler:

```js
import { types } from "@marko/compiler";
```

The [`@babel/types` documentation](https://babeljs.io/docs/en/babel-types) shows all the utility methods available for the Babel AST nodes. When importing `types` from `@marko/compiler` you get the same types of utilities for the Marko nodes as well (`types.markoTag`, `types.isMarkoTag`, `types.assertMarkoTag`, etc.).

For a full list of definitions, view the source code for Babel and Marko:

- [Babel's Core Definitions](https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js)
- [Babel's Extended Definitions](https://github.com/babel/babel/tree/master/packages/babel-types/src/definitions)
- [Marko's Definitions](https://github.com/marko-js/marko/blob/master/packages/compiler/src/babel-types/types/definitions.js)
