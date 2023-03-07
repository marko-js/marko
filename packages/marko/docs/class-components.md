# Class Components

Marko makes it easy to create user interface components to use as building blocks for web pages and applications of any complexity.

Marko promotes self-contained components that:

- Are independently testable
- Encapsulate the view, client-side behavior (like event handling) and styling
- Can easily be combined to create composite UI components.

Marko components compile into small, efficient JavaScript modules that hide implementation details from consumers. Components can be published to [npm](https://www.npmjs.com) for reuse across applications.

## UI component diagram

![Component diagram](./component-diagram.svg)

In Marko, the DOM output of a UI component is based on _input properties_ and optional _internal state_ used to control the view.

If Marko detects changes to `input` or the internal `state`, then the view (that is, the DOM) will automatically update to reflect the new input and state. Internally, Marko uses virtual DOM diffing/patching to update the view, but that’s an implementation detail that could change at any time.

## Component structure

Marko makes it easy to keep your component’s class and styles next to the HTML view that they correspond to. The following are the key parts of any UI component:

- **View** - The HTML template for your UI component. Receives input properties and states, and renders to either server-side HTML or browser-side virtual DOM nodes.
- **Client-side behavior** - A JavaScript `class` with methods and properties for initialization, event handling (including DOM events, custom events and lifecycle events), and state management.
- **Styles** - Cascading StyleSheets, including support for CSS preprocessors like [Less](https://lesscss.org/) or [Sass](https://sass-lang.com/).

## Server-side rendering

A UI component can be rendered on the server or in the browser, but stateful component instances will be automatically mounted to the DOM in the browser for both. If a UI component tree is rendered on the server, then Marko will recreate the UI component tree in the browser with no extra code required. For more details, please see [Rendering](/docs/rendering/).

## Single-file components

Marko lets you define a `class` for a component right in the `.marko` file, and call that class’s methods with `on-*` attributes:

```marko
class {
    onCreate() {
        this.state = {
            count: 0
        };
    }
    increment() {
        this.state.count++;
    }
}

<label>The current count is <output>${state.count}</output></label>
<p><button on-click('increment')>+1</button></p>
```

### Styles

Adding styles in your view is also made easy:

```marko
style {
    .primary {
        background: #09c;
    }
}

<label>The current count is <output>${state.count}</output></label>
<p><button.primary on-click('increment')>+1</button></p>
```

These styles aren’t output in a `<style>` tag as inline styles usually are, but are externalized to deduplicate them across multiple component instances on a page.

If you use a CSS preprocessor, you can add its file extension on `style`:

```marko
style.less {
    .primary {
        background: @primaryColor;
    }
}
```

> **Note:** The code in the `style` section is processed in a context separate from the rest of the template, so you can’t use JavaScript variables inside it. If you need variables in your CSS, use a CSS preprocessor that supports them.

## Multi-file components

You might prefer to keep your component’s class and styles in separate files from the view — the classical separation of HTML, CSS, and JavaScript. Marko makes this possible with a filename-based convention.

> **ProTip:** If your’re moving the component’s class and styles to separate files is because the code is getting too large, consider splitting the component into smaller, more manageable components.

### Supporting files

Marko discovers supporting files in the same directory as a Marko view. For example, if you have a view named `counter.marko`, Marko will automatically look for `counter.component.js` and `counter.style.css`.

```
counter.marko
counter.component.js
counter.style.css
```

Marko also handles views named `index.marko` specially. It will look for `component.js` and `style.css` in addition to `index.component.js` and `index.style.css`. This allows easily grouping component files into a directory:

```
counter/
    index.marko
    component.js
    style.css
```

In your `component.js` file, export the component’s class:

```js
export default class {
  onCreate() {
    this.state = {
      count: 0
    };
  }
  increment() {
    this.state.count++;
  }
}
```

In your `index.marko` file, you can reference methods from that class with `on-*` attributes:

```marko
<label>The current count is <output>${state.count}</output></label>
<p><button.primary on-click('increment')>+1</button></p>
```

And in your `style.css`, define the styles:

```css
.primary {
  background: #09c;
}
```

> **ProTip:** Marko actually looks any filenames with the pattern `[name].style.*`, so it will pick up any CSS preprocessor file extensions you use: `.less`, `.stylus`, `.scss`, etc.

### Components with plain objects

If you target browsers that does not support classes, a plain object of methods can be exported:

```js
export default {
  onCreate: function () {
    this.state = {
      count: 0
    };
  },
  increment: function () {
    this.state.count++;
  }
};
```

## Split components

Split components optimize for when a component renders on the server, and doesn’t need to dynamically rerender in the browser. As a result, its template and logic aren’t sent to the browser, reducing load time and download size.

> **Note:** If a split component is the child of a stateful component, its full rendering logic will still be sent because the parent may pass new input to the split component and rerender it.

Additionally, if _all_ components rendered on a page are split components, Marko’s VDOM and rendering runtime is unnecessary, and therefore not sent to the browser.

> **ProTip:** Don’t over-optimize. If your component really doesn’t need rerendering, go ahead and split, but don’t forgo stateful rerendering when it would make your code more maintainable.

### Usage

Marko discovers split components similarly to how it discovers an external component class. For example, if you have a view named `button.marko`, it will automatically look for `button.component-browser.js`. If your view is named `index.marko`, it will look for `component-browser.js` in addition to `index.component-browser.js`.

```
counter/
    index.marko
    component-browser.js
```

A split component might need to do some setup as part of its initial render. In this case, the component may define a second component class to use the `onCreate`, `onInput`, and `onRender` [lifecycle methods](#lifecycle-events).

This class can be exported from `component.js`, or defined right in the template as a single-file components. In this case, your component folder may contain a `component.js` file, and must contain a `component-browser.js`. The following [lifecycle methods](#lifecycle-events) can go inside the `component.js` file:

```
class {
  onCreate(input, out) { }
  onInput(input, out) { }
  onRender(out) { }
  onDestroy() { }
}
```

And the following [lifecycle methods](#lifecycle-events) can go inside the `component-browser.js` file:

```
class {
  onMount() { }
  onUpdate() { }
}
```

Any JavaScript code related to the DOM or browser should also be inside `component-browser.js`.

### Example

`index.marko`

```marko
class {
    onCreate() {
        this.number = 123;
    }
}

<button on-click('shout')>What’s my favorite number?</button>
```

`component-browser.js`

```js
export default {
  shout() {
    alert(`My favorite number is ${this.number}!`);
  }
};
```

## Event handling

The `on-[event](methodName|function, ...args)` attributes allow event listeners to be attached for either:

- A native DOM event, when used on a native DOM element such as a `<button>`
- Or a UI component event, when used on a custom tag for a UI component such as `<my-component>`

The `on-*` attributes are used to associate event handler methods with an event name. Event handlers may be specified by `'methodName'` — a string that matches a method on the component instance, or they may be a `function`. Attaching listeners for native DOM events and UI component custom events is explained in more detail in the sections below.

You may also use the `once-[event](methodName|function, ...args)` syntax, which will listen for only the first event, and then remove the listener.

### Attaching DOM event listeners

The code below illustrates how to attach an event listener for native DOM events:

```marko
class {
  onButtonClick(name, event, el) {
    alert(`Hello ${name}!`);
  }
}

static function fadeIn(event, el) {
  el.hidden = false;
  el.style.opacity = 0;
  el.style.transition = 'opacity 1s';
  setTimeout(() => el.style.opacity = 1);
}

<button on-click('onButtonClick', 'Frank')>
  Say Hello to Frank
</button>

<button on-click('onButtonClick', 'John')>
  Say Hello to John
</button>

<img src='foo.jpg' once-load(fadeIn) hidden />
```

The following arguments are passed to the event handler when the event occurs:

1.  `...args` - Any extra bound arguments are _prepended_ to the arguments passed to the component’s handler method.
    For example: `on-click('onButtonClick', arg1, arg2)` → `onButtonClick(arg1, arg2, event, el)`
2.  `event` - The native DOM event object.
3.  `el` - The DOM element that the event listener was attached to.

When using the `on-*` or `once-*` attributes to attach event listeners, Marko uses event delegation that is more efficient than direct attachment of `el.addEventListener()`. Please see [Why is Marko Fast? § Event delegation](/docs/why-is-marko-fast/#event-delegation) for more details.

<a id="declarative-custom-events"></a>

### Attaching custom event listeners

The code below illustrates how to attach an event listener for a UI component’s custom event:

```marko
class {
  onCounterChange(newValue, el) {
    alert(`New value: ${newValue}!`);
  }
  onCounterMax(max) {
    alert(`It reached the max: ${max}!`);
  }
}

<counter on-change('onCounterChange') once-max('onCounterMax') />
```

The following arguments are passed to the event handler when the event occurs:

1.  `...args` - Any extra bound arguments are _prepended_ to the arguments passed to the component’s handler method.
2.  `...eventArgs` - The arguments passed to `this.emit()` by the target UI component.
3.  `component` - The component instance that the event listener was attached to.

The following code illustrates how the UI component for `<counter>` might emit its `change` event:

`counter/index.marko`

```marko
class {
  onCreate() {
    this.max = 50;
    this.state = { count: 0 };
  }
  increment() {
    if (this.state.count < this.max) {
        this.emit('change', ++this.state.count);
    }
    if (this.state.count === this.max) {
        this.emit('max', this.state.count);
    }
  }
}


<button.example-button on-click('increment')>
  Increment
</button>
```

> **ProTip:** Unlike native DOM events, UI component custom events may be emitted with multiple arguments. For example:
>
> ```js
> this.emit("foo", "bar", "baz");
> ```

## Attributes

### `on-[event](methodName|function, ...args)`

The `on-*` attribute syntax attaches an event listener to either a native DOM event or a UI component event. The `on-*` attribute associates an event handler method with an event name. Please see the [Event handling](#event-handling) section above for details.

### `once-[event](methodName|function, ...args)`

The same as the `on-*` attribut,e except that its listener is only invoked for the first event, and then removed from memory. Please see the [Event handling](#event-handling) section above for more details.

### `key`

The `key` property does 2 things in Marko:

- Obtains references to nested HTML elements and nested UI components.
- Matches corresponding elements together when DOM diffing/patching after a rerender. When updating the DOM, keyed elements/components are matched up and reused rather than discarded and recreated.

Internally, Marko assigns a unique key to all HTML elements and UI components in a `.marko` file, based on the order they appear in the file. If you have repeated elements or elements that move between locations in the DOM, then you likely want to assign a custom `key` by adding a `key` attribute. The `key` attribute can be applied to both HTML elements and custom tags.

#### Referencing nested HTML elements and components

```marko
class {
  onMount() {
    const headerElement = this.getEl('header');
    const colorListItems = this.getEls('colors');
    const myFancyButton = this.getComponent('myFancyButton');
  }
}

<h1 key="header">Hello</h1>

<ul>
  <for|color| of=['red', 'green', 'blue']>
      <li key="colors[]">${color}</li>
  </for>
</ul>

<fancy-button key="myFancyButton"/>
```

> **Note:** The `[]` suffix (e.g. `key="colors[]"`) lets Marko know that the element will be repeated multiple times with the same key.

#### Keyed matching

The `key` attribute can pair an HTML element or UI component that moves to a new location in the DOM. For example:

```marko
class {
  onCreate() {
    this.state = {
      swapped: false
    }
  }
}

<if(state.swapped)>
  <p key="b">B</p>
  <p key="a">A</p>
</if>
<else>
  <p key="a">A</p>
  <p key="b">B</p>
</else>
```

The `key` attribute can be used to pair HTML elements or UI components that are repeated:

```marko
<ul>
  <for|user| of=input.users>
      <li key=user.id>${user.name}</li>
  </for>
</ul>
```

This way, if the order of `input.users` changes, the DOM will be rerendered more efficiently.

#### `*:scoped`

The `:scoped` attribute modifier results in the attribute value getting prefixed with a unique ID associated with the current UI component. `:scoped` attribute modifiers can be used to assign a globally unique attribute value from a value that only needs to be unique to the current UI component.

Here’s a use-case: certain HTML attributes reference the `id` of other elements on the page. For example, the [HTML `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) `for` attribute takes an `id` as its value. Many `ARIA` attributes like [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) also take an `id` as their value.

The `:scoped` modifier on an attribute allows you to reference another element without fear of duplicate `id`s, as shown in the following examples:

**`for:scoped`**

```marko
<label for:scoped="name">Name</label>
<input id:scoped="name" value="Frank"/>
```

The above code will output HTML similar to the following:

```html
<label for="c0-name">Name</label> <input id="c0-name" value="Frank" />
```

**`aria-describedby:scoped`**

```marko
<button
   aria-describedby:scoped="closeDisclaimer"
   on-click('closeDialog')>Close</button>

<p id:scoped="closeDisclaimer">
   Closing this window will discard any entered information and return you to the main page.
</p>
```

```html
<button aria-describedby="c0-closeDisclaimer">Close</button>

<p id="c0-closeDisclaimer">
  Closing this window will discard any entered information and return you to the
  main page.
</p>
```

**`href:scoped`**

```marko
<a href:scoped="#anchor">Jump to section</a>
<section id:scoped="anchor"></section>
```

```html
<a href="#c0-anchor">Jump to section</a>
<section id="c0-anchor"></section>
```

### `no-update`

Preserves the DOM subtree associated with the element or component, so it won’t be modified when rerendering.

```marko
<!-- Never rerender this table -->
<table no-update>
  …
</table>
```

```marko
<!-- N ever rerender this UI component -->
<app-map no-update/>
```

This is most useful when other JavaScript modifies the DOM tree of an element, like for embeds.

### `no-update-if`

Similar to [no-update](#no-update), except that the DOM subtree is _conditionally_ preserved:

```marko
<!-- Don’t re-render this table without table data -->
<table no-update-if(input.tableData == null)>
  …
</table>
```

### `no-update-body`

Similar to [no-update](#no-update), except that only the descendant DOM nodes are preserved:

```marko
<!-- Never rerender any nested DOM elements -->
<div no-update-body>
  …
</div>
```

### `no-update-body-if`

Similar to [no-update-body](#no-update-body), except that its descendant DOM nodes are _conditionally_ preserved:

```marko
<!-- Never rerender any nested DOM elements without table data -->
<table no-update-body-if(input.tableData == null)>
  …
</table>
```

### `:no-update`

Prevents certain attributes from being modified during a rerender. The attribute(s) that should not be modified should have a `:no-update` modifier:

```marko
<!-- Never modify the `class` attribute -->
<div class:no-update=input.className>
  …
</div>
```

## Properties

### `this.id`

A string identifier for the root HTML element that the component is bound to. (Not the `id` attribute.)

### `this.state`

The current state for the component. Changing `this.state` or its direct properties will cause the component to rerender.

Only properties that exist when `this.state` is first defined will be watched for changes. If you don’t need a property initially, you can set its value to `null`:

```marko
class {
    onCreate() {
        this.state = {
            data: null,
            error: null
        }
    }
    getData() {
        fetch('/endpoint')
            .then(data => this.state.data = data)
            .catch(error => this.state.error = error);
    }
}
```

Beware: setting a `state` property only _nominates_ the component for a possible rerender, and properties are only watched one level deep. Thus, the component is only rerendered if at least one of the component state properties changed (`oldValue !== newValue`).

If none of the properties changed (because the new value is identical, or no difference is detected by a shallow comparison), the assignment is considered a no-operation (great for performance).

We recommend using [immutable data structures](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/), but if you want to mutate a state property (perhaps push a new item into an array), you can mark it as dirty with `setStateDirty`:

```js
this.state.numbers.push(num);

// Mark numbers as dirty, because a `push`
// won’t be automatically detected by Marko
this.setStateDirty("numbers");
```

### `this.input`

The current input for the component. Setting `this.input` will rerender the component which can be useful for testing, but generally avoided (prefer `state` instead).

## Variables

When a Marko component is compiled, some additional variables are available to the rendering function. These variables are described below.

### `component`

The `component` variable refers to the instance of the currently rendering UI component. This variable can be used to call methods on the UI component instance:

```marko
class {
    getFullName() {
        const { person } = this.input;
        return `${person.firstName} ${person.lastName}`;
    }
}

<h1>Hello, ${component.getFullName()}</h1>
```

### `input`

The `input` variable refers to the `input` object, and is equivalent to `component.input`|`this.input`.

```marko
<h1>Hello, ${input.name}</h1>
```

### `state`

The `state` variable refers to the UI component’s `state` object, and is the _unwatched_ equivalent of `component.state`|`this.state`.

```marko
<h1>Hello ${state.name}</h1>
```

## Methods

### `destroy([options])`

| Option       | Type      | Default | Description                                                                       |
| ------------ | --------- | ------- | --------------------------------------------------------------------------------- |
| `removeNode` | `Boolean` | `true`  | `false` will keep the component in the DOM while unsubscribing all events from it |
| `recursive`  | `Boolean` | `true`  | `false` will prevent child components from being destroyed                        |

Destroys the component by unsubscribing from all listeners made using the `subscribeTo` method, and then detaching the component’s root element from the DOM. All nested components (discovered by querying the DOM) are also destroyed.

```js
component.destroy({
  removeNode: false, // true by default
  recursive: false // true by default
});
```

### `forceUpdate()`

Queue the component to re-render and skip all checks to see if it actually needs it.

> When using `forceUpdate()` the updating of the DOM will be queued up. If you want to immediately update the DOM
> then call `this.update()` after calling `this.forceUpdate()`.

### `getEl([key, index])`

| Signature    | Type          | Description                                                                       |
| ------------ | ------------- | --------------------------------------------------------------------------------- |
| `key`        | `String`      | _optional_ — the scoped identifier for the element                                |
| `index`      | `Number`      | _optional_ — the index of the component, if `key` references a repeated component |
| return value | `HTMLElement` | The element matching the key, or `this.el` if no key is provided                  |

Returns a nested DOM element by prefixing the provided `key` with the component’s ID. For Marko, nested DOM elements should be assigned an ID with the `key` attribute.

### `getEls(key)`

| Signature    | Type                 | Description                                           |
| ------------ | -------------------- | ----------------------------------------------------- |
| `key`        | `String`             | The scoped identifier for the element                 |
| return value | `Array<HTMLElement>` | An array of _repeated_ DOM elements for the given key |

Repeated DOM elements must have a value for the `key` attribute that ends with `[]`. For example, `key="items[]"`.

### `getElId([key, index])`

| Signature    | Type     | Description                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------- |
| `key`        | `String` | _optional_ — The scoped identifier for the element                                |
| `index`      | `Number` | _optional_ — The index of the component, if `key` references a repeated component |
| return value | `String` | The element ID matching the key, or `this.el.id` if `key` is undefined            |

Similar to `getEl`, but only returns the String ID of the nested DOM element instead of the actual DOM element.

### `getComponent(key[, index])`

| Signature    | Type        | Description                                                                                                                                                                                                       |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`        | `String`    | The scoped identifier for the element                                                                                                                                                                             |
| `index`      | `Number`    | _optional_ — The index of the component, if `key` references a repeated component                                                                                                                                 |
| return value | `Component` | A reference to a nested `Component` for the given key. If an `index` is provided and the target component is a repeated component (i.e. `key="items[]"`), then the component at the given index will be returned. |

For example, given the following component,

```marko
<app-main>
  <app-child key="child"/>
</app-main>
```

The following code can be used to get the `<app-child/>` component:

```js
const childComponent = this.getComponent("child");
```

### `getComponents(key, [, index])`

| Signature    | Type               | Description                                                                       |
| ------------ | ------------------ | --------------------------------------------------------------------------------- |
| `key`        | `String`           | The scoped identifier for the element                                             |
| `index`      | `Number`           | _optional_ — The index of the component, if `key` references a repeated component |
| return value | `Array<Component>` | An array of _repeated_ `Component` instances for the given key                    |

Repeated components must have a value for the `key` attribute that ends with `[]`, like `key="items[]"`.

### `isDestroyed()`

Returns `true` if a component has been destroyed using [`component.destroy()`](#ondestroy), otherwise `false`.

### `isDirty()`

Returns `true` if the component needs a bath.

### `replaceState(newState)`

| Signature  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| `newState` | `Object` | A new state object to replace the previous state |

Replaces the state with an entirely new state. Equivalent to `this.state = newState`.

> **Note:** While `setState()` is additive and will not remove properties that are in the old state but not in the new state, `replaceState()` _will_ add the new state and remove the old state properties that are not found in the new state. Thus, if `replaceState()` is used, consider possible side effects if the new state contains less or other properties than the replaced state.

### `rerender([input])`

| Signature | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| `input`   | `Object` | _optional_ — New input data to use when rerendering |

Rerenders the component using its `renderer`, and either supplied `input` or internal `input` and `state`.

### `setState(name, value)`

| Signature | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| `name`    | `String` | The name of the `state` property to update |
| `value`   | `Any`    | The new value for the `state` property     |

Changes the value of a single `state` property. Equivalent to `this.state[name] = value`, except it will also work for adding new properties to the component state.

```js
this.setState("disabled", true);
```

### `setState(newState)`

| Signature  | Type     | Description                                         |
| ---------- | -------- | --------------------------------------------------- |
| `newState` | `Object` | A new state object to merge into the previous state |

Changes the value of multiple state properties:

```js
this.setState({
  disabled: true,
  size: "large"
});
```

### `setStateDirty(name[, value])`

| Signature | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| `name`    | `String` | The name of the `state` property to mark as dirty |
| `value`   | `Any`    | _optional_ — A new value for the `state` property |

Forces a state property change, even if the value is equal to the old value. This is helpful in cases where a change occurs to a complex object that would not be detected by a shallow compare. Invoking this function completely circumvents all property equality checks (shallow compares) and always rerenders the component.

#### More details

The first parameter, `name`, is used to allow update handlers (e.g. `update_foo(newValue)`) to handle the state transition for the specific state property that was marked dirty.

The second parameter, `value`, is used as the new value that is given to update handlers. Because `setStateDirty()` always bypasses all property equality checks, this parameter is optional. If not given or equal to the old value, the old value will be used for the update handler.

Important: the given parameters do not affect how or if `setStateDirty()` rerenders a component; they are only considered as additional information to update handlers.

```js
// Because this does not create a new array, the change
// would not be detected by a shallow property comparison
this.state.colors.push("red");

// Force that particular state property to be considered dirty so
// that it will trigger the component's view to be updated
this.setStateDirty("colors");
```

### `subscribeTo(emitter)`

| Signature    | Description                                                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `emitter`    | A [Node.js `EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) or DOM object that emits events (`window`, `document`, etc.) |
| return value | A tracked subscription                                                                                                                                |

When a component is destroyed, it is necessary to remove any listeners that were attached by the component to prevent memory leaks. By using `subscribeTo`, Marko will automatically track and remove any listeners you attach when the component is destroyed.

Marko uses [`listener-tracker`](https://github.com/patrick-steele-idem/listener-tracker) to provide this feature.

```js
this.subscribeTo(window).on("scroll", () =>
  console.log("The user scrolled the window!")
);
```

### `update()`

Immediately executes any pending updates to the DOM, rather than following the normal queued update mechanism for rendering.

```js
this.setState("foo", "bar");
this.update(); // Force the DOM to update
this.setState("hello", "world");
this.update(); // Force the DOM to update
```

## Event methods

Marko components inherit from [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter). Below are a few commonly used methods — view the Node.js docs for the full list.

### `emit(eventName, ...args)`

| Signature   | Type     | Description                                           |
| ----------- | -------- | ----------------------------------------------------- |
| `eventName` | `String` | Name of the event                                     |
| `...args`   | `Any`    | All subsequent parameters are passed to the listeners |

Emits a UI component custom event. If a UI component attached a listener with the matching `eventName`, then the corresponding event listener method will be invoked. Event listeners can be attached using either the [`on-[event](methodName|function, ...args)`](#declarative-custom-events) attribute syntax, or `targetComponent.on()`.

### `on(eventName, handler)`

| Signature   | Type       | Description                               |
| ----------- | ---------- | ----------------------------------------- |
| `eventName` | `String`   | Name of the event to listen for           |
| `handler`   | `Function` | The function to call when the event fires |

Adds the listener function to the end of the listeners array for the `eventName` event. Does not check to see if the listener has already been added. Multiple calls passing the same combination of `eventName` and `handler` will result in the listener being added and called multiple times.

### `once(eventName, handler)`

| Signature   | Type       | Description                                |
| ----------- | ---------- | ------------------------------------------ |
| `eventName` | `String`   | Name of the event to listen for            |
| `handler`   | `Function` | Tthe function to call when the event fires |

Adds a one-time listener function for the `eventName` event. The next time `eventName` triggers, this listener is removed and then invoked.

## Lifecycle events

Marko defines six lifecycle events:

- `create`
- `input`
- `render`
- `mount`
- `update`
- `destroy`

These events are emitted at specific points over the lifecycle of a component, as shown below:

**First render**

```js
emit('create') → emit('input') → emit('render') → emit('mount')
```

**New input**

```js
emit('input') → emit('render') → emit('update')
```

**Internal state change**

```js
emit('render') → emit('update')
```

**Destroy**

```js
emit("destroy");
```

### Lifecycle event methods

Each lifecycle event has a corresponding component lifecycle method that can listen for the event:

```js
class {
  onCreate(input, out) { }
  onInput(input, out) { }
  onRender(out) { }
  onMount() { }
  onUpdate() { }
  onDestroy() { }
}
```

> **ProTip:** When a lifecycle event occurs in the browser, the corresponding event is emitted on the component instance. A parent component, or other code that has access to the component instance, can listen for these events. For example:
>
> ```js
> component.on("input", function (input, out) {
>   // The component received an input
> });
> ```

### `onCreate(input, out)`

| Signature | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `input`   | The input data used to render the component for the first time  |
| `out`     | The async `out` used to render the component for the first time |

The `create` event is emitted (and `onCreate` is called) when the component is first created.

`onCreate` is typically used to set the initial state for stateful components:

```marko
class {
    onCreate(input) {
        this.state = { count: input.initialCount };
    }
}
```

### `onInput(input, out)`

| Signature | Description        |
| --------- | ------------------ |
| `input`   | The new input data |

The `input` event is emitted (and `onInput` is called) when the component receives input: both the initial input, and for any subsequent updates to its input.

### `onRender(out)`

| Signature | Description                            |
| --------- | -------------------------------------- |
| `out`     | The async `out` for the current render |

The `render` event is emitted (and `onRender` is called) when the component is about to render or rerender.

### `onMount()`

The `mount` event is emitted (and `onMount` is called) when the component is first mounted to the DOM. For server-rendered components, this is the first event that is emitted only in the browser.

This is the first point at which `this.el` and `this.els` are defined. `onMount` is commonly used to attach third-party JavaScript to the newly-mounted DOM.

For example, attaching a library that monitors if the component is in the viewport:

```marko
import scrollmonitor from 'scrollmonitor';

class {
    onMount() {
        this.watcher = scrollmonitor.create(this.el);
        this.watcher.enterViewport(() => console.log('I have entered the viewport'));
        this.watcher.exitViewport(() => console.log('I have left the viewport'));
    }
}
```

### `onUpdate()`

The `update` event is emitted (and `onUpdate` is called) when the component is called after a component rerenders and the DOM has been updated. If a rerender does not update the DOM (nothing changed), this event will not fire.

### `onDestroy()`

The `destroy` event is emitted (and `onDestroy` is called) when the component is about to unmount from the DOM and cleaned up. `onDestroy` should be used to do any additional cleanup beyond what Marko handles itself.

For example, cleaning up from our `scrollmonitor` example in [`onMount`](#onmount):

```marko
import scrollmonitor from 'scrollmonitor';

class {
    onMount() {
        this.watcher = scrollmonitor.create(this.el);
        this.watcher.enterViewport(() => console.log('Entered the viewport'));
        this.watcher.exitViewport(() => console.log('Left the viewport'));
    }
    onDestroy() {
        this.watcher.destroy();
    }
}
```

## DOM manipulation methods

The following methods move the component’s root DOM node(s) from the current parent element to a new parent element (or out of the DOM in the case of `detach`).

### `appendTo(targetEl)`

Moves the UI component’s DOM elements into the position after the target element’s last child.

```js
this.appendTo(document.body);
```

### `insertAfter(targetEl)`

Moves the UI component’s DOM elements into the position after the target DOM element.

### `insertBefore(targetEl)`

Moves the UI component’s DOM elements into the position before the target DOM element.

### `prependTo(targetEl)`

Moves the UI component’s DOM elements into the position before the target element’s first child.

### `replace(targetEl)`

Replaces the target element with the UI component’s DOM elements.

### `replaceChildrenOf(targetEl)`

Replaces the target element’s children with the UI component’s DOM elements.
