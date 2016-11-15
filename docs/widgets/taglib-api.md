Marko Widgets Taglib
====================

# Custom attributes

## w-bind

This attribute is used to bind a widget to a DOM element.

### Examples

Bind to a JavaScript module named `./widget.js` that exports the widget definition:

```xml
<div w-bind="./widget">...</div>
```

Bind to a JavaScript module named `./widget.js` or `./index.js` (searched for in that order) that exports the widget definition:

```xml
<div w-bind>...</div>
```

## ref

Used to assign a _scoped_ ID to a nested widget or a nested DOM element. The ID will be a concatenation of the parent widget ID with the provided value of the `ref`.

### Examples


#### Using `ref` with an HTML element

```xml
<div w-bind="./widget">
    <button ref="myButton" type="button">My Button</button>
</div>
```

This will produce output code similar to the following:


```html
<div>
    <button id="w0-myButton" type="button">My Button</button>
</div>
```

The containing widget can reference the nested DOM element using the following code:

```javascript
var myButton = this.getEl('myButton');
```

#### Using `ref` with a nested widget

```xml
<div w-bind="./widget">
    <app-button ref="myButton" label="My Button" />
</div>
```

This will produce output code similar to the following:

```html
<div>
    <button id="w0-myButton" type="button">My Button</button>
</div>
```

The containing widget can reference the nested widget using the following code:

```javascript
var myButton = this.getWidget('myButton');
```

## w-on*

The `w-on*` can be used to declaratively bind event listeners to a DOM element or widget.

NOTE: For DOM events that bubble, efficient DOM event delegation will automatically be used to avoid attaching direct event listeners for performance reasons.

### Examples

#### Using `w-on*` with a nested HTML element

```xml
<div w-bind="./widget">
    <button w-onclick="handleMyButtonClick" type="button">My Button</button>
</div>
```

When the button HTML element is clicked, the `handleMyButtonClick` method of the widget will be invoked:


```javascript
module.exports = require('marko-widgets').defineComponent({
    // ...

    handleMyButtonClick: function(event, el) {
        // event will be the native DOM event
        // el will be the native DOM element
    }
})
```

The containing widget can reference the nested DOM element using the following code:

```javascript
var myButton = this.getEl('myButton');
```

#### Using `w-on*` with a nested widget

```xml
<div w-bind="./widget">
    <app-button w-onSomeCustomEvent="handleSomeCustomEvent" label="My Button" />
</div>
```

For the example above it is assumed that the nested widget will emit the custom event using code similar to the following:

```javascript
this.emit('handleSomeCustomEvent', { foo: bar });
```

<a name="no-update"></a>

## no-update

Preserves the DOM subtree associated with the DOM element or widget such that it won't be modified or rerendered when rerendering the UI component.

Example:

```xml
<div>
    <table no-update> <!-- Don't ever rerender this table -->
        ...
    </table>
</div>
```

```xml
<div>
    <app-map no-update/> <!-- Don't ever rerender this UI component -->
</div>
```

## no-update-if

Similar to [no-update](#no-update) except that the DOM subtree is conditionally preserved:

```xml
<div>
    <table no-update-if(data.tableData == null)>
        ...
    </table>
</div>
```

## no-update-body

Similar to [no-update](#no-update) except that only the child DOM nodes are preserved:

```xml
<div no-update-body> <!-- Don't ever rerender any nested DOM elements -->
    ...
</div>
```

## no-update-body-if

Similar to [no-update-if](#no-update) except that only the child DOM nodes are preserved:

```xml
<div>
    <table no-update-if(data.tableData == null)>
        ...
    </table>
</div>
```

## w-preserve-attrs

This custom attribute is used to prevent select DOM elements from being modified during a rerender:

```xml
<div w-preserve-attrs="class,style">
    ...
</div>
```

#### w-for

The `w-for` attribute is used to render a `for` attribute that references a scoped widget element:

```xml
<form>
    <label w-for="yes">Yes</label>
    <input type="radio" ref="yes" value="yes">

    <label w-for="no">No</label>
    <input type="radio" ref="no" value="no">
</form>
```

This will produce code similar to the following:

```html
<form>
    <label for="w0-yes">Yes</label>
    <input type="radio" ref="w0-yes" value="yes">

    <label for="w0-no">No</label>
    <input type="radio" id="w0-no" value="no">
</form>
```

# Custom tags

## `<init-widgets>`

Generates the necessary code to initialize widgets associated with UI components rendered on the _server_.

Supported attributes:

- __`immediate`__ - If true then a `<script>` tag will be generated that _immediately_ initializes all widgets instead of waiting for the "dom ready" event. For async fragments, a `<script>` will be inserted at the end of each async fragment.


### Examples:

### Non-immediate widget initialization

If the `immediate` attribute is not provided or set to `false` then widgets will initialize during the "dom ready" event. For example, given the following Marko code:

```xml
<init-widgets/>
```

This will produce output HTML code similar to the following:

```html
<noscript id="markoWidgets" data-ids="w0,w1,w2"></noscript>
```

The `<noscript>` HTML tag is simply a container to keep an "index" of all of the IDs associated with UI components that have a widget that needs to be initialized. When the `marko-widgets` module initializes in the browser it will query for the `#markoWidgets` to discover all of the widget IDs.


### Immediate widget initialization


If the `immediate` attribute is provided or set to `true` then widgets will initialize via inline JavaScript code added to the output HTML. For example, given the following Marko code:

```xml
<init-widgets immediate/>
```

This will produce output HTML code similar to the following:

```html
<script>
/* REMOVED: serialized widget state and config */
$markoWidgets("w0,w1,w2")
</script>
```

When immediate widget initialization is enabled, widgets will be initialized before the DOM ready event. In addition, inline widget initialization code will be appended to each async fragment.

## `<widget-types>`

Used to conditionally bind a widget:

```xml
<widget-types default="./widget" mobile="./widget-mobile"/>

<div w-bind=(data.isMobile ? 'default' : 'mobile')>
    ...
</div>
```

The `<widget-types>` can also be used to disabling binding of a widget:


```xml
<widget-types default="./"/>

<div w-bind=(data.includeWidget ? 'default' : null)>

</div>
```