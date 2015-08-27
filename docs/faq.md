Frequently Asked Questions
==========================

{TOC}

# Is Marko ready for production use?

Yes, Marko has been battle-tested at [eBay](http://www.ebay.com/) and other companies for well over a year and has been designed with high performance, scalability, security and stability in mind.

# Can templates be compiled on the client?

Possibly, but it is not recommended and it will likely not work in older browsers. The compiler is optimized to produce small, high performance compiled templates, but the compiler itself is not small and it comes bundled with some heavyweight modules such as a [JavaScript HTML parser](https://github.com/fb55/htmlparser2). In short, always compile your templates on the server. [Lasso.js](https://github.com/lasso-js/lasso) is recommended for including compiled templates as part of a web page.

# Which web browsers are supported?

The runtime for template rendering is supported in all web browsers. If you find an issue please report a bug.

# How can Marko be used with Express?

The recommended way to use Marko with Express is to bypass the Express view engine and instead have Marko render directly to the response stream as shown in the following code:

```javascript
var template = require('./template.marko');

app.get('/profile', function(req, res) {
    template
        .render({
            name: 'Frank'
        }, res);
});
```

With this approach, you can benefit from streaming and there is no middleman (less complexity).

Alternatively, you can use the streaming API to produce an intermediate stream that can then be piped to the response stream as shown below:

```javascript
var template = require('./template.marko');

app.get('/profile', function(req, res) {
    template.stream({
            name: 'Frank'
        })
        .pipe(res);
});
```

# What is the recommended directory structure for templates and "partials"?

Your templates should be organized just like all other JavaScript modules. You should put your templates right next to the code that refers to them. That is, do not create a separate "templates" directory. For a sample Express app that uses Marko, please see [marko-express](https://github.com/marko-js-samples/marko-express).