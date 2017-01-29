# Components

Being able to render HTML is great, but web apps need styling and in-browser behavior as well.  Marko's components makes it easy to to co-locate your styles and scripts with the HTML that they interact with.

In order to make use of components, you will need to use an asset manager (like `lasso`, `webpack`, or `browserify`).  We recommend the [`lasso` taglib]() as it only requires adding a couple of tags to your layout template.

## A simple component

Let's say we have a `<button>` that we want to assign some behavior to when it is clicked:
```xml
<button>Click me!</button>
```

Marko makes this really easy, allowing you to define a `class` for a component right in the `.marko` template and call methods of that class with `on-` attributes:

```xml
class {
    sayHi() {
        alert('Hi!');
    }
}

<button on-click('sayHi')>Click me!</button>
```

## Adding state

Alerting when a button is clicked is great, but typically you need to update your UI in response to an action.  Let's take a look at a stateful component that automatically handles re-rendering and updating the DOM when its state changes:

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
<button on-click('increment')>+1</button>
```



### Styles

Marko automatically discovers stylesheet files in the same directory as a template.  For example if you have a template named `template.marko`, it will automatically look for `template.style.css`.  If your template is named `index.marko`, it will look for `style.css` in addition to `index.style.css`.

Top level `<style>` tags will be pulled out an externalized.

