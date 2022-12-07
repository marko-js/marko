# Why is Marko Fast?

<a href="https://medium.com/@psteeleidem/why-is-marko-fast-a20796cb8ae3">
  <img src="https://user-images.githubusercontent.com/1958812/28104838-d0182f48-6691-11e7-808d-d1ae2d0fed6d.png" alt="Marko logo" width="100%" />
</a><br />

> This article was published in May 2017. You can find the original ["Why is Marko Fast?" article here](https://medium.com/@psteeleidem/why-is-marko-fast-a20796cb8ae3)!

At eBay we are using [Marko](https://markojs.com/) to render over a billion
requests every day and this has required us to finely tune Marko, our open
source UI library. We have heavily optimized Marko for fast rendering, [advanced
performance
techniques](https://tech.ebayinc.com/engineering/async-fragments-rediscovering-progressive-html-rendering-with-marko/)
and to achieve a minimal page weight (~10kb gzipped). Performance is only one
concern because we have also had to scale Marko to support development across
hundreds of teams in a way that allows developers to efficiently create
maintainable and robust web apps.

We have created [our own
benchmarks](https://github.com/marko-js/isomorphic-ui-benchmarks) and we have
[added Marko to other
benchmarks](https://github.com/raxjs/server-side-rendering-comparison/pull/11),
but benchmarks cannot always be trusted. While we make every effort to be fair
with our benchmarks, what matters most is performance in real world applications
as opposed to focusing on micro benchmarks. This is one reason that the V8 team
has switched to [a new methodology to measure and understand real-world
JavaScript
performance](https://v8project.blogspot.com/2016/12/how-v8-measures-real-world-performance.html).

Similarly, we’ve taken a look at how our developers are _actually_ writing their
Marko components and have found patterns that could be further optimized.
Instead of focusing on benchmarks in this article, I want to focus on the
details of optimizations that we have applied to Marko.

### Multiple Compilation Outputs

Marko is an isomorphic UI library that runs on both the server and in the
browser. As [Michael Rawlings](https://medium.com/@mlrawlings) mentioned in
“[Server-side Rendering
Shootout](https://hackernoon.com/server-side-rendering-shootout-with-marko-preact-rax-react-and-vue-25e1ae17800f)”,
when rendering on the server, Marko renders directly to a string representation
of the document (HTML) that can be sent as the HTTP response.

When rendering in the browser, an HTML string would have to be parsed in order
to update the DOM. For this reason, Marko compiles a view to a program that
renders directly to a virtual document (VDOM) tree that can be used to
efficiently update the real DOM when targeting the browser.

Given the following template:

```marko
<div>Hello ${input.name}!</div>
```

#### Compiled for the server

The compiled output is optimized for streaming HTML output on the server:

```js
var marko_template = require("marko/html").t(__filename),
  marko_helpers = require("marko/runtime/html/helpers"),
  marko_escapeXml = marko_helpers.x;

function render(input, out) {
  out.w("<div>Hello " + marko_escapeXml(input.name) + "!</div>");
}
```

#### Compiled for the browser

<!-- prettier-ignore -->
```js
var marko_template = require("marko/vdom").t(__filename);

function render(input, out) {
  out
    .e("DIV", null, 3)
    .t("Hello ")
    .t(input.name)
    .t("!");
}
```

The compiled output is optimized for virtual DOM rendering in the browser:

### Modular Runtime

The Marko runtime is not distributed as a single JavaScript file. Instead, the
Marko compiler generates a JavaScript module that will only import the parts of
the runtime that are actually needed. This allows us to add new features to
Marko without bloating existing applications. For example, given the following
template:

```marko
$ var color = 'red';
<div style={backgroundColor: color}></div>
```

In the above example, extra runtime code is needed to render the `style` attribute
based on the JavaScript object that is provided. The compiled code that imports
the `styleAttr` helper is shown below:

```js
var marko_styleAttr = require("marko/runtime/vdom/helper-styleAttr");

function render(input, out) {
  var color = "red";
  out.e(
    "DIV",
    {
      style: marko_styleAttr({
        backgroundColor: color
      })
    },
    0,
    4
  );
}
```

### High performance server-side rendering

Compared to solutions based on JSX that exclusively do virtual DOM rendering,
Marko has a huge advantage for server-side rendering. When rendering to a
virtual DOM tree on the server it’s a two-step process to render HTML:

- First pass to produce an entire virtual DOM tree in memory
- Second pass to serialize the virtual DOM tree to an HTML string that can then be
  sent over the wire (this requires traversing the entire tree structure)

In contrast, Marko renders directly to an HTML stream in a single pass. There is
no intermediate tree data structure.

### Compile-time optimization of static sub-trees

Given the following template:

```marko
<div>This is a <strong>static</strong> node</div>
```

Marko will recognize that the template fragment produces the same output every
time and it will thus create the virtual DOM node once as shown in the following
compiled output:

```js
var marko_node0 = marko_createElement("DIV", null, 3, ...)
  .t("This is a ")
  .e("STRONG", null, 1)
    .t("static")
  .t(" node");

function render(input, out) {
  out.n(marko_node0);
}
```

Rendering a static sub-tree has virtually zero cost. In addition, Marko will
skip diffing/patching static sub-trees.

Similarly, on the server, Marko will merge static parts of the template into a
single string:

```js
function render(input, out) {
  out.w("<div>This is a <strong>static</strong> node</div>");
}
```

### Compile-time optimization of static attributes

Marko will also optimize static attributes on dynamic elements.

Given the following template:

```marko
<div.hello>Hello ${input.name}!</div>
```

Marko will produce the following compiled output:

<!-- prettier-ignore -->
```js
var marko_attrs0 = {
  class: "hello"
};

function render(input, out) {
  out
    .e("DIV", marko_attrs0, 3)
    .t("Hello ")
    .t(input.name)
    .t("!");
}
```

Notice that the attributes object is only created once and it is used for every
render. In addition, no diffing/patching will happen for static attributes.

### Smart compiler

With Marko we favor doing as much at compile-time as possible. This has made our
compiler more complex, but it gives us significant gains at runtime. We have
~90% code coverage and over 2,000 tests to ensure that the compiler is working
correctly. In addition, in many cases the Marko compiler provides hints to the
runtime for a given template so that the runtime can optimize for specific
patterns. For example, Marko recognizes if an HTML element only has `class`/`id`/`style` defined
and the runtime optimizes for these virtual DOM nodes when doing
diffing/patching (the Marko compiler generates code that flags simple virtual
DOM nodes for targeted diffing/patching logic).

### Event delegation

If you are building a UI component you will likely need to write code to handle
various DOM events (`click`, `submit`, etc.). It is common for developers to write code that
adds DOM event listeners using `dom.addEventListener(...)` or using a library such as jQuery. You can still
do that when building UI components using Marko, but there is overhead in
attaching listeners when lots of components are being initialized. Instead,
Marko recommends using declarative event binding as shown below:

```marko
<button type="button" on-click("handleClick")>
  Click Me
</button>
```

When using declarative event binding, no DOM event listeners are actually
attached for events that bubble. Instead, Marko attaches a single listener on
the root DOM element of the page for each DOM event that bubbles (done at
startup). When Marko receives an event at the root it handles delegating the
event to the appropriate components that are interested in that event. This is
done by looking at the `event.target` property to see where the event originated and then
walking up the tree to find components that need to be notified. As a result,
there is slightly more work that is done when a DOM event is captured at the
root, but this approach uses much less memory and reduces the amount of work
that is done during initialization. The extra overhead of delegating events to
components will not be noticeable so it is a very beneficial optimization.

_Cover image credit: [Superhero by Gan Khoon Lay from the Noun Project](https://thenounproject.com/search/?q=superhero&i=690775)_
