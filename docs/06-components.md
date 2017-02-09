# Components

Being able to render HTML is great, but web apps need styling and in-browser behavior as well.  Marko's components makes it easy to to co-locate your styles and scripts with the HTML that they interact with.

In order to make use of components, you will need to use an asset manager (like `lasso`, `webpack`, or `browserify`).  We recommend the [`lasso` taglib]() as it only requires adding a couple of tags to your layout template.

## Single file components

### A simple component

Let's say we have a `<button>` that we want to assign some behavior to when it is clicked:
```xml
<button>Click me!</button>
```

Marko makes this really easy, allowing you to define a `class` for a component right in the `.marko` template and call methods of that class with `on-` attributes:

```xml
class {
    sayHi() {
        alert(`Hi!`);
    }
}

<button on-click('sayHi')>Click me!</button>
```

### Accessing input

When a template is rendered, it is passed an `input` variable.  You can access the same input values inside a component's class via `this.input`:

```xml
class {
    sayHi() {
        alert(`Hey, ${this.input.name}!`);
    }
}

<button on-click('sayHi')>Say hello to ${input.name}!</button>
```


### Adding state

Alerting when a button is clicked is great, but typically you need to update your UI in response to an action.  Marko's stateful components make this easy.  All you need to do is set `this.state` from inside your component's class. This makes a new `state` variable available to your template.  When a value in `this.state` is changed, the template will automatically re-render and only update the part of the DOM that changed.

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

> **Note:** Only state properties defined when initially setting `this.state` will be watched for changes.  If you don't need a property initially, you can set it to `null`.


### Styles

Adding styles to your template is also made easy.  These styles won't be output in a `<style>` tag as inline styles usually are, but will result in the style being externalized so it isn't duplicated should a component be used more than once on the page.

```xml
style {
    button.primary {
        background-color:#09c;
    }
}

<div>The current count is ${state.count}</div>
<button.primary on-click('increment')>+1</button>
```

If you use a css preprocessor, you can add the extension right on `style`:
```xml
style.less {
    button.primary {
        background-color: @primaryColor;
    }
}
```

## Multi-file Components

Depending on your preferences you might want to move your component's class and style definitions out into separate files.  Marko also makes this very easy with a simple filename based convention.  Let's take a look at how we can convert the single-file component from above into a multi-file component.

> **ProTip:** If your motivation to move the component's class and styles out to a separate file is that the code is getting too large, consider splitting the component into smaller, more manageable components.

### Supporting files

Marko automatically discovers supporting files in the same directory as a template.  For example if you have a template named `counter.marko`, Marko will automatically look for `counter.component.js` and `counter.style.css`.  

```
counter.marko
counter.component.js
counter.style.css
```

Marko also handles templates named `index.marko` specially, it will look for `component.js` and `style.css` in addition to `index.component.js` and `index.style.css`.  This allows easily grouping component files into a directory:

```
counter/
    index.marko
    component.js
    style.css
```

In your `component.js` file, you simply export the component's class:

```js
module.exports = class {
    constructor() {
        this.state = {
            count:0
        };
    }
    increment() {
        this.state.count++;
    }
}
```

In your `index.marko` file, you can still reference methods from the class:
```xml
<div>The current count is ${state.count}</div>
<button on-click('increment')>+1</button>
```

And in your `style.css`, put the style:
```css
button.primary {
    background-color:#09c;
}
```

> **ProTip:** In addition to looking for `[name].style.css`, Marko actually looks for `[name].style.*` so it will also pick up any css preprocessor you're using (less, stylus, scss, etc.).


### Components with plain objects

If you're targeting a browser that does not support classes, a plain object may also be exported:

```js
module.exports = {
    onCreate: function() {
        this.state = {
            count:0
        };
    },
    increment: function() {
        this.state.count++;
    }
}
```

> **Note**: When using a plain object, use the `onCreate` [lifecycle method]() instead of `contructor`.


### Split renderer & widget

With this alternative technique to define a component, you don't have access to stateful re-rendering, but the template rendering logic will not be sent down to the browser.  

Marko automatically discovers widget files in the same directory as a template.  For example if you have a template named `button.marko`, it will automatically look for `button.widget.js`.  If your template is named `index.marko`, it will look for `widget.js` in addition to `index.widget.js`.

