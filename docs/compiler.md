Marko Compiler
====================

The Marko compiler produces a Node.js-compatible, CommonJS module as output. This output format has the advantage that compiled template modules can benefit from a context-aware module loader and templates can easily be transported to work in the browser using [Lasso.js](https://github.com/lasso-js/lasso) or [Browserify](https://github.com/substack/node-browserify).

The `marko` module will automatically compile templates loaded by your application on the server, but you can also choose to precompile all templates. This can be helpful as a build or test step to catch errors early.

You can either use the command line interface or the JavaScript API to compile a Marko template file. To use the CLI you must first install the `marko` module globally using the following command:
```bash
npm install marko --global
```

You can then compile single templates using the following command:
```bash
markoc hello.marko
```

This will produce a file named `hello.marko.js` next to the original file.

You can also recursively compile all templates in the current directory (the `node_modules` and `.*` directories will be ignored by default)

```bash
markoc .
```

You can also specify multiple directories or files
```bash
markoc foo/ bar/ template.marko
```

To delete all of the generated `*.marko.js` files you can add the `--clean` argument. For example:
```bash
markoc . --clean
```


Alternatively, you can use the JavaScript API to compile a module as shown in the following sample code:
```javascript
require('marko/compiler').compileFile(path, function(err, src) {
    // Do something with the compiled output
});
```

# Sample Compiled Template

```javascript
function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      out.w('<ul>');

      forEach(data.colors, function(color) {
        out.w('<li style="color: ' +
          escapeXmlAttr(color) +
          '">' +
          escapeXml(color) +
          '</li>');
      });

      out.w('</ul>');
    }
    else {
      out.w('<div>No colors!</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);
```

The compiled output is designed to be both extremely readable and minifiable. The minified code is shown below:


```javascript
function create(a){var d=a.ne,c=a.x,e=a.f,f=a.xa;return function(a,b){b.w("Hello "+c(a.name)+"! ");d(a.colors)?(b.w("<ul>"),e(a.colors,function(a){b.w('<li style="color: '+f(a)+'">'+c(a)+"</li>")}),b.w("</ul>")):b.w("<div>No colors!</div>")}}(module.exports=require("marko").c(__filename)).c(create);
```

_File size: 223 bytes gzipped (300 bytes uncompressed)_