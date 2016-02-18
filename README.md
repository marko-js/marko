:information_source: ___The master branch currently contains the code for the next major version of Marko (Marko v3). The docs on markojs.com have not yet been updated.___

![Marko Logo](https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-small.png)

[![Build Status](https://travis-ci.org/marko-js/marko.svg?branch=master)](https://travis-ci.org/marko-js/marko) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marko-js/marko)
[![NPM](https://img.shields.io/npm/v/marko.svg)](https://www.npmjs.com/package/marko)
[![Downloads](https://img.shields.io/npm/dm/marko.svg)](http://npm-stat.com/charts.html?package=marko)

Marko is a [_really_ fast](https://github.com/marko-js/templating-benchmarks) and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags. Learn more on [http://markojs.com/](http://markojs.com/).

You can try out Marko online: [Try Marko Online!](http://markojs.com/try-online/)

# Installation

```bash
npm install marko --save
```

# Syntax

Marko supports _both_ a familiar HTML syntax, as well as a more concise indentation-based syntax. Both syntaxes are equally supported. Regardless of which syntax you choose, the compiled code will be exactly the same.

## HTML syntax

```html
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

```html
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

```html
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

# Basic Usage

## Loading a template

```javascript
var template = require('./template.marko');
```

NOTE: On the server, you will need to install the Node.js require extension for Marko:

```javascript
require('marko/node-require').install();
```

## Rendering a template

```javascript
var templateData = { name: 'Frank' };

// Render to an existing Writable stream:
template.render(templateData, process.stdout);

// Render to a callback function:
template.render(templateData, function(err, html) {
        console.log(html);
    });

// Render a template synchronously
console.log(template.renderSync(templateData));

// Render a template and return a new Readable stream:
template.stream(templateData).pipe(process.stdout);
```

# UI Components

Marko Widgets is a minimalist library for building UI components with the help of the
[Marko templating engine](http://markojs.com/docs/). Marko is used for rendering the HTML for UI components,
while Marko Widgets is used to add client-side behavior. Client-side behavior includes the following:

- Handling DOM events
- Emitting custom events
- Handling custom events emitted by other widgets
- Manipulating and updating the DOM

Changing a widgets state or properties will result in the DOM automatically being updated without writing extra code. Marko Widgets has adopted many of the good design principles promoted by the [React](https://facebook.github.io/react/index.html) team, but aims to be much lighter and often faster (especially on the server). When updating the view for a widget, Marko Widgets uses DOM diffing to make the minimum number of changes to the DOM through the use of the [morphdom](https://github.com/patrick-steele-idem/morphdom) module.

<a href="http://markojs.com/marko-widgets/try-online/" target="_blank">Try Marko Widgets Online!</a>

For more details on Marko Widgets, please check out the [Marko Widgets Documentation](http://markojs.com/docs/marko-widgets/).

# Changelog

See [CHANGELOG.md](CHANGELOG.md)

# Discuss

- Chat channel:  [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marko-js/marko)
- Twitter: please use the `#MarkoJS` hashtag. Follow [@MarkoDevTeam](https://twitter.com/MarkoDevTeam)

Questions or comments can also be posted on the [Marko Github issues](https://github.com/marko-js/marko/issues) page.

# Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

# Contribute

Pull Requests welcome. Please make sure all tests pass:

```
npm test
```

Please submit Github issues for any feature enhancements, bugs or documentation problems.

# License

Apache License v2.0
