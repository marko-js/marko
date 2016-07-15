<p align="center">
    <a href="http://markojs.com/"><img src="https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-medium-cropped.png" alt="Marko logo" width="300" /></a><br /><br />
</p>

Marko is a [_really_ fast](https://github.com/marko-js/templating-benchmarks) and lightweight HTML-based templating engine from eBay. Marko runs on Node.js and in the browser and it supports streaming, async rendering and custom tags. Templates are compiled to readable CommonJS modules. Learn more on [markojs.com](http://markojs.com/), and even [Try Marko Online!](http://markojs.com/try-online/)

[![Build Status](https://travis-ci.org/marko-js/marko.svg?branch=master)](https://travis-ci.org/marko-js/marko)
[![Coverage Status](https://coveralls.io/repos/github/marko-js/marko/badge.svg?branch=master)](https://coveralls.io/github/marko-js/marko?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marko-js/marko)
[![NPM](https://img.shields.io/npm/v/marko.svg)](https://www.npmjs.com/package/marko)
[![Downloads](https://img.shields.io/npm/dm/marko.svg)](http://npm-stat.com/charts.html?package=marko)

# Get Involved

- **Contributing**: Pull requests are welcome! 
    - Read [`CONTRIBUTING.md`](.github/CONTRIBUTING.md) and check out our [bite-sized](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Adifficulty%3Abite-sized) and [help-wanted](https://github.com/marko-js/marko/issues?q=is%3Aissue+is%3Aopen+label%3Astatus%3Ahelp-wanted) issues
    - Submit github issues for any feature enhancements, bugs or documentation problems
- **Support**: Join our [gitter chat](https://gitter.im/marko-js/marko) to ask questions to get support from the maintainers and other Marko developers
    - Questions/comments can also be posted as [github issues](https://github.com/marko-js/marko/issues)
- **Discuss**: Tweet using the `#MarkoJS` hashtag and follow [@MarkoDevTeam](https://twitter.com/MarkoDevTeam)

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

Marko Widgets is a minimalist library for building isomorphic/universal UI components with the help of the
[Marko templating engine](http://markojs.com/docs/). Marko renders the HTML for UI components, while Marko Widgets adds client-side behavior. Client-side behavior includes the following:

- Handling DOM events
- Emitting custom events
- Handling custom events emitted by other widgets
- Manipulating and updating the DOM

Marko Widgets offers advanced features like DOM-diffing, batched updates, stateful widgets, declarative event binding and efficient event delegation.

Changing a widgets state or properties will result in the DOM automatically being updated without writing extra code. Marko Widgets has adopted many of the good design principles promoted by the [React](https://facebook.github.io/react/index.html) team, but aims to be much lighter and often faster (especially on the server). When updating the view for a widget, Marko Widgets uses DOM diffing to make the minimum number of changes to the DOM through the use of the [morphdom](https://github.com/patrick-steele-idem/morphdom) module.

UI components are defined using very clean JavaScript code. For example:

```javascript
module.exports = require('marko-widgets').defineComponent({
    /**
     * The template to use as the view
     */
    template: require('./template.marko'),

    /**
     * Return the initial state for the UI component based on
     * the input properties that were provided.
     */
    getInitialState: function(input) {
        return {
            greetingName: input.greetingName,
            clickCount: 0
        };
    },

    /**
     * Return an object that is used as the template data. The
     * template data should be based on the current widget state
     * that is passed in as the first argument
     */
    getTemplateData: function(state) {
        var clickCount = state.clickCount;
        var timesMessage = clickCount === 1 ? 'time' : 'times';

        return {
            greetingName: state.greetingName,
            clickCount: clickCount,
            timesMessage: timesMessage
        };
    },

    /**
     * This is the constructor for the widget. Called once when
     * the widget is first added to the DOM.
     */
    init: function() {
        var el = this.el;
        // "el" will be reference the raw HTML element that this
        // widget is bound to. You can do whatever you want with it...
        // el.style.color = 'red';
    },

    /**
     * Handler method for the button "click" event. This method name
     * matches the name of the `w-onClick` attribute in the template.
     */
    handleButtonClick: function(event, el) {
        this.setState('clickCount', this.state.clickCount + 1);
    },

    /**
     * Expose a method to let other code change the "greeting name".
     * If the value of the "greetingName" state property changes
     * then the UI component will automatically rerender and the
     * DOM will be updated.
     */
    setGreetingName: function(newName) {
        this.setState('greetingName', newName);
    }
});
```

And, here is the corresponding Marko template for the UI component:

```xml
<div class="click-count" w-bind>
    Hello ${data.greetingName}!
    <div>
        You clicked the button ${data.clickCount} ${data.timesMessage}.
    </div>
    <button type="button" w-onclick="handleButtonClick">
        Click Me
    </button>
</div>
```

<a href="http://markojs.com/marko-widgets/try-online/" target="_blank">Try Marko Widgets Online!</a>

For more details on Marko Widgets, please check out the [Marko Widgets Documentation](http://markojs.com/docs/marko-widgets/).

# Common issues

## nodemon

When `marko` compiles your server-side templates, a `.marko.js` file is created next to the original `.marko` file.
Subsequently, `nodemon` will see the new `.marko.js` file and trigger a restart of your app and this can
repeat indefinitely unless you configure `nodemon` to ignore `*.marko.js` files.
To avoid this, simply add `"ignore": ["*.marko.js"]` to the `nodemon.json` file at the root of your project.

As a better drop-in replacement with more features, you can install [browser-refresh](https://github.com/patrick-steele-idem/browser-refresh).
Be sure to add `*.marko.js` pattern to your `.gitignore` file and `browser-refresh`
will automatically ignore the compiled marko templates when they are written to disk.

# Changelog

See [CHANGELOG.md](CHANGELOG.md)

# Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Michael Rawlings](https://github.com/mlrawlings) (Twitter: [@mlrawlings](https://twitter.com/mlrawlings))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

# License

Apache License v2.0
