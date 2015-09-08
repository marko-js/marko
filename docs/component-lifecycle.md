Component Lifecycle
===================

<!--{TOC}-->

Rendering a UI component will cause the top-level UI component to be rendered and all nested UI components to be rendered. The output of rendering will be an HTML string that contains the output of all rendered UI components. When the HTML string is added to the DOM any widgets associated with the rendered UI components will be initialized. Nested widgets will be initialized before their parents.

# Component Rendering

When a widget is rendered the following optional functions are called in the order shown below:

1. `getInitialProps(input)`
2. `getInitialState(input)`
3. `getTemplateData(state, input)`
4. `getInitialBody(input)`
5. `getWidgetConfig(input)`

Each of the rendering methods is described in the sections below.


## Rendering Methods

`this` should _not_ be used in these methods because a widget instance has not yet been created during rendering.

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

### getTemplateData(state, input, out)

This optional method is used to determine what data will be passed to the Marko template that is used to render the UI component.

### getWidgetConfig(input, out)

This optional method is used to determine is passed to the widget constructor when the widget is initialized in the browser. If the UI component is rendered on the server then the widget config data will be serialized to a JSON-like data structure and stored in a special `data-w-config` attribute in the DOM.

### getInitialBody(input, out)

This optional method is used to determine the nested external content that is to be injected into the body of the UI component (to support transclusion). The actual injection point is determined by the `w-body` attribute.

# Widget Lifecycle

After a UI component's DOM nodes have been added to the DOM a widget instance will be created and bounded to the corresponding DOM node.

## Widget Lifecycle Methods

`this` can be used in these methods as the widget instance.

### init(widgetConfig)

The `init(widgetConfig)` constructor method is called once in the browser when the widget is first created and after the widget has been mounted in the DOM. The `init(widgetConfig)` method is only called once for a given widget.

### onBeforeUpdate()

The `onBeforeUpdate()` method is called when a widget's view is about to be updated due to either new properties or a state change.

### onUpdate()

The `onUpdate()` method is called when a widget's view has been updated due to either new properties or a state change. The DOM nodes have been updated accordingly by time this method has been called.

### onRender(event)

Called when the widget has been rendered (or rerendered) and is mounted to the DOM. The `event` argument will be an object. If the event is being fired for the first render then the `event` argument will have the `firstRender` property set to `true`.

### onBeforeDestroy()

The `onBeforeDestroy()` method is called when a widget is about to be destroyed due to it being fromed from the DOM.

### onDestroy()

The `onDestroy()` method is called after a widget has been destroyed and removed from the DOM.

### shouldUpdate(newProps, newState)

The `shouldUpdate(newProps, newState)` method is called when a widget's view is about to be updated. Returning `false` will prevent the widget's view from being updated.
