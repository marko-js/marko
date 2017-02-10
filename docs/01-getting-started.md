# Getting started

The easiest way to get started with Marko is to use the [Try Online]() feature. You can just open it in another tab and follow along. If you'd rather develop locally, check out the [Installation]() page.

Marko makes it easy to represent your UI using a syntax that is like HTML:

_hello.marko_
```xml
<h1>Hello World</h1>
```

In fact, Marko is so much like HTML, that you can use it as a replacement for a templating language like handlebars, mustache, or pug:

_template.marko_
```xml
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

However, Marko is much more than a templating language.  It's a UI library that allows you to break your application into components that are self-contained and describe how the application view changes over time and in response to user actions.

In the browser, when the data representing your UI changes, Marko will automatically and efficiently update the DOM to reflect the changes.

## A simple component

Let's say we have a `<button>` that we want to assign some behavior to when it is clicked:

_button.marko_
```xml
<button>Click me!</button>
```

Marko makes this really easy, allowing you to define a `class` for a component right in the `.marko` template and call methods of that class with `on-` attributes:

_button.marko_
```xml
class {
    sayHi() {
        alert(`Hi!`);
    }
}

<button on-click('sayHi')>Click me!</button>
```

### Adding state

Alerting when a button is clicked is great, but what about updating your UI in response to an action?  Marko's stateful components make this easy.  All you need to do is set `this.state` from inside your component's class. This makes a new `state` variable available to your template.  When a value in `this.state` is changed, the template will automatically re-render and only update the part of the DOM that changed.

_counter.marko_
```xml
class {
    constructor() {
        this.state = {
            count:0
        };
    }
    increment() {
        this.state.count++;
    }
}

<div>The current count is ${state.count}</div>
<button on-click('increment')>Click me!</button>
```