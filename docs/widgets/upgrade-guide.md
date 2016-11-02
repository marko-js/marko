Upgrade Guide
=============

## v4 to v5

### Breaking changes

- The `onAfterUpdate` lifecycle event was renamed to `onUpdate`
- The `init()` constructor for a widget is only called _once_ even if a widget is rerendered
- When a nested widget is rerendered, it is no longer reinitialized.
- Everything related to Dust has been removed.

### New features

- Integrated [morphdom](https://github.com/patrick-steele-idem/morphdom) to more efficiently transform the existing DOM instead of replacing it entirely
- Significant performance improvements
- Code cleanup
- Stable IDs for widgets that are not assigned a `w-id`
- New lifecycle event: 'onRender'

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