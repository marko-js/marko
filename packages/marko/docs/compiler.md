# Compiler

The Marko compiler tries its best to get out of your way and for the most part you will only see references to it in the various Marko ecosystem plugins for tools like webpack, Rollup, and others.

The compiler also provides a series of hooks you can tap into to bend the Marko language to your will.

> **Note:**
> It is best to use existing official plugins, and the standard tag library when possible.

## Compile API

The compile API is relatively straightforward and always you to take any Marko file and turn it into executable JavaScript.

```ts
import * as compiler from "@marko/compiler";

type CompileOptions = typeof import("@marko/compiler/src/config.js");

type CompileResult = {
  meta: Record<string, unknown>; // Meta data gathered while compiling.
  map?: SourceMap; // A sourcemap.
  code: string; // The translated code.
};
```

### `compiler.configure(options: CompileOptions)`

The `configure` API will override the default compiler options. For the list of options (applicable to all `compile*` functions) [see the source code](https://github.com/marko-js/marko/tree/master/packages/compiler/src/config.js).

```js
compiler.configure({ output: "dom" });
```

### `compiler.compile(src: string, filename: string, options?: CompileOptions): Promise<CompileResult>`

### `compiler.compileSync(src: string, filename: string, options?: CompileOptions): CompileResult`

Both the `compile` and `compileSync` APIs will translate the provided Marko source code into JavaScript.
The only difference between the two (as the names likely suggest) is that `compile` will use async APIs under the hood while `compileSync`
will use sync APIs.

```js
const asyncResult = await compiler.compile(
  "<h1>Hello!</>",
  "./src/index.marko",
  { modules: "cjs" }
);
const syncResult = compiler.compileSync("<h1>Hello!</>", "./src/index.marko", {
  modules: "cjs"
});
```

### `compiler.compileFile(filename: string, options?: CompileOptions): Promise<CompileResult>`

### `compiler.compileFileSync(filename: string, options?: CompileOptions): CompileResult`

`compileFile` and `compileFileSync` act the same as their counterparts `compile` and `compileSync` with the exception being that you do not
need to pass in the source content. Instead, these APIs will load the file from disk for you automatically.

```js
const asyncResult = await compiler.compileFile("./src/index.marko", {
  modules: "cjs"
});
const syncResult = compiler.compileFileSync("./src/index.marko", {
  modules: "cjs"
});
```

## Hooks

![Marko compiler hooks](./compiler-hooks.png)

The Marko compiler runs through a series of stages to produce the final JavaScript output.
These stages are intended for different aspects of processing the template and can be hooked into using [`marko.json`](./marko-json.md) configuration.

All compiler hooks must export a visitor which will receive a [babel NodePath](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#paths) with a `MarkoTag` node.

The hook will also receive a `types` object that matches the [@babel/types](https://babeljs.io/docs/en/babel-types) API extended with the [Marko AST types](#marko-ast). You can also get a reference to this by importing the `@marko/babel-types` module.

Here is an example hook:

```js
module.exports = (tag, t) => {
  if (t.isStringLiteral(tag.node.name)) {
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

### Transform

The transform stage of the compiler is meant for userland transformations of Marko code, into other Marko code. Think of it like [babel.transform](https://babeljs.io/docs/en/babel-core#transform) for Marko templates.
At this stage, you are given a fully parsed and migrated AST to do what you will with.

To hook into the `transform` stage you can use the `transform` option in the `marko.json` file.

### Translate

Finally, we have the translation stage. This stage is Marko's "Rosetta Stone" and is responsible for turning your beautiful Marko code into the optimized JavaScript you'd rather avoid writing.

To hook into the `translate` stage you can use the `translate` option in the `marko.json` file.

## Utilities

The [`@marko/babel-utils`](https://github.com/marko-js/marko/tree/master/packages/babel-types/index.d.ts) package exposes a handful of utilities for performing various tasks on the [Marko AST](#marko-ast).

## Marko AST

You can check out the AST extensions that Marko makes [in the source code](https://github.com/marko-js/marko/tree/master/packages/babel-types/src/types/definitions.js).
For AST creation and assertion utilities you can also import Marko's superset of `@babel/types` through the `@marko/babel-types module`.
