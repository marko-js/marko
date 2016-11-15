Get Started
===========

<!--{TOC}-->

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
    <div>Click Me</div>
</div>
```

You can also choose to leave the value of the `w-bind` attribute empty. If the value of `w-bind` is empty then `marko-widgets` will search for a widget module by first checking to see if `widget.js` exists and then `index.js`. Example:

```xml
<div class="my-component" w-bind>
    <div>Click Me</div>
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

```javascript
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
        <sample-button label="Click Me" variant="primary" ref="primaryButton"/>
        <sample-button label="Click Me" variant="success" ref="successButton"/>
        <sample-button label="Click Me" variant="danger" ref="dangerButton"/>
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
			<app-todo-item ref="todoItems[]" todo-item="todoItem"/>
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

DOM elements nested within a widget can be given unique IDs based on the containing widget's ID. These DOM elements can then be efficiently looked up by the containing widget using methods provided. The `ref` custom attribute can be used to assign DOM element IDs to HTML elements that are prefixed with the widget's ID. For example, given the following HTML template fragment:

```xml
<form w-bind="./widget">
    ...
    <button type="submit" ref="submitButton">Submit</button>
    <button type="button" ref="cancelButton">Cancel</button>
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
		ref="colorListItems[]">
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
	<form onsubmit("handleFormSubmit")>
		<input type="text" value="email" onchange("handleEmailChange")>
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

You can also choose to add listeners in JavaScript code by assigning an "element id" to the nested DOM element (only needs to be unique within the scope of the containing widget) so that the nested DOM element can be referenced by the containing widget. The scoped widget element ID should be assigned using the `ref="<id>"` attribute. For example, in the template:

```xml
<div w-bind>
	<form ref="form">
		<input type="text" value="email" ref="email">
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
	 onBeforeHide("handleOverlayBeforeHide")>

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

You can also choose to add listeners in JavaScript code by assigning an "id" to the nested widget (only needs to be unique within the scope of the containing widget) so that the nested widget can be referenced by the containing widget. The scoped widget ID should be assigned using the `ref="<id>"` attribute. For example, in the template:

```xml
<div w-bind="./widget">
	<app-overlay title="My Overlay"
		ref="myOverlay">

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

### Rendering Methods

`this` should _not_ be used in these methods because a widget instance has not yet been created during rendering.

#### getInitialProps(input, out)

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

#### getInitialState(input, out)

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

#### getTemplateData(state, input, out)

This optional method is used to determine what data will be passed to the Marko template that is used to render the UI component.

#### getWidgetConfig(input, out)

This optional method is used to determine is passed to the widget constructor when the widget is initialized in the browser. If the UI component is rendered on the server then the widget config data will be serialized to a JSON-like data structure and stored in a special `data-w-config` attribute in the DOM.

#### getInitialBody(input, out)

This optional method is used to determine the nested external content that is to be injected into the body of the UI component (to support transclusion). The actual injection point is determined by the `w-body` attribute.

### Widget Methods

`this` can be used in these methods as the widget instance.

#### init(widgetConfig)

The `init(widgetConfig)` constructor method is called once in the browser when the widget is first created and after the widget has been mounted in the DOM. The `init(widgetConfig)` method is only called once for a given widget.

#### onBeforeUpdate()

The `onBeforeUpdate()` method is called when a widget's view is about to be updated due to either new properties or a state change.

#### onUpdate()

The `onUpdate()` method is called when a widget's view has been updated due to either new properties or a state change. The DOM nodes have been updated accordingly by time this method has been called.

#### onBeforeDestroy()

The `onBeforeDestroy()` method is called when a widget is about to be destroyed due to it being fromed from the DOM.

#### onDestroy()

The `onDestroy()` method is called after a widget has been destroyed and removed from the DOM.

#### shouldUpdate(newProps, newState)

The `shouldUpdate(newProps, newState)` method is called when a widget's view is about to be updated. Returning `false` will prevent the widget's view from being updated.

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
    <div>Marko Widgets: Bind</div>

    <div class="my-component" w-bind="./widget">
        <div>Click Me</div>
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
		<div>Marko Widgets: Bind</div>
		<div class="my-component" id="w0" data-widget="/src/pages/index/widget">
			<div>Click Me</div>
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
		var renderedWidgets = markoWidgets.getRenderedWidgets(out);

		// Serialize the HTML and the widget IDs to the browser
		res.json({
	            html: html,
	            renderedWidgets: renderedWidgets
	        });
	});
}
```

And then, in the browser, the following code can be used to initialize the widgets:

```javascript
var result = JSON.parse(response.body);
var html = result.html
var renderedWidgets = result.renderedWidgets;

document.body.innerHTML = html; // Add the HTML to the DOM

// Initialize the widgets to bind behavior!
require('marko-widgets').initWidgets(renderedWidgets);
```

NOTE: the server side example above renders the template directly and therefore circumvents the
`index.js` file (neither `getInitialState()` nor `getTemplateData()` are executed).

To render the complete widget, use the code below instead
(the browser side is not affected; the same code snipped can be used):

```javascript
var markoWidgets = require('marko-widgets');
var helloComponent = require('src/components/app-hello');

module.exports = function(req, res) {
    var renderResult = helloComponent.render(viewModel);
    var renderedWidgets = markoWidgets.getRenderedWidgets(renderResult.out);

    // Serialize the HTML and the widget IDs to the browser
    res.json({
        html: renderResult.html,
        renderedWidgets: renderedWidgets
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
 on-click("handleClick")>
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
 on-click("handleClick")>
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
