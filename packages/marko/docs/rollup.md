# Marko + Rollup

The [@marko/rollup](https://github.com/marko-js/rollup) transform can be used in conjunction with [rollup](https://github.com/rollup/rollup) to automatically compile Marko templates that are required by other modules. An official Rollup plugin will be coming soon.

The [rollup](https://github.com/marko-js/examples/tree/master/examples/rollup) sample app demonstrates how to use Marko with Rollup. Run `npx @marko/create --template rollup` to use this sample as a starting point for a new app.

## Manual Installation

```bash
npm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @marko/rollup --save-dev
```

## Configuration

The following is the minimal recommend configuration to use Rollup with Marko:

_rollup.config.js_

```js
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import marko from "@marko/rollup";

export default {
  ...,
  plugins: [
    marko(),
    nodeResolve({
      browser: true,
      extensions: [".js", ".marko"]
    }),
    // NOTE: Marko 4 compiles to commonjs, this plugin is also required.
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

## Usage

```bash
# Development:
rollup -c rollup.config.js

# Production:
NODE_ENV=production rollup -c rollup.config.js
```
