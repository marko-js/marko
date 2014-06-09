raptor-widgets
==============

The `raptor-widgets` module provides a simple and efficient mechanism for binding behavior to UI components rendered on either the server or in the browser. This module also supports inter-widget communication and provides a simple framework that encourages best practices and makes it easy to "wire up" complex applications. Out of the box, bindings are provided for [Raptor Templates](https://github.com/raptorjs3/raptor-templates) and [Dust](https://github.com/linkedin/dustjs). There is no complex widget class hierarchy or complex API and you are free to use jQuery or any other library for working with the DOM.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [raptor-widgets](#raptor-widgets)
- [Installation](#installation)
- [Glossary](#glossary)
- [Usage](#usage)
    - [Binding Behavior](#binding-behavior)
    - [Referencing Widgets](#referencing-widgets)
    - [Referencing Widget DOM Elements](#referencing-widget-dom-elements)
    - [Rendering Widgets in the Browser](#rendering-widgets-in-the-browser)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```bash
npm install raptor-widgets --save
```

# Glossary

A few definitions before you get started:

* A "widget" is the "client-side behavior" of a UI component
* A widget instance has the following characteristics
    * All widget instances are bound to a DOM element
    * All widgets are [event emitters](http://nodejs.org/api/events.html)
* Client-side behavior includes the following:
    * Attaching DOM event listeners (mouse click, keyboard press, etc.)
    * Attaching listeners to other widgets
    * Manipulating the DOM
    * Publishing client-side events
    * etc.

# Usage

## Binding Behavior

Using the bindings for Raptor Templates, you can bind a widget to a rendered DOM element using the custom `w-bind` attribute as shown in the following sample template:

```html
<div class="my-component" w-bind="./widget">
    <h1>Click Me</h1>
</div>
```

The widget bound to the `<div>` should then be implemented as a CommonJS module that exports a constructor function. During client-side initialization, a new instance of your widget will be created for each rendered DOM element that the widget is bound to. A sample widget implementation is shown in the following JavaScript code:

__src/pages/index/widget.js:__

```javascript
function Widget(config) {
    var rootEl = this.el; // this.el returns the root element that the widget is bound to
    var self = this;

    rootEl.addEventListener('click', function() {
        self.addText('You clicked on the root element!');
    });
}

Widget.prototype = {
    addText: function(text) {
        this.el.appendChild(document.createTextNode(text));
    }
};

module.exports = Widget;
```

In order for everything to work on the client-side we need to include the code for the `raptor-widgets` module and the `./widget.js` module as part of the client bundle and we also need to use the custom `<w-init-widgets>` tag to let the client know which widgets rendered on the server need to be initialized on the client. To include the client-side dependencies will be using the [raptor-optimizer](https://github.com/raptorjs3/raptor-optimizer) module and the taglib that it provides. Our final page template is shown below:

__src/pages/index/template.rhtml:__

```html
<optimizer-page name="index" package-path="./optimizer.json" />

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Widgets Demo</title>
    <optimizer-head/>
</head>
<body>
    <!-- Bind a widget to a div element using the "w-bind" attribute -->
    <div class="my-component" w-bind="./widget">
        <h1>Click Me</h1>
    </div>

    <optimizer-body/>
    <w-init-widgets/>
</body>
</html>
```

The `optimizer.json` that includes the required client-side code is shown below:

__src/pages/index/optimizer.json:__

```javascript
{
    "dependencies": [
        "require raptor-widgets",
        "require ./widget"
    ]
}
```

In the above example, the final HTML will be similar to the following:

```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Widgets Demo</title>
    </head>
    <body>
        <div data-rwidget="/src/pages/index/widget" id="w0" class="my-component">
            <h1>Click Me</h1>
        </div>
        <script src="static/index-8947595a.js" type="text/javascript"></script>
        <span style="display:none;" data-ids="w0" id="rwidgets"></span>
    </body>
</html>
```

To try out and experiment with this code please see the documentation and source code for the [widgets-bind-behavior](https://github.com/raptorjs3/raptor-samples/tree/master/widgets-bind-behavior) sample app.

## Referencing Widgets

The `raptor-widgets` taglib also provides support for allowing a widget to communicate directly with nested widgets. A nested widget can be assigned a widget ID (only needs to be unique within the scope of the containing widget) and the containing widget can then reference then nested widget by the assigned widget ID using the `this.widgets` collection. For example;

The following HTML template fragment contains a widget that has three nested [sample-button](https://github.com/raptorjs3/raptor-sample-ui-components/tree/master/components/sample-button) widgets. Each nested [sample-button](https://github.com/raptorjs3/raptor-sample-ui-components/tree/master/components/sample-button) is assigned an ID (i.e. `primaryButton`, `successButton` and `dangerButton`).

```html
<div class="my-component" w-bind="./widget">
    <div class="btn-group">
        <sample-button label="Click Me" variant="primary" w-id="primaryButton"/>
        <sample-button label="Click Me" variant="success" w-id="successButton"/>
        <sample-button label="Click Me" variant="danger" w-id="dangerButton"/>
    </div>
    ...
</div>
```

The containing widget can then refer to a particular nested widget as shown in the following sample JavaScript code:

```javascript
this.widgets.dangerButton.on('click', function() {
    alert('You clicked on the danger button!');
});
```

## Referencing Widget DOM Elements

TODO

## Rendering Widgets in the Browser

TODO