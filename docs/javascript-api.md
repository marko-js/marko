JavaScript API
==============

<!--{TOC}-->

# require('marko')

## Methods

### load(templatePath[, templateSrc][, options]) : Template

Loads a template instance for the given template path.
Both `templateSrc` and `options` are optional.

Template loading is supported in the browser and on
the server but the behavior differs slightly.

**On the server,**
if `templateSrc` is not provided then `templatePath` is expected
to be the path to a Marko template file. If `templateSrc`
is provided then it is expected to be a `String` and its value
will be the raw template. The `templatePath`
argument is only used for reporting error stack traces if
`templateSrc` is provided.

**In the browser,**
`templatePath` is expected to path to be the module name
of the compiled template and the module will be loaded
via `require(templatePath)`. The `templateSrc` argument
is ignored if the `load` function is called in the browser.

If `options` is provided then it is expected to be the last argument
and should be an `Object`.

Example usage for browser and server:

```javascript
var templatePath = require.resolve('./template.marko');
var template = require('marko').load(templatePath);
template.render({ name: 'Frank' }, process.stdout);
```

Example **server-side** template loading with `writeToDisk: false` option:

```javascript
var templatePath = './sample.marko';
var template = require('marko').load(templatePath, {writeToDisk: false});
template.render({ name: 'Frank' }, process.stdout);
```

Example **server-side** template compilation from string:

```javascript
var templatePath = 'sample.marko';
var templateSrc = '<div>Hello $!{data.name}</div>';
var template = require('marko').load(templatePath, templateSrc);
template.render({ name: 'Frank' }, process.stdout);
```

Supported `options`:

- `buffer` (`Boolean`) - If `true` (default) then rendered output will be
buffered until `out.flush()` is called or until rendering is completed.
Otherwise, the output will be written to the underlying stream as soon as
it is produced.

- `writeToDisk` (`Boolean`) - This option is only applicable to server-side
template loading. If `true` then compiled template will be written to disk.
If `false`, template will be compiled and loaded but the compiled source
will not be written to disk.


### createWriter([stream]) : AsyncWriter

Creates an instance of an [AsyncWriter](https://github.com/marko-js/async-writer) instance that can be used to support asynchronous rendering.

Example usage:

```javascript
var out = require('async-writer').create(process.stdout);
out.write('Hello');

var asyncOut = out.beginAsync();
setTimeout(function() {
	asyncOut.write('World')
	asyncOut.end();
}, 100);

require('./template.marko').render({}, out);
```

## Properties

### helpers

Global helpers passed to all templates. Available in compiled templates as the `__helpers` variable. It is not recommended to use this property to introduce global helpers (globals are evil).

### Template

The `Template` type.

# Template

## Methods

### renderToString(templateData) : String

Synchronously renders a template to a `String`.

_NOTE: If `out.beginAsync()` is called during synchronous rendering an error will be thrown._

Example usage:

```javascript
var template = require('./template.marko');
var html = template.renderToString({ name: 'Frank' });
console.log(html);
```

### renderToString(templateData, callback)

Asynchronously renders a template and provides the output to the provided callback function.

```javascript
var template = require('./template.marko');
template.renderToString({ name: 'Frank' }, function(err, html, out) {
	if (err) {
		// Handle the error...
	}

	console.log(html);
});
```

### render(templateData, stream.Writable)

Renders a template to a writable stream.

Example usage:

```javascript
var template = require('./template.marko');
template.render({ name: 'Frank' }, process.stdout);
```

### render(templateData, AsyncWriter)

Renders a template to an [AsyncWriter](https://github.com/marko-js/async-writer) instance that wraps an underlying stream.  When rendering to an AsyncWriter, the writer will not be ended, automatically.  You must call `out.end()` yourself.

Example usage:

```javascript
var template = require('./template.marko');
var out = require('marko').createWriter(process.stdout);
template.render({ name: 'Frank' }, out);
out.end();
```

_NOTE: The `out` argument will rarely be used, but it will be a reference to the [AsyncWriter](https://github.com/marko-js/async-writer) instance that was created to facilitate rendering of the template._

### stream(templateData) : stream.Readable

Returns a readable stream that can be used to read the output of rendering a template.

Example usage:

```javascript
var template = require('./template.marko');
template.stream({ name: 'Frank' }).pipe(process.stdout);
```

### renderSync(templateData) : String
> Deprecated in v3, use `renderToString(templateData)` instead.

### render(templateData, callback)
> Deprecated in v3, use `renderToString(templateData, callback)` instead.

# require('marko/compiler')

## Methods

### createCompiler(path, options) : TemplateCompiler

Creates a compiler for a given template path and given options.

### compile(src, path, options, callback)

Compiles a template given the loaded template source, the file system path of the source template and options.
Currently, compilation is synchronous so the callback is optional. In the future, we may allow asynchronous
compilation.

The result will be the compiled JavaScript source code.

### compileFile(path, options, callback)

Compiles a template given the loaded template source, the file system path of the source template and options.
Currently, compilation is synchronous so the callback is optional. In the future, we may allow asynchronous
compilation.

The result will be the compiled JavaScript source code.

### getLastModified(path, options, callback)

Compiles a template given the loaded template source, the file system path of the source template and options.
Currently, this method is synchronous so the callback is optional. In the future, we may allow this method to be asynchronous.

Returns the last modified time as a number.

### clearCaches()

Clears any internal caches used by the compiler. Needed for hot-reloading.

## Properties

### defaultOptions

The default options used by the compiler. These options can be changed as shown in the following sample code:

```javascript
require('marko/compiler').defaultOptions.writeToDisk = false;
```

Default options:

```javascript
{
    /**
     * If true, then the compiler will check the disk to see if a previously compiled
     * template is the same age or newer than the source template. If so, the previously
     * compiled template will be loaded. Otherwise, the template will be recompiled
     * and saved to disk.
     *
     * If false, the template will always be recompiled. If `writeToDisk` is false
     * then this option will be ignored.
     */
    checkUpToDate: true,
    /**
     * If true (the default) then compiled templates will be written to disk. If false,
     * compiled templates will not be written to disk (i.e., no `.marko.js` file will
     * be generated)
     */
    writeToDisk: true,

    /**
     * If true, then the compiled template on disk will assumed to be up-to-date if it exists.
     */
    assumeUpToDate: NODE_ENV == null ? false : (NODE_ENV !== 'development' && NODE_ENV !== 'dev')
};
```

# require('marko/defineRenderer')

Utility module for building a UI component with both a `renderer(input, out)` (for use as a Marko custom tag renderer) a `render(input)` method (for rendering the UI component and inserting the HTML in the DOM):


_src/components/app-hello/index.js_

```javascript
var defineRenderer = require('marko/defineRenderer');

module.exports = defineRenderer({
	template: require('./template.marko'),
	getTemplateData: function(input) {
		var firstName = input.firstName;
		var lastName = input.lastName;

		return {
			fullName: firstName + ' ' + lastName
		};
	}
})
```

The UI component can be used as a custom tag:

```xml
<app-hello first-name="John" last-name="Doe" />
```

And it can also be rendered and inserted into the DOM:

```javascript
require('./src/components/app-hello')
	.render({
		firstName: 'John',
		lastName: 'Doe'
	})
	.appendTo(document.body);
```

The return value of `render()` will be a [RenderResult](https://github.com/raptorjs/raptor-renderer#renderresult) instance.
