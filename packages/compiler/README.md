# @marko/compiler

Compiles [Marko](https://markojs.com/) templates into JavaScript modules.

The [bundler integrations](https://markojs.com/docs/introduction/integrations#bundlers) call the compiler for every template, so applications rarely use it directly. It is the API for building a bundler integration, a test transform, or other tooling around Marko templates.

```sh
npm install @marko/compiler
```

```js
import * as compiler from "@marko/compiler";

const { code, map } = await compiler.compileFile("./src/card.marko", {
  output: "dom",
  sourceMaps: true,
});
```

See the [Compiler API reference](https://markojs.com/docs/reference/compiler) for the compile functions, their options and the compile result.
