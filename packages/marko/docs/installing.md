# Installation

## Trying out Marko

If you just want to play around with Marko in the browser, head on over to our [Try Online](https://markojs.com/try-online) feature. You'll be able to develop a Marko application right in your browser.

## Creating new apps (Recommended)

If you're starting from scratch, you can use Marko's [CLI](https://github.com/marko-js/cli) commands to quickly create a starter app:

```bash
npx @marko/create
```

This will use an interactive [CLI](https://github.com/marko-js/cli) to automatically create a project for you using the pre-made starter template of your choosing. The `basic` template is the most minimal and the easiest way to get started. It uses our batteries-included `@marko/build` and `@marko/serve` tools that handle building, bundling, and serving your web application. These projects are config-free with built-in file based routing and automatic code reloading.

## Custom Bundling

Marko relies on JavaScript bundlers to package your code on both the client and the server. This is because Marko's client and server bundling works closely together to optimize the smallest client bundles and handle shared assets properly.

Using the CLI is still the easiest way to get started even when you want to get your hands dirty tweaking every last part of your config files. Marko currently supports Webpack, Lasso, and Rollup.

### Webpack

[Webpack Integration Docs](https://markojs.com/docs/webpack/)

[Marko Webpack Plugin](https://github.com/marko-js/webpack)

[Webpack Example](https://github.com/marko-js/examples/tree/master/examples/webpack-express)

CLI Command: `npx @marko/create --template webpack-express`

### Lasso

[Lasso Integration Docs](https://markojs.com/docs/lasso/)

[Marko Lasso Plugin](https://github.com/lasso-js/lasso-marko)

[Lasso Example](https://github.com/marko-js/examples/tree/master/examples/lasso-express)

CLI Command: `npx @marko/create --template lasso-express`

### Rollup

[Rollup Integration Docs](https://markojs.com/docs/rollup/)

[Marko Rollup Plugin](https://github.com/marko-js/rollup)

<!-- [Rollup Example](https://github.com/marko-js/examples/tree/master/examples/rollup)

CLI Command: `npx @marko/create --template rollup` -->
