# Core tags and attributes

Much like HTML has its own set of native tags. Marko includes a set of base tags and global attributes which are necessary to build modern applications in a declarative way.

## `<if>`, `<else-if>`, `<else>`

These tags allow you to represent [conditional content](./conditionals-and-lists.md#conditionals).

```marko
<if(arriving)>
    <div>Hey there</div>
</if>
<else-if(leaving)>
    <div>Bye now</div>
</else-if>
<else>
    <div>What's up?</div>
</else>
```

And support complex expressions using the [tag arguments](./syntax.md#arguments) syntax:

```marko
<if(Math.random() > 0.5)>
    <div>50-50 chance of seeing this</div>
</if>
```

> **Note:** You may see conditionals applied as attributes. This is [deprecated](https://github.com/marko-js/marko/wiki/Deprecation:-control-flow-attributes).
>
> ```marko
> <div if(arriving)>Hey there</div>
> <div else-if(leaving)>Bye now</div>
> <div else>What's up?</div>
> ```

## `<for>`

The `<for>` tag allows you to map iterables, object properties or a range of numbers into a template. The `<for>` provides data about the current iteration to its body as [tag parameters](./syntax.md#parameters).

> **Note:** You may see `for` used with parentheses as either a tag or an attribute. This [kinda-like-js-but-not-really](https://github.com/marko-js/marko/issues/577) syntax [is deprecated](https://github.com/marko-js/marko/pull/1238).
>
> ```marko
> <li for(color in colors)>${color}</li>
> ```

### Iterating over a list

Much like the [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop in JavaScript, providing an `of` attribute will iterate over an array/iterable. The current item, index, and the input list will be provided as [tag parameters](./syntax.md#parameters).

_Marko Source:_

```marko
<ul>
    <for|color, index| of=colors>
        <li>${index}: ${color}</li>
    </for>
</ul>
```

With the following value for `colors`:

```js
const colors = ["red", "green", "blue"];
```

The output HTML would be the following:

_HTML Output:_

```html
<ul>
  <li>red</li>
  <li>green</li>
  <li>blue</li>
</ul>
```

> **Pro Tip**: The `<for>` tag with an `of` attribute can iterate over any iterable just like the JavaScript [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop. In order to iterate over other "array like" objects (ones that just have a `length` property for example) you can use [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).
>
> ```marko
> <for|letter, index| of=Array.from({ 0: "a", 1: "b", length: 2 })>
>   ${index + 1}: ${letter}
> </for>
> ```

### Iterating over an object's properties

Much like the [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop in javascript, providing an `in` attribute will iterate an objects properties. The current property name and its value will be provided as [tag parameters](./syntax.md#parameters).

_Marko Source:_

```marko
<ul>
    <for|name, enabled| in=settings>
        <li>${name}: ${enabled ? "on" : "off"}</li>
    </for>
</ul>
```

With the following value for `settings`:

```js
const settings = {
  "Dark Mode": false,
  Fullscreen: true
};
```

The output HTML would be the following:

_HTML Output:_

```html
<ul>
  <li>Dark Mode: off</li>
  <li>Fullscreen: on</li>
</ul>
```

### Iterating between a range of numbers

The final variant allows you to iterate between two numbers. You must provide a `from` and `to` attribute, along side an optional `step` attribute. If not specified, `step` defaults to 1. The current number in the range will be provided as [tag parameters](./syntax.md#parameters).

```marko
<ul>
    <for|i| from=0 to=10>
        <li>${i}</li>
    </for>
</ul>
```

The step attribute allows you to increment by a specified amount:

_Marko Source:_

```marko
<ul>
    <for|i| from=0 to=10 step=2>
        <li>${i}</li>
    </for>
</ul>
```

_HTML Output:_

```marko
<ul>
    <li>0</li>
    <li>2</li>
    <li>4</li>
    <li>6</li>
    <li>8</li>
    <li>10</li>
</ul>
```

> **ProTip:** Don't do this. Use `<for of>` instead:
>
> ```marko
> <ul>
>     <for|i| from=0 to=(myArray.length - 1)>
>         <li>${myArray[i]}</li>
>     </for>
> </ul>
> ```

## `<while>`

Any element can be repeated until a condition is met by using the `while` tag.

_Marko Source:_

```marko
$ var n = 0;

<ul>
    <while(n < 4)>
        <li>${n++}</li>
    </while>
</ul>
```

_HTML Output:_

```html
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

> **Note:** You may also see `while` used as an attribute. This is [deprecated](https://github.com/marko-js/marko/wiki/Deprecation:-control-flow-attributes).
>
> ```marko
> $ var n = 0;
>
> <ul>
>     <li while(n < 4)>${n++}</li>
> </ul>
> ```

> **Note:** Use of the while tag is not recommended. You can accomplish the same behavior with an iterable and the `<for>` tag. In the future, mutating values while rendering may be restricted to enable further optimizations of the compiled code.

## `<macro>`

Macros allow for reusable fragments within a template.
A macro can be defined using the `<macro>` tag and is made available as its `name` attribute.

The following macro can then be as if it was a regular `<greeting>` tag.

_Marko Source:_

```marko
<macro name="greeting">
    <span>Welcome!</span>
</macro>

<greeting/>
<greeting/>
```

The output HTML would be the following:

_HTML Output:_

<!-- prettier-ignore -->
```html
<span>Welcome!</span>
<span>Welcome!</span>
```

Macros become more useful when combined with [tag parameters](./syntax.md#parameters), allowing for more complex templates.
This time the `<greeting>` macro is able to receive parameters from the outside, in this case `name` and `count`.

_Marko Source:_

```marko
<macro|{ name, count }| name="greeting">
    <span>Hello ${name}! You have ${count} new messages.</span>
</macro>

<greeting name="Frank" count=20/>
```

The output HTML would be the following:

_HTML Output:_

```html
<span> Hello Frank! You have 10 new messages. </span>
```

Macros receive input similar to the root template, including a `renderBody` for displaying any provided [body content](./body-content.md).

_Marko Source:_

```marko
<macro|{ renderBody }| name="special-heading">
    <h1>
        <${renderBody}/>!
    </h1>
</macro>

<p>
    <special-heading>
        Hello
    </special-heading>
</p>
```

The output HTML would be the following:

_HTML Output:_

```html
<p>
    <h1>
        Hello!
    </h1>
</p>
```

> **ProTip:** You can use a macro within itself to build recurive layouts (like a tree structure).

## `<await>`

The `<await>` tag is used to render a template asynchronously with the results of a Promise.
The `<@then>` and `<@catch>` attribute tags can optionally receive the value of the resolved and rejected promise respectively as [tag parameters](./syntax.md#parameters). You can also provide a `<@placeholder>` attribute tag which will be displayed while the promise is pending.

```marko
$ var personPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve({
            name: 'Frank'
        });
    }, 1000);
});

<await(personPromise)>
    <@placeholder>
        <!-- Displayed while promise is pending -->

        Loading...
    </@placeholder>

    <@then|person|>
        <!-- Displayed if promise resolves -->

        <div>Hello ${person.name}!</div>
    </@then>

    <@catch|err|>
        <!-- Displayed if promise rejects -->

        Caught error: ${err.name}.
    </@catch>
</await>
```

Optional Attributes:

- **timeout** `integer`: An optional timeout that when reached will cause the promise to reject with a `TimeoutError`.
- **name** `string`: Used to improve debugging and also to ensure promise ordering with the `show-after` attribute.
- **show-after** `string`: This attribute will ensure that (with client-reorder) this `await` block will always show after another `await` block with the provided name.
- **client-reorder** `boolean`: If set anything after this promise will be sent out immediately, and reordered using JS in the browser.

> **Pro Tip**: With the `timeout` attribute set you can differentiate `TimeoutError`s from promise rejections by checking the `name` property of the error.
>
> ```marko
> <await(slowPromise) timeout=5000>
>    <@then>Done</@then>
>    <@catch|err|>
>      <if(err.name === "TimeoutError")>
>        Took too long to fetch the data!
>      </if>
>      <else>
>        Promise failed with ${err.message}.
>      </else>
>    </@catch>
> </await>
> ```

## `<include-text>`

You can inline abritrary text files into a template using the `include-text` tag.
Special HTML characters will be escaped. If you do not want escaping then use the `<include-html>` tag (see below).

```marko
<include-text('./foo.txt')/>
```

## `<include-html>`

Like the `include-text` tag, the `include-html` tag allows you to inline the contents of a file. However this tag does _not_ escape special HTML characters.

```marko
<include-html('./foo.html')/>
```

## `<html-comment>`

Standard HTML comments are automatically stripped from the output with Marko. For cases where you need to have these comments included with the output you can leverage the `<html-comment>` tag.

_Marko Source:_

```marko
<html-comment>[if IE]><script src="..."></script><![endif]</html-comment>
```

_HTML Output:_

```html
<!--[if IE]><script src="..."></script><![endif]-->
```

> **Note:** You may also see the deprecated `<marko-compiler-options>` tag used to configure comments for the entire template:
>
> ```marko
> <marko-compiler-options preserve-comments/>
> ```

## Deprecated

The following tags and attributes are deprecated, but you may see them in existing code.

### `marko-preserve-whitespace`

Whitespace can be preserved using the `preserve-whitespace` attribute:

```marko
<div marko-preserve-whitespace>
    All of this
    whitespace   will
    be preserved.
</div>
```

Alternatively, the `<marko-compiler-options>` tag may be used to configure whitespace for the entire template:

```marko
<marko-compiler-options preserve-whitespace/>
```

### `marko-body`

The `marko-body` attribute can be used to control how body content is parsed. The following values are supported:

- `html` - Body content will be parsed HTML (the default)
- `static-text` - Body content will be parsed as static text (HTML tags will be ignored). Placeholders will be ignored.
- `parsed-text` - Body content will be parsed as text (HTML tags will be ignored). Placeholders will not be ignored.

_Marko Source_

```marko
<div marko-body="static-text">
    This is just one
    <span if(foo)>
            Hello ${THIS IS NOT VALID}!
    </span>
    big text block
</div>
```

_HTML Output:_

```html
<div>
  This is just one &lt;span if(foo)&gt; Hello ${THIS IS NOT VALID}!
  &lt;/span&gt; big text block
</div>
```
