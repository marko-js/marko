async-writer
============

The `async-writer` module makes it possible to asynchronously write to an output stream while still flushing out bytes in the correct order. That is, the `async-writer` module allows you to write parts of a stream out of order and the `async-writer` module does the hard work of ensuring that the output bytes are flushed in the correct order. Content that is written before it is ready to be flushed is buffered and immediately flushed as soon it is ready.

An async writer is helpful if during writing you have to wait for an asynchronous operation to complete before writing to part of a stream. As an example, you might start writing a page to produce HTML and then get to a part of the page that depends on data that has not yet been loaded. With that use case, you can continue to write the remainder of the page and still pipe out the stream to the response. The async writer will ensure that the bytes are flushed out in the correct order.

# Installation

```
npm install async-writer --save
```

# Usage

The simplest usage of an async writer is shown below:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var out = require('async-writer').create(stream)
    .on('error', function(err) {
        // Something went wrong during writing
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

out.write('A');
out.write('B');
out.write('C');
out.end();
```

Asynchronous, out-of-order writing to an output stream is shown below:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var out = require('async-writer').create(stream)
    .on('error', function(err) {
        // Something went wrong during writing
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

out.write('A');

var asyncOut = out.beginAsync();
setTimeout(function() {
    asyncOut.write('B');
    asyncOut.end();
}, 1000);

out.write('C');
out.end();
```

You can also pipe another stream to a async writer. For example, the following code illustrates how multiple templates could be written to the same async writer:

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

var out = require('async-writer').create(stream)
    .on('error', function(err) {
        // Something went wrong during writing
    })
    .on('end', function() {
        // Value of output: "ABC"
    });

out.write('A');

var asyncOut = out.beginAsync();
require('fs').createReadStream('b.txt', 'utf8')
    .pipe(asyncOut);

out.write('C');
out.end();
```

# Debug mode

Just replace `require('async-writer')` with `require('async-writer/debug')` and you'll get debug output and diagrams of the current state.