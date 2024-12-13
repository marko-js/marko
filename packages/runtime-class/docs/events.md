# Events

Marko’s event API supports:

- [Browser events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) on native tags
- Custom events from [custom tags](./custom-tags.md)

Note that **you can’t mix event targets and event types**: custom tags can only listen for custom events, and native tags can only listen for native events.

## Listening to events

Both kinds of events are received with an `on-*` attribute and the [attribute arguments syntax](./syntax.md#arguments):

```marko
<input type="checkbox"
  on-change(event => console.info(`Checked? ${event.target.checked}`))
/>
```

The [first argument for the attribute can be a function](#function-handler), or [a string matching a method name](#method-handler) on the [component’s `class` declaration](./class-components.md).

### Function handler

If you provide a function as the first argument of the `on-*` attribute, the function is called whenever the event fires, like standard event listeners.

Below we use the [`static` prefix](./syntax.md#static-javascript) to define a function, then use it as a `click` handler:

```marko
static function handleClick(event) {
  event.preventDefault();
  console.log("Clicked!");
}

<button on-click(handleClick)>
  Log click
</button>
```

In the above example, any time the `<button>` is clicked the `handleClick` function is called.

You can also use an inline arrow function:

```marko
<button on-click(() => alert("Clicked! 🎉"))>
  Celebrate click
</button>
```

…or anything that evaluates to a function:

```marko
$ const handler = (
  input.dontBreakMyApp ?
    () => console.error("Clicked!") :
    () => { throw Error("Clicked!") }
);

<button on-click(handler)>
  Do not click
</button>
```

### Method handler

When a string is the first argument, Marko calls a matching method on the component's `class`.

```marko
class {
  logChange(newTab) {
    console.log(`changed to: ${newTab}`);
  }
}

<my-tabs on-switch-tab("logChange")>
  …
</my-tabs>
```

When `<my-tabs>` emits the `switch-tab` event, it will call its `logChange` method.

Within the handler you can access the current component instance, read data, emit events, update state, etc.

### Binding additional arguments

Arguments after the handler are prepended when the handler is called:

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

Here we share the logic for `removeFriend()` with each `friend` in the `friends` array. When the `<button>` is clicked, the `id` of the removed `friend` is passed to the `removeFriend()`, handler followed by the DOM `click` event.

## Emitting custom events

The recommended way for a [custom tag](./custom-tags.md) to communicate with its parent is through **custom events**.

All components implement a [Node.js-style event emitter](https://nodejs.org/api/events.html#events_class_eventemitter) to send events to parent components.

_email-input.marko_

```marko
class {
  handleChange(event) {
    if (event.target.validity.valid) {
      // Only emit email-changes if they are valid.
      this.emit("email-change", { email: event.target.value });
    }
  }
}

<input type="email" name=input.name on-change("handleChange")/>
```

The above code listens to native `change` events from the `<input>` element, and then emits its own `email-change` event if the change was valid.

```marko
<form>
  <email-input name="email" on-email-change("...")/>
</form>
```

> **Note:** Events are not received as `input`; you cannot access `input.onEmailChange`. Instead, they set up subscriptions.
