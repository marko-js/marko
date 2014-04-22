raptor-render-context
=====================
The `raptor-render-context` module makes it possible to asynchrously render to an output stream while still flushing out bytes in the correct order. That is, the `raptor-render-context` module allow you to render parts of a stream out of order. The `raptor-render-context` module does the hard work of ensuring that the output bytes are flushed in the correct order. Content that is rendered before it is ready to be flushed is buffered and immediately flushed as soon it is ready.

An asynchronous render context is helpful if during rendering you have to wait for an asynchronous operation to complete before writing to part of a stream. As an example, you might start rendering a page to produce HTML and then get to a part of the page that depends on data that has not yet been loaded. With that use case, you can continue to render the remainder of the page and still pipe out the stream to the response. The asynchronous render context will ensure that the bytes are flushed out in the correct order.

# Installation

```
npm install raptor-render-context --save
```

# Usage

The simplest usage of an asynchronous render context is shown below:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var context = require('raptor-render-context').create(stream)
    .on('error', function(err) {
        // Something went wrong during rendering
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

context.write('A');
context.write('B');
context.write('C');
context.end();
```

Asynchronous, out-of-order rendering to an output stream is shown below:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var context = require('raptor-render-context').create(stream)
    .on('error', function(err) {
        // Something went wrong during rendering
    })
    .on('end', function() {
        // Value of output: "ABC"
    });
    
context.write('A');

var asyncContext = context.beginAsync();
setTimeout(function() {
    asyncContext.write('B');
    asyncContext.end();
}, 1000);

context.write('C');
context.end();
```

You can also pipe another stream to a render context. For example, the following code illustrates how multiple templates could be rendered to the same asynchronous render context:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var context = require('raptor-render-context').create(stream)
    .on('error', function(err) {
        // Something went wrong during rendering
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

context.write('A');

var asyncContext = context.beginAsync();
require('fs').createReadStream('b.txt', 'utf8')
    .pipe(context);

context.write('C');
context.end();
```