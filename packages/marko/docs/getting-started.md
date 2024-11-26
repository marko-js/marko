# Getting started

## Setup

### Marko Run (Recommended)

[Marko Run](https://github.com/marko-js/run) makes it easy to get started with little to no config and is the recommended starting point for a new Marko project.

To set up your project:

1. `npm init marko -- -t basic`
2. `cd ./<PROJECT_NAME>`
3. `npm run dev`

Open `src/routes/_index/+page.marko` in your editor to change the index page. See the [routing documentation](https://github.com/marko-js/run#file-based-routing) to learn how to add additional pages to your project.

### Other setups

If you just want to test out Marko in your browser, use the [Try Online](https://markojs.com/try-online) feature. You can open it in another tab and follow along. For other setups, check out the [Installation](./installing.md) page.

## Hello world

Marko makes it easy to represent your UI using a [syntax](./syntax.md) that is like HTML:

_hello.marko_

```marko
<h1>Hello World</h1>
```

In fact, Marko is so much like HTML, that you can use it as a replacement for a templating language like handlebars, mustache, or pug:

_template.marko_

```marko
<!doctype html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

However, Marko is much more than a templating language. It's a language that allows you to declaratively build an application by describing how the application view changes over time and in response to user actions.

In the browser, when the data representing your UI changes, Marko will automatically and efficiently update the DOM to reflect the changes.

## A simple component

Let's say we want to perform an action once a `<button>` is clicked:

_button.marko_

```marko
<button>Click me!</button>
```

Marko makes this really easy, allowing you to define a `class` for a component right in the `.marko` view and call methods of that class with `on-` attributes:

_button.marko_

```marko
class {
    sayHi() {
        alert("Hi!");
    }
}

<button on-click("sayHi")>Click me!</button>
```

### Adding state

Alerting when a button is clicked is great, but what about updating your UI in response to an action? Marko's stateful components make this easy. All you need to do is set `this.state` from inside your component's class. This makes a new `state` variable available to your view. When a value in `this.state` is changed, the view will automatically re-render and only update the part of the DOM that changed.

_counter.marko_

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

<div>The current count is ${state.count}</div>
<button on-click("increment")>Click me!</button>
```
