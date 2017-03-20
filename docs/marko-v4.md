# What's New in Marko v4

A lot of exciting improvements were made as part of the Mark v4 release.

## Notable Changes and Improvements

### Single file components ([#399](https://github.com/marko-js/marko/issues/399))

Marko now supports combining HTML, rendering logic, client-side behavior and styling into a single file component.

_src/components/click-count/index.marko_

```marko
class {
    onCreate() {
        this.state = {
            count: 0
        }
    }

    onInput(input) {
        this.state.count = input.value || 0;
    }

    increment() {
        this.state.count++;
    }
}

style.less {
    .count {
        color: #09c;
    }
    .button {
        background: #fff;
    }
}

<div>
    <span class="count">${state.count}</span>
    <button class="button" on-click('increment')>
        increment count
    </button>
</div>
```

You can easily `require`/`import` a single file component and interact with it using the exported JavaScript API:

```js
var clickCount = require('./src/components/click-count');

var component = clickCount.renderSync({
        value: 10
    })
    .appendTo(document.body)
    .getComponent();

component.increment();
```

Of course, a single file component can also be embedded in another template as a custom tag:

```marko
<div>
    <click-count value=10 />
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
    marko_node0 = marko_createElement("DIV", null, 1, marko_const_nextId())
      .t("No colors!");

function render(data, out) {
  var colors = data.colors;

  if (colors && colors.length) {
    out.be("UL");

    marko_forEach(colors, function(color) {
      out.e("LI", marko_attrs0, 1)
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
- Diffing is skipped when comparing static attributes

Our benchmarks show a significant improvement in rendering time and we are consistently outperforming React/Preact/Inferno, Vue and other UI libraries.

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
        this.initialCount = 0;
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
    onCreate() {
        this.state = {
            count: 0
        };
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

### Consistent rendering API ([#415](https://github.com/marko-js/marko/issues/415))

In Marko v3, UI components exported an API that included DOM insertion methods while simple templates only exported an API for rendering to a string/stream. With Marko v4, simple templates and UI components now export the exact same rendering API.

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

### Less Boilerplate

- Removed: `w-bind`
- Removed: `w-extend`
- Removed: `require('marko-widgets').defineComponent(...)`
- Removed: `require('marko-widgets').defineWidget(...)`
- Removed: `require('marko-widgets').defineRenderer(...)`
- Removed: `w-body` (use `<include()>` instead)
- `w-on*="handleSomeEvent"` --> `on*('handleSomeEvent')`
- `w-id` --> `key`
- `w-for` --> `for-key`
- `w-preserve` --> `no-update`
- `class="foo" w-preserve-attrs="class"` --> `class:no-update="foo"`

Some of these things are described in more detail later in this document.

### Embedded JavaScript blocks

**Old:**

```marko
<var name="Frank"/>
<assign name="John"/>
<invoke console.log(name)/>
```

**New:**

```marko
$ var name='Frank';
$ name='John';
$ console.log(name);
```

Alternatively:

```marko
$ {
    var name='Frank';
    name='John';
    console.log(name);
}
```

JavaScript blocks can be embedded anywhere by putting `$ ` at the start of the line (ignoring whitespace) and it works the same for both the concise syntax and the non-concise syntax:


```marko
<div.hello>
    <for(name in names)>
        $ name = name.toUpperCase();
        Hello ${name}!
    </for>
</div>
```

Static JavaScript blocks (for JavaScript that should only be executed once when the template is first loaded) are also supported:

**Old:**

```marko
<script marko-init>
    function formatName(person) {
        return person.firstName + ' ' + person.lastName;
    }
    function isTeenager(person) {
        return person.age > 12 && person.age < 20;
    }
</script>
<div>
    Hello ${formatName(input.person)}!
    Teenager?: ${isTeenager(input.person) ? 'Yes' : 'No'}
</div>
```

**New:**

```marko
static function formatName(person) {
    return person.firstName + ' ' + person.lastName;
}

static function isTeenager(person) {
    return person.age > 12 && person.age < 20;
}
<div>
    Hello ${formatName(input.person)}!
    Teenager?: ${isTeenager(input.person) ? 'Yes' : 'No'}
</div>
```

Alternatively:

```marko
static {
    function formatName(person) {
        return person.firstName + ' ' + person.lastName;
    }

    function isTeenager(person) {
        return person.age > 12 && person.age < 20;
    }
}
<div>
    Hello ${formatName(input.person)}!
    Teenager?: ${isTeenager(input.person) ? 'Yes' : 'No'}
