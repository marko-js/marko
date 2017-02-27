# What's Coming in Marko v4?

A lot of exciting things are planned for our v4 release.  All of these items have associated issues on GitHub.  Please leave any feedback, suggestions, concerns, thumbs up/down on those issues.

If there is something that you think needs to be considered for this release outside of what's in this document, open an issue.

*We appreciate your time and feedback!*

## Notable Changes and Improvements

### Single file components ([#399](https://github.com/marko-js/marko/issues/399))

Marko now supports combining HTML, rendering logic, client-side behavior and styling into a single file component.

_src/components/my-counter/index.marko_

```html
<script>
    // this top-level script tag is automatically
    // detected as a component due to `module.exports`
    // `export default` could be used as well
    module.exports = {
        onInput(input) {
            this.state = { count: input.value || 0 };
        },
        increment() {
            this.state.count++;
        }
    }
</script>

<style lang="less">
    .count {
        color:#09c;
    }
    .button {
        background:#fff;
    }
</style>

<div>
    <span class="count">${state.count}</span>
    <button class="button" on-click('increment')>
        increment count
    </button>
</div>
```

You can easily `require`/`import` a single file component and interact with it using the exported JavaScript API:

```js
var myCounter = require('./src/components/my-counter');

var component = myCounter.renderSync({
        value: 10
    })
    .appendTo(document.body)
    .getComponent();

component.increment();
```

Of course, a single file component can also be embedded in another template as a custom tag:

```xml
<div>
    <my-counter value=10 />
</div>
```

### Virtual DOM support ([#366](https://github.com/marko-js/marko/issues/366))

