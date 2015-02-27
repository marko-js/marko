CHANGELOG
=========

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
