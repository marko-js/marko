# What's Coming in Marko v4?

A lot of exciting things are planned for our v4 release.  All of these items have associated issues on GitHub.  Please leave any feedback, suggestions, concerns, thumbs up/down on those issues.

If there is something that you think needs to be considered for this release outside of what's in this document, open an issue.

*We appreciate your time and feedback!*

## Notable changes/improvements

### Merge in Marko Widgets ([#390](https://github.com/marko-js/marko/issues/390))

A big part of this release is a shift is focus from Marko being merely a
templating language to a complete UI library.  As such, we are providing
first-class support for components.

You will no longer need to install `marko-widgets` as an external library, and
there is more cohesion between the templates and components/widgets.

### Virtual DOM support ([#366](https://github.com/marko-js/marko/issues/366))

Because we output a raw html string to a stream, Marko has always been faster
than other libraries by an [order of magnitude](https://github.com/patrick-steele-idem/marko-vs-react)
when rendering on the server.  However although we were _pretty_ fast in the
browser, we weren't as fast as some of our competitors.

That's changed.  Our initial benchmarks show a significant improvement in
rendering time and we are consistently out performing React.  Supporting
multiple compilation outputs allows optimizations in the browser that
were not possible before.

## Breaking changes/improvements

In order to move forward it was necessary to introduce a few (minor)
breaking changes. We are also removing support for some features that were
already logging deprecation messages in v3.

### Consistent Rendering API ([#389](https://github.com/marko-js/marko/issues/389))

**Old:**
```js
var template = require('./template.marko');
var component = require('./my-component');
var data = {};

template.render(data); // returns `out`
template.render(data, (err, html, out) => {});
template.renderSync(data); // returns an html string

widget.render(data); // returns a `RenderResult`
widget.render(data, (err, renderResult) => {});
widget.renderSync(data); // throws an error, not a method.
```

**New:**
```js
var template = require('./template.marko');
var component = require('./my-component');
var data = {};

template.render(data); // returns `out`
template.render(data, (err, out) => {});
template.renderSync(data); // returns `out`

widget.render(data); // returns `out`
widget.render(data, (err, out) => {});
widget.renderSync(data); // returns `out`
```

Also, `out` has been updated to implement DOM manipulation methods like
`appendTo` that were previously only available from the `RenderResult` returned
from widget renders.

### Remove support for `empty`/`notEmpty` helpers ([#357](https://github.com/marko-js/marko/issues/357))

> Already deprecated in v3

The empty/notEmpty helpers were automatically being added to every compiled
template. While they can be helpful, we feel it is better if the developer
explicitly imports only the exact helpers that your code depends on for
improved modularity.

### Remove hyphenated properties from input model (`data`) [#356](https://github.com/marko-js/marko/issues/356)

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

### Remove support for `<async-fragment>` and related tags ([#312](https://github.com/marko-js/marko/pull/312))

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

## Non-breaking changes/improvements

A huge effort is being made to make this release as painless as possible and
keep backwards compatibility wherever possible.  It should be possible to
continue to use custom tags that were developed against v3 with the v4 release
as long as none of the features in the section above are utilized.

Additionally, [`marko-migrate`](https://github.com/marko-js/marko-migrate) will
be updated to handle many of these non-breaking changes as well.

### Deprecate `<script marko-init>` replace with `<render>` ([#397](https://github.com/marko-js/marko/issues/397))

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
<var format=require('format')/>
<render>
    <var name='World'/>
    <div>Hello ${format(name)}</div>
</render>
```

### Changes around binding widgets

#### Rename `w-bind` and make it optional when using a default name ([#394](https://github.com/marko-js/marko/issues/394), [#395](https://github.com/marko-js/marko/issues/395))

**Old:**
```html
<div w-bind>
    ...
</div>
```

**New:**
```html
<div widget="./widget.js">
    ...
</div>
```
or, applied as a tag (see next: multiple top level DOM elements):
```html
<script widget="./widget.js"/>
<div>
    ...
</div>
```
or, since `widget.js` is automatically recognized
```html
<div>
    ...
</div>
```

#### Allow multiple top-level DOM elements to be bound ([#393](https://github.com/marko-js/marko/issues/393))

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

#### Remove need for `w-extend` or wrapper `<div>` ([#392](https://github.com/marko-js/marko/issues/392))

> `w-extend` is now deprecated

**Old:**
```html
<div w-bind>
    <some-component onEvent="handleEvent"/>
</div>
```
or
```html
<some-component w-extend onEvent="handleEvent"/>
```

**New:**
```html
<some-component onEvent="handleEvent"/>
```


### Template as entry point for UI components ([marko-widgets#167](https://github.com/marko-js/marko-widgets/issues/167))

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

### Single file component ([#399](https://github.com/marko-js/marko/issues/399))

```html
<script>
    // this top-level script tag is automatically
    // detected as a component due to `module.exports`
    // `export default` could be used as well
    module.exports = {
        onInput(input) {
            this.state = { count:0 };
        },
        increment() {
            this.state.count++;
        }
    }
</script>

<style>
    .count {
        color:#09c;
    }
    .button {
        background:#fff;
    }
</style>

<div class="count">${data.count}</div>
<button class="button" on-click('increment')>
    increment count
</button>
```

### Rename w-* attributes ([#394](https://github.com/marko-js/marko/issues/394))

#### References

**Old:**
```html
<label w-for="name">Name</label>
<input type="text" w-id="name" />
```

**New:**
```html
<label for-ref="name">Name</label>
<input type="text" ref="name" />
```

#### Prevent update

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

#### Prevent attribute update

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

#### Event handlers

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

### Allow on-* attribute to bind additional arguments ([#401](https://github.com/marko-js/marko/issues/401))

**Old:**
```html
<ul for(color in colors)>
    <li w-onClick="colorClick" data-color=color>${color}</li>
</ul>
```

```js
colorClick(event) {
    console.log(event.target.getAttribute('data-color'), 'was clicked');
}
```

**New:**
```html
<ul for(color in colors)>
    <li onClick('colorClick', color)>${color}</li>
</ul>
```

```js
colorClick(color, event) {
    console.log(color, 'was clicked');
}
```

### Introduce the `<import>` tag ([#404](https://github.com/marko-js/marko/issues/404))

**Old:**
```html
<script marko-init>
    var helpers = require('./helpers');
</script>
<div>Total: ${helpers.formatCurrency(data.total))</div>
```

**New:**
```html
<import helpers from "./helpers"/>
<div>Total: ${helpers.formatCurrency(data.total))</div>
```

### Allow dynamic custom tags to be used with `<include>` ([#139](https://github.com/marko-js/marko/issues/139))

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

### New widget lifecycle methods ([#396](https://github.com/marko-js/marko/issues/396))

**`onInput`** replaces `getInitialProps`, `getInitialState`, & `getWidgetConfig`

**`onMount`** replaces `init` (which ran when the component first mounts)

**Old:**
```js
getInitialProps(input) {
    return {
        initialCount: input.initialCount || 0
    }
}
getInitialState(input) {
    return {
        count:input.initialCount
    };
}
getWidgetConfig(input) {
    return {
        initialCount: input.initialCount
    }
}
init(config) {
    this.initialCount = config.initialCount;
    console.log('the component mounted!')
}
```

**New:**
```js
onInput(input) {
    var initialCount = input.initialCount || 0;
    this.state = { count:initialCount };
    this.initialCount = initialCount;
}
onMount() {
    console.log('the component mounted!')
}
```

### Introduce `state` as a local variable ([#400](https://github.com/marko-js/marko/issues/400))

**Old:**

`component.js`
```js
getInitialState(input) {
    return {
        name: 'Frank',
        birthday: Date(2000, 12, 24)
    }
},
getTemplateData(state, input) {
    return {
        age: Date() - state.birthday
    }
},
...
```
`template.marko`
```html
...
    <h1 marko-body=data.staticHeader/>
    <div>${data.count}</div>
...
```

**New:**

`component.js`
```js
onInput(input) {
    this.state = {
        count:0
    }
},
...
```
`template.marko`
```html
...
    <h1 no-update>${data.staticHeader}</h1>
    <div>${state.count}</div>
...
```

### Make output of render Promise-compatible ([#251](https://github.com/marko-js/marko/issues/251))

**Old:**
```js
template.render({}, function(err, result) {});
```
```js
template.render({})
        .on('finish', function(result) {})
        .on('error', function(err) {});
```

**New:**
```js
template.render({})
        .then(function(result){})
        .catch(function(err) {});
```
> NOTE: callback/events still work as well

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

*Automatic widget initialization!*

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

### Allow transformer to be registered at the template level ([#408](https://github.com/marko-js/marko/issues/408))

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
or, in concise:
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

### Automatically watch widget state object for changes ([#406](https://github.com/marko-js/marko/issues/406))

**Old:**
```js
increment() {
    this.setState('count', this.state.count+1);
}
```

**New:**
```js
increment() {
    this.state.count++;
}
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
