raptor-templates
================

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Overview](#raptor-templates)
- [Sample Templates](#sample-templates)
- [Installation](#installation)
- [Usage](#usage)
	- [Template Rendering](#template-rendering)
		- [Callback API](#callback-api)
		- [Streaming API](#streaming-api)
	- [Template Compilation](#template-compilation)
	- [Browser-side Rendering](#browser-side-rendering)
		- [Using the RaptorJS Optimizer](#using-the-raptorjs-optimizer)
		- [Using Browserify](#using-browserify)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Overview
Raptor Templates is an asynchronous, high performance, _HTML-based_ templating language that can be used in Node.js or in the browser. The directives in Raptor Template files are less obtrusive and more powerful because the templating language understands the structure of the HTML document.

# Sample Templates
A basic template with text replacement, looping and conditionals is shown below:
```html
Hello ${data.name}!

<ul c:if="notEmpty(colors)">
    <li style="color: $color" c:for="color in data.colors">
        $color
    </li>
</ul>
<div c:else>
    No colors!
</div>
```

Raptor Templates also supports custom tags so you can easily extend the HTML grammar to support things like the following:

```html
Welcome to Raptor Templates!

<ui:tabs>
    <ui:tab label="Overview"></ui:tab>
    <ui:tab label="Language Guide"></ui:tab>
    <ui:tab label="JavaScript API"></ui:tab>
</ui:tabs>
```

# Installation

To install the `raptor-templates` module into your project you should use the following command:
```bash
npm install raptor-templates --save
```

To install the optional `rhtmlc` command line interface to compile templates you can use the following command:
```bash
npm install raptor-templates --global
```

# Usage

## Template Rendering

### Callback API
```javascript
var raptorTemplates = require('raptor-templates');
raptorTemplates.render('template.rhtml', {
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

### Streaming API
```javascript
var raptorTemplates = require('raptor-templates');
var out = require('fs').createWriteStream('template.html', 'utf8');

// Render the template to 'template.rhtml'
raptorTemplates
    .stream('template.rhtml', {
        name: 'Frank',
        count: 30
    })
    .pipe(out);
```

## Browser-side Rendering

Given the following module code that will be used to render a template on the client-side:

_run.js_:
```javascript
var raptorTemplates = require('raptor-templates');
var templatePath = require.resolve('./hello.rhtml');
raptorTemplates.render(templatePath, {name: 'John'}, function(err, output) {
    document.body.innerHTML = output;
});
```

You can then bundle up the above program for running in the browser using either [raptor-optimizer](https://github.com/raptorjs3/raptor-optimizer) (recommended) or [browserify](https://github.com/substack/node-browserify).


### Using the RaptorJS Optimizer

The `raptor-optimizer` CLI can be used to generate a browser bundle that includes all application modules and all referenced Raptor Template files using a command similar to the following:
```bash
raptor-optimizer require-run:run.js --name browser
```

### Using Browserify

The `rhtmlify` transform for browserify must be enabled in order to automatically compile and include referenced Raptor Template files.

```bash
# Install the rhtmlify plugin from npm:
npm install rhtmlify --save

# Build the browser bundle:
browserify -t rhtmlify run.js > browser.js
```


## Template Compilation

The Raptor Templates compiler produces a CommonJS module as output. This makes it easier to load Raptor Template files from other modules.


You can either use the command line interface or the JavaScript API to compile a Raptor Template file. To use the CLI you must first install the `raptor-templates` module globally using the following command:
```bash
npm install raptor-templates --global
```

You can then compile single templates using the following command:
```bash
rhtmlc hello.rhtml
```

This will produce a file named `hello.rhtml.js` next to the original file.

You can also compile multiple templates using a glob pattern as shown in the following sample command:

```bash
rhtmlc **/*.rhtml
```

Alternatively, you can use the JavaScript API to compile a module as shown in the following sample code:
```javascript
require('raptor-templates/compiler').compileFile(path, function(err, src) {
    // Do something with the compiled output 
});
```