Because Marko renders raw HTML strings to a stream on the server, Marko has always been faster than other libraries by an [order of magnitude](https://github.com/patrick-steele-idem/marko-vs-react) when rendering on the server.  However although Marko has been _pretty_ fast in the browser, it was a little behind some of our competitors. This was mainly because the output HTML string needed to be parsed into a DOM in order to do DOM diffing/patching.

That's changed. Marko now supports multiple compilation outputs. Templates compiled for the server will continue to render to an HTML stream/string and templates compiled for the browser will now render to a fast and lightweight virtual DOM tree. The code samples below show how the two different compilation outputs compare:

_Compiled for HTML output (server-side):_

```javascript
function render(data, out) {
  var colors = data.colors;

  if (colors && colors.length) {
    out.w("<ul>");

    marko_forEach(colors, function(color) {
      out.w("<li class=\"color\">" +
        marko_escapeXml(color) +
        "</li>");
    });

    out.w("</ul>");
  } else {
    out.w("<div>No colors!</div>");
  }
}
```

_Compiled for VDOM output (browser-side):_

```javascript
var marko_attrs0 = {
        "class": "color"
      },
    marko_node0 = marko_createElement("div", null, 1, marko_const_nextId())
      .t("No colors!");

function render(data, out) {
  var colors = data.colors;

  if (colors && colors.length) {
    out.be("ul");

    marko_forEach(colors, function(color) {
      out.e("li", marko_attrs0, 1)
        .t(marko_str(color));
    });

    out.ee();
  } else {
    out.n(marko_node0);
  }
}
```

The VDOM output allows optimizations that were previously not possible:

- Static subtrees are pulled into variables that are only initialized once and reused for every render
- Static attributes that are on dynamic elements are pulled out to static variables
- Diffing is skipped when comparing static subtrees

Our initial benchmarks show a significant improvement in rendering time and we are consistently outperforming React. The independent [morphdom](https://github.com/patrick-steele-idem/morphdom) library has been tweaked to support diffing with both a real DOM and a Marko virtual DOM.

### Merge in Marko Widgets ([#390](https://github.com/marko-js/marko/issues/390))

A big part of this release is a shift in focus from Marko being merely a templating language to a complete UI library.  As such, we are providing first-class support for components.

You will no longer need to install `marko-widgets` as an external library, and there is more cohesion between the templates and components/components.

### Improved component lifecycle methods ([#396](https://github.com/marko-js/marko/issues/396))


- `getInitialState()` ➔ `onInput(input)`
- `getComponentConfig()` ➔ `onInput(input)`
- `init(config)` ➔ `onMount()`
- `getTemplateData(input, state)` ➔ (no longer needed)
- `getInitialProps(input)` ➔ (no longer needed)


```js
class {
    onCreate(input) {
        this.state = {
            count: 0
        }
        this.initialCount = input.
    }

    onInput(input) {
        if (input.count) {
            // if the parent component passes a value
            // for count, we'll reset our state to that
            // value
            this.state.count = input.count;
            this.initialCount = input.count;
        }
    }

    onRender(out) {
        // Called for every render. This component
        // may or may not be mounted.
        // During render we have access to the `out`.
        console.log('The template is about to be rendered!');
    }

    onMount() {
        console.log('The component has mounted!');

        console.log('Count: ' + this.state.count);
        console.log('Initial count: ' + this.initialCount);
    }

    onUpdate() {
        console.log('The DOM has been updated!');
    }

    onDestroy() {
        console.log('The component is about to be destroyed :(')
    }

    // Helper methods:

    reset() {
        this.state.count = this.initialCount;        
    }

    increment() {
        this.state.count++;
    }

    decrement() {
        this.state.count--;
    }
}
```

### Automatically watch component state object for changes ([#406](https://github.com/marko-js/marko/issues/406))

**Old:**

```js
{
    getInitialState(input) {
        return {
            count: input.count || 0
        };
    }    
    increment() {
        this.setState('count', this.state.count+1);
    }
}
```

**New:**

```js
{
    onInput(input) {
        this.state = {
            count: input.count || 0
        };
    }    
    increment() {
        this.state.count++;
    }
}
```

In addition, the default state can now be declared:

```js
{
    state: {
        count: 0
    }
    onInput(input) {
        this.state = {
            count: input.count
        };
    }    
    increment() {
        this.state.count++;
    }
}
```

NOTE: The default state will be deeply cloned and used as the state. Any properties added to `this.state` will override the default state.

### DOM insertion methods ([#415](https://github.com/marko-js/marko/issues/415))

Methods for inserting the output of rendering a template into the DOM have been introduced with Marko v4:

```js
// Append to an existing DOM node:
require('./template.marko')
    .renderSync({ name: 'Frank '})
    .appendTo(document.body);

// Replace an existing DOM node:
require('./template.marko')
    .renderSync({ name: 'Frank '})
    .replace(document.getElementById('foo'));
```

## Other Improvements

### Only diff attributes that are rendered by Marko ([#417](https://github.com/marko-js/marko/issues/417))

Previously, when diffing the DOM, all of the attributes on a real HTML element node were diffed with all of the attributes on a newly rendered HTML element node. This posed a problem when using Marko with third party libraries, such as animation libraries, that added HTML attributes that should have been left alone. The proposed workaround was to add the `w-preserve-attrs` attribute wherever needed.

In Marko v4, only the attributes rendered by Marko are ever modified by Marko. Any attributes added by third-party libraries are simply ignored.

### Allow multiple top-level DOM elements to be bound ([#393](https://github.com/marko-js/marko/issues/393))

**Old:**
```html
<div w-bind>
    <h1>The current count is, ${data.count}</h1>
    <button onClick('incrementCount')>Increment Count</button>
</div>
```

**New:**
```html
<h1>The current count is, ${data.count}</h1>
<button onClick('incrementCount')>Increment Count</button>
```

### Template as entry point for UI components ([#416](https://github.com/marko-js/marko/issues/416))

**Old:**

`index.js`
```js
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    ...
});
```

`template.marko`

```html
<div w-bind>
    ...
</div>
```

**New:**


`component.js`

```js
module.exports = {
    ...
};
```

`index.marko`

```html
<div>
    ...
</div>
```

> The compiled template now exports the component

### Allow event handler attribute to bind additional arguments ([#401](https://github.com/marko-js/marko/issues/401))

**Old:**
```html
<ul for(color in colors)>
    <li w-onClick="handleColorClick" data-color=color>${color}</li>
</ul>
```

```js
handleColorClick(event, el) {
    console.log(el.getAttribute('data-color'), 'was clicked');
}
```

**New:**
```html
<ul for(color in colors)>
    <li onClick('handleColorClick', color)>${color}</li>
</ul>
```

```js
handleColorClick(color, event, el) {
    console.log(color, 'was clicked');
}
```

NOTE: `w-on*` has been deprecated. See: [Deprecate `w-on*` in favor of `on*()`](#deprecate-w-on)

### Introduce the `<import>` tag ([#404](https://github.com/marko-js/marko/issues/404))

Marko v4 introduces ES6 style imports for importing other JavaScript modules:

**Old:**

```html
<script marko-init>
    var helpers = require('./helpers');
</script>
<div>Total: ${helpers.formatCurrency(data.total))</div>
```

**New:**
```html
import helpers from "./helpers"
<div>Total: ${helpers.formatCurrency(data.total))</div>
```

### Allow dynamic custom tags/components to be used with `<include>` ([#139](https://github.com/marko-js/marko/issues/139))

**Old:**
```html
<invoke data.myComponent.renderer({name: 'Frank'}, out)/>
```

**New:**
```html
<include(data.myComponent) name='Frank' />
```
or
```html
<include(data.myComponent, {name: 'Frank'}) />
```

### Introduce `state` as a local variable ([#400](https://github.com/marko-js/marko/issues/400))

**Old:**

`component.js`

```js
{
    getInitialState(input) {
        return {
            name: input.name,
            birthday: input.birthday
        }
    },
    getTemplateData(state, input) {
        return {
            name: state.name,
            age: calculateAge(state.birthday)
        }
    },
    ...
}

```

`template.marko`

```html
<div>
    Hello ${data.name}! You are ${data.age} year(s) old.
</div>
```

**New:**

`component.js`

```js
{
    onInput(input) {
        // `this.state` will be available as the `state` variable
        // in the template.
        this.state = {
            name: input.name,
            birthday: input.birthday
        };
    }
    getTemplateData(state) {
        // state is automatically available in the template, but we can also
        // provide additional template data by returning it from this method
        // and it will be available as part of the `data` variable.
        return {
            age: calculateAge(state.birthday) // Only need to pass values derived
                                              // from the state to the template.
        };
    }
    ...
}
```

`template.marko`

```html
<div>
    Hello ${state.name}! You are ${data.age} year(s) old.
</div>
```

### Make output of render `Promise`-compatible ([#251](https://github.com/marko-js/marko/issues/251))

**Old:**
```js
template.render({}, function(err, html, out) {});
```

**New:**
```js
template.render({})
        .then(function(result){})
        .catch(function(err) {});

// render() can now be used with async/await
var out = await template.render({});
out.appendTo(document.body);
```

NOTE: callback/events still work as well

### Make `<await-reorderer/>` optional ([#410](https://github.com/marko-js/marko/issues/410))

**Old:**
```html
<html>
    ...
    <body>
        ...
        <await-reorderer/>
    </body>
</html>
```

**New:**
```html
<html>
    ...
    <body>
        ...
    </body>
</html>
```
*Automatically inserted before `</body>`*

### Allow multiple extensions when installing the Node.js require hook ([#407](https://github.com/marko-js/marko/issues/407))

**Old:**
```js
require('marko/node-require').install({
    extension: '.marko'
});
```

**New:**
```js
require('marko/node-require').install({
    extensions: ['.marko', '.marko.xml', '.html']
});
```

### Auto hot reload for any extensions provided when installing the Node.js require hook ([#363](https://github.com/marko-js/marko/issues/363))

Hot reload any extensions that were registered via `require('marko/node-require').install()`.

### Allow spaces around attributes ([#403](https://github.com/marko-js/marko/issues/403))

**Old:**
```html
var className="foo"
<div class=className/>
```

**New:**
```html
var className = "foo"
<div class = className/>
```

> NOTE: spaces are **allowed**, not required

### Allow compile-time transformers to be registered at the template level ([#408](https://github.com/marko-js/marko/issues/408))

`marko.json`
```json
{
    "transformer": "./my-transformer.js"
}
```
`my-transformer.js`

```js
module.exports = function transform(rootNode, context) {
    // ...
};
```
[see commit](https://github.com/marko-js/marko/commit/a35e6bdbc3fe6e7f4e92fb377c435e29ab3d6e33)

### Introduce `<function>` tag ([#405](https://github.com/marko-js/marko/issues/405))

**Old:**
```js
<%
function foo() {
    console.log('bar');
}
%>
```

**New:**
```js
<function foo() {
    console.log('bar');
}/>
```

Or, in concise:

```js
function foo() {
    console.log('bar');
}
```

### Debug mode ([#247](https://github.com/marko-js/marko/issues/247))

Run

```
DEBUG=marko node server.js
```

Get debug output

```html
<div data-template-path="/my-project/components/foo/index.marko">
    <h1>Foo</h1>
    <div>
        <div data-template-path="/my-project/components/bar/index.marko">
            <h2>Bar</h2>
        </div>
    </div>
</div>
```

### Allow regular expression for an HTML attribute value ([#386](https://github.com/marko-js/marko/issues/386))

**Old:**
```html
<!-- escaped backslash (\) since strings are parsed as JS values -->
<input type="text" pattern="\\w{2,20}" />
```

**New:**
```html
<!-- just use a regex -->
<input type="text" pattern=/\w{2,20}/ />
```

## Deprecations

A huge effort is being made to make this release as painless as possible and keep backwards compatibility wherever possible.  It should be possible to continue to use custom tags that were developed against v3 with the v4 release as long as there are no dependencies on features deprecated in Marko v3 that have now been removed in Marko v4 (see [Breaking Changes](#breaking-changes) below).

Additionally, [`marko-migrate`](https://github.com/marko-js/marko-migrate) will be updated to handle many of the deprecations described below.

### Deprecate `<script marko-init>` and replace with `render()` section ([#397](https://github.com/marko-js/marko/issues/397))

**Old:**
```html
<script marko-init>
    var format = require('format');
</script>
<var name="World"/>
<div>Hello ${format(name)}</div>
```

**New:**
```html
var format=require('format')
render()
    var name='World'
    <div>Hello ${format(name)}</div>
```

or, with the non-concise syntax:

```html
<var format=require('format')/>

<render()>
    <var name='World'/>
    <div>Hello ${format(name)}</div>
</render>
```

### Deprecate `w-bind` and make it optional when using a default name ([#394](https://github.com/marko-js/marko/issues/394), [#395](https://github.com/marko-js/marko/issues/395))

**Old:**
```html
<div w-bind>
    ...
</div>
```

**New:**
```html
<div component="./component.js">
    ...
</div>
```

Or, applied as a tag (see next: multiple top level DOM elements):

```html
<script component="./component.js"/>
<div>
    ...
</div>
```

Or, since `component.js` is automatically recognized

```html
<div>
    ...
</div>
```

### Deprecate `widget-types` ([#514](https://github.com/marko-js/marko/issues/514))

**Old:**
```html
<widget-types default="./component" mobile="./component-mobile"/>

<div w-bind=(data.isMobile ? 'default' : 'mobile')>
    ...
</div>
```

### Deprecate `w-id` and `w-for` in favor of `key` and `for-key` ([#394](https://github.com/marko-js/marko/issues/394))

The `w-id` attribute was used to obtain references using `this.getEl(refId)`. `w-id` has been replaced with the `key` attribute:

**Old:**

```html
<input type="text" w-id="name" />
```

**New:**
```html
<input type="text" key="name" />
```

Similarly, `w-for` has been been replaced with `for-key`:

**Old:**

```html
<label w-for="name">Name</label>
<input type="text" w-id="name" />
```

**New:**
```html
<label for-key="name">Name</label>
<input type="text" key="name" />
```

<a name="deprecate-w-on"></a>

### Deprecate `w-on*` in favor of `on*()` ([#420](https://github.com/marko-js/marko/issues/420))

**Old:**
```html
<button w-on-click="handleClick">click me</button>
```
or
```html
<button w-onClick="handleClick">click me</button>
```

**New:**
```html
<button on-click('handleClick')>click me</button>
```
or
```html
<button onClick('handleClick')>click me</button>
```

### Deprecate `<init-widgets/>` ([#409](https://github.com/marko-js/marko/issues/409))

**Old:**
```html
<html>
    ...
    <body>
        ...
        <init-widgets/>
    </body>
</html>
```

**New:**

**Automatic component initialization!**

### Deprecate `w-body` and replace with `include` ([#418](https://github.com/marko-js/marko/issues/418))

**Old:**

```html
<div>
    <h1>My Awesome Component</h1>
    <div class="body" w-body/>
    </div>
</div>
```

**New:**

```html
<div>
    <h1>My Awesome Component</h1>
    <div class="body" include()/>
</div>
```

Or, as a tag:

```html
<div>
    <h1>My Awesome Component</h1>
    <div class="body">
        <include()/>
    </div>
</div>
```

NOTE: The parens (i.e., `()`) are optional for both the include attribute and the include tag

Or, with an argument value:

```html
<div>
    <h1>My Awesome Component</h1>
    <div class="body">
        <include(data.renderBody || data.label)/>
    </div>
</div>
```

### Deprecate `w-preserve*` and replace with `no-update*` ([#419](https://github.com/marko-js/marko/issues/419))

**Old:**
```html
<div w-preserve>
    ...
</div>
```

**New:**
```html
<div no-update>
    ...
</div>
```

### Deprecate `w-preserve-attrs` and replace with `:no-update` ([#422](https://github.com/marko-js/marko/issues/422))

**Old:**
```html
<div style="color:#09c" w-preserve-attrs="style">
    ...
</div>
```

**New:**
```html
<div style:no-update="color:#09c">
    ...
</div>
```

### Deprecate `w-extend` and allow multiple components to be bound to the same HTML element ([#392](https://github.com/marko-js/marko/issues/392))

> `w-extend` is now deprecated

**Old:**
```html
<div w-bind>
    <some-component w-onEvent="handleEvent"/>
</div>
```
or
```html
<some-component w-extend w-onEvent="handleEvent"/>
```

**New:**
```html
<some-component onEvent('handleEvent')/>
```

NOTE: The outer most component is what is returned when calling `getComponent()`/`getComponentForEl()`.

<a name="breaking-changes"></a>

## Breaking Changes

In order to move forward it was necessary to introduce a few (minor) breaking changes. We are also removing support for some features that were already logging deprecation messages in v3.

### Consistent rendering API ([#389](https://github.com/marko-js/marko/issues/389))

**Old:**
```js
var template = require('./template.marko');
var component = require('./my-component');
var data = {};

template.render(data); // returns `out`
template.render(data, (err, html, out) => {});
template.renderSync(data); // returns a String representing the HTML output

component.render(data); // returns a `RenderResult`
component.render(data, (err, renderResult) => {});
component.renderSync(data); // throws an error, not a method.
```

**New:**
```js
var template = require('./template.marko');
var component = require('./my-component');
var data = {};

template.render(data); // returns `out`
template.render(data, (err, out) => {});
template.renderSync(data); // returns `out`

component.render(data); // returns `out`
component.render(data, (err, out) => {});
component.renderSync(data); // returns `out`
```

Also, `out` has been updated to implement DOM manipulation methods like `appendTo` that were previously only available from the `RenderResult` returned from component renders.

NOTE: We will implement `out.toString()` and `out.toJSON()` so in many cases the `out` can be used as a string.

### Remove support for deprecated `empty`/`notEmpty` helpers ([#357](https://github.com/marko-js/marko/issues/357))

> Already deprecated in v3

The `empty`/`notEmpty` helpers were automatically being added to every compiled
template. While they can be helpful, we feel it is better if the developer
explicitly imports only the exact helpers that your code depends on for
improved modularity.

### Remove hyphenated properties from input model ([#356](https://github.com/marko-js/marko/issues/356))

> Already deprecated in v3

Given a template like this:

```xml
<include("./include-target.marko") first-name='Frank'/>
```

`include-target.marko` looks like:

**Old:**
```html
- Hello ${data['first-name']}
```

**New:**
```html
- Hello ${data.firstName}
```

### Remove support for deprecated `<async-fragment>` and related tags ([#312](https://github.com/marko-js/marko/pull/312))

> Already deprecated in v3

**Old:**
```html
<async-fragment var="foo" data-provider=data.provider>
    ${foo}
</async-fragment>
```

**New:**
```html
<await(foo from data.provider)>
    ${foo}
</await>
```

### Remove support for emitting deprecated `async-fragment` events ([#426](https://github.com/marko-js/marko/issues/426))

> Already deprecated in v3

| Old                          | New                   |
|------------------------------|-----------------------|
| `asyncFragmentFinish`        | `await:finish`        |
| `asyncFragmentBegin`         | `await:begin`         |
| `asyncFragmentBeforeRender`  | `await:beforeRender`  |
| `asyncFragmentClientReorder` | `await:clientReorder` |
