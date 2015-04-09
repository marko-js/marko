FAQ - Marko Widgets
===================

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Table of Contents

- [Questions](#questions)
	- [Is there a difference between reuse and preserve in the context of Marko Widgets?](#is-there-a-difference-between-reuse-and-preserve-in-the-context-of-marko-widgets)
	- [How far should a UI be "componentized"?](#how-far-should-a-ui-be-componentized)
	- [When should the body of a custom component be used?](#when-should-the-body-of-a-custom-component-be-used)
	- [Which component functions are invoked at what time - what's the order of invocation?](#which-component-functions-are-invoked-at-what-time---whats-the-order-of-invocation)
	- [Marko Widgets supports the batching of DOM updates, but what does this mean to the developer?](#marko-widgets-supports-the-batching-of-dom-updates-but-what-does-this-mean-to-the-developer)
	- [How do widgets communicate?](#how-do-widgets-communicate)
	- [Why is state so important for Marko Widgets?](#why-is-state-so-important-for-marko-widgets)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Questions

## Is there a difference between reuse and preserve in the context of Marko Widgets?

DOM nodes can be preserved during a rerender and widget instances can be reused during a rerender. A preserved DOM node is left completely in its previous state (other than being reinserted into the DOM with a new parent). A reused widgets, however, is reinitialized after updating its internal state, but the same instance is reused.

A preserved DOM nodes is detached from the DOM and reinserted into the updated DOM in its proper place.

Reusing the same widget instance ensures that any references to the old widget instance will still be correct. It is necessary to reinitialize a widget (i.e., call the `init` method again) since nested DOM subtree and nested widgets will likely have changed.

## How far should a UI be "componentized"?

There is no right answer for how far a page should be decomposed into individual UI components. The goal should be for each UI component to be Focused, Independent, Reusable, Small & Testable ([FIRST](http://addyosmani.com/first/)). If you feel like a UI component does not meet these requirements then break it up into smaller UI components.

## When should the body of a custom component be used?

There are multiple ways to express the same thing using HTML. For example, an HTML button can be defined in two different ways:

```html
<input type="button" value="My Button">

<button type="button">
    My Button
</button>
```

In the above example, the exact same button is produced, but when using the `<input>` tag the label of the button is provided in the `value` _attribute_ and when using the `<button>` tag, the label of the button is provided in the nested body content. This is important because an HTML attribute does _not_ allow HTML content, while HTML content can be provided in the body of an HTML element. When designing a UI component, if it may be necessary to provide input to a component that includes markup then it should be possible to provide that markup as part of the body content.

## Which component functions are invoked at what time - what's the order of invocation?

As a widget developer you can choose to implement any of the following special functions:

- Rendering/Rerendering functions (all optional, called in the order shown):
    1. `getInitialProps(input)`
    2. `getInitialState(input)`
    3. `getTemplateData(state, input)`
    4. `getInitialBody(input)`
    5. `getWidgetConfig(input)`
- Widget methods:
    - `init(widgetConfig)` - Called when the widget is initialized _or_ reinitialized
    - `update_<state_property>(newValue)` - Called when the corresponding state property has changed and the DOM needs to be updated based on the new value.
    - `onBeforeUpdate()` - Called before the widget's DOM is about to be updated (due to either a rerender or state update handler).
    - `onBeforeDestroy()` - Called before the widget is about to be destroyed
    - `onDestroy()` - Call after the widget has been destroyed
    - `onAfterUpdate()` - Called after the DOM has been updated.

## Marko Widgets supports the batching of DOM updates, but what does this mean to the developer?

DOM updates to widgets are batched to prevent DOM updates from happening after every state change. If a widget's DOM needs to be update due to either `setState()` or `setProps()` the widget will be queued for update with the next batch (a widget will only be queued up once).

For example, given the following code that repeatedly sets the same state property to a new value:

```javascript
this.setState('name', 'Frank');
this.setState('name', 'Jane');
this.setState('name', 'John');
```

The DOM will only be updated once for the widget and it will be based on the final value of the `name` state property.

Marko Widgets starts a batch when handling a bubbling a DOM event that came off of the event loop. That is, the DOM will be updated once after all code has had a chance to respond to the DOM event. If a widget is queued for update and no batch has been started then a new batch will automatically be started and the update will be scheduled using `process.nextTick()`.

## How do widgets communicate?

Every widget is an [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) instance and widgets typically communicate by emitting custom events that can then be handled by the direct parent of the widget. The parent widget can choose to handle the event or emit another custom event that bubbles up to its parent. A widget should only communicate directly with nested widgets that it "owns" (i.e., nested widgets that were introduced in the containing widget's template). A widget can get a direct reference to a nested widget using the `this.getWidget(nestedWidgetId)` method (where `nestedWidgetId` is the ID assigned using the `w-id` attribute).

In some situations, it may be helpful to communicate an event on a global pub/sub channel. Pub/sub can be helpful in situations where it would overkill for an event to have to bubble up a complex widget hierarchy in order for it to be handled. The [raptor-pubsub](https://github.com/raptorjs/raptor-pubsub) module provides a very simple pub/sub implementation based on the [EventEmitter](https://nodejs.org/api/events.html#events_class_events_eventemitter) API.

## Why is state so important for Marko Widgets?

The concept of stateful widgets was introduced into Marko Widgets after evaluating some the great ideas introduced with [React](https://facebook.github.io/react/). By making widgets stateful and tracking changes to state, the Marko Widgets runtime can minimize updates to the DOM. Both Marko Widgets and React want to help developers avoid having to write code that manually updates the DOM. Marko Widgets, however, provides support for updating the DOM for specific state changes when required.

A stateful widget's view will only be updated if any of its state properties has been changed. In addition, when rerendering a tree of Marko Widgets, only the specific widgets that need to be updated will be updated and the other widgets will continue to be used. While re-rendering a widget with nested widgets, if Marko Widgets encounters a previously rendered widget in the DOM with the same ID then the previous widget will be reused to avoid rerendering and entire subtree of widgets.

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