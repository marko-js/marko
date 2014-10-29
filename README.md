marko-widgets
==============

The `marko-widgets` module provides a simple and efficient mechanism for binding behavior to UI components rendered on either the server or in the browser. This module also supports inter-widget communication and provides a simple framework that encourages best practices and makes it easy to "wire up" complex applications. Out of the box, bindings are provided for [Marko](https://github.com/raptorjs/marko) and [Dust](https://github.com/linkedin/dustjs). There is no complex widget class hierarchy or complex API and you are free to use jQuery or any other library for working with the DOM.

![eBay Open Source](https://raw.githubusercontent.com/raptorjs/optimizer/master/images/ebay.png)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Table of Contents

- [Installation](#installation)
- [Glossary](#glossary)
- [Usage](#usage)
	- [Binding Behavior](#binding-behavior)
	- [Referencing Widgets](#referencing-widgets)
	- [Referencing Widget DOM Elements](#referencing-widget-dom-elements)
	- [Rendering Widgets in the Browser](#rendering-widgets-in-the-browser)
- [API](#api)
	- [Widget](#widget)
		- [Methods](#methods)
			- [$(querySelector)](#$queryselector)
			- [addEventListener(eventType, listener)](#addeventlistenereventtype-listener)
			- [appendTo(targetEl)](#appendtotargetel)
			- [destroy()](#destroy)
			- [detach()](#detach)
			- [emit(eventType, arg1, arg2, ...)](#emiteventtype-arg1-arg2-)
			- [getEl(widgetElId)](#getelwidgetelid)
			- [getElId(widgetElId)](#getelidwidgetelid)
			- [insertAfter(targetEl)](#insertaftertargetel)
			- [insertBefore(targetEl)](#insertbeforetargetel)
			- [isDestroyed()](#isdestroyed)
			- [on(eventType, listener)](#oneventtype-listener)
			- [prependTo(targetEl)](#prependtotargetel)
			- [ready(callback)](#readycallback)
			- [replace(targetEl)](#replacetargetel)
			- [replaceChildrenOf(targetEl)](#replacechildrenoftargetel)
			- [rerender(data, callback)](#rerenderdata-callback)
			- [subscribeTo(target)](#subscribetotarget)
		- [Properties](#properties)
			- [this.el](#thisel)
			- [this.id](#thisid)
			- [this.widgets](#thiswidgets)
	- [WidgetCollection](#widgetcollection)
		- [Methods](#methods-1)
			- [forEach([id], callback)](#foreachid-callback)
		- [Properties](#properties-1)
			- [this.*](#this)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

```bash
npm install marko-widgets --save
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

Using the bindings for Marko, you can bind a widget to a rendered DOM element using the custom `w-bind` attribute as shown in the following sample template:

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

In order for everything to work on the client-side we need to include the code for the `marko-widgets` module and the `./widget.js` module as part of the client bundle and we also need to use the custom `<init-widgets>` tag to let the client know which widgets rendered on the server need to be initialized on the client. To include the client-side dependencies will be using the [optimizer](https://github.com/raptorjs/optimizer) module and the taglib that it provides. Our final page template is shown below:

__src/pages/index/template.marko:__

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
    <init-widgets/>
</body>
</html>
```

The `optimizer.json` that includes the required client-side code is shown below:

__src/pages/index/optimizer.json:__

```javascript
{
    "dependencies": [
        "require marko-widgets",
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

:arrow_forward: To try out and experiment with this code please see the documentation and source code for the [widgets-bind-behavior](https://github.com/raptorjs/raptor-samples/tree/master/widgets-bind-behavior) sample app.

## Referencing Widgets

The `marko-widgets` taglib also provides support for allowing a widget to communicate directly with nested widgets. A nested widget can be assigned a widget ID (only needs to be unique within the scope of the containing widget) and the containing widget can then reference the nested widget by the assigned widget ID using the `this.widgets` collection.

The following HTML template fragment contains a widget that has three nested [sample-button](https://github.com/raptorjs/raptor-sample-ui-components/tree/master/components/sample-button) widgets. Each nested [sample-button](https://github.com/raptorjs/raptor-sample-ui-components/tree/master/components/sample-button) is assigned an ID (i.e. `primaryButton`, `successButton` and `dangerButton`).

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

:arrow_forward: To try out and experiment with this code please see the documentation and source code for the [widgets-communication](https://github.com/raptorjs/raptor-samples/tree/master/widgets-communication) sample app.

## Referencing Widget DOM Elements

DOM elements nested within a widget can be given unique IDs based on the containing widget's ID. These DOM elements can then be efficiently looked up by the containing widget using methods provided. The `w-el-id` custom attribute can be used to assign DOM element IDs to HTML elements that are prefixed with the widget's ID. For example, given the following HTML template fragment:

```html
<form w-bind="./widget">
    ...
    <button type="submit" w-el-id="submitButton">Submit</button>
    <button type="button" w-el-id="cancelButton">Cancel</button>
</form>
```

Assuming the unique ID assigned to the widget is `w123`, the following would be the HTML output:

```html
<form id="w123">
    ...
    <button type="submit" id="w123-submitButton">Submit</button>
    <button type="button" id="w123-cancelButton">Cancel</button>
</form>
```

Finally, to reference a widget's nested DOM element's the following code can be used in the containing widget:

```javascript
var submitButton = this.getEl('submitButton'); // submitButton.id === 'w123-submitButton'
var cancelButton = this.getEl('cancelButton'); // cancelButton.id === 'w123-cancelButton'

submitButton.style.border = '1px solid red';
```

The object returned by `this.getEl()` will be a raw [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element). If you want a jQuery wrapped element you can do either of the following:


Option 1) Use jQuery directly:

```javascript
var $submitButton = $(this.getEl('submitButton'));
```

Option 2) Use the `this.$()` method:

```javascript
var $submitButton = this.$('#submitButton');
```

## Rendering Widgets in the Browser

TODO

# API

## Widget

### Methods

#### $(querySelector)

This is a convenience method for accessing a widget's DOM elements when jQuery is available. This mixin method serves as a proxy to jQuery to ease building queries based on widget element IDs.

Internally, this jQuery proxy method will resolve widget element IDs to their actual DOM element ID by prefixing widget element IDs with the widget ID. For example, where this is a widget with an ID of `w123`:


```javascript
this.$() ➡ $("#w123")
this.$("#myEl") ➡ $("#w123-myEl")
```

The usage of this mixin method is described below:

__`$()`__

Convenience usage to access the root widget DOM element wrapped as a jQuery object. All of the following are equivalent:

```javascript
this.$()
$(this.el)
$("#" + this.id)
```

__`$('#<widget-el-id>')`__

Convenience usage to access a nested widget DOM element wrapped as a jQuery object. All of the following are equivalent:

```javascript
this.$("#myEl)
$(this.getEl("myEl"))
$("#" + this.getElId("myEl"))
```

__`$('<selector>')`__

Convenience usage to query nested DOM elements scoped to the root widget DOM element. All of the following are equivalent:

```javascript
this.$("ul > li")
$("ul > li", this.el)
$("#" + this.id + " ul > li")
```

__`$('<selector>', '<widget-el-id>')`__

Convenience usage to query nested DOM elements scoped to a nested widget DOM element. All of the following are equivalent:

```javascript
this.$("li.color", "colorsUL")
this.$("#colorsUL li.color")
$("li.color", this.getEl("colorsUL"))
$("#" + this.getElId("colorsUL") + " li.color")
```

__`$('#<widget-el-id> <selector>')`__

Convenience usage to query nested DOM elements scoped to a nested widget DOM element. All of the following are equivalent:

```javascript
this.$("#colorsUL li.color")
this.$("li.color", "colorsUL")
$("li.color", this.getEl("colorsUL"))
$("#" + this.getElId("colorsUL") + " li.color")
```

__`$(callbackFunction)`__

Convenience usage to add a listener for the "on DOM ready" event and have the this object for the provided callback function be the current widget instance. All of the following are equivalent:

```javascript
this.$(function() { /*...*/ });
$(function() { /*...*/ }.bind(this));      // Using Function.prototype.bind
$($.proxy(function() { /*...*/ }, this));
```

#### addEventListener(eventType, listener)

#### appendTo(targetEl)

Moves the widget's root DOM node from the current parent element to a new parent element. For example:

```javascript
this.appendTo(document.body);
```

#### destroy()

Destroys the widget by unsubscribing from all listeners made using the `subscribeTo` method and then detaching the widget's root element from the DOM. All nested widgets (discovered by querying the DOM) are also destroyed.

#### detach()

Detaches the widget's root element from the DOM by removing the node from its parent node.

#### emit(eventType, arg1, arg2, ...)

Emits an event. This method is inherited from EventEmitter (see [Node.js Events: EventsEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)

#### getEl(widgetElId)

Returns a nested DOM element by prefixing the provided `widgetElId` with the widget's ID. For Marko, nested DOM elements should be assigned an ID using the `w-el-id` custom attribute.  Returns `this.el` if no `widgetElId` is provided.

#### getElId(widgetElId)

Similar to `getEl`, but only returns the String ID of the DOM element instead of the actual DOM element.

#### insertAfter(targetEl)

#### insertBefore(targetEl)

#### isDestroyed()

#### on(eventType, listener)

#### prependTo(targetEl)

#### ready(callback)

#### replace(targetEl)

#### replaceChildrenOf(targetEl)

#### rerender(data, callback)

#### subscribeTo(target)

### Properties

#### this.el

The root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

#### this.id

The String ID of the root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

#### this.widgets

An instance of `WidgetCollection` (see below) that holds references to all nested widgets with an assigned widget ID (e.g., but using the `w-id` custom attribute). For example:

```javascript
var submitButton = this.widgets.submitButton;
```

## WidgetCollection

### Methods

#### forEach([id], callback)

### Properties

#### this.*
