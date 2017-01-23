# Syntax

Marko's syntax is based on HTML, so you basically already know it.  Marko extends the HTML language to add a few nice features which we'll cover here.

> **ProTip:** Marko also supports a [beautiful concise syntax](./extras/concise.md). If you'd prefer to see our documentation using this syntax, just click the `switch syntax` button in the corner of any Marko code sample.

## Text replacement

When you render a Marko template, you pass data that is then available within the template as `data`.  You can then use `${}` to insert a value into the template:

```xml
<div>
    Hello ${data.name}
</div>
```

You can actually pass any javascript expression here and it will work:

```xml
<div>
    Hello ${'world'.toUpperCase()}
</div>
```

These values are automatically escaped so you don't accidentally insert malicious code.  If you do need to pass unescaped html, you can use `$!{}`:

```xml
<div>
    Hello $!{htmlThatWillNotBeEscaped}
</div>
```

If necessary, you can escape `$` using a backslash to have it be treated as text instead of a placeholder token:

```xml
<div>
    Placeholder example: \${data}
</div>
```

### Root level text

Text at the root of a template (outside any tags) must be prefixed with the [concise syntax's `--`]() to denote it is text.  The parser starts in concise mode and would otherwise try to parse what you meant to be text as a concise tag declaration.

```xml
-- Root level text
```

## Typed attributes

A big improvement over HTML are the typed attributes Marko provides (instead of just strings).

```xml
<div class=data.myClassName/>
<input type="checkbox" checked=data.isChecked/>

<tag string="Hello"/>
<tag number=1/>
<tag template-string=`Hello ${name}`/>
<tag boolean=true/>
<tag array=[1, 2, 3]/>
<tag object={hello: 'world'}/>
<tag variable=name/>
<tag function-call=data.foo()/>
```

### Attribute expressions

Any javascript expression is a valid attribute value, provided it meets the following criteria:

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

> **ProTip:** If you use commas to separate two attributes, you must use commas to separate _all_ attributes for that tag.

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
```js
var attrs = { class:'active', href:'https://ebay.com/' };
```
```xml
<a ${attrs} target="_blank">eBay</a>
```
would output the following HTML:
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

```html
<div class="a c"></div>
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

Most directives support javascript expressions, and some even support multiple arguments:

```xml
<include(target, data)/>
```

Others allow a custom syntax:
```xml
<await(value from promise)/>
```

Directives are used by many of our [Core Tags]() for control-flow (`<if>`, `<else-if>`, `<for>`, etc.) and other features.  You can also use them in your own [Custom Tags]().

## Dynamic javascript

Scriptlets are a way to inject javascript around your template code:

```xml
<div>
    Hello, ${data.name}
    <% console.log('The value rendered was', data.name) %>
</div>
```

```xml
<% if(true) { %>
    <div>Hello, ${data.name}</div>
<% } %>
```

The [Core Tags]() will cover most use cases and you can create your own [Custom Tags]() so you probably won't ever use scriptlets, but isn't it nice to know you have an escape hatch if you ever need it?
