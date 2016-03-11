Overview
=================

Marko is an eBay open source HTML-based templating engine that can be used to render templates on the server (Node.js) or in the web browser. It is [extremely fast](https://github.com/marko-js/templating-benchmarks) and lightweight (~3.75KB gzipped) while also supporting streaming and asynchronous rendering. Developers can extend the HTML grammar with custom tags and custom attributes to introduce new and reusable building blocks. The Marko compiler produces Node.js-compatible JavaScript modules that are [easy to read](https://gist.github.com/patrick-steele-idem/0514b480219d1c9ed8d4#file-template-marko-js), understand and debug. In contrast to other templating engines, Marko avoids [evil global variables](http://archive.oreilly.com/pub/a/javascript/excerpts/javascript-good-parts/awful-parts.html) and global helpers.

Marko was founded on the philosophy that an HTML-based templating language is more natural and intuitive for generating HTML. Because the Marko compiler understands the structure of the HTML document, the directives in template files are less obtrusive and more powerful. Marko also retains the full power and flexibility of JavaScript by allowing JavaScript expressions inside templates.

Marko supports [progressive HTML rendering](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/) by writing directly to an output stream so that HTML can be sent over the wire sooner. Marko automatically flushes around asynchronous fragments so that the HTML is delivered in the optimized number of chunks. Because Marko is an asynchronous templating language, additional data can be asynchronously fetched even after rendering has begun. These characteristics make Marko an excellent choice for creating high performance websites.


For building rich UI components with client-side behavior please check out the [marko-widgets](https://github.com/marko-js/marko-widgets) project.

<a href="http://markojs.com/try-online/" target="_blank">Try Marko Online!</a>

# Syntax

Marko supports _both_ a familiar HTML syntax, as well as a more concise indentation-based syntax. Both syntaxes are equally supported. Regardless of which syntax you choose, the compiled code will be exactly the same.

Syntax highlighting is available in the following editors and IDEs:

- Atom: [language-marko](https://atom.io/packages/language-marko)
- Sublime Text: [marko-sublime](https://github.com/merwan7/sublime-marko)
- WebStorm: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle) (See: [Importing TextMate Bundles](https://www.jetbrains.com/phpstorm/help/importing-textmate-bundles.html))
- TextMate: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle)

## HTML syntax

```xml
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Marko Templating Engine</title>
    </head>
    <body>
        <h1>
            Hello ${data.name}!
        </h1>

        <ul if(notEmpty(data.colors))>
            <li for(color in data.colors)>
                ${color}
            </li>
        </ul>
        <div else>
            No colors!
        </div>
    </body>
</html>
```

## Concise syntax

The following concise template is equivalent to the previous template:

```xml
<!DOCTYPE html>
html lang="en"
    head
        title - Marko Templating Engine
    body
        h1 - Hello ${data.name}!
        ul if(notEmpty(data.colors))
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

## Mixed syntax

You can even mix and match the concise syntax with the HTML syntax within the same document.
The following template is equivalent to the previous templates:

```xml
<!DOCTYPE html>
html lang="en"
    head
        title - Marko Templating Engine
    body
        <h1>
            Hello ${data.name}!
        </h1>
        ul if(notEmpty(data.colors))
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

# Sample Code

A basic template with text replacement, looping and conditionals is shown below:

_hello-world.marko:_

```xml
<h2>Hello ${data.name}!</h2>
<ul if(notEmpty(data.colors))>
    <li style="color: ${color}" for(color in data.colors)>
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

The template can then be rendered as shown in the following sample code:

```javascript
require('marko/node-require').install();

var template = require('./hello-world.marko');

template.render({
        name: 'World',
        colors: ["red", "green", "blue"]
    },
    function(err, output) {
        console.log(output);
    });
```

The output of running the above program will be the following (formatted for readability):

```html
<h2>Hello World!</h2>
<ul>
    <li style="color: red">red</li>
    <li style="color: green">green</li>
    <li style="color: blue">blue</li>
</ul>
```

For comparison, given the following data consisting of an empty array of colors:

```javascript
{
    name: 'World',
    colors: []
}
```

The output would be the following:

```xml
<h2>Hello World!</h2>
<div>
    No colors!
</div>
```

The streaming API can be used to stream the output to an HTTP response stream or any other writable stream. For example, with Express:

```javascript
var template = require('./user-profile.marko');

app.get('/profile', function(req, res) {
    // Render directly to the writable HTTP output stream:
    template.render({
            name: 'Frank'
        }, res);
});
```

# Another Templating Language?

Most front-end developers are familiar with, and comfortable with, templating languages such as [Handlebars](https://github.com/wycats/handlebars.js), [Dust](https://github.com/linkedin/dustjs) or [Mustache](http://mustache.github.io/) so why was Marko introduced?

What makes Marko different is that it is an HTML-based templating language that does not rely on a custom language grammar. Any HTML file is a valid Marko template and vice-versa, and the Marko compiler uses an [off-the-shelf HTML parser](https://github.com/fb55/htmlparser2). Because Marko understands the HTML structure of the templates, it can do more powerful things that would not be possible in a text-based templating languages such as Handlerbars, Dust or Mustache. Marko allows developers to _extend the HTML language_ by introducing custom HTML elements and attributes. On top of that, utilizing the HTML structure for applying templating directives makes templates more readable and allows data templates to more closely resemble the final HTML structure.

Let's compare Marko with Handlebars (a text-based templating language):

__Handlebars:__

```xml
<h2>Hello {{name}}!</h2>

{{#if colors}}
<ul>
    {{#each colors}}
    <li class="color">
        {{this}}
    </li>
    {{/each}}
</ul>
{{else}}
<div>
    No colors!
</div>
{{/if}}
```

__Marko:__

```xml
<h2>Hello ${data.name}!</h2>
<ul if(notEmpty(data.colors))>
    <li class="color" for(color in data.colors)>
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

A few things to note for the Marko template:

* Less lines of code
* Less lines are "touched" to make the template dynamic
* Only opening tags are modified for conditionals and looping

Beyond Marko being an HTML-based templating language, it was also designed with extreme performance and extensibility in mind. The Marko compiler gives developers full control over how templates are compiled to JavaScript and the runtime was designed to be as efficient as possible. Marko fully embraces the JavaScript language for better performance and flexibility (e.g. favoring JavaScript expressions over a custom expression language).

Finally, another distinguishing feature of Marko is that it supports _asynchronous template rendering_. This powerful feature allows portions of the template to be rendered asynchronously. Instead of waiting for all data to come back from remote services before beginning to render the template, you can now immediately start rendering the template and the portions of the template that depend on asynchronous data will render as soon as the asynchronous data becomes available. The Marko rendering engine ensures that the final HTML will be streamed out in the correct order.

# Design Philosophy

* __Readable:__ Templates should be as close to the output HTML as possible to keep templates readable. Cryptic syntax and symbols should be avoided.
* __Simple:__ The number of new concepts should be minimized and complexity should be avoided.
* __Extensible:__ The template engine should be easily extensible at both compile-time and runtime.
* __High Performance:__ Runtime and compiled output should be optimized for low CPU and memory usage and have a small footprint. All expressions should be native JavaScript to avoid runtime interpretation.
* __Not Restrictive:__ Whether or not to go less logic or more logic in templates is up to the developer.
* __Asynchronous and Streaming Output:__ It should be possible to render HTML out-of-order, but the output HTML should be streamed out in the correct order. This minimizes idle time and reduces the time to first byte.
* __Intuitive:__ The templating engine should introduce as few surprises as possible.
* __Browser and Server Compatibility:__ Templates should compile down to JavaScript that can be executed on both the server and the client.
* __Debuggable:__ Compiled JavaScript should be debuggable and readable.
* __Compile-Time Checks:__ Syntax, custom tags and custom attributes should be validated at compile-time.
* __Tools Support:__ Tools should be enabled to offer auto-completion and validation for improved productivity and safety.
* __Modular:__ Runtime and compiled templates should be based on CommonJS modules for improved dependency management. Template dependencies (such as custom tags) should be resolved based on a template's file system path instead of relying on a global registry.