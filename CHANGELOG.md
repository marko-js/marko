CHANGELOG
=========

# Upgrade Guide

## v4 to v5

### Breaking changes

- The `onAfterUpdate` lifecycle event was renamed to `onUpdate`
- The `init()` constructor for a widget is only called _once_ even if a widget is rerendered
- When a nested widget is rerendered, it is no longer reinitialized.

### New features

- Integrated [morphdom](https://github.com/patrick-steele-idem/morphdom) to more efficiently transform the existing DOM instead of replacing it entirely
- Significant performance improvements
- Code cleanup
- Stable IDs for widgets that are not assigned a `w-id`

## v3 to v4

### Breaking changes

- `Widget.prototype.render = function(input, out) { ... }` is no longer allowed. Use `Widget.prototype.renderer = function(input, out) { ... }` or `defineComponent(...)` instead (recommended).
- NOTE: `this.widgets.foo` has been removed since `marko-widgets@^3`

### New features

- Simpler syntax for defining widget types:

___Old:___

```javascript
function Widget() {
    this.doSomething();
}

Widget.prototype = {
    doSomething: function() {

    }
};

module.exports = Widget;
```

___New:___

```javascript
module.exports = require('marko-widgets').defineWidget({
    init: function() {
        this.doSomething();
    },

    doSomething: function() {

    }
});
```

- Ability to define the _widget_ and the _renderer_ in the same JavaScript file:

```javascript
module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            hello: 'world'
        };
    },

    init: function() {
        this.doSomething();
    },

    doSomething: function() {

    }
});
```

- Support for stateful widgets (changing widget state causes a widget to be rerendered)

```javascript
module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),

    getInitialState: function(input) {
        return {
            size: input.size || 'normal'
        };
    },

    getInitialBody: function(input) {
        return input.label || input.renderBody;
    },
    getTemplateData: function(state, input) {
        var rootAttrs = {};

        var classParts = ['app-button'];

        var type = 'button';

        var size = state.size;
        if (size !== 'normal') {
            classParts.push('app-button-' + size);
        }

        rootAttrs['class'] = classParts.join(' ');

        return {
            type: type,
            rootAttrs: rootAttrs
        };
    },
    setSize: function(size) {
        this.setState('size', size);
    },
    getSize: function() {
        return this.state.size;
    }
});
```

## v2 to v3

With marko-widgets, `this.widgets.foo` is no longer support and `this.widgets` will be `null`. Instead, you should `this.getWidget('foo')`.

## v1 to v2

marko-widgets v2 introduced the potential for a circular dependency. To avoid problems, you should no longer use `module.exports` in your widget JavaScript module as shown below:

_Old widget.js:_

```javascript
function Widget() {
    // ...
}

Widget.prototype = {
    // ...
};

module.exports = Widget;
```

_New widget.js:_

```javascript
function Widget() {

}

Widget.prototype = {

};

exports.Widget = Widget;
```

You should also do the same for your UI component renderer:

_Old renderer.js:_

```javascript
module.exports = function render(input, out) {
    // ...
}
```

_New renderer.js:_

```javascript
exports.renderer = function(input, out) {
    // ...
}
```

# 5.x

## 5.0.x

### 5.0.0

- Integrated [morphdom](https://github.com/patrick-steele-idem/morphdom) to more efficiently transform the existing DOM instead of replacing it entirely
- Significant performance improvements
- Code cleanup
- Breaking changes:
    - The `onAfterUpdate` lifecycle event was renamed to `onUpdate`
    - Reusing DOM nodes might change application behavior (in rare cases)
    - The `init()` constructor for a widget is only called _once_ even if a widget is rerendered

# 4.x

## 4.3.x

### 4.3.0

- Fixed #41 - Initialize widgets in nested batched updates first
- Fixed #54 - Allow event handler method name to be dynamic

## 4.2.x

### 4.2.3

- Internal code improvements

### 4.2.2

- Fixed #49 - Allow `w-id` to be used in an intermediate template

### 4.2.1

- Fixed #48 - Improved logic for generating repeated widget IDs to handle gaps

### 4.2.0

- Fixed #47 - Switched from `optimizer` to [lasso](https://github.com/lasso-js/lasso) for tests
- Fixed #46 - Allow `w-id` attr with `<invoke>`

## 4.1.x

### 4.1.0

- Added support `w-preserve-if` and `w-preserve-body-if`. These new attributes allow DOM elements to be conditionally preserved. The right-hand side of the attribute should a JavaScript expression. If the expression evaluates to `false` then the elements will _not_ be preserved. Example usage:

```xml
<div w-bind>
    <!-- Don't rerender the search results if no search results are provided -->
    <app-search-results items="data.searchResults"
        w-preserve-if="data.searchResults == null"/>
</div>
```

## 4.0.x

### 4.0.1

- Stateful widgets
- Batched updates to the DOM
- New methods exported by marko-widgets:
    - `defineComponent(def)`
    - `defineWidget(def)`
    - `defineRenderer(def)`
- New custom taglib attributes: `w-preserve`, `w-preserve-body` and `w-body`
- New Widget methods:
    - `setState(name, value)`
    - `setState(newState)`
    - `replaceState(newState)`
    - `setProps(newProps)`
    - `setStateDirty(name)`
    - `onBeforeDestroy()`
    - `onDestroy()`
    - `onBeforeUpdate()`
    - `onAfterUpdate()`
- New rendering properties:
    - `template` (`String` path to a Marko template)
    - `getInitialProps(input)`
    - `getInitialState(input)`
    - `getTemplateData(state, input)`
    - `getWidgetConfig(input)`
    - `getInitialBody(input)`
- General code cleanup and performance improvements
- :exclamation: Removed support for `Widget.prototype.render = function(input, out) { ... }`

# 3.x

## 3.0.x

### 3.0.0

- :exclamation: Removed support for `this.widgets.foo` (use `this.getWidget('foo')` instead)
- Added support for repeated DOM elements and repeated widgets:

```html
<div class="my-component" w-bind="./widget">
    <ul>
		<li w-id="todoListeItems[]" for="todoItem in data.todoItems">
			<app-todo-item w-id="todoItems[]" todo-item="todoItem"/>
		</li>
	</ul>
</div>
```

```javascript
var todoListeItems = this.getEls('todoListeItems');
var todoItemWidgets = this.getWidgets('todoItems');
```

- Added new methods:
    - `getEls(id)`
    - `getWidgets(id)`

# 2.x

## 2.0.x

### 2.0.12

- Deprecate `w-el-id` in favor of `w-id`

### 2.0.11

- Internal code cleanup

### 2.0.10

- Fixed #19 - Allow `w-on` for custom widget events

### 2.0.9

- Fixed #18 - Widgets in async blocks now initialize in the correct order

### 2.0.8

- Fixed #17 - Allow `w-config` with `w-extend`

### 2.0.7

- Internal: use 'renderBody(out)' instead of `invokeBody()`

### 2.0.6

- Introduced `require('marko-widgets').render(renderer, input)`

### 2.0.5

- Replaced `require('marko-widgets').renderFunc(renderer)` with `require('marko-widgets').renderable(exports, renderer)`

### 2.0.4

- Improved documentation

### 2.0.3

- Added support for using `exports.extendWidget = function(widget, widgetConfig) { ... }`
- Allow `w-extend` attribute to be empty

### 2.0.2


- Allow empty value for `w-bind` (e.g. `<div w-bind>...</div>`) and default to `./widget` or `./`
- Export new method for creating a client-side render function:

```javascript
function renderer(input, out) {
    out.write('Hello ' + input.name + '!');
}

exports.render = require('marko-widgets').renderFunc(renderer);
```

### 2.0.1

- Added new sub-module, `require('marko-widgets/dom')`, that exports [raptor-dom](https://github.com/raptorjs/raptor-dom)

Example:

```javascript
require('marko-widgets/dom').removeChildren(document.body);
```

- Added new sub-module, `require('marko-widgets/renderer')`, that exports [raptor-renderer](https://github.com/raptorjs/raptor-renderer)

Example:

```javascript
require('marko-widgets/renderer').renderFunc(renderer);
```

### 2.0.0

- Improved mechanism for registering and loading widget types.
- Use `exports.Widget` instead of `module.exports = Widget`


# 1.x

## 1.5.x

### 1.5.2

- Fixes #14 - Making adding event listeners more robust by allowing initialization even if document is not ready

### 1.5.1

- Changes to prevent unoptimized code in V8

### 1.5.0

- Fixes #11 Added support for w-on* attributes. Other cleanup and tests