</div>
```

### Template variables

- `data` --> `input` - References the input object (should be treated as immutable)
- Introduced `state` - References the components raw state object (for components only)
- Introduced `component` - References the component instance (for components only)

## Other Improvements

### Only diff attributes that are rendered by Marko ([#417](https://github.com/marko-js/marko/issues/417))

Previously, when diffing the DOM, all of the attributes on a real HTML element node were diffed with all of the attributes on a newly rendered HTML element node. This posed a problem when using Marko with third party libraries, such as animation libraries, that added HTML attributes that should have been left alone. The proposed workaround was to add the `w-preserve-attrs` attribute wherever needed.

In Marko v4, only the attributes rendered by Marko are ever modified by Marko. Any attributes added by third-party libraries are simply ignored.

### Allow multiple top-level DOM elements to be bound ([#393](https://github.com/marko-js/marko/issues/393))

**Old:**
```marko
<div w-bind>
    <h1>The current count is ${data.count}</h1>
    <button onClick('incrementCount')>Increment Count</button>
</div>
```

**New:**
```marko
<h1>The current count is ${input.count}</h1>
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

```marko
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

```marko
<div>
    ...
</div>
```

> The compiled template now exports the component

### Allow event handler attribute to bind additional arguments ([#401](https://github.com/marko-js/marko/issues/401))

**Old:**
```marko
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
```marko
class {
    handleColorClick(color, event, el) {
        console.log(color, 'was clicked');
    }
}

<ul for(color in colors)>
    <li onClick('handleColorClick', color)>${color}</li>
</ul>
```

NOTE: `w-on*` has been deprecated. See: [Deprecate `w-on*` in favor of `on*()`](#deprecate-w-on)

### Introduce the `<import>` tag ([#404](https://github.com/marko-js/marko/issues/404))

Marko v4 introduces ES6 style imports for importing other JavaScript modules:

**Old:**

```marko
<script marko-init>
    var helpers = require('./helpers');
</script>
<div>Total: ${helpers.formatCurrency(data.total)}</div>
```

**New:**
```marko
import helpers from "./helpers"
<div>Total: ${helpers.formatCurrency(data.total)}</div>
```

The full ES6 import syntax is supported:

```marko
import { formatCurrency } from "./helpers"
<div>Total: ${formatCurrency(data.total)}</div>
```


### Allow dynamic custom tags/components to be used with `<include>` ([#139](https://github.com/marko-js/marko/issues/139))

**Old:**
```marko
<invoke data.myComponent.renderer({name: 'Frank'}, out)/>
```

**New:**
```marko
<include(input.myComponent) name='Frank' />
```
or
```marko
<include(input.myComponent, {name: 'Frank'}) />
```

### Single file components outside of a directory are not automatically discovered

The following are equivalent:

Component directory:

```
components/hello/index.marko
```

Component file:

```
components/hello.marko
```

### Supporting files for UI components

The following are equivalent:

Component directory:

```
components/hello/
    compnent.js
    index.marko
    style.less
```

Component file:

```bash
components/
    hello.component.js
    hello.marko
    hello.style.less
```

### Split component

Marko v4 improves how split components are supported. Split component allow only the client-side logic to be sent to the browser if the rendering logic (and view template) are not needed in the browser:

```
components/hello/
    component.js         # Required to render
    component-browser.js # Required to handle events, etc.
    index.marko          # Required to render
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

```marko
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
    ...
}
```

`template.marko`

```marko
$ var age = calculateAge(state.birthday);
<div>
    Hello ${state.name}! You are ${age} year(s) old.
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
```marko
<html>
    ...
    <body>
        ...
        <await-reorderer/>
    </body>
</html>
```

**New:**
```marko
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
```marko
var className="foo"
<div class=className/>
```

**New:**
```marko
$ var className = "foo"
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


### Allow regular expression for an HTML attribute value ([#386](https://github.com/marko-js/marko/issues/386))

**Old:**
```marko
<!-- escaped backslash (\) since strings are parsed as JS values -->
<input type="text" pattern="\\w{2,20}" />
```

**New:**
```marko
<!-- just use a regex -->
<input type="text" pattern=/\w{2,20}/ />
```

## Deprecations

