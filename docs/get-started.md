Get Started
===========
<!--{TOC}-->
# Installation

To install the `marko` module into your project you should use the following command:

```bash
npm install marko --save
```

To install the optional `markoc` command line interface to compile templates you can use the following command:

```bash
npm install marko --global
```

# Template Loading

Marko provides a [custom Node.js require extension](https://github.com/marko-js/marko/blob/master/node-require.js) that allows Marko templates to be `require`'d just like a standard JavaScript module. For example:

```javascript
// The following line installs the Node.js require extension
// for `.marko` files. Once installed, `*.marko` files can be
// required just like any other JavaScript modules.
require('marko/node-require').install();

// ...

// Load a Marko template by requiring a .marko file:
var template = require('./template.marko');
```

_NOTE: The Node.js require extension for Marko templates simply hooks into the Node.js module loading system to automatically compile `.marko` template files to CommonJS JavaScript modules when they are first required and the loaded `Template` instance is exported by the compiled template module. Internally, the implementation for `require('marko/node-require').install()` will use `require.extensions[extension] = function markoExtension(module, filename) { ... }` to register the Node.js require extension._

_NOTE 2: The require extension only needs to be installed once, but it does not hurt if it is installed multiple times. For example, it is okay if the main app registers the require extension and an installed module also registers the require extension. The require extension will always resolve the proper `marko` module relative to the template being required so that there can still be multiple versions of marko in use for a single app._

If you prefer to not rely on the require extension for Marko templates, the following code will work as well:

```javascript
var template = require('marko').load(require.resolve('./template.marko'));
```

A loaded Marko template has multiple methods for rendering the template as described in the next section.

# Template Rendering

## Callback API

```javascript
var template = require('./template.marko');

template.render({
        name: 'Frank',
        count: 30
    },
    function(err, output) {
        if (err) {
            console.error('Rendering failed');
            return;
        }

        console.log('Output HTML: ' + output);
    });
```

## Streaming API

```javascript
var template = require('./template.marko');
var out = require('fs').createWriteStream('index.html', {encoding: 'utf8'});

// Render the template to 'index.html'
template.stream({
        name: 'Frank',
        count: 30
    })
    .pipe(out);
```

Alternatively, you can render directly to an existing stream to avoid creating an intermediate stream:

```javascript
var template = require('./template.marko');
var out = require('fs').createWriteStream('index.html', {encoding: 'utf8'});

// Render the template to 'index.html'
template.render({
        name: 'Frank',
        count: 30
    }, out);
```

_NOTE:_ This will end the target output stream.

## Synchronous API

If you know that your template rendering requires no asynchronous rendering then you can use the synchronous API to render a template to a String:

```javascript
var template = require('./template.marko');

var output = template.renderSync({
        name: 'Frank',
        count: 30
    });

console.log('Output HTML: ' + output);
```

## Asynchronous Rendering API

```javascript
var fs = require('fs');
var template = require('./template.marko');

var out = marko.createWriter(fs.createWriteStream('index.html', {encoding: 'utf8'}));

// Render the first chunk asynchronously (after 1s delay):
var asyncOut = out.beginAsync();
setTimeout(function() {
    asyncOut.write('BEGIN ');
    asyncOut.end();
}, 1000);

// Render the template to the original writer:
template.render({
        name: 'World'
    },
    out);

// Write the last chunk synchronously:
out.write(' END');

// End the rendering out
out.end();
```

Despite rendering the first chunk asynchronously, the above program will stream out the output in the correct order to `index.html`:

```html
BEGIN Hello World! END
```

For more details, please see the documentation for the [async-writer](https://github.com/marko-js/async-writer) module.

# Hot Reloading Templates

During development it is very beneficial to not have to restart the server in order for changes to already loaded templates to be reflected. Marko supports hot reloading of templates on the server, but this feature must be explicitly enabled. Enabling hot reloading is documented as part of the following sample app: [marko-js-samples/marko-hot-reload](https://github.com/marko-js-samples/marko-hot-reload)