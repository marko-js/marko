Overview
========

Marko Widgets extends the [Marko templating engine](https://github.com/marko-js/marko) to provide a simple and efficient mechanism for binding behavior to UI components rendered on either the server or in the browser. In addition, changing a widgets state or properties will result in the DOM automatically being updated without writing extra code. Marko Widgets has adopted many of the good design principles promoted by the [React](https://facebook.github.io/react/index.html) team, but aims to be much lighter and often faster (especially on the server). When updating the view for a widget, Marko Widgets uses DOM diffing to make the minimum number of changes to the DOM through the use of the [morphdom](https://github.com/patrick-steele-idem/morphdom) module.

<a href="http://markojs.com/marko-widgets/try-online/" target="_blank">Try Marko Widgets Online!</a>

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
	- Fast serialization of state from the server to the browser using [warp10](https://github.com/patrick-steele-idem/warp10)
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
		ref="overlay"
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

Marko Widgets allows DOM nodes to be preserved by putting a special `no-update`, `no-update-if(<condition>)`, `no-update-body` or `no-update-body-if(<condition>)` attribute on the HTML tags that should be preserved. Preserved DOM nodes will be reused and re-inserted into a widget's newly rendered DOM automatically.

```xml
<div w-bind>

	<span no-update>
		<p>
			The root span and all its children will never
			be re-rendered.
		</p>
		<p>
			Rendered at ${Date.now()}.
		</p>
	</span>
	<div no-update-body>
		Only the children of the div will preserved and
		the outer HTML div tag will be re-rendered.
	</div>

	Don't rerender the search results if no search results
	are provided.
	<app-search-results items="data.searchResults"
		no-update-if(data.searchResults == null)/>
</div>
```

## Preserving DOM Attributes during Re-render

Similar to preserving DOM nodes, Marko Widgets also makes it possible to preserve specific attributes on a DOM node. This can be helpful if a separately library is modifying DOM attributes and those changes should be preserved during a rerender. This is mostly the case with `class` and `style` attributes when using a animation/tweening engines such as [Velocity.js](http://julian.com/research/velocity/) or [GSAP](http://greensock.com/gsap).

The `w-preserve-attrs` attribute can be applied to any DOM element and it expects a comma-separated list of attribute names as shown below:

```xml
<div w-preserve-attrs="class,style">
	...
</div>
```