A huge effort is being made to make this release as painless as possible and keep backwards compatibility wherever possible.  It should be possible to continue to use custom tags that were developed against v3 with the v4 release as long as there are no dependencies on features deprecated in Marko v3 that have now been removed in Marko v4 (see [Breaking Changes](#breaking-changes) below).

Additionally, [`marko-migrate`](https://github.com/marko-js/marko-migrate) will be updated to handle many of the deprecations described below.

### Deprecate `<script marko-init>` and replace with `static` section ([#397](https://github.com/marko-js/marko/issues/397))

**Old:**
```marko
<script marko-init>
    var format = require('format');
</script>
<var name="World"/>
<div>Hello ${format(name)}</div>
```

**New:**
```marko
static var format=require('format')
$ var name='World'
<div>Hello ${format(name)}</div>
```

### Deprecate `<var>`, `<assign>` and `<invoke>`

Use embedded JavaScript blocks instead

### Deprecate `w-bind` ([#394](https://github.com/marko-js/marko/issues/394), [#395](https://github.com/marko-js/marko/issues/395))

**Old:**
```marko
<div w-bind>
    ...
</div>
```

**New:**

```marko
<div>
    ...
</div>
```

(Automatic binding to `./component.js`)

### Deprecate `widget-types` ([#514](https://github.com/marko-js/marko/issues/514))

**Old:**
```marko
<widget-types default="./component" mobile="./component-mobile"/>

<div w-bind=(data.isMobile ? 'default' : 'mobile')>
    ...
</div>
```

`widget-types` should no longer be used. Instead, the JavaScript module bundler should handle the remapping if needed.

### Deprecate `w-id` and `w-for` in favor of `key` and `for-key` ([#394](https://github.com/marko-js/marko/issues/394))

The `w-id` attribute was used to obtain references using `this.getEl(refId)`. `w-id` has been replaced with the `key` attribute:

**Old:**

```marko
<input type="text" w-id="nameInput" />
```

**New:**
```marko
<input type="text" key="nameInput" />
```

Similarly, `w-for` has been been replaced with `for-key`:

**Old:**

```marko
<label w-for="nameInput">Name</label>
<input type="text" w-id="nameInput" />
```

**New:**
```marko
<label for-key="nameInput">Name</label>
<input type="text" key="nameInput" />
```

<a name="deprecate-w-on"></a>

### Deprecate `w-on*` in favor of `on*()` ([#420](https://github.com/marko-js/marko/issues/420))

**Old:**
```marko
<button w-on-click="handleClick">click me</button>
```
or
```marko
<button w-onClick="handleClick">click me</button>
```

**New:**
```marko
<button on-click('handleClick')>click me</button>
```
or
```marko
<button onClick('handleClick')>click me</button>
```

### Deprecate `<init-widgets/>` ([#409](https://github.com/marko-js/marko/issues/409))

**Old:**
```marko
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

```marko
<div>
    <h1>My Awesome Component</h1>
    <div class="body" w-body/>
    </div>
</div>
```

**New:**

```marko
<div>
    <h1>My Awesome Component</h1>
    <div class="body" include()/>
</div>
```

Or, as a tag:

```marko
<div>
    <h1>My Awesome Component</h1>
    <div class="body">
        <include()/>
    </div>
</div>
```

NOTE: The parens (i.e., `()`) are optional for both the include attribute and the include tag

Or, with an argument value:

```marko
<div>
    <h1>My Awesome Component</h1>
    <div class="body">
        <include(data.renderBody || data.label)/>
    </div>
</div>
```

### Deprecate `w-preserve*` and replace with `no-update*` ([#419](https://github.com/marko-js/marko/issues/419))

**Old:**
```marko
<div w-preserve>
    ...
</div>
```

**New:**
```marko
<div no-update>
    ...
</div>
```

### Deprecate `w-preserve-attrs` and replace with `:no-update` ([#422](https://github.com/marko-js/marko/issues/422))

**Old:**
```marko
<div style="color:#09c" w-preserve-attrs="style">
    ...
</div>
```

**New:**
```marko
<div style:no-update="color:#09c">
    ...
</div>
```

### Deprecate `w-extend` and allow multiple components to be bound to the same HTML element ([#392](https://github.com/marko-js/marko/issues/392))

> `w-extend` is now deprecated

**Old:**
```marko
<div w-bind>
    <some-component w-onEvent="handleEvent"/>
</div>
```
or
```marko
<some-component w-extend w-onEvent="handleEvent"/>
```

**New:**
```marko
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

```marko
<include("./include-target.marko") first-name='Frank'/>
```

`include-target.marko` looks like:

**Old:**
```marko
- Hello ${data['first-name']}
```

**New:**
```marko
- Hello ${data.firstName}
```

### Remove support for deprecated `<async-fragment>` and related tags ([#312](https://github.com/marko-js/marko/pull/312))

> Already deprecated in v3

**Old:**
```marko
<async-fragment var="foo" data-provider=data.provider>
    ${foo}
</async-fragment>
```

**New:**
```marko
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
