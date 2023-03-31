# Syntax

Marko is HTML _re-imagined_ as a language for building dynamic and reactive user interfaces.
Just about any valid HTML is valid Marko, but Marko extends the HTML language to allow building modern applications in a declarative way.

> **ProTip:** Marko also supports a [beautiful concise syntax](./concise.md). If you'd prefer to see the documentation using this syntax, just click the `switch syntax` button in the corner of any Marko code sample.

> **Note:** Text at the root of a template (outside any tags) must be prefixed with the [concise syntax's `--`](./concise.md#text) to denote it is text. The parser starts in concise mode and would otherwise try to parse what you meant to be text as a concise tag declaration.
>
> ```marko
> -- Root level text
> ```

## Tags

As you might expect, Marko supports all native HTML/SVG/whatever tags and attributes. In addition to these, it also comes with a set of useful [core tags](./core-tags.md). Beyond this, you can also build your own [custom tags](./custom-tags.md) and [install third-party tags](./custom-tags.md#using-tags-from-npm) from `npm`.

All of these types of tags use the same syntax:

```marko
<my-tag-name/>
```

You don't need to import tags. Marko discovers them based on the folder structure—similar to how you don't specify a full path when referencing a module in `node_modules/`. Marko looks in [`components/`](./custom-tags.md#how-tags-are-discovered) by default and this directory can be configured in [`marko.json`](./marko-json.md).

## Dynamic text

You can use placeholders (`${}`) to insert a value into the template:
Placeholders accept any JavaScript expression and the result of the expression will be inserted into the HTML output:

```marko
<div>
    Hello ${"world".toUpperCase()}
</div>
```

These values are automatically escaped so you don't accidentally insert malicious code. If you do need to pass unescaped HTML, you can use `$!{}`:

```marko
<div>
    Hello $!{"<b>World</b>"}
</div>
```

> **ProTip:** If necessary, you can escape `$` using a backslash to have it be treated as text instead of a placeholder token:
>
> ```marko
> <div>
>     Placeholder example: <code>\${someValue}</code>
> </div>
> ```

## Attributes

In marko attributes are parsed as JavaScript expressions (instead of just strings).

```marko
<div class=myClassName/>
<input type="checkbox" checked=isChecked/>

<custom-tag string="Hello"/>
<custom-tag number=1/>
<custom-tag template-string=`Hello ${name}`/>
<custom-tag boolean=true/>
<custom-tag array=[1, 2, 3]/>
<custom-tag object={ hello: "world" }/>
<custom-tag variable=name/>
<custom-tag function-call=user.getName()/>
```

Attributes that are passed to a custom tag are received as it's [`input`](https://markojs.com/docs/class-components/#input).

> **Note:** Although in most cases you won't see a difference, strings are parsed as JavaScript strings, not HTML strings. Where this comes up most often is using the `pattern` attribute with the `<input>` tag: you need to "double escape" your regex escape sequences much like you were passing a string to the [`RegExp` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) (or you can use a literal `/regex/`).
>
> _Marko Source:_
>
> ```marko
> <input pattern="\\w+" type="text"/>
> <input pattern=/\w+/ type="text"/>
> ```
>
> _HTML Output:_
>
> ```html
> <input pattern="\w+" type="text" />
> ```

### Complex expressions

Any JavaScript expression is a valid attribute value, provided it meets the following criteria:

_It does not contain any spaces_

_It does not contain any right angle brackets (`>`)_

```marko
<custom-tag sum=1+2 difference=3-4/>
```

```marko
custom-tag sum=1+2 difference=3-4
```

_Spaces and `>` are contained within matching `()`, `[]`, `{}`, strings and regexps_

```marko
<custom-tag sum=(1 + 2) difference=(3 - 4) greater=(1 > 2)/>
```

```marko
custom-tag sum=(1 + 2) difference=(3 - 4) greater=(1 > 2)
```

### Boolean attributes

HTML defines the following rules for [boolean attributes](https://www.w3.org/TR/2008/WD-html5-20080610/semantics.html#boolean):

> The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

In Marko when an attribute value evaluates to `false`, `null`, or `undefined`, the attribute is not included in the output. If an attribute value is `true`, only the attribute name is included in the output.

_Marko Source:_

```marko
<input type="checkbox" checked=true>
<input type="checkbox" checked=false>
```

Renders the following HTML:

_HTML Output:_

```html
<input type="checkbox" checked /> <input type="checkbox" />
```

Similarly, when only an attribute name is defined, it is equivalent to specifying the attribute with a value of `true`:

```marko
<!-- These are equivalent -->
<custom-menu expanded/>
<custom-menu expanded=true/>
```

> **ProTip:**
> You can take advantage of the way Marko handles boolean attributes to conditionally render attributes:
>
> _Marko Source:_
>
> ```marko
> <div class=(active && "tab-active")>Hello</div>
> ```
>
> With a value of `true` for `active`, the output would be the following:
>
> _HTML Output:_
>
> ```html
> <div class="tab-active">Hello</div>
> ```
>
> With a value of `false` for `active`, the output would be the following:
>
> _HTML Output:_
>
> ```html
> <div>Hello</div>
> ```

### Dynamic attributes

The spread syntax (`...`) can be used to merge in an object as attributes to a tag:

_Marko Source:_

```marko
<a ...attrs target="_blank">eBay</a>
```

With `attrs` as the following value:

```js
{
    class: "active",
    href: "https://ebay.com/"
}
```

would output the following HTML:

_HTML Output:_

```html
<a class="active" href="https://ebay.com/" target="_blank">eBay</a>
```

> **ProTip:**
> With spread attributes order matters.
> You can take advantage of this to implement both default attributes, and enforced attributes.
>
> ```marko
> <custom-tag ...defaults ...userSupplied class="overridden"/>
> ```

> **ProTip:**
> You can provide `undefined` to a spread attribute which will output nothing.

### Style attribute

You can pass a string as the value of `style` just as you would in HTML, in addition Marko supports passing an object or array as the value of the `style` attribute:

_Marko Source:_

```marko
<!-- string: -->
<div style="display:block;margin-right:16px"/>

<!-- object: -->
<div style={ display: "block", color: false, marginRight: 16 }/>

<!-- array: -->
<div style=["display:block", null, { marginRight: 16 }]/>
```

In all cases, the output will be the same:

_HTML Output:_

```html
<div style="display:block;margin-right:16px;"></div>
```

### Class attribute

The `class` attribute also supports receiving an object or array (in addition to a string) as shown below:

_Marko Source:_

```marko
<!-- string: -->
<div class="a c"/>

<!-- object: -->
<div class={ a:true, b:false, c:true }/>

<!-- array: -->
<div class=["a", null, { c:true }]/>
```

In all cases, the output will be the same:

_HTML Output:_

```html
<div class="a c"></div>
```

### Shorthand attributes

Marko provides a shorthand for declaring classes and ids on an element, including interpolation. Given `size` is the string `small`:

_Marko Source:_

```marko
<div.my-class/>
<span#my-id/>
<button#submit.primary.large/>
<button.button--${size}></button>
```

Renders the following HTML:

_HTML Output:_

<!-- prettier-ignore -->
```html
<div class="my-class"></div>
<span id="my-id"></span>
<button id="submit" class="primary large"></button>
<button class="button--small"></button>
```

## Parameters

When a tag renders its body content, it may provide data which can be received by defining parameters after the tagname. Parameters are available to the tag's body content.

This is a powerful feature that allows components to provide functionality and data while giving you full control over what gets rendered.

In the following example, `<mouse>` provides a parameter which we have named `position`:

```marko
<mouse|position|>
   The mouse is at ${position.x}, ${position.y}!
</mouse>
```

> `<mouse>` would [render its body](./body-content.md) and provide the position similar to this: `<${input.renderBody} x=0 y=0/>`.

> **ProTip:** Tag `|parameters|` are treated as regular JavaScript function parameters. This means you can destructure, set default values, etc.
>
> ```marko
> <mouse|{ x, y }|>
>   The mouse is at ${x}, ${y}!
> </mouse>
> ```

> **Note:** Parameters are not available to attributes, only to the tag body.
>
> ```marko
> <mouse|position| something=position>
>   ReferenceError when setting the "something" attribute
> </mouse>
> ```

Parameters are used by some of Marko's [core tags](./core-tags.md) like the [`<for>`](./core-tags.md#for) and [`<await>`](./core-tags.md#await) tags.

## Arguments

Some tags and attributes accept javascript style `arguments`. Arguments are denoted by parenthesis following the tag or attribute name. Arguments provide a way to pass unnamed data to a tag.

```marko
<if(true)>
    <strong>Marko is awesome</strong>
</if>

<h1 body-only-if(skipHeading)>
    Conditional display heading, but always show content!
</h1>
```

Arguments are used by some of Marko's [core tags](./core-tags.md) like the [`<if>`](./core-tags.md#if-else-if-else) tag and [`body-only-if`](./core-tags.md#body-only-if) attribute displayed above.

Previously you could also use them in your own [custom tags](./custom-tags.md) however it is now recommended to use [dynamic attributes](#dynamic-attributes).

## Dynamic tagname

The `<${dynamic}>` syntax is used to render a tag or component that isn't determined until runtime. It can also be used within a [custom tag](./custom-tags.md) to render body content that was passed to that tag.

_Marko Source:_

```marko
<${href ? 'a' : 'button'} href=href>
    Click me!
</>
```

With `href` as `https://ebay.com` would output the following HTML:

_HTML Output:_

```html
<a href="https://ebay.com">Click me!</a>
```

And with `href` as `undefined` would output the following HTML:

_HTML Output:_

```html
<button>Click me!</button>
```

As a shorthand if there is a variable in scope and [no other matching tag is discovered](#how-tags-are-discovered) the wrapping `${}` is unnecessary.

For example the following are equivalent:

```marko
$ const MyTag = href ? 'a' : 'button';
<${MyTag}/>
<MyTag/>
```

> **ProTip:**
> If you find that you have a wrapper element that is conditional, but whose body should always be rendered then you can use a null dynamic tag. For example, to only render a wrapping `<a>` tag if there is a valid URL then you could do the following:
>
> _Marko Source:_
>
> ```marko
> <${input.linkUrl ? "a" : null} href=input.linkUrl >
>    Some body content
> </>
> ```
>
> Given a value of `"http://localhost/"` for the `input.linkUrl` variable: , the output would be the following:
>
> _HTML Output:_
>
> ```html
> <a href="http://localhost/"> Some body content </a>
> ```
>
> Given a value of `undefined` for the `input.linkUrl` variable: , the output would be the following:
>
> _HTML Output:_
>
> ```html
> Some body content
> ```

### Dynamic components

Instead of just strings, the dynamic tagname can also be a component:

```marko
import componentA from "<component-a>";
import componentB from "<component-b>";

<${useA ? componentA : componentB}/>
```

> **ProTip:**
> You can also switch between a normal HTML tag and a component:
>
> ```marko
> import FancyButton from "<fancy-button>";
>
> <${isFancy ? FancyButton : 'button'}>
>     Button text
> </>
> ```

> **Note:** You **cannot** reference a Marko custom tag or macro using a name string:
>
> _Marko Source:_
>
> ```marko
> <${isFancy ? 'fancy-button' : 'button'}>
>     Button text
> </>
> ```
>
> With `isFancy` as `true` would output the following HTML:
>
> _HTML Output:_
>
> ```html
> <fancy-button>Button text</fancy-button>
> ```

### Dynamic body content

When a custom tag receives [body content](./body-content.md), it is passed as a `renderBody` property. To render this content you can pass the `renderBody` as the dynamic tagname.

```marko
<div class="container">
    <${input.renderBody}/>
</div>
```

## Attribute Tag

As the name implies, `<@attribute-tags>` are special attributes that take the form of tags. They allow you to pass named body sections to a [custom tag](./custom-tags.md).

The core `<await>` tag allows you to pass multiple body sections that it will conditionally render based on the state of the promise.

```marko
<await(somePromise)>
    <@then|result|>
        The promise resolved: ${result}
    </@then>
    <@catch|error|>
        The promise rejected: ${error.message}
    </@catch>
</await>
```

These body sections are also commonly used to create layouts:

```marko
<page-layout>
    <@heading>
        <h1>Hello</h1>
    </@heading>
    <@body>
        <p>Lorem ipsum....</p>
    </@body>
</page-layout>
```

These tags are passed to the custom tag as objects with a `renderBody`, it can then [render its body content](./body-content.md).

> **Note:**
> Attribute tags can have their own parameters, but like attributes, they cannot access the parameters of their parent tag:
>
> ```marko
> <list|item|>
>   ${item.name}
>   <@separator>${item} (oops, ReferenceError)</@separator>
> </list>
> ```

## Inline JavaScript

To execute JavaScript in your template you can insert a Javascript statement using the `$ <code>` syntax.

A line that starts with a `$` followed by a space will execute the code that follows.

```marko
$ const name = "World";

<div>
    Hello, ${name}
    $ console.log("The value rendered was", name);
</div>
```

A statement may continue onto subsequent lines if new lines are bounded by `{}`, `[]`, `()`, ` `` `, or `/**/`:

```marko
$ const person = {
    name: "Frank",
    age: 32
};
```

Multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:

```marko
$ {
    const bgColor = getRandomColor();
    const textColor = isLight(bgColor)
        ? "black"
        : "white";
}
```

> **ProTip:** Any JavaScript statement can be used here, even `debugger`:
>
> ```marko
> <div>
>     ${textColor}
>     $ debugger; // Quickly debug `textColor`
> </div>
> ```

> **ProTip:** If necessary, you can escape `$` using a backslash to have it be treated as text instead of a placeholder token:
>
> ```marko
> <p>You can run JS in a Marko template like this:</p>
> <code>
>     \$ var num = 123;
> </code>
> ```

> **ProTip:** If you find yourself writing a lot of inline JS, consider moving it out to an external file and then [`import`](#importing-external-files) it.

### Static JavaScript

Inline JavaScript will run each time your template is rendered, but the JavaScript code that follows `static` will only run once when the template is loaded. It must be declared at the top level and does not have access to values passed in at render time.

```marko
static var count = 0;
static var formatter = new Formatter();

static function sum(a, b) {
    return a + b;
};

<div>${formatter.format(sum(2, 3))}</div>
```

Like inline Javascript, multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:

```marko
static {
    var base = 2;
    function sum(a, b) {
        return base + a + b;
    };
}
```

### Importing external files

The `import` statement is used to access data and functions from external files. It follows the same syntax as the [JavaScript `import` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

```marko
import sum from './utils/sum';
<div>The sum of 2 + 3 is ${sum(2, 3)}</div>
```

As a shorthand you can also import components by providing it's html tag name wrapped in angle brackets, eg:

```marko
import MyComponent from "<my-component>"
```

This is especially useful with the [dynamic tag name syntax](./syntax.md#dynamic-tagname) and uses the same [component discovery](./custom-tags.md#how-tags-are-discovered) as if the tag was used in the template.

## Comments

Standard HTML comments can be used and will be stripped out of the rendered output.
At the top level of the template JavaScript comments (`// comment` and `/** comment */`) can also be used.

```marko
<!-- This is a comment that will not be rendered -->

<h1>Hello</h1>
```

If you would like for your HTML comment to show up in the final output then you can use the [`html-comment` core tag](./core-tags.md#html-comment).
