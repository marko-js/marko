# Events

Marko supports listening to [browser events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) on native tags as well as custom events from [custom tags](./custom-tags.md) using the same API.

## Listening to events

All events emitted from native and custom tags can be received by using an `on-*` attribute in combination with the [attribute arguments](./syntax.md#arguments) syntax.

The first argument for the attribute must be a function or a string that maps to a predefined method on the component's [`class`](./class-components.md).

### Method handler

When a string is provided as the first argument Marko will look for a method on the component's `class` and call that.

```marko
class {
  log(msg) {
    ...
  }

  logChange(newTab) {
    this.log(`changed to: ${newTab}`);
  }
}

<my-tabs on-switch-tab("logChange")>
  ...
</my-tabs>
```

When `my-tabs` emits the `switch-tab` event it will call the `logChange` method on this component.
The benefit here is that within the handler you will have access to the current component instance and be able to read data, emit events, update state, etc.

### Function handler

You can provide a function as the first argument of the `on-*` attribute. This function will be called whenever the event is fired. Below we use the [`static syntax`](./syntax.md#static) to define a function and use that.

```marko
static function handleClick(event) {
  event.preventDefault();
  console.log("Clicked!");
}

<button on-click(handleClick)>
  ...
</button>
```

In the above example, any time the `<button>` is clicked the `handleClick` function is called.

You can also use an inline arrow function, or anything that evaluates to a function:

```marko
<button on-click((event) => {
  console.log("Clicked!");
})>
  ...
</button>
```

### Binding additional arguments

Arguments after the handler will be prepended when the handler is called.

```marko
static function removeFriend(friendId, event) {
  event.preventDefault();
  window.myAPI.unfriend(friendId);
}

<for|friend| of=input.friends>
  <button on-click(removeFriend, friend.id)>
    Unfriend ${friend.name}
  </button>
</for>
```

Here we can share the logic for `removeFriend` with each `friend` in the list. When a `<button>` is clicked, the `id` of the `friend` being removed is passed into the `removeFriend` handler followed by the DOM click event.

## Emitting custom events

The recommended way for a [custom tag](./custom-tags.md) to communicate with its parent is through custom events.

All components implement a node.js style [event emitter](https://nodejs.org/api/events.html#events_class_eventemitter) API, which is used to emit events to its parent component.

_email-input.marko_

```marko
class {
  handleChange(event) {
    const email = event.target.value;
    const isValid = /\@/g.test(email);

    if (isValid) {
      // Only emit email changes if they are valid.
      this.emit("email-change", { email: email });
    }
  }
}

<input name=input.name on-change("handleChange")/>
```

The above example component is listening to native `change` events from the `<input>` element, and then emitting its own `email-change` event if it decides that the change was valid.

```marko
<form>
  <email-input name="email" on-email-change(...)/>
</form>
```

> **Note:** Events are not received as input (you cannot access `input.onEmailChange`), instead these setup subscriptions.
