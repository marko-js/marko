JavaScript API
==============

# marko-widgets exports

## defineComponent(def)

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

## defineRenderer(def)

The `defineRenderer(def)` function can be used to define a UI component renderer independently from an associated widget. This can be beneficial when a UI component needs to only be rendered on the server and it is desirable to avoid sending down the template and rendering logic to the browser. For UI components that are only rendered on the server, only the client-side behavior really needs to be be sent to the browser.

The return value of `defineRenderer(def)` will be a `renderer(input, out)` function with a static `render(input)` method.

## defineWidget(def)

The `defineWidget(def)` function can be used to define a UI component's client-side behavior independent of the code to render the UI component. This can be beneficial when a UI component needs to only be rendered on the server and it is desirable to avoid sending down the template and rendering logic to the browser. For UI components that are only rendered on the server, only the client-side behavior really needs to be be sent to the browser.

The return value of `defineWidget(def)` will be a widget constructor function that is used to instantiate new widget instances.

## getWidgetForEl(el)

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

# Widget

## Methods

### $(querySelector)

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

### addEventListener(eventType, listener)

### appendTo(targetEl)

Moves the widget's root DOM node from the current parent element to a new parent element. For example:

```javascript
this.appendTo(document.body);
```

### destroy()

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

### detach()

Detaches the widget's root element from the DOM by removing the node from its parent node.

### doUpdate(stateChanges, oldState)

### emit(eventType, arg1, arg2, ...)

Emits an event. This method is inherited from EventEmitter (see [Node.js Events: EventsEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter)

### getBodyEl()

### getEl(widgetElId)

Returns a nested DOM element by prefixing the provided `widgetElId` with the widget's ID. For Marko, nested DOM elements should be assigned an ID using the `w-id` custom attribute.  Returns `this.el` if no `widgetElId` is provided.

### getEls(id)

Returns an Array of _repeated_ `DOM` elements for the given ID. Repeated DOM elements must have a value for the `w-id` attribute that ends with `[]` (e.g., `w-id="myDivs[]"`)

### getElId(widgetElId)

Similar to `getEl`, but only returns the String ID of the nested DOM element instead of the actual DOM element.

### getWidget(id[, index])

Returns a reference to a nested `Widget` for the given ID. If an `index` is provided and the target widget is a repeated widget (e.g. `w-id="myWidget[]"`) then the widget at the given index will be returned.

### getWidgets(id)

Returns an Array of _repeated_ `Widget` instances for the given ID. Repeated widgets must have a value for the `w-id` attribute that ends with `[]` (e.g., `w-id="myWidget[]"`)

### insertAfter(targetEl)

### insertBefore(targetEl)

### isDestroyed()

### isDirty()

### on(eventType, listener)

### prependTo(targetEl)

### ready(callback)

### replace(targetEl)

### replaceChildrenOf(targetEl)

### replaceState(newState)

Replaces the state with an entirely new state. If any of the state properties changed then the widget's view will automatically be updated.

### rerender(data, callback)

### setState(name, value)

Used to change the value of a single state property. For example:

```javascript
this.setState('disabled', true);
```

### setState(newState)

Used to change the value of multiple state properties. For example:

```javascript
this.setState({
	disabled: true,
	size: 'large'
});
```

### setStateDirty(name, value)

Force a state property to be changed even if the value is equal to the old value. This helpful in cases where a change occurs to a complex object that would not be detected by a shallow compare.

Example:

```javascript
// Add a new item to an array without going through `this.setState(...)`
this.state.colors.push('red');

// Force that particular state property to be considered dirty so
// that it will trigger the widget's view to be updated.
this.setStateDirty('colors');
```

### setProps(newProps)

For stateless widgets, setting a widgets properties will result in the widget being re-rendered using the new input. For stateful widgets, setting a widgets properties will result in `getInitialState(newProps)` being called again to determine the new state and the widget state will be updated to use the new state.

### subscribeTo(targetEventEmitter)

### update()

Force the DOM to update immediately, rather than following the normal queued update mechanism for rendering.

```js
this.setState('foo', 'bar');
this.update(); // Force the DOM to update
this.setState('hello', 'world');
this.update(); // Force the DOM to update
```

## Properties

### this.el

The root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

### this.id

The String ID of the root [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/element) that the widget is bound to.

### this.state

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
