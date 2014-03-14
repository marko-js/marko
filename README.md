raptor-render-context
=====================
The `raptor-render-context` module makes it possible to asynchrously render to the same output stream or writer. The `raptor-render-context` module does the hard work of ensuring that the output bytes are flushed in the correct order. Content that is rendered before it is ready to be flushed is buffered and immediately flushed as soon it is ready.

# Installation

```
npm install raptor-render-context --save
```

# Usage

```javascript
var through = require('through');

var output = '';
var stream = through(function write(data) {
        output += data;
    });

require('raptor-render-context').create(stream);
    .on('error', function(err) {
        // Something went wrong during rendering
    })
    .on('end', function() {
        // Value of output: "ABC"
    })
    .write('A')
    .beginAsync(function(context, done) {
        setTimeout(function() {
            context.write('B');
        }, 1000);
    })
    .write('C')
    .end();
```