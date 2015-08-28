FAQ
===================

<!--{TOC}-->

# What are the difficulties involved in creating „reusable“ widgets when building an app?

As a developer one needs to make the choice between building a "reusable" UI component versus a widget that is tightly coupled with an app - there most certainly is a tradeoff between reusability and simplicity.

A reusable UI widget would need to emit generic events while a tightly coupled widget would directly talk to the app instance to control the app. Therefore, a reusable widget introduces complexity because it then becomes the responsibility of the parent widget to handle the events. A tightly coupled widget, in comparison, avoids the middleman and goes straight to the app.

As the decision is centered around individual situations, an application developer has to decide if a certain component would benefit to be reusable.

# Is there a difference between reuse and preserve in the context of Marko Widgets?

DOM nodes can be preserved during a rerender and widget instances can be reused during a rerender (to have the same widget instance even after a rerender). A preserved DOM node is left completely in its previous state (other than being reinserted into the DOM with a new parent).

A preserved DOM nodes is detached from the DOM and reinserted into the updated DOM in its proper place.

Reusing the same widget instance ensures that any references to the old widget instance will still be correct.

# How far should a UI be "componentized"?

There is no right answer for how far a page should be decomposed into individual UI components. The goal should be for each UI component to be Focused, Independent, Reusable, Small & Testable ([FIRST](http://addyosmani.com/first/)). If you feel like a UI component does not meet these requirements then break it up into smaller UI components.

# When should the body of a custom component be used?

There are multiple ways to express the same thing using HTML. For example, an HTML button can be defined in two different ways:

```html
<input type="button" value="My Button">

<button type="button">
    My Button
</button>
```

In the above example, the exact same button is produced, but when using the `<input>` tag the label of the button is provided in the `value` _attribute_ and when using the `<button>` tag, the label of the button is provided in the nested body content. This is important because an HTML attribute does _not_ allow HTML content, while HTML content can be provided in the body of an HTML element. When designing a UI component, if it may be necessary to provide input to a component that includes markup then it should be possible to provide that markup as part of the body content.

# Which component functions are invoked at what time - what's the order of invocation?

As a widget developer you can choose to implement any of the following special functions:

- Rendering/Rerendering functions (all optional, called in the order shown):
    1. `getInitialProps(input)`
    2. `getInitialState(input)`
    3. `getTemplateData(state, input)`
    4. `getInitialBody(input)`
    5. `getWidgetConfig(input)`
- Widget methods:
    - `init(widgetConfig)` - Called when the widget is initialized (rerendering a widget does not invoke the function again)
    - `update_<state_property>(newValue)` - Called when the corresponding state property has changed and the DOM needs to be updated based on the new value.
    - `onBeforeUpdate()` - Called before the widget's DOM is about to be updated (due to either a rerender or state update handler).
    - `onBeforeDestroy()` - Called before the widget is about to be destroyed
    - `onDestroy()` - Call after the widget has been destroyed
    - `onUpdate()` - Called after the DOM has been updated.
    - `shouldUpdate(newProps, newState)` - Called when a widget is about to be updated due to new props. Returning `false` will prevent the widget from being rerendered.

# Marko Widgets supports the batching of DOM updates, but what does this mean to the developer?

DOM updates to widgets are batched to prevent DOM updates from happening after every state change. If a widget's DOM needs to be update due to either `setState()` or `setProps()` the widget will be queued for update with the next batch (a widget will only be queued up once).

For example, given the following code that repeatedly sets the same state property to a new value:

```javascript
this.setState('name', 'Frank');
this.setState('name', 'Jane');
this.setState('name', 'John');
```

The DOM will only be updated once for the widget and it will be based on the final value of the `name` state property.

Marko Widgets starts a batch when handling a bubbling a DOM event that came off of the event loop. That is, the DOM will be updated once after all code has had a chance to respond to the DOM event. If a widget is queued for update and no batch has been started then a new batch will automatically be started and the update will be scheduled using `process.nextTick()`.

# How do widgets communicate?

Every widget is an [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) instance and widgets typically communicate by emitting custom events that can then be handled by the direct parent of the widget. The parent widget can choose to handle the event or emit another custom event that bubbles up to its parent. A widget should only communicate directly with nested widgets that it "owns" (i.e., nested widgets that were introduced in the containing widget's template). A widget can get a direct reference to a nested widget using the `this.getWidget(nestedWidgetId)` method (where `nestedWidgetId` is the ID assigned using the `w-id` attribute).

In some situations, it may be helpful to communicate an event on a global pub/sub channel. Pub/sub can be helpful in situations where it would overkill for an event to have to bubble up a complex widget hierarchy in order for it to be handled. The [raptor-pubsub](https://github.com/raptorjs/raptor-pubsub) module provides a very simple pub/sub implementation based on the [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) API.

# Why is state so important for Marko Widgets?

The concept of stateful widgets was introduced into Marko Widgets after evaluating some the great ideas introduced with [React](https://facebook.github.io/react/). By making widgets stateful and tracking changes to state, the Marko Widgets runtime can minimize updates to the DOM. Both Marko Widgets and React want to allow developers to create more easily maintainable applications by promoting rerendering over writing code that manually manipulates the DOM. Marko Widgets still allows developers to manually update the DOM if performance is a concern, but that should not be the norm.

A stateful widget's view will only be updated if any of its state properties have been changed. In addition, when rerendering a tree of widgets, only the specific widgets that need to be updated will be updated and the other widgets will continue to be used. While rerendering a widget with nested widgets, if Marko Widgets encounters a previously rendered widget in the DOM with the same ID then the previous widget will be reused to avoid rerendering and entire subtree of widgets. Marko Widgets also has the concept of container components that accept external nested content. If the state of the container component changes, only the outer "shell" will be rerendered and not the nested content.

For performance reasons, only a shallow compare is done when checking if the value of a state property has changed. This means that complex objects that exist in the state should be treated as immutable or, alternatively, Marko Widgets needs to be told when a state property has changed using `setStateDirty(name)`. Both supported solutions are compared below:

___Immutable objects and copy-on-write:___

```javascript
function addColor(newColor) {
    // Create a new Array with the new color added:
    var newColors = this.state.colors.concat([newColor]);

    // Set the colors state with the new Array:
    this.setState('colors', this.state.colors.concat[newColor]);
}
```

___Using setStateDirty:___

```javascript
function addColor(newColor) {
    // Modify the existing colors array
    this.state.colors.push(newColor);

    // Let Marko Widgets know that the colors Array was modified:
    this.setStateDirty('colors');
}
```

Unlike React, Marko Widgets does not try to maintain a virtual DOM tree. This allows the Marko Widgets runtime to be much smaller. Marko Widgets makes the assumption that rerendering directly to the DOM is usually fast enough. In the cases where performance is a concern, developers have the option to provide custom state update handlers to manually update the DOM. In addition, Marko Widgets allows developers to mark entire subtrees of the DOM as "preserved" so that portions of the DOM are never rerendered and will continue be used across rerendering.
