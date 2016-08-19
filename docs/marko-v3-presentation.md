---
presentation: true
---

Brown Bag
======================

![Marko](https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-small.png)

# Introducing Marko v3

### Patrick Steele-Idem (Node.js Platform Team)

#### March 11, 2016

<hr class="page-break">

# Marko is getting a major update!

<hr class="page-break">

# Why Marko?

- Streaming and async rendering
- Progressive HTML rendering
- Custom tags
- Lightweight and fast
- Marko Widgets for UI components
- Clean HTML-based syntax

<hr class="page-break">

# Marko is _really_ fast

| Template Engine | Results                      |
|-----------------|------------------------------|
| __marko__       | __187,729 op/s (fastest)__   |
| dot             | 183,161 op/s (2.43% slower)  |
| handlebars      | 104,634 op/s (44.26% slower) |
| dust            | 83,773 op/s (55.38% slower)  |
| swig            | 54,866 op/s (70.77% slower)  |
| jade            | 32,929 op/s (82.46% slower)  |
| nunjucks        | 32,306 op/s (82.79% slower)  |
| react           | 3,651 op/s (98.06% slower)   |

Source: https://github.com/marko-js/templating-benchmarks

# Marko vs React

![Marko vs React - Requests per second](https://raw.githubusercontent.com/patrick-steele-idem/marko-vs-react/master/charts/requestsPerSecond.png)

<hr class="page-break">

# Growing Community

<img width="100%" width="1123" alt="screen shot 2016-03-11 at 8 52 31 am" src="https://cloud.githubusercontent.com/assets/978214/13709070/e25fc432-e766-11e5-8ef8-a945da5fce63.png">

<hr class="page-break">

# Marko v3 is a huge release

- 295 commits to [marko](https://github.com/marko-js/marko/compare/v2.8.4...master)
- Almost 100 commits to the new parser: [htmljs-parser](https://github.com/philidem/htmljs-parser)
- Both breaking and non-breaking changes
- Don't worry, we have a migration tool

<hr class="page-break">

# Why is Marko changing?

- Issue #90 - Proposal: Replace HTML parser with a new parser that recognizes attribute types
- Issue #211 - Marko v3: Support concise (Jade-like) syntax

<hr class="page-break">

## Strict HTML parser was holding Marko back

<hr class="page-break">

# Old HTML Parser

## ***Bad:*** All HTML attributes are parsed in as Strings

## Separate schema files were used to add type information. :(

<hr class="page-break">

## ***Solution:*** HTML parser that recognizes types

```xml
<div class=data.myClassName>
<input type="checkbox" checked=data.isChecked/>

<my-component string="Hello"/>
<my-component number=1/>
<my-component template-string="Hello ${name}"/>
<my-component boolean=true/>
<my-component array=[1, 2, 3]/>
<my-component object={hello: 'world'}/>
<my-component variable=name/>
<my-component function-call=data.foo()/>
<my-component complex-expression=1+2/>
<my-component super-complex-expression=(data.foo() + data.bar(['a', 'b', 'c']))/>
```

<hr class="page-break">

# Marko History

## XML (Raptor Templates) ➙ HTML ➙ HTML-JS

<hr class="page-break">

# New and Improved Syntax(es)

<hr class="page-break">

# HTML syntax

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Marko Templating Engine</title>
    </head>
    <body>
        <!-- Welcome to Marko! -->
        <app-hello name=data.name/>

        <ul if(data.colors.length)>
            <li for(color in data.colors)>
                ${color}
            </li>
        </ul>
        <div else>
            No colors!
        </div>
    </body>
</html>
```

<hr class="page-break">

# Concise syntax

```xml
<!DOCTYPE html>
html lang="en"
    head
        title - Marko Templating Engine
    body
        // Welcome to Marko!
        app-hello name=data.name
        ul if(data.colors.length)
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

<hr class="page-break">

# Mixed syntax


```xml
<!DOCTYPE html>
html lang="en"
    head
        <title>Marko Templating Engine</title>
    body
        // Welcome to Marko!
        <app-hello name=data.name/>
        ul if(data.colors.length)
            li for(color in data.colors)
                ${color}
        div else
            - No colors!
```

<hr class="page-break">

# Improved Editor and IDE Support

- Atom: [language-marko](https://atom.io/packages/language-marko)
- Sublime Text: [marko-sublime](https://github.com/merwan7/sublime-marko)
- WebStorm: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle) (See: [Importing TextMate Bundles](https://www.jetbrains.com/phpstorm/help/importing-textmate-bundles.html)) (New!)
- TextMate: [marko.tmbundle](https://github.com/marko-js/marko-tmbundle)
- CodeMirror/Brackets


<hr class="page-break">

<a name="improved-directives"></a>
# Improved syntax for directives

<hr class="page-break">

# Macros

___Old syntax:___

```xml
<def function="greeting(name, count)">
    Hello ${name}! You have ${count} new messages.
</def>

<invoke function="greeting" name="John" count="${10}"/>
<invoke function="greeting('Frank', 20)"/>
```

___New syntax:___


```xml
<macro greeting(name, count)>
  Hello ${name}! You have ${count} new messages.
</macro>

<greeting name="Frank" count=30/>
<greeting('Frank', 30)/>
```

<hr class="page-break">

# Macro with body content

```xml
<macro section-heading(className)>
  <h1 class=className>
    <macro-body/>
  </h1>
</macro>

<section-heading className="foo">
  Hello World!
</section-heading>

<!-- Output: -->
<h1 class="foo">Hello World!</h1>
```
<hr class="page-break">

# Includes

___Old syntax:___

```xml
<include template="./include-target.marko" name="Frank" count="${20}"/>
<include template="./include-target.marko" template-data="{name: 'Frank', count: 20}"/>
```

___New syntax:___

```xml
<include("./include-target.marko") name='Frank' count=20/>
<include("./include-target.marko", {name: 'Frank', count: 20})/>
```

<hr class="page-break">

# Conditionals (as tags)

___Old syntax:___

```xml
<if test="a > b">...</if>
<else-if test="b < a">...</else-if>
<else>...</else>
```

___New syntax:___

```xml
<if(a > b)>...</if>
<else-if(b < a)>...</else-if>
<else>...</else>
```

<hr class="page-break">

# Conditionals (as attributes)

___Old syntax:___

```xml
<div if="a > b">...</div>
<div else-if="b < a">...</div>
<div else>...</div>
```

___New syntax:___

```xml
<div if(a > b)>...</div>
<div else-if(b < a)>...</div>
<div else>...</div>
```

<hr class="page-break">

# for(item in items) - As tag

___Old syntax:___

```xml
<ul>
    <for test="color in colors"><li>${color}</li>
    </for>
</ul>
```

___New syntax:___

```xml
<ul>
    <for(color in colors)>
        <li>${color}</li>
    </for>
</ul>
```

<hr class="page-break">

# for(item in items) - As attribute

___Old syntax:___

```xml
<ul>
    <li for="color in colors">
        ${color}
    </li>
</ul>
```

___New syntax:___

```xml
<ul>
    <li for(color in colors)>
        ${color}
    </li>
</ul>
```

<hr class="page-break">

# Looping Options

```xml
<for(color in ['red', 'green', 'blue'] | separator=", ")>
    ${color}
</for>
```

Output:

```html
red, green, blue
```

<hr class="page-break">

# Iterator function as target

```xml
<script marko-init>
function myColorsIterator(callback) {
    callback('red');
    callback('green');
    callback('blue');
}
</script>

<ul>
    <for(color in myColorsIterator)>
        <li>${color}</li>
    </for>
</ul>
```

Output:

```html
<ul>
    <li>red</li>
    <li>green</li>
    <li>blue</li>
</ul>
```

<hr class="page-break">

# for(`<init>`; `<test>`; `<update>`)

```xml
<for(var i=1; i<=3; i++)>
    ${i}
</for>
```

Output:

```html
123
```

<hr class="page-break">

# for(key, value in object)

___Old syntax:___

```xml
<for each="(name,value) in {'foo': 'low', 'bar': 'high'}">
    ${name}: ${value}
</for>
```

___New syntax:___

```xml
<for(name,value in {'foo': 'low', 'bar': 'high'})>
    ${name}: ${value}
</for>
```

<hr class="page-break">

# for(`<range>`)

___Old syntax:___

```xml
<for each="i from 0 to 9">
    ${i}
</for>
```

___New syntax:___

```xml
<for(i from 0 to 9)>
    ${i}
</for>
```

<hr class="page-break">

# while(`<test>`)

Marko v3 now supports native while loops:

```xml
<!-- Applied as a tag: -->
<var n=0/>
<ul>
    <while(n < 4)>
        <li>${n++}</li>
    </while>
</ul>

<!-- Applied as an attribute: -->
<var n=0/>
<ul>
    <li while(n < 4)>
        ${n++}
    </li>
</ul>
```

<hr class="page-break">

# Imports

___Old syntax:___

```xml
<require module="change-case" var="changeCase"/>
```
___New syntax:___

```xml
<script marko-init>
var reverse = require('./helpers').reverse;
var changeCase = require('change-case');
</script>
```

<hr class="page-break">

# Variables

___Old syntax:___

```xml
<var name="foo" value="'bar'" />
<var name="count" value="0" />
<assign var="count" value="count+1" />
```

___New syntax:___

```xml
<var foo="bar" count=0/>
<assign count=count+1/>
```

<hr class="page-break">

# Scoped Variables

```xml
<var name="Frank">
    Hello ${name}!
</var>
<!-- The "name" variable will be `undefined` here -->
```

<hr class="page-break">

# Scriptlets

___Old syntax:___

```xml
{% if (true) { %}
    HELLO
{% } %}
{% if (false) { %}
    WORLD
{% } %}
```

___New syntax:___

```xml
<% console.log('Hello World'); %>

<% if (true) { %>
    HELLO
<% } %>
<% if (false) { %>
    WORLD
<% } %>
```

<hr class="page-break">

# Layout taglib

___Old syntax:___

```xml
<layout-use template="./layout-default.marko" show-header="$false">
    <layout-put into="body">BODY CONTENT</layout-put>
    <layout-put into="footer">FOOTER CONTENT</layout-put>
</layout-use>
```

___New syntax:___

```xml
<layout-use("./layout-default.marko") show-header=false>
    <layout-put into="body">BODY CONTENT</layout-put>
    <layout-put into="footer">FOOTER CONTENT</layout-put>
</layout-use>
```

<hr class="page-break">

# Invoke tag

___Old syntax:___

```xml
<invoke function="test('World')"/>
<invoke function="console.log('Hello World')"/>
```

___New syntax:___

```xml
<invoke test('World') />
<invoke console.log('Hello World')/>
```

<hr class="page-break">

# Empty closing tag

```xml
<my-custom-tag>
    Hello world!
</>
```

<hr class="page-break">

## Shorthand ID and class names

```xml
#section
    ul.colors
        li.color - red
        li.color - green
    button#submitButton.enabled - Submit Form
```

Output:

```html
<div id="section">
    <ul class="colors">
        <li class="color">red</li>
        <li class="color">green</li>
        <li class="color">blue</li>
    </ul>
    <button id="submitButton" class="enabled">
        Submit Form
    </button>
</div>
```

<hr class="page-break">

The shorthand syntax also works with the more verbose HTML syntax:

```html
<#section>
    <ul.colors>
        <li.color>red</li>
        <li.color>green</li>
        <li.color>blue</li>
    </ul.colors>
    <button#submitButton.enabled>
        Submit Form
    </button>
</>
```

<hr class="page-break">

# Validating parser

```xml
<div>Hello World</foo>
```

You will get a friendly error message:

```text
The closing "foo" tag does not match the corresponding opening "div" tag
```

<hr class="page-break">

# Validation for JavaScript Expression

```xml
<div if(someCondition INVALID)>
    ...
</div>
```

Error message:

```text
1) [template.marko:1:0] Invalid expression for if statement:

Unexpected identifier: (someCondition INVALID)
                                      ^
```

<hr class="page-break">

# Style attribute

```xml
<div style={color: 'red', 'font-weight': 'bold'}>
```

Output:

```html
<div style="color:red;font-weight:bold">
```

<hr class="page-break">

# Class attribute

The value of the class attribute can now be an object expression or an array expression as shown below:

```xml
<!-- array: -->
<div class=['a', null, 'c']>

<!-- object: -->
<div class={a: true, b: false, c: true}>
```

In both cases, the output will be the same:

```html
<div class="a c">
```

<hr class="page-break">

# Dynamic attributes

___Old syntax:___

```xml
<div attrs="myAttrs"/>
```

___New syntax:___

```xml
<var myAttrs={'class': 'foo', 'style': 'background-color: red'}/>
<div ${myAttrs}/>
```

Output:

```html
<div class="foo" style="background-color: red"></div>
```

<hr class="page-break">

# Dynamic tag names

```xml
<${foo ? 'div' : 'span'}>
    Hello World!
</>
```

Output:

```xml
<!-- If foo is true: -->
<div>Hello World!</div>

<!-- If foo is false: -->
<span>Hello World!</span>
```

<hr class="page-break">

# Input data for custom tags

```xml
<greeting({name: 'Frank'})/>

<!-- Equivalent to: -->
<greeting name='Frank' />
```

<hr class="page-break">

# Tag body content parsing

The `marko-body` attribute can be used to control how body content is parsed. The following values are supported:

- `"html"`
- `"static-text"`
- `"parsed-text"`

```xml
<div marko-body="static-text">
    This is just one
    <span if(foo)>
            Hello ${THIS IS NOT VALID}!
    </span>
    big text block
</div>
```

<hr class="page-break">

# Preserve whitespace

___Old syntax:___

```xml
<div c-space="preserve">
    This   whitespace   will
    be preserved.
</div>
```

___New syntax:___

```xml
<div marko-preserve-whitespace>
    This   whitespace   will
    be preserved.
</div>
```

<hr class="page-break">

# Compiler options

___Old syntax:___

```xml
<compiler-options whitespace="preserve" />
```

___New syntax:___

```xml
<marko-compiler-options preserve-whitespace preserve-comments />
```

<hr class="page-break">

# Open tag only

Tag definition:

```json
{
    "<my-custom-tag>": {
        "open-tag-only": true,
        ...
    }
}
```

Usage:

```xml
<!-- Allowed: -->
<my-custom-tag>
<my-custom-tag/>

<!-- Not allowed: -->
<my-custom-tag>Foo</my-custom-tag>
```

<hr class="page-break">

# Improved readability of compiled code

```xml
<my-custom-tag name="World"/>

<ul if(data.colors.length)>
    <li for(color in data.colors)>
        ${color}
    </li>
</ul>
<div else>
    No colors!
</div>
```

```javascript
function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      my_custom_tag = __loadTag(require("./components/my-custom-tag/renderer")),
      forEach = __helpers.f;

  return function render(data, out) {
    my_custom_tag({
        name: "World"
      }, out);

    if (data.colors.length) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li>" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
```
<hr class="page-break">

# Removed features

<hr class="page-break">

# Removed: $<variable-name>

Use `${<variable-name>}` instead.

<hr class="page-break">

# Removed: $!<variable-name>

Use `$!{<variable-name>}` instead.

<hr class="page-break">

# Removed: "simple conditional" syntax

___Old syntax:___

```xml
<div class="{?data.isActive; active; inactive}">
<div class="{?data.isActive; active}">
```

___New syntax:___

```xml
<div class=(data.isActive ? 'active' : 'inactive')>
<div class=(data.isActive && 'active')>
```

<hr class="page-break">

# Removed: nested attributes

Nested attributes are no longer supported (likely never used):

```xml
<test-popover>
    <attr name="title">Popover Title</attr>
    <attr name="content">Popover Content</attr>

    Link Text
</test-popover>
```

<hr class="page-break">

# Removed: `<require>` tag

___Old syntax:___

```xml
<require module="./my-include-target.marko" var="myIncludeTarget" />
```

___New syntax:___

```xml
<script marko-init>
var myIncludeTarget = require('./my-include-target.marko');
</script>
```

<hr class="page-break">

# Removed: `c-data`/`c-input` attribute

Custom tag data should be passed using an argument:

```xml
<my-custom-tag({name: 'Frank'})/>
```

<hr class="page-break">

# Removed: `c-space`/`c-whitespace` attribute

Use `marko-preserve-whitespace` attribute instead:

```xml
<div marko-preserve-whitespace>
    This whitespace
    will be preserved.
</div>
```

<hr class="page-break">

# Removed: `c-escape-xml` attribute

No longer applicable.

<hr class="page-break">

# Removed: `c-parse-body-text` attribute

Use the `marko-body="<body-type>"` attribute instead.

<hr class="page-break">

# Removed: `attrs` attribute

Use placeholder within open tag instead:

```xml
<div ${myAttrs}>
```

<hr class="page-break">

# Removed: `with` tag and attribute

Instead, use `<var>` tag with nested content to create scoped variables.

<hr class="page-break">

# Removed: JavaScript operator aliases

The following JavaScript operator aliases are no longer supported:

JavaScript Operator | Marko Equivalent
------------------- | -----------------
`&&`                 | `and`
<code>&#124;&#124;</code>                | `or`
`===`               | `eq`
`!==`               | `ne`
`<`                 | `lt`
`>`                 | `gt`
`<=`                | `le`
`>=`                | `ge`

<hr class="page-break">

# Removed: Dynamic string path for includes

```javascript
var includeTemplate = require('./include.marko');

// ...

var templateData = {
    includeTarget: includeTemplate
}
```

```xml
<include(data.includeTarget})/>
```

<hr class="page-break">

# Other notable changes

<hr class="page-break">

# marko-taglib.json → marko.json

<hr class="page-break">

# Nested tags separator changed

___Old syntax:___

```xml
<tabs>
    <tabs.tab title="Tab 1">
        Content for tab 1
    </tabs.tab>
    <tabs.tab title="Tab 2">
        Content for tab 2
    </tabs.tab>
</tabs>
```

___New syntax:___

```xml
<tabs>
    <tabs:tab title="Tab 1">
        Content for tab 1
    </tabs:tab>
    <tabs:tab title="Tab 2">
        Content for tab 2
    </tabs:tab>
</tabs>
```

<hr class="page-break">

# Node.js v4+ is now required for compiling

Unlike Marko v2, Marko v3 requires Node.js v4+ to compile Marko templates. The new Marko compiler was written using ECMAScript 2015 (ES6) features that are only found in Node.js v4+. The Marko runtime, however, still works in all JavaScript runtimes.

<hr class="page-break">

# Case-sensitive HTML parser

The Marko parser and compiler are now case sensitive. The following tags are not equal with Marko v3:

```xml
<my-custom-tag/>
<My-CUSTOM-Tag/>
```

<hr class="page-break">

# Special Thanks:

  [@adammcarth](https://github.com/adammcarth), [@BryceEWatson](https://github.com/BryceEWatson), [@crsandeep](https://github.com/crsandeep), [@DanCech](https://github.com/DanCech), [@danrichman](https://github.com/danrichman), [@kristianmandrup](https://github.com/kristianmandrup), [@onemrkarthik](https://github.com/onemrkarthik), [@philidem](https://github.com/philidem), [@pswar](https://github.com/pswar), [@scttdavs](https://github.com/scttdavs), [@SunnyGurnani](https://github.com/SunnyGurnani), [@tindli](https://github.com/tindli), [@vedam](https://github.com/vedam) and [@yomed](https://github.com/yomed)

<hr class="page-break">

# Thank You!

- Join the Marko community on Gitter: [gitter.im/marko-js/marko](gitter.im/marko-js/marko)
- Please help improve code, tests and docs
- Pull requests greatly appreciated!
- Please tell your friends :)