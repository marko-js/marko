CHANGELOG
=========

# 6.x

## 6.1.x

### v6.1.3

- Fixed #144 - ready callback invoked multiple times when using jQuery proxy
- Refactored testing harness

### v6.1.2

- Fixed #141 - w-preserve-if/w-preserve-body-if broken

### v6.1.1

- Fixed #137 - A widget should not update the DOM if it is destroyed (fixed by [@avigy](https://github.com/avigy))

### v6.1.0

- Use [lasso-modules-client](https://github.com/lasso-js/lasso-modules-client) for generating client-side widget module paths

## 6.0.x

### v6.0.2

- Upgraded test dependencies

### v6.0.1

- Improve how client-side module paths are generated when lasso is available

### v6.0.0

- Marko v3 compatibility

# 5.x

## 5.3.x

### v5.3.0

- Fixes [#121](https://github.com/marko-js/marko-widgets/issues/121) - Allow for w-preserve-attrs to enable preservation of attributes:

```html
<div w-preserve-attrs="style,class"></div>
```

## 5.2.x

### v5.2.2

- The function for generating unique widget IDs on the client-side is not
  exported as a global on the `window` object (fixes #118).

### 5.2.0

 - Fixes #116 - Bug in browserify breaks browserify compatibility (workaround required)
 - Use `<noscript>` tag for delivering widget IDs to the browser

## 5.1.x

### 5.1.0

 - Fixes #112 DOM document should be bound to widget for purpose of using correct document.getElementById(...)

### 5.0.9

## 5.0.x

### 5.0.9

- Fixes #111 - Make registerWidget a no-op on the server

### 5.0.8

- Fixes #109 - checks addEventListener instead of attachEvent

### 5.0.8

- Fixes #109 - checks addEventListener instead of attachEvent

### 5.0.7

- Improvement to docs

### 5.0.6

- Fixes #106 - Fix immediate widget initialization

### 5.0.5

- Fixes #102 Fix how require path to marko-widgets is generated in compiled templates

### 5.0.4

- Fixes #101 - Widget binding broken when UI component is npm linked in

### 5.0.3

- Documentation fixes

### 5.0.2

- Fix for #98 - Properly preserve widget stack when beginning async rendering

### 5.0.1

- Fixes #92 - w-preserve* does not work on widget root node

### 5.0.0

- Integrated [morphdom](https://github.com/patrick-steele-idem/morphdom) to more efficiently transform the existing DOM instead of replacing it entirely
- Significant performance improvements
- Code cleanup
- Breaking changes:
    - The `onAfterUpdate` lifecycle event was renamed to `onUpdate`
    - Reusing DOM nodes might change application behavior (in rare cases)
    - The `init()` constructor for a widget is only called _once_ even if a widget is rerendered
- Dust-related code has been removed
- New lifecycle event: 'onRender'

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
