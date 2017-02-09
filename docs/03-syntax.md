# Syntax

Marko's syntax is based on HTML, so you basically already know it.  Marko extends the HTML language to add a few nice features which we'll cover here.

> **ProTip:** Marko also supports a [beautiful concise syntax](./extras/concise.md). If you'd prefer to see our documentation using this syntax, just click the `switch syntax` button in the corner of any Marko code sample.

## Text replacement

When you render a Marko template, you pass input data that is then available within the template as `input`.  You can then use `${}` to insert a value into the template:

```xml
<div>
    Hello ${input.name}
</div>
```

You can actually pass any JavaScript expression here and the result of the expression will be inserted into the HTML output:

```xml
<div>
    Hello ${'world'.toUpperCase()}
</div>
```

These values are automatically escaped so you don't accidentally insert malicious code.  If you do need to pass unescaped HTML, you can use `$!{}`:

```xml
<div>
    Hello $!{htmlThatWillNotBeEscaped}
</div>
```

### Escaping placeholders

If necessary, you can escape `$` using a backslash to have it be treated as text instead of a placeholder token:

```xml
<div>
    Placeholder example: <code>\${input}</code>
</div>
```

## Root level text

Text at the root of a template (outside any tags) must be prefixed with the [concise syntax's `--`]() to denote it is text.  The parser starts in concise mode and would otherwise try to parse what you meant to be text as a concise tag declaration.

```xml
-- Root level text
```

## Typed attributes

A big improvement over HTML are the typed attributes Marko provides (instead of just strings).

```xml
<div class=input.myClassName/>
<input type="checkbox" checked=input.isChecked/>

<tag string="Hello"/>
<tag number=1/>
<tag template-string=`Hello ${name}`/>
<tag boolean=true/>
<tag array=[1, 2, 3]/>
<tag object={hello: 'world'}/>
<tag variable=name/>
<tag function-call=input.foo()/>
```

### Attribute expressions

Any JavaScript expression is a valid attribute value, provided it meets the following criteria:

_It does not contain any spaces_

```xml
<tag sum=1+2 difference=3-4/>
```
```marko
tag sum=1+2 difference=3-4
```

_Spaces are contained within matching `()`, `[]`, or `{}`_
```xml
<tag sum=(1 + 2) difference=(3 - 4)/>
```
```marko
tag sum=(1 + 2) difference=(3 - 4)
```

_Or, commas are used to delimit attributes_
```xml
<tag sum=1 + 2, difference=3 - 4/>
```
```marko
tag sum=1 + 2, difference=3 - 4
```

> **Note:** If you use commas to separate two attributes, you must use commas to separate _all_ attributes for that tag.

#### Attribute whitespace

Whitespace may optionally be used around the equal sign of an attribute:

```xml
<tag value = 5/>
```
```marko
tag value = 5
```

### Conditional attributes

If an attribute value expression evaluates to `null` or `false` then the attribute is not included in the output.

```xml
<div class=(active && 'tab-active')>Hello</div>
```

With a value of `true` for `active`, the output would be the following:

```html
<div class="tab-active">Hello</div>
```

With a value of `false` for `active`, the output would be the following:

```html
<div>Hello</div>
```

### Dynamic attributes
You can use the `${}` syntax inside an open tag to merge in the properties of an object as attributes to a tag:

_index.js_
```js
template.render({ attrs:{ class:'active', href:'https://ebay.com/' } });
```

_link.marko_
```xml
<a ${input.attrs} target="_blank">eBay</a>
```

would output the following HTML:

_output.html_
```html
<a class="active" href="https://ebay.com/" target="_blank">eBay</a>
```

### Style attribute

You can pass a string as the value of `style` just as you would in HTML, but Marko also supports passing an object as the value of the `style` attribute:

```xml
<div style={ color:'red', fontWeight:'bold' }/>
```

Output:

```html
<div style="color:red;font-weight:bold;"></div>
```

### Class attribute

The `class` attribute also support object expressions or an array expressions (in addition to a string value) as shown below:

```xml
<!-- array: -->
<div class=['a', null, 'c']/>

<!-- object: -->
<div class={ a:true, b:false, c:true }/>
```

In both cases, the output will be the same:

_output.html_
```html
<div class="a c"></div>
```

## Shorthand attributes

Marko provides a shorthand for declaring classes and ids on an element:

_source.marko_
```xml
<div.my-class/>
<span#my-id/>
<button#submit.primary.large/>
```

Yields this HTML:

_output.html_
```html
<div class="my-class"></div>
<span id="my-id"></span>
<button id="submit" class="primary large"></button>
```

## Directives

Directives are denoted by parenthesis and take an argument instead of a value.  Many directives may be used as both tags and attributes.

```xml
<if(true)>
    <strong>Marko is awesome</strong>
</if>
```

```xml
<strong if(true)>
    Marko is awesome
</strong>
```

Most directives support JavaScript expressions, and some even support multiple arguments:

```xml
<include(target, input)/>
```

Others allow a custom syntax:
```xml
<for(item in items)/>
```

Directives are used by many of our [Core Tags]() for control-flow (`<if>`, `<else-if>`, `<for>`, etc.) and other features.  You can also use them in your own [Custom Tags]().

## Inline JavaScript

> **ProTip:** If you find yourself writing a lot of inline JS, consider moving it out to an external file and then [`import`]() it.

To execute JavaScript in your template you can insert a Javascript statement using the `$ <code>` syntax.

A line that starts with a `$` followed by a space will execute the code that follows.

```xml
$ var name = input.name;

<div>
    Hello, ${name}
    $ console.log('The value rendered was', name);
</div>
```

A statement may continue onto subsequent lines if new lines are bounded by `{}`, `[]`, `()`, ``` `` ```, or `/**/`:

```xml
$ var person = {
    name: 'Frank',
    age: 32
};
```

Multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:

```xml
$ {
    var bgColor = getRandomColor();
    var textColor = isLight(bgColor)
        ? 'black'
        : 'white';
}
```

### Static JavaScript
> **Static:** The JavaScript code that follows `static` will run once when the template is loaded and be shared by all calls to render. It must be declared at the top level and does not have access to values passed in at render.

Inline JavaScript will run each time your template is rendered, if you only want to initialize some values once, use the `static` keyword:

```xml
static var count = 0;
static var formatter = new Formatter();

static function sum(a, b) {
    return a + b;
};

<div>${formatter.format(sum(2, 3))}</div>
```

Like inline Javascript, multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:

```xml
static {
    var base = 2;
    function sum(a, b) {
        return base + a + b;
    };
}
```

### Escaping dollar signs

If you need to output a `$` at the beginning of a line, you can escape it: `\$`.

```xml
<p>You can run JS in a Marko template like this:</p>
<code>
    \$ var num = 123;
</code>
```