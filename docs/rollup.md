# Marko + Rollup

The [markoify](https://github.com/marko-js/markoify) transform can be used in conjunction with [rollup](https://github.com/rollup/rollup) to automatically compile Marko templates that are required by other modules. An official Rollup plugin will be coming soon.

The [marko-rollup](https://github.com/marko-js-samples/marko-rollup) sample app is a great starting point if you would like to use Marko with Rollup.

## Installation

```bash
npm install envify --save-dev
npm install markoify --save-dev
npm install rollup --save-dev
npm install rollup-plugin-browserify-transform --save-dev
npm install rollup-plugin-commonjs --save-dev
npm install rollup-plugin-node-resolve --save-dev
```

## Configuration

The following is the minimal recommend configuration to use Rollup with Marko:

_rollup.config.js_

```js
import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import markoify from 'markoify';
import envify from 'envify';
import path from 'path';

export default {
    entry: path.join(__dirname, 'client.js'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        browserifyPlugin(markoify),
        browserifyPlugin(envify),
        nodeResolvePlugin({
            jsnext: true,  // Default: false
            main: true,  // Default: true
            browser: true,  // Default: false
            preferBuiltins: false,
            extensions: [ '.js', '.marko' ]
        }),
        commonjsPlugin({
            include: [ 'node_modules/**', '**/*.marko', '**/*.js'],
            extensions: [ '.js', '.marko' ]
        })
    ],
    dest: path.join(__dirname, './dist/bundle.js')
};
```

## Usage

```bash
# Development:
rollup -c rollup.config.js

# Production:
NODE_ENV=production rollup -c rollup.config.js
```
