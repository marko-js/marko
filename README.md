raptor-widgets
==============

The `raptor-widgets` module provides a simple and efficient mechanism for binding behavior to rendered UI components regardless of whether or not the UI components are rendered on the server or in the browser. This module also supports inter-widget communication and provides a simple framework that encourages best practices and makes it easy to "wire up" complex applications. Out of the box, bindings are provided for Raptor Templates and Dust.js. There is no complex widget class hierarchy or complex API and you are free to use jQuery or any other library.

# Installation

```bash
npm install raptor-widgets --save
```

# Usage

## Binding Behavior

To begin with you need to create the widget implementation that provides the client-side behavior. This should be implemented as a CommonJS module that exports a constructor function as shown in the following code:

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

Using Raptor Templates, you can then bind this widget to a rendered DOM element using the custom `w-bind` attribute as shown in the following sample template:

```html
<div class="my-component" w-bind="./widget">
    <h1>Click Me</h1>
</div>
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

To try out and experiment with this code please see the source code for the following sample app: [widgets-bind-behavior](https://github.com/raptorjs3/raptor-samples/tree/master/widgets-bind-behavior)

## Inter-widget Communication

The `raptor-widgets` taglib also provides support for allowing a widget to communicate directly with nested widgets.

TODO

## Referencing Nested Elements

TODO

## Rendering Widgets in the Browser

TODO