# State

The output of a component is based on input properties passed from its parent as attributes. However, a component may also maintain internal state that it uses to control its view. If Marko detects a change to either input or to the internal state, the view will automatically be updated.

> **ProTip:**
> Only data that is owned and modified by the component should go into its `state`. State should be exclusively used for data that triggers rerenders. Parents control `input`, and the component controls its own `state`.

## Initializing state

To use `state` in Marko, you must first create a [class component](./class-components.md) and initialize the state within the [`onCreate`](./class-components.md#oncreateinput-out) method. In class methods, `this.state` may be used and within the template section, a `state` variable is available.

```marko
class {
    onCreate() {
        this.state = { count: 0 };
    }
}

<div>The count is ${state.count}</div>
```

> **Note:** Only properties that exist when `this.state` is first defined will be watched for changes. If you don't need a property initially, you can set it to `null`.

## Updating state

You can update `state` in response to DOM events, browser events, ajax calls, etc. When a property on the state changes, the view will be updated to match.

```marko
class {
    onCreate() {
        this.state = { count: 0 };
    }
    increment() {
        this.state.count++;
    }
}

<div>The count is ${state.count}</div>
<button on-click('increment')>Increment</button>
```

We've extended our example above to add a button with an [event handler](./events.md), so that, when clicked, the `state.count` value is incremented.

> **Note:**
> When browsing existing code, you may see `this.setState('name', value)` being used. This is equivalent to `this.state.name = value`.

### How updates work

When a property on `state` is set, the component will be scheduled for an update if the property has changed. All updates are batched together for performance. This means you can update multiple state properties at the same time without causing multiple updates.

> **ProTip:** If you need to know when the update has been applied, you can use `this.once('update', fn)` within a component method.

> **Note:** The state object only watches its properties one level deep. This means updates to nested properties on the state (e.g. `this.state.object.something = newValue`) will not be detected.
>
> Using [immutable](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/) data structures is recommended, but if you want to mutate a state property (perhaps push a new item into an array) you can let Marko know it changed using `setStateDirty`.
>
> ```js
> this.state.numbers.push(num);
>
> // mark numbers as dirty, because a `push`
> // won't be automatically detected by Marko
> this.setStateDirty("numbers");
> ```

## Cross component state management

There are various tools available to manage state outside of a single component. Here are some basic guidelines.

Typically we recommend using `attributes` to pass data in to a child component, and children can [emit events](./events.md#emitting-custom-events) to communicate back up to their parents. In some cases this can become cumbersome with deeply nested data dependencies or global state.

### Global/Subtree

For passing state throughout a component tree without explicit attribute setting throughout the entire app, you can leverage the [`<context>`](https://github.com/marko-js/tags/tree/master/tags/context) tag. This tag can be [installed from npm](./custom-tags.md#using-tags-from-npm).

This tag allows you to pull state from any level above in the tree and can also be used to pass global state throughout your app.
Context providers can register event handlers that any child in the tree can trigger similar to the [events API](./events.md).

_fancy-form.marko_

```marko
<context coupon=input.coupon on-buy(handleBuy)>
    <!-- Somewhere nested in the container will be the buy button -->
    <fancy-container/>
</context>
```

_fancy-save-button.marko_

```marko
<context|{ coupon }, emit| from="fancy-form">
    Coupon: ${coupon}.
    <button on-click(emit, "buy")>Buy</button>
</context>
```

> **Note:** Context _couples_ tags together and can limit reuse of components.

### When to use a Redux like pattern

Often the above two approaches are enough, and many people [jump to this part far too quickly](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). Like `<context>`, often anything stored in redux is `global`. This means that it can (if abused) create components that are hard to reuse, reason about and test. However it is important to understand when a tool like `redux` is useful in any UI library.

Redux provides indirection to updating any state that it controls. This is useful if you need the following:

- Single state update, multiple actions (eg: logging, computed data, etc).
- Time travel debugging and other [redux-specific tooling](https://redux.js.org/introduction/ecosystem).
