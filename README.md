Marko Widgets
=============

[![Build Status](https://travis-ci.org/marko-js/marko-widgets.svg?branch=master)](https://travis-ci.org/marko-js/marko-widgets) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marko-js/marko-widgets?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![Marko Logo](https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-small.png)

Marko Widgets extends the [Marko templating engine](https://github.com/marko-js/marko) to provide a simple and efficient mechanism for binding behavior to UI components rendered on either the server or in the browser. In addition, changing a widgets state or properties will result in the DOM automatically being updated without writing extra code. Marko Widgets has adopted many of the good design principles promoted by the [React](https://facebook.github.io/react/index.html) team, but aims to be much lighter and often faster (especially on the server). When updating the view for a widget, Marko Widgets uses DOM diffing to make the minimum number of changes to the DOM through the use of the [morphdom](https://github.com/patrick-steele-idem/morphdom) module.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Table of Contents

- [Features](#features)
- [Design Philosophy](#design-philosophy)
- [Sample Code](#sample-code)
	- [Stateless Widget](#stateless-widget)
	- [Stateless Widget with Behavior](#stateless-widget-with-behavior)
	- [Stateful Widget](#stateful-widget)
	- [Stateful Widget with Update Handlers](#stateful-widget-with-update-handlers)
	- [Complex Widget](#complex-widget)
	- [Container Widget](#container-widget)
	- [Preserving DOM Nodes during Re-render](#preserving-dom-nodes-during-re-render)
- [Installation](#installation)
- [Glossary](#glossary)
- [Usage](#usage)
	- [Binding Behavior](#binding-behavior)
	- [Widget Props](#widget-props)
	- [Widget Template](#widget-template)
	- [Widget State](#widget-state)
	- [Widget Config](#widget-config)
	- [Referencing Nested Widgets](#referencing-nested-widgets)
	- [Referencing Nested DOM Elements](#referencing-nested-dom-elements)
	- [Adding Event Listeners](#adding-event-listeners)
		- [Adding DOM Event Listeners](#adding-dom-event-listeners)
		- [Adding Custom Event Listeners](#adding-custom-event-listeners)
	- [Lifecycle Methods](#lifecycle-methods)
		- [getInitialProps(input, out)](#getinitialpropsinput-out)
		- [getInitialState(input, out)](#getinitialstateinput-out)
		- [getTemplateData(state, input, out)](#gettemplatedatastate-input-out)
		- [getWidgetConfig(input, out)](#getwidgetconfiginput-out)
		- [getInitialBody(input, out)](#getinitialbodyinput-out)
		- [init(widgetConfig)](#initwidgetconfig)
		- [onBeforeUpdate()](#onbeforeupdate)
		- [onUpdate()](#onupdate)
		- [onBeforeDestroy()](#onbeforedestroy)
		- [onDestroy()](#ondestroy)
		- [shouldUpdate(newProps, newState)](#shouldupdatenewprops-newstate)
	- [Client-side Rendering](#client-side-rendering)
	- [Server-side Rendering](#server-side-rendering)
		- [Manually Initializing Server-side Rendered Widgets](#manually-initializing-server-side-rendered-widgets)
	- [Split Renderer and Widget](#split-renderer-and-widget)
		- [Combined Renderer and Widget](#combined-renderer-and-widget)
		- [Split Renderer and Widget](#split-renderer-and-widget-1)
- [API](#api)
	- [marko-widgets exports](#marko-widgets-exports)
		- [defineComponent(def)](#definecomponentdef)
		- [defineRenderer(def)](#definerendererdef)
		- [defineWidget(def)](#definewidgetdef)
		- [getWidgetForEl(el)](#getwidgetforelel)
	- [Widget](#widget)
		- [Methods](#methods)
			- [$(querySelector)](#$queryselector)
			- [addEventListener(eventType, listener)](#addeventlistenereventtype-listener)
			- [appendTo(targetEl)](#appendtotargetel)
			- [destroy()](#destroy)
			- [detach()](#detach)
			- [emit(eventType, arg1, arg2, ...)](#emiteventtype-arg1-arg2-)
			- [getEl(widgetElId)](#getelwidgetelid)
			- [getEls(id)](#getelsid)
			- [getElId(widgetElId)](#getelidwidgetelid)
			- [getWidget(id[, index])](#getwidgetid-index)
			- [getWidgets(id)](#getwidgetsid)
			- [insertAfter(targetEl)](#insertaftertargetel)
			- [insertBefore(targetEl)](#insertbeforetargetel)
			- [isDestroyed()](#isdestroyed)
			- [on(eventType, listener)](#oneventtype-listener)
			- [prependTo(targetEl)](#prependtotargetel)
			- [ready(callback)](#readycallback)
			- [replace(targetEl)](#replacetargetel)
			- [replaceChildrenOf(targetEl)](#replacechildrenoftargetel)
		- [replaceState(newState)](#replacestatenewstate)
			- [rerender(data, callback)](#rerenderdata-callback)
			- [setState(name, value)](#setstatename-value)
			- [setState(newState)](#setstatenewstate)
			- [setStateDirty(name, value)](#setstatedirtyname-value)
			- [setProps(newProps)](#setpropsnewprops)
			- [subscribeTo(targetEventEmitter)](#subscribetotargeteventemitter)
		- [Properties](#properties)
			- [this.el](#thisel)
			- [this.id](#thisid)
			- [this.state](#thisstate)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)
- [Changelog](#changelog)
- [Discuss](#discuss)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Features

- Simple
	- Clean JavaScript syntax for defining widgets
	- Utilizes [Marko templates](https://github.com/marko-js/marko) (an HTML-based templating language) for the view
	- Supports stateful and stateless widgets
	- No complex class hierarchy
	- Simple, declarative event binding for both native DOM events and custom events
	- Lifecycle management for widgets (easily destroy and create widgets)
	- Events bubble up and view state changes trickle down
	- Only need to understand a few concepts to get started
- High performance
	- Lightning fast performance on the server and in the browser (see [Marko vs React: Performance Benchmark](https://github.com/patrick-steele-idem/marko-vs-react))
	- Supports streaming and asynchronous rendering
	- Efficient binding of behavior of UI components rendered on the server and in the browser
	- Efficient updating of the DOM via the following tricks:
		- DOM diffing is used to make the minimum number of changes to the DOM using the [morphdom](https://github.com/patrick-steele-idem/morphdom) module.
		- Batched updates
		- When re-rendering a widget, nested widgets are reused
		- Only widgets whose state changed are re-rendered
		- Full re-rendering of a widget can be short circuited if state transition handlers are provided
		- For container components, nested body DOM nodes are automatically preserved
		- Entire DOM subtrees can be preserved between rendering
		- Smart template compilers to offload as much work to compile time
	- Very efficient event delegation
- Lightweight
	- Extremely small JavaScript runtime (~6.3 KB gzipped)
	- No dependencies on any other JavaScript library such as jQuery
	- Focused exclusively on the UI view (easily mix and match with other libraries/frameworks)

# Design Philosophy

- A UI component should encapsulate view, behavior and styling
- A complex page should be decomposed into modular UI components
- UI components should be used as building blocks
- A component's view should be driven by a pure function that accepts an input state and produces output HTML
- A UI component should be independently testable
- A UI component should not leak its internal implementation
- A UI component should be installable via npm
- A UI component should play nice with other frameworks and libraries
- UI components should be easily composable
- Developers should not need to manually manipulate the DOM

# Sample Code

Marko Widgets allows you to declaratively bind behavior to an HTML element inside a Marko template. The widget provides the client-side behavior for your UI component.

## Stateless Widget

__src/components/app-hello/template.marko__

```xml
<div w-bind>
	Hello ${data.name}!
</div>
```

__src/components/app-hello/index.js__

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name
		};
	},

	init: function() {
		var el = this.el; // The root DOM element that the widget is bound to
		console.log('Initializing widget: ' + el.id);
	}
});
```

Congratulations, you just built a reusable UI component! Your UI component can be embedded in other Marko template files:

```xml
<div>
	<app-hello name="Frank"/>
</div>
```

In addition, your UI can be rendered and added to the DOM using the JavaScript API:

```javascript
var widget = require('./app-hello')
	.render({
		name: 'John'
	})
	.appendTo(document.body)
	.getWidget();

// Changing the props will trigger the widget to re-render
// with the new props and for the DOM to be updated:
widget.setProps({
	name: 'Jane'
});
```

## Stateless Widget with Behavior

__src/components/app-hello/template.marko__

```xml
<div w-bind
	 w-onClick="handleClick">

	Hello ${data.name}!

</div>
```

__src/components/app-hello/index.js__

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name
		};
	},

	handleClick: function() {
		this.setSelected(true);
	},

	setSelected: function(selected) {
		if (selected) {
			this.el.style.backgroundColor = 'yellow';
		} else {
			this.el.style.backgroundColor = null;
		}
	}
});
```

## Stateful Widget

Let's create a stateful widget that changes to yellow when you click on it:

__src/components/app-hello/template.marko__

```xml
<div w-bind
	 w-onClick="handleClick"
	 style="background-color: ${data.color}">

	Hello ${data.name}!

</div>
```

__src/components/app-hello/index.js__

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getInitialState: function(input) {
		return {
			name: input.name,
			selected: input.selected || false;
		}
	},

	getTemplateData: function(state, input) {
		var style = ;

		return {
			name: state.name,
			color: state.selected ? 'yellow' : 'transparent'
		};
	},

	handleClick: function() {
		this.setState('selected', true);
	},

	isSelected: function() {
		return this.state.selected;
	}
});
```

## Stateful Widget with Update Handlers

If you want to avoid re-rendering a widget for a particular state property change then simply provide your own method to handle the state change as shown below:

__src/components/app-hello/template.marko__

```xml
<div w-bind
	 w-onClick="handleClick"
	 style="background-color: ${data.color}">

	Hello ${data.name}!

</div>
```

__src/components/app-hello/index.js__

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getInitialState: function(input) {
		return {
			name: input.name,
			selected: input.selected || false;
		}
	},

	getTemplateData: function(state, input) {
		var style = ;

		return {
			name: state.name,
			color: state.selected ? 'yellow' : 'transparent'
		};
	},

	handleClick: function() {
		this.setState('selected', true);
	},

	isSelected: function() {
		return this.state.selected;
	},

	update_selected: function(newSelected) {
		// Manually update the DOM to reflect the new "selected"
		// state" to avoid re-rendering the entire widget.
		if (newSelected) {
			this.el.style.backgroundColor = 'yellow';
		} else {
			this.el.style.backgroundColor = null;
		}
	}
});
```

## Complex Widget

```xml
<div w-bind>
	<app-overlay title="My Overlay"
		w-id="overlay"
		w-onBeforeHide="handleOverlayBeforeHide">
		Body content for overlay.
	</app-overlay>

	<button type="button"
		w-onClick="handleShowButtonClick">
		Show Overlay
	</button>

	<button type="button"
		w-onClick="handleHideButtonClick">
		Hide Overlay
	</button>
</div>
```

Below is the content of `index.js` where the widget type is defined:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	init: function() {
		// this.el will be the raw DOM element the widget instance
		// is bound to:
		var el = this.el;
	},

	handleShowButtonClick: function(event) {
		console.log('Showing overlay...');
        this.getWidget('overlay').show();
    },

    handleHideButtonClick: function(event) {
		console.log('Hiding overlay...');
        this.getWidget('overlay').hide();
    },

    handleOverlayBeforeHide: function(event) {
        console.log('The overlay is about to be hidden!');
    }
})
```

## Container Widget

A container widget supports nested content. When the container widget is re-rendered, the nested content is automatically preserved.

__src/components/app-alert/template.marko__

```xml
<div class="alert alert-${data.type}" w-bind>
	<i class="alert-icon"/>
	<span w-body></span>
</div>
```

__src/components/app-alert/index.js__

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	init: function() {
		// this.el will be the raw DOM element the widget instance
		// is bound to:
		var el = this.el;
	},

	getInitialState: function(input) {
		return {
			type: input.type || 'success'
		}
	},

	getTemplateData: function(state, input) {
		return {
			type: state.type
		};
	},

	getInitialBody: function(input) {
		return input.message || input.renderBody;
    },

	setType: function(type) {
		this.setState('type', type);
	}
})
```

The widget can then be used as shown below:

```xml
<app-alert message="This is a success alert"/>

<app-alert>
	This is a success alert
</app-alert>

<app-alert message="This is a failure alert" type="failure"/>

<app-alert type="failure">
	This is a failure alert
</app-alert>
```

## Preserving DOM Nodes during Re-render

Sometimes it is important to _not_ re-render a DOM subtree. This may due to either of the following reasons:

- Improved performance
- DOM nodes contains externally provided content
- DOM nodes have internal state that needs to be maintained

Marko Widgets allows DOM nodes to be preserved by putting a special `w-preserve`, `w-preserve-if="<condition>"`, `w-preserve-body` or `w-preserve-body-if="<condition>"` attribute on the HTML tags that should be preserved. Preserved DOM nodes will be reused and re-inserted into a widget's newly rendered DOM automatically.

```xml
<div w-bind>

	<span w-preserve>
		<p>
			The root span and all its children will never
			be re-rendered.
		</p>
		<p>
			Rendered at ${Date.now()}.
		</p>
	</span>
	<div w-preserve-body>
		Only the children of the div will preserved and
		the outer HTML div tag will be re-rendered.
	</div>

	Don't rerender the search results if no search results
	are provided.
	<app-search-results items="data.searchResults"
		w-preserve-if="data.searchResults == null"/>
</div>
```

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

```xml
<div class="my-component" w-bind="./widget">
    <h1>Click Me</h1>
</div>
```

You can also choose to leave the value of the `w-bind` attribute empty. If the value of `w-bind` is empty then `marko-widgets` will search for a widget module by first checking to see if `widget.js` exists and then `index.js`. Example:

```xml
<div class="my-component" w-bind>
    <h1>Click Me</h1>
</div>
```

The widget bound to the `<div>` should then be implemented as a CommonJS module that exports a widget type as shown in the following JavaScript code:

__src/pages/index/widget.js:__

```javascript

module.exports = require('marko-widgets').defineComponent({
	init: function() {
		var rootEl = this.el; // this.el returns the root element that the widget is bound to
	    var self = this;

	    rootEl.addEventListener('click', function() {
	        self.addText('You clicked on the root element!');
	    });
	},

	addText: function(text) {
        this.el.appendChild(document.createTextNode(text));
    }
})
```

## Widget Props

When a widget is initially rendered, it is passed in an initial set of properties. For example:

```javascript
require('fancy-checkbox').render({
		checked: true,
		label: 'Foo'
	});
```



If a widget is stateful, then the state should be derived from the input properties and the template data should then be derived from the state. If a widget is not stateful, then the template data should be derived directly from the input properties. If you need to normalize the input properties then you can implement the `getInitialProps(input, out)` method as shown below:


```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getInitialProps: function(input, out) {
		return {
			size: input.size ? input.size.toLowerCase() : 'normal'
		};
	},

	getTemplateData: function(state, input) {
		// input will be the value returned by getInitialProps()
		// ...
	}

	// ...
});
```

## Widget Template

Every widget should have an associated Marko template that will be used to render the widget. A widget is associated with a template using the `template` property as shown below:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input, out) {
		return {
			name: input.name
		};
	},

	...
});
```

The `getTemplateData(state, input, out)` method is used to build the view model that gets passed to the template based on the state and/or input. If a widget is stateful then the template data should be derived only from the `state`. If a widget is stateless then the template data should be derived only from the `input`. If a stateful widget is being re-rendered then the `input` argument will always be `null`. For a stateless widget, the `state` argument will be `null`.

## Widget State

A stateful widget will maintain state as part of the widget that instance. If the state of the widget changes then the widget will be queued to be updated in the next batch. The initial state should be provided using the `getInitialState(input)` method. All state changes should go through the `setState(name, value)` or `setState(newState)` methods. For example:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getInitialState: function(input, out) {
		return {
			name: input.name,
			selected: input.selected || false;
		}
	},

	getTemplateData: function(state, input) {
		var style = ;

		return {
			name: state.name,
			color: state.selected ? 'yellow' : 'transparent'
		};
	},

	handleClick: function() {
		this.setState('selected', true);
	},

	isSelected: function() {
		return this.state.selected;
	}
});
```

The current state of the widget can always be read using the `this.state` property. For example:

```javscript
var isSelected = this.state.selected === true;
```

When state is modified using either the `setState(name, value)` or `setState(newState)` method, only a shallow compare is done to see if the state has changed. Therefore, if a complex object is part of the state then it should be treated as immutable.

## Widget Config

Arbitrary widget configuration data determined at render time can be provided to the constructor of a widget by implementing the `getWidgetConfig(input, out)` method as shown below:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getWidgetConfig: function(input, out) {
		return {
			foo: 'bar'
		}
	},

	init: function(widgetConfig) {
		var foo = widgetConfig.foo; // foo === 'bar'
	},

	...
});

```

## Referencing Nested Widgets

The `marko-widgets` taglib also provides support for allowing a widget to communicate directly with nested widgets. A nested widget can be assigned a widget ID (only needs to be unique within the scope of the containing widget) and the containing widget can then reference the nested widget by the assigned widget ID using the `this.getWidget(id)` method.

The following HTML template fragment contains a widget that has three nested [sample-button](https://github.com/marko-js-samples/marko-sample-components/tree/master/components/sample-button) widgets. Each nested [sample-button](https://github.com/marko-js-samples/marko-sample-components/tree/master/components/sample-button) is assigned an ID (i.e. `primaryButton`, `successButton` and `dangerButton`).

```xml
<div class="my-component" w-bind="./widget">
    <div class="btn-group">
        <sample-button label="Click Me" variant="primary" w-id="primaryButton"/>
        <sample-button label="Click Me" variant="success" w-id="successButton"/>
        <sample-button label="Click Me" variant="danger" w-id="dangerButton"/>
    </div>
    ...
</div>
```

The containing widget can then reference a particular nested widget as shown in the following sample JavaScript code:

```javascript
this.getWidget('dangerButton').on('click', function() {
    alert('You clicked on the danger button!');
});
```

Marko Widgets also supports referencing _repeated_ nested widgets as shown below:

```xml
<div class="my-component" w-bind="./widget">
    <ul>
		<li for="todoItem in data.todoItems">
			<app-todo-item w-id="todoItems[]" todo-item="todoItem"/>
		</li>
	</ul>
</div>
```

The containing widget can then reference the repeated todo item widgets using the `this.getWidgets(id)` method as shown below:

```javascript
var todoItemWidgets = this.getWidgets('todoItems');
// todoItemWidgets will be an Array of todo item widgets
```

To try out and experiment with this code please see the documentation and source code for the [widget-communication](https://github.com/marko-js-samples/widget-communication) sample app.

## Referencing Nested DOM Elements

DOM elements nested within a widget can be given unique IDs based on the containing widget's ID. These DOM elements can then be efficiently looked up by the containing widget using methods provided. The `w-id` custom attribute can be used to assign DOM element IDs to HTML elements that are prefixed with the widget's ID. For example, given the following HTML template fragment:

```xml
<form w-bind="./widget">
    ...
    <button type="submit" w-id="submitButton">Submit</button>
    <button type="button" w-id="cancelButton">Cancel</button>
</form>
```

Assuming the unique ID assigned to the widget is `w123`, the following would be the HTML output:

```xml
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

The object returned by `this.getEl(id)` will be a raw [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element). If you want a jQuery wrapped element you can do either of the following:


Option 1) Use jQuery directly:

```javascript
var $submitButton = $(this.getEl('submitButton'));
```

Option 2) Use the `this.$()` method:

```javascript
var $submitButton = this.$('#submitButton');
```

Marko Widgets also supports referencing _repeated_ nested DOM elements as shown below:

```xml
<ul>
	<li for="color in ['red', 'green', 'blue']"
		w-id="colorListItems[]">
		$color
	</li>
</ul>
```

The containing widget can then reference the repeated DOM elements using the `this.getEls(id)` method as shown below:

```javascript
var colorListItems = this.getEls('colorListItems');
// colorListItems will be an Array of raw DOM <li> elements
```

## Adding Event Listeners

Marko Widgets supports attaching event listeners to nested DOM elements and nested widgets. Event listeners can either be registered declaratively in the Marko template or in JavaScript code.

### Adding DOM Event Listeners

A widget can subscribe to events on a nested DOM element.

Listeners can be attached declaratively as shown in the following sample code:

```xml
<div w-bind>
	<form w-onsubmit="handleFormSubmit">
		<input type="text" value="email" w-onchange="handleEmailChange">
		<button>Submit</button>
	</form>
</div>
```

And then in the widget:

```javascript

module.exports = require('marko-widgets').defineComponent({
	// ...

	handleFormSubmit: function(event, el) {
		event.preventDefault();
		// ...
	},

	handleEmailChange: function(event, el) {
		var email = el.value;
		this.validateEmail(email);
		// ...
	},

	validateEmail: function(email) {
		// ...
	}
});
```

NOTE: Event handler methods will be invoked with `this` being the widget instance and the following two arguments will be provided to the handler method:

1. `event` - The raw DOM event object (e.g. `event.target`, `event.clientX`, etc.)
2. `el` - The element that the listener was attached to (which can be different from `event.target` due to bubbling)


For performance reasons, Marko Widgets only adds one event listener to the root `document.body` element for each event type that bubbles. When Marko Widgets captures an event on `document.body` it will internally delegate the event to the appropriate widgets. For DOM events that do not bubble, Marko Widgets will automatically add DOM event listeners to each of the DOM nodes. If a widget is destroyed, Marko Widgets will automatically do the appropriate cleanup to remove DOM event listeners.

You can also choose to add listeners in JavaScript code by assigning an "element id" to the nested DOM element (only needs to be unique within the scope of the containing widget) so that the nested DOM element can be referenced by the containing widget. The scoped widget element ID should be assigned using the `w-id="<id>"` attribute. For example, in the template:

```xml
<div w-bind>
	<form w-id="form">
		<input type="text" value="email" w-id="email">
		<button>Submit</button>
	</form>
</div>
```

And then in the widget:

```javascript

module.exports = require('marko-widgets').defineComponent({
	// ...

	init: function() {
		var self = this;

		var formEl = this.getEl('form');
		formEl.addEventListener('submit', function(event) {
			self.handleFormSubmit(event, formEl)
		});

		// Or use jQuery if that is loaded on your page:
		var emailEl = this.getEl('email');
		$(emailEl).on('change', function(event) {
			self.handleEmailChange(event, emailEl)
		});
	},

	handleFormSubmit: function(event, el) {
		event.preventDefault();
		// ...
	},

	handleEmailChange: function(event, el) {
		var email = el.value;
		this.validateEmail(email);
		// ...
	},

	validateEmail: function(email) {
		// ...
	}
});
```

### Adding Custom Event Listeners

A widget can subscribe to events on nested widgets. Every widget extends [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) and this allows each widget to emit events.

Listeners can be attached declaratively as shown in the following sample code:

```xml
<div w-bind="./widget">
	<app-overlay title="My Overlay"
		w-onBeforeHide="handleOverlayBeforeHide">

		Content for overlay

	</app-overlay>
</div>
```

And then in the widget:

```javascript
module.exports = require('marko-widgets').defineComponent({
	// ...

	handleOverlayBeforeHide: function(event) {
        console.log('The overlay is about to be hidden!');
    }
});
```

You can also choose to add listeners in JavaScript code by assigning an "id" to the nested widget (only needs to be unique within the scope of the containing widget) so that the nested widget can be referenced by the containing widget. The scoped widget ID should be assigned using the `w-id="<id>"` attribute. For example, in the template:

```xml
<div w-bind="./widget">
	<app-overlay title="My Overlay"
		w-id="myOverlay">

		Content for overlay

	</app-overlay>
</div>
```

And then in the widget:

```javascript
module.exports = require('marko-widgets').defineComponent({
	// ...

	init: function() {
		var self = this;

		var myOverlay = this.getWidget('myOverlay');

		this.subscribeTo(myOverlay)
			.on('beforeHide', function(event) {
				self.handleOverlayBeforeHide(event);
			});
	},

	handleOverlayBeforeHide: function(event) {
        console.log('The overlay is about to be hidden!');
    }
});
```

NOTE: `subscribeTo(eventEmitter)` is used to ensure proper cleanup if the subscribing widget is destroyed.

## Lifecycle Methods


### getInitialProps(input, out)

This optional method is used to normalize the input properties during the rendering of a UI component. If implemented, this method should return the input properties to use based on the provided `input` and `out` arguments.

```javascript
{
	getInitialProps: function(input, out) {
		return {
			name: input.name.toUpperCase()
		}
	},
	...
}
```

_NOTE: This method is called during rendering and before a widget instance has been created. `this` should _not_ be used._

### getInitialState(input, out)

This optional method is used to determine the initial state for a newly rendered UI component.

```javascript
{
	getInitialState: function(input, out) {
		return {
			counter: input.counter == null ? 0 : input.counter
		}
	},
	...
}
```

_NOTE: This method is called during rendering and before a widget instance has been created. `this` should _not_ be used._

### getTemplateData(state, input, out)

This optional method is used to determine what data will be passed to the Marko template that is used to render the UI component.

_NOTE: This method is called during rendering and before a widget instance has been created. `this` should _not_ be used._

### getWidgetConfig(input, out)

This optional method is used to determine is passed to the widget constructor when the widget is initialized in the browser. If the UI component is rendered on the server then the widget config data will be serialized to a JSON-like data structure and stored in a special `data-w-config` attribute in the DOM.

_NOTE: This method is called during rendering and before a widget instance has been created. `this` should _not_ be used._

### getInitialBody(input, out)

This optional method is used to determine the nested external content that is to be injected into the body of the UI component (to support transclusion). The actual injection point is determined by the `w-body` attribute.

_NOTE: This method is called during rendering and before a widget instance has been created. `this` should _not_ be used._

### init(widgetConfig)

The `init(widgetConfig)` constructor method is called once in the browser when the widget is first created and after the widget has been mounted in the DOM. The `init(widgetConfig)` method is only called once for a given widget.

_NOTE: `this` will be the widget instance_

### onBeforeUpdate()

The `onBeforeUpdate()` method is called when a widget's view is about to be updated due to either new properties or a state change.

_NOTE: `this` will be the widget instance_

### onUpdate()

The `onUpdate()` method is called when a widget's view has been updated due to either new properties or a state change. The DOM nodes have been updated accordingly by time this method has been called.

_NOTE: `this` will be the widget instance_

### onBeforeDestroy()

The `onBeforeDestroy()` method is called when a widget is about to be destroyed due to it being fromed from the DOM.

_NOTE: `this` will be the widget instance_

### onDestroy()

The `onDestroy()` method is called after a widget has been destroyed and removed from the DOM.

_NOTE: `this` will be the widget instance_

### shouldUpdate(newProps, newState)

The `shouldUpdate(newProps, newState)` method is called when a widget's view is about to be updated. Returning `false` will prevent the widget's view from being updated.

_NOTE: `this` will be the widget instance_

## Client-side Rendering

Every widget defined using `defineComponent(...)` exports a `render(input)` method that can be used to render the widget in the browser as shown below:

```javascript
var widget = require('fancy-checkbox').render({
		checked: true,
		label: 'Foo'
	})
	.appendTo(document.body)
	.getWidget();

widget.setChecked(false);
widget.setLabel('Bar');
```

The `appendTo(targetEl)` method is only one of the methods that can be used to insert the widget into the DOM. All of the methods are listed below:

- `appendTo(targetEl)`
- `insertAfter(targetEl)`
- `insertBefore(targetEl)`
- `prependTo(targetEl)`
- `replace(targetEl)`

## Server-side Rendering

In order for everything to work on the client-side we need to include the code for the `marko-widgets` module and the `./widget.js` module as part of the client bundle and we also need to use the custom `<init-widgets>` tag to let the client know which widgets rendered on the server need to be initialized on the client. To include the client-side dependencies will be using the [lasso](https://github.com/lasso-js/lasso) module and the taglib that it provides. Our final page template is shown below:

__src/pages/index/template.marko:__

```xml
<lasso-page name="index" package-path="./browser.json" />

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Marko Widgets: Bind</title>
    <lasso-head/>
</head>
<body>
    <h1>Marko Widgets: Bind</h1>

    <div class="my-component" w-bind="./widget">
        <h2>Click Me</h2>
    </div>

    <lasso-body/>
    <init-widgets/>
</body>
</html>
```

The `browser.json` that includes the required client-side code is shown below:

__src/pages/index/browser.json:__

```javascript
{
    "dependencies": [
        "require: marko-widgets",
        "require: ./widget"
    ]
}
```

In the above example, the final HTML will be similar to the following:

```xml
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Widgets Demo</title>
    </head>
    <body>
		<h1>Marko Widgets: Bind</h1>
		<div class="my-component" id="w0" data-widget="/src/pages/index/widget">
			<h2>Click Me</h2>
		</div>
        <script src="static/index-8947595a.js" type="text/javascript"></script>
        <span style="display:none;" data-ids="w0" id="rwidgets"></span>
    </body>
</html>
```

To try out and experiment with this code please see the documentation and source code for the [widget-bind](https://github.com/marko-js-samples/widget-bind) sample app.

### Manually Initializing Server-side Rendered Widgets

It's also possible to manually initialize rendered widgets as shown in the following code:

```javascript
var markoWidgets = require('marko-widgets');
var template = require('./template.marko');

module.exports = function(req, res) {
	template.render(viewModel, function(err, html, out) {
		var widgetIds = markoWidgets.getRenderedWidgetIds(out);

		// Serialize the HTML and the widget IDs to the browser
		res.json({
	            html: html,
	            widgetIds: widgetIds
	        });
	});
}
```

And then, in the browser, the following code can be used to initialize the widgets:

```javascript
var result = JSON.parse(response.body);
var html = result.html
var widgetIds = result.widgetIds;

document.body.innerHTML = html; // Add the HTML to the DOM

// Initialize the widgets to bind behavior!
require('marko-widgets').initWidgets(widgetIds);
```

NOTE: the server side example above renders the template directly and therefore circumvents the
index.js file (neither getInitialState() nor getTemplateData() are executed).

To render the complete widget, use the code below instead
(the browser side is not affected; the same code snipped can be used):

```javascript
var markoWidgets = require('marko-widgets');
var helloComponent = require('src/components/app-hello');

module.exports = function(req, res) {
    var renderResult = helloComponent.render(viewModel);
    var widgetIds = markoWidgets.getRenderedWidgetIds(renderResult.out);

    // Serialize the HTML and the widget IDs to the browser
    res.json({
        html: renderResult.html,
        widgetIds: widgetIds
    });
}
```

## Split Renderer and Widget

For UI components that will only be rendered on the server it may be desirable to split the renderer (i.e. rendering logic and template) from the client-side behavior (i.e. widget). This can be done by using `defineRenderer(def)` and `defineWidget(def)` instead of `defineComponent(def)`. An example of a combined and split UI component is shown below.

### Combined Renderer and Widget

```
src/components/app-hello/
├── index.js
└── template.marko
```

___src/components/app-hello/template.marko:___

```xml
<div w-bind
	w-on-click="handleClick">
	Hello ${data.name}!
</div>
```

___src/components/app-hello/index.js:___

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name
		};
	},

	handleClick: function() {
		this.el.style.backgroundColor = 'yellow';
	}
});
```

### Split Renderer and Widget

```
src/components/app-hello/
├── index.js
├── renderer.js
├── template.marko
└── widget.js
```

___src/components/app-hello/template.marko:___

```xml
<div w-bind="./widget"
	w-on-click="handleClick">
	Hello ${data.name}!
</div>
```

___src/components/app-hello/renderer.js:___

```javascript
module.exports = require('marko-widgets').defineRenderer({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name
		};
	}
});
```

___src/components/app-hello/widget.js:___

```javascript
module.exports = require('marko-widgets').defineWidget({
	handleClick: function() {
		this.el.style.backgroundColor = 'yellow';
	}
});
```

___src/components/app-hello/index.js:___

```javascript
exports.render = require('./renderer').render;
```

# API


## marko-widgets exports

### defineComponent(def)

Used to define a UI component that includes both the renderer *and* the widget (i.e., the client-side behavior). If a UI component is to only be rendered on the server then you might benefit from defining the renderer independently of the widget using the `defineRenderer(def)` and `defineWidget(def)` functions, respectively.

The return value of `defineComponent(def)` will be a `Widget` constructor function with static `renderer(input, out)` and `render(input)` methods.

Example usage for defining a stateless UI component:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name
		};
	},

	handleClick: function() {
		this.el.style.backgroundColor = 'yellow';
	}
});
```

### defineRenderer(def)

The `defineRenderer(def)` function can be used to define a UI component renderer independently from an associated widget. This can be beneficial when a UI component needs to only be rendered on the server and it is desirable to avoid sending down the template and rendering logic to the browser. For UI components that are only rendered on the server, only the client-side behavior really needs to be be sent to the browser.

The return value of `defineRenderer(def)` will be a `renderer(input, out)` function with a static `render(input)` method.

See the [Split Ren]

### defineWidget(def)

The `defineWidget(def)` function can be used to define a UI component's client-side behavior independent of the code to render the UI component. This can be beneficial when a UI component needs to only be rendered on the server and it is desirable to avoid sending down the template and rendering logic to the browser. For UI components that are only rendered on the server, only the client-side behavior really needs to be be sent to the browser.

The return value of `defineRenderer(def)` will be a `renderer(input, out)` function with a static `render(input)` method.

### getWidgetForEl(el)

The `getWidgetForEl(el)` function can be used to retrieve a widget object outside of its nested context.
```javascript
var myToggle = require('marko-widgets').getWidgetForEl('w0-myToggle');
myToggle.setSelected(true);
```

It is also possible to get a widget handle using the widget el:
```javascript
var el = document.getElementById('w0-myToggle');
var myToggle = require('marko-widgets').getWidgetForEl(el);
myToggle.setSelected(true);
```

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
this.$("#myEl")
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

Destroy takes 2 optional parameters:
```javascript
widget.destroy({
	removeNode: true, //true by default
	recursive: true //true by default
})
```

Setting `removeNode` parameter to `false` will keep the widget on the DOM while still unsubscribing all events from it.
Setting `recursive` to `false` will prevent children widgets from being destroyed.

#### detach()

Detaches the widget's root element from the DOM by removing the node from its parent node.

#### emit(eventType, arg1, arg2, ...)

Emits an event. This method is inherited from EventEmitter (see [Node.js Events: EventsEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)

#### getEl(widgetElId)

Returns a nested DOM element by prefixing the provided `widgetElId` with the widget's ID. For Marko, nested DOM elements should be assigned an ID using the `w-id` custom attribute.  Returns `this.el` if no `widgetElId` is provided.

#### getEls(id)

Returns an Array of _repeated_ `DOM` elements for the given ID. Repeated DOM elements must have a value for the `w-id` attribute that ends with `[]` (e.g., `w-id="myDivs[]"`)

#### getElId(widgetElId)

Similar to `getEl`, but only returns the String ID of the nested DOM element instead of the actual DOM element.

#### getWidget(id[, index])

Returns a reference to a nested `Widget` for the given ID. If an `index` is provided and the target widget is a repeated widget (e.g. `w-id="myWidget[]"`) then the widget at the given index will be returned.

#### getWidgets(id)

Returns an Array of _repeated_ `Widget` instances for the given ID. Repeated widgets must have a value for the `w-id` attribute that ends with `[]` (e.g., `w-id="myWidget[]"`)

#### insertAfter(targetEl)

#### insertBefore(targetEl)

#### isDestroyed()

#### on(eventType, listener)

#### prependTo(targetEl)

#### ready(callback)

#### replace(targetEl)

#### replaceChildrenOf(targetEl)

### replaceState(newState)

Replaces the state with an entirely new state. If any of the state properties changed then the widget's view will automatically be updated.

#### rerender(data, callback)

#### setState(name, value)

Used to change the value of a single state property. For example:

```javascript
this.setState('disabled', true);
```

#### setState(newState)

Used to change the value of multiple state properties. For example:

```javascript
this.setState({
	disabled: true,
	size: 'large'
});
```

#### setStateDirty(name, value)

Force a state property to be changed even if the value is equal to the old value. This helpful in cases where a change occurs to a complex object that would not be detected by a shallow compare.

Example:

```javascript
// Add a new item to an array without going through `this.setState(...)`
this.state.colors.push('red');

// Force that particular state property to be considered dirty so
// that it will trigger the widget's view to be updated.
this.setStateDirty('colors');
```

#### setProps(newProps)

For stateless widgets, setting a widgets properties will result in the widget being re-rendered using the new input. For stateful widgets, setting a widgets properties will result in `getInitialState(newProps)` being called again to determine the new state and the widget state will be updated to use the new state.

#### subscribeTo(targetEventEmitter)

### Properties

#### this.el

The root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

#### this.id

The String ID of the root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

#### this.state

The current state for the widget. For example:

```javascript
module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getInitialState: function(input) {
		return {
			disabled: false
		}
	},

	init: function() {
		console.log(this.state.disabled); // Output: false
		this.setState('disabled', true);
		console.log(this.state.disabled); // Output: true
	}
});
```

# Frequently Asked Questions (FAQ)

Please see [FAQ](docs/faq.md).

# Changelog

See [CHANGELOG.md](CHANGELOG.md)

# Discuss

Chat channel: [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/marko-js/marko-widgets?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Questions or comments can also be posted on the [Marko Widgets Github issues](https://github.com/marko-js/marko-widgets/issues) page.

# Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

# Contribute

Pull Requests welcome. Please submit Github issues for any feature enhancements, bugs or documentation problems.

# License

Apache License v2.0
