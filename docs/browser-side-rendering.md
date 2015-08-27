Browser-side Rendering
======================

Given the following module code that will be used to render a template on the client-side:

_run.js_:
```javascript
var template = require('./hello.marko');

template.render({
        name: 'John'
    },
    function(err, output) {
        document.body.innerHTML = output;
    });
```

You can then bundle up the above program for running in the browser using either [Lasso.js](https://github.com/lasso-js/lasso) (recommended) or [browserify](https://github.com/substack/node-browserify).


# Using Lasso.js

The `lasso` CLI can be used to generate resource bundles that includes all application modules and all referenced Marko template files using a command similar to the following:
```bash
# First install the lasso and the lasso-marko plugin
npm install lasso --global
npm install lasso-marko

lasso --main run.js --name my-page --plugins lasso-marko
```

This will produce a JSON file named `build/my-page.html.json` that contains the HTML markup that should be used to include the required JavaScript and CSS resources that resulted from the page optimization.

Alternatively, you can inject the HTML markup into a static HTML file using the following command:

```bash
lasso --main run.js --name my-page --plugins lasso-marko --inject-into my-page.html
```


# Using Browserify

The `markoify` transform for browserify must be enabled in order to automatically compile and include referenced Marko template files.

```bash
# Install the markoify plugin from npm:
npm install markoify --save

# Build the browser bundle:
browserify -t markoify run.js > browser.js
```