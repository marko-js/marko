JavaScript API
==============

<!--{TOC}-->

# require('marko')

## Methods

### load(templatePath[, options]) : Template

Loads a template instance for the given template path.

Example usage:

```javascript
var templatePath = require.resolve('./template.marko');
var template = require('marko')require('marko')(templatePath);
template.render({ name: 'Frank' }, process.stdout);
```

Supported `options`:

- `buffer` (`boolean`) - If `true` (default) then rendered output will be buffered until `out.flush()` is called or until rendering is completed. Otherwise, the output will be written to the underlying stream as soon as it is produced.

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

### render(templatePath, templateData, stream.Writable)

Deprecated. Do not use.

### render(templatePath, templateData, callback)

Deprecated. Do not use.

### stream(templatePath, templateData) : stream.Readable

Deprecated. Do not use.

## Properties

### helpers

Global helpers passed to all templates. Available in compiled templates as the `__helpers` variable. It is not recommended to use this property to introduce global helpers (globals are evil).

### Template

The `Template` type.

# Template

## Methods

### renderSync(templateData) : String

Synchronously renders a template to a `String`.

_NOTE: If `out.beginAsync()` is called during synchronous rendering an error will be thrown._

Example usage:

```javascript
var template = require('./template.marko');
var html = template.renderSync({ name: 'Frank' });
console.log(html);
```

### render(templateData, stream.Writable)

Renders a template to a writable stream.

Example usage:

```javascript
var template = require('./template.marko');
template.render({ name: 'Frank' }, process.stdout);
```

### render(templateData, AsyncWriter)

Renders a template to an [AsyncWriter](https://github.com/marko-js/async-writer) instance that wraps an underlying stream.

Example usage:

```javascript
var template = require('./template.marko');
var out = require('marko').createWriter(process.stdout);
template.render({ name: 'Frank' }, out);
```

### render(templateData, callback)

Asynchronously renders a template and provides the output to the provided callback function.

```javascript
var template = require('./template.marko');
template.render({ name: 'Frank' }, function(err, html, out) {
	if (err) {
		// Handel the error...
	}

	console.log(html);
});
```

_NOTE: The `out` argument will rarely be used, but it will be a reference to the [AsyncWriter](https://github.com/marko-js/async-writer) instance that was created to facilitate rendering of the template._

### stream(templateData) : stream.Readable

Returns a readable stream that can be used to read the output of rendering a template.

Example usage:

```javascript
var template = require('./template.marko');
template.stream({ name: 'Frank' }).pipe(process.stdout);
